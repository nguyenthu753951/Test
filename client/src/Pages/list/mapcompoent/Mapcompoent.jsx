import './Mapcompoent.css'

import React, { useEffect, useRef, useState } from "react";
import "mapbox-gl/dist/mapbox-gl.css";
import Map, { Marker} from "react-map-gl";
import axios from "axios";
import { useLocation } from "react-router-dom";
import "mapbox-gl/dist/mapbox-gl.css";
import { HiLocationMarker } from "react-icons/hi";
const URL = "https://trueway-geocoding.p.rapidapi.com/Geocode";

const MapComponent = () => {
    let location = useLocation();

    const [destination, setDestination] = useState(location.state.destination);
    const [lat, setLat] = useState(0);
    const [lng, setLng] = useState(0);
    const mapContainerRef = useRef(null);
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
            } catch (error) {
                console.log(error);
            }
        };

        if (destination !== "") {
            getCoord();
        }
    }, [destination, lat, lng]);
    const [viewState, setViewState] = useState({
        longitude: 108.277199,
        latitude: 14.058324,
        zoom: 4
    });
    const handleBound = () => {
        setViewState({
            longitude: lng,
            latitude: lat,
            zoom: 7
        })
    }
   
    return (
        <div className='mapAddress' >
            <button onClick={handleBound} className= "btn_handelBound">Find {destination} location on the map</button>
            <Map
                {...viewState}
                mapboxAccessToken= {process.env.REACT_APP_MAP_KEY}
                style={{ width: "100%", height: "600px" }}
                onMove={(evt) => setViewState(evt.viewState)}
                mapStyle="mapbox://styles/mapbox/streets-v12"
            >
                <Marker longitude={lng} latitude={lat} offsetLeft={-20}
                    offsetTop={-10}
                    anchor="bottom" >
                    <HiLocationMarker style={{
                        fontSize: viewState.zoom * 7,
                        color: "tomato",
                    }} />
                </Marker>
            </Map>
        </div>
    );
};

export default MapComponent;
