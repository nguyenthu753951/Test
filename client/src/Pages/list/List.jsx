import React from "react";
import "./list.css";
import Footer from "../../components/footer/Footer";
import EmailFeedBack from "../../components/emailFeedback/EmailFeedBack";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Hotel from "./hotel/Hotel";
import New from "./new/New";
import Overview from "./overview/Overview";
import MapComponent from "./mapcompoent/Mapcompoent";
import axios from "axios";
const URL = "https://travel-advisor.p.rapidapi.com/restaurants/list-by-latlng";
const URLCoord = "https://trueway-geocoding.p.rapidapi.com/Geocode";


function List() {

  let location = useLocation();
  const [destination, setDestination] = useState(location.state.destination);
  const [hotel, setHotel] = useState([]);
  const [lat, setLat] = useState(0);
  const [lng, setLng] = useState(0);
  useEffect(() => {
    const options = {
      params: { address: destination },
      headers: {
        "X-RapidAPI-Key": "6f7cf476ebmsh2d8dcb414502f09p1e9588jsn3d39fca78750",
        "X-RapidAPI-Host": "trueway-geocoding.p.rapidapi.com",
      },
    };

    const getCoord = async () => {
      try {
        const { data } = await axios.get(URLCoord, options);
        setLat(data.results[0].location.lat);
        setLng(data.results[0].location.lng);
      } catch (error) {
        console.log(error);
      }
    };
    if (destination !== "") {
      getCoord();
    }
  }, [destination, lat, lng]);

  useEffect(() => {
    const options = {
      params: {
        latitude: lat,
        longitude: lng,
      },
      headers: {
        "X-RapidAPI-Key": "6f7cf476ebmsh2d8dcb414502f09p1e9588jsn3d39fca78750",
        "X-RapidAPI-Host": "travel-advisor.p.rapidapi.com",
      },
    };

    const getPlaceData = async () => {
      try {
        const {
          data: { data },
        } = await axios.get(URL, options);
        setHotel(data);
      } catch (error) {
        console.log(error);
      }
    };

    if (lat && lng) {
      getPlaceData();
    }
  }, [lat, lng]);
  return (
    <div>
      <div className="listContainer">
        <div className="listWrapper">
          <div className="search-bar">
            <Overview />
          </div>
          <div className="destinationInfo">
            <div className="mapComponent">
              <MapComponent />
            </div>
            <div className="hotelContainer">
              <h5 className="hotelH5">
                Restaurants in {destination.toUpperCase()}
              </h5>
              <div className="hotelReal">
                {hotel.length > 0 ? (
                  hotel.map((h, i) =>
                    h.name ? <Hotel hotel={h} key={i} /> : null
                  )
                ) : (
                  <h6>Loading ...</h6>
                )}
              </div>
            </div>
          </div>
          <div className="container">
            <New />
          </div>
          <div>
            <EmailFeedBack />
            <Footer />
          </div>
        </div>
      </div>
    </div>

  );
}

export default List;
