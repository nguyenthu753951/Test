import "./travelPins.css";
import Map, { Marker, Popup } from "react-map-gl";
import { FaMapMarkerAlt, FaSearchLocation } from "react-icons/fa";
import { ImStarFull } from "react-icons/im";
import { useEffect, useState, useContext } from "react";
import { AiFillFileImage } from "react-icons/ai";
import { Context } from "../../context/Context";
import 'mapbox-gl/dist/mapbox-gl.css';



import axios from "axios";
const URL = "https://trueway-geocoding.p.rapidapi.com/Geocode";
function TravelPins() {
  const [currentPlaceId, setCurrentPlaceId] = useState(null);
  const [pins, setPins] = useState([]);
  const { user } = useContext(Context);
  const [newPlace, setNewPlace] = useState(null);
  const [title, setTitle] = useState(null);
  const [desc, setDesc] = useState(null);
  const [star, setStar] = useState(0);
  const [file, setFile] = useState(null);

  const [destination, setDestination] = useState("Viet Nam");
  const [lat, setLat] = useState(0);
  const [lng, setLng] = useState(0);


  const PF = "http://localhost:8800/images/";

  const [viewState, setViewState] = useState({
    longitude: 78.962883,
    latitude: 20.593683,
    zoom: 2,
  });

  const handleMarkerClick = (id) => {
    setCurrentPlaceId(id);
  };

  const handleAddClick = (e) => {
    const [longitude, latitude] = e.lngLat.toArray();
    setNewPlace({
      lat: latitude,
      long: longitude,
    });

  };
  const handleDelete = async () => {
    try {
      await axios.delete(`/pins/${currentPlaceId}`, {
        data: { username: user.username },
      });
      window.location.replace("/travelPins");
    } catch (err) { }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPin = {
      username: user.username,
      title,
      desc,
      rating: star,
      lat: newPlace.lat,
      long: newPlace.long,
    };
    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      newPin.photo = filename;
      try {
        await axios.post("/upload", data);
      } catch (err) { }
    }

    try {
      const res = await axios.post("/pins", newPin);
      setPins([...pins, res.data]);
      setNewPlace(null);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    const getPins = async () => {
      try {
        const allPins = await axios.get("/pins");
        setPins(allPins.data);
      } catch (err) {
        console.log(err);
      }
    };
    getPins();
  }, []);
  // search on travel pin :)))

  
  useEffect(() => {
    const options = {
      params: { address: destination },
      headers: {
        "X-RapidAPI-Key": "02830c346emsh2606c2508f81c59p1b7059jsn5006c032fb80",
        "X-RapidAPI-Host": "trueway-geocoding.p.rapidapi.com",
      },
    };

    const getCoord = async () => {
      try {
        const { data } = await axios.get(URL, options);
        setLat(data.results[0].location.lat);
        setLng(data.results[0].location.lng);
        console.log("hello world");
      } catch (error) {
        console.log(error);
      }
    };

    if (destination !== "") {
      getCoord();
    }
  }, [destination, lat, lng]);

  const handleBound = () => {
    setViewState({
        longitude: lng,
        latitude: lat,
        zoom: 10
    })
}
  //
  return (
    <div className="travelPins">
      <div className="pinContainer">
        <div className="mapBoxAvInput">
          <input type="text" onBlur={e => setDestination(e.target.value)}/>
          <FaSearchLocation className="inputIcon" onClick={handleBound}/>
        </div>
        <Map
          {...viewState}
          mapboxAccessToken={process.env.REACT_APP_MAP_KEY}
          style={{ width: "100%", height: "100%" }}
          onMove={(evt) => setViewState(evt.viewState)}
          mapStyle="mapbox://styles/mapbox/streets-v12"
          onDblClick={handleAddClick}
        >
          {pins.map((p) => (
            <>
              <Marker
                longitude={p.long}
                latitude={p.lat}
                offsetLeft={-20}
                offsetTop={-10}
                anchor="bottom"
              >
                <FaMapMarkerAlt
                  style={{
                    fontSize: viewState.zoom * 7,
                    color: p.username === user.username ? "tomato" : "#148bed",
                  }}
                  onClick={() => handleMarkerClick(p._id)}
                />
              </Marker>
              {p._id === currentPlaceId && (
                <Popup
                  longitude={p.long}
                  latitude={p.lat}
                  closeButton={true}
                  closeOnClick={false}
                  anchor="left"
                  onClose={() => setCurrentPlaceId(null)}
                >
                  <div className="card">
                    {p.photo && <img
                      className="postImg"
                      src={PF + p.photo}
                      alt=""
                    />}

                    <h4 className="place">{p.title}</h4>
                    <label className="pinLabel">Review</label>
                    <p className="desc">{p.desc}</p>
                    <div className="rating">
                      <label className="pinLabel">Rating</label>
                      <div className="stars">
                        {Array(p.rating).fill(<ImStarFull className="star" />)}
                      </div>
                    </div>
                    <label className="pinLabel">Information</label>
                    <div className="inFo">
                      <span className="username">
                        Created by <b>{p.username}</b>
                      </span>
                      <span className="cardDate">
                        {new Date(p.createdAt).toDateString()}
                      </span>
                    </div>
                    {user.username == p.username &&
                      <div className="btnChange">
                        <button className="btn Edit">Edit</button>
                        <button onClick={handleDelete} className="btn Delete">Delete</button>
                      </div>

                    }

                  </div>
                </Popup>
              )}
            </>
          ))}
          {newPlace && (
            <>
              <Marker
                latitude={newPlace.lat}
                longitude={newPlace.long}
                offsetLeft={-3.5 * viewState.zoom}
                offsetTop={-7 * viewState.zoom}
              >
                <FaMapMarkerAlt
                  style={{
                    fontSize: 7 * viewState.zoom,
                    color: "tomato",
                    cursor: "pointer",
                  }}
                />
              </Marker>
              <Popup
                latitude={newPlace.lat}
                longitude={newPlace.long}
                closeButton={true}
                closeOnClick={false}
                onClose={() => setNewPlace(null)}
                anchor="left"
              >
                {file && (
                  <img className="pinImg" src={window.URL.createObjectURL(file)} alt="" />
                )}
                <form onSubmit={handleSubmit} className="formPopup">
                  <div className="pinFormGroup">
                    <label htmlFor="fileInput">
                      <AiFillFileImage className="pinIcon fas fa-plus" />
                    </label>
                    <input
                      type="file"
                      id="fileInput"
                      style={{ display: "none" }}
                      onChange={(e) => setFile(e.target.files[0])}
                    />
                  </div>
                  <label className="pinLabel">Title</label>
                  <input
                    className="inputPopup"
                    placeholder="Enter a title"
                    autoFocus
                    onChange={(e) => setTitle(e.target.value)}
                  />
                  <label className="pinLabel">Description</label>
                  <textarea
                    placeholder="Say us something about this place."
                    onChange={(e) => setDesc(e.target.value)}
                  />
                  <div className="rating">
                    <label className="pinLabel">Rating</label>
                    <select onChange={(e) => setStar(e.target.value)} className="selectPopup">
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                    </select>
                  </div>

                  <button type="submit" className="submitButton">
                    Add Pin
                  </button>
                </form>
              </Popup>
            </>
          )}

        </Map>
      </div>
    </div>
  );
}

export default TravelPins;
