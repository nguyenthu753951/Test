import React, { useState } from "react";
import "./location.css";
import "mapbox-gl/dist/mapbox-gl.css";
import Map, { Marker } from "react-map-gl";
import { FaMapMarkerAlt } from "react-icons/fa";
function Location() {

  const [viewState, setViewState] = useState({
    longitude: 106.700981,
    latitude: 10.776530,
    zoom: 8,
  });
  return (
    <div className="AppMap">
      <div className="Container">
        <div className="Wrapper">
          <h2>Vị trí khách sản</h2>
          <div className="Map">
            <Map
              {...viewState}
              mapboxAccessToken={process.env.REACT_APP_MAP_KEY}
              style={{ width: "100%", height: "65vh" }}
              mapStyle="mapbox://styles/mapbox/streets-v12"
              onMove={(evt) => {
                setViewState(evt.viewState)
              }
              }
            >
              <Marker
                longitude={106.714470}
                latitude={10.801570}
                offsetLeft={-20}
                offsetTop={-10}
                anchor="bottom"
            >
              <FaMapMarkerAlt
                className="FaIcons"
                style={{
                  fontSize: viewState.zoom * 4,
                  color: "#148bed",
                  zIndex: 100

                }}
                
              />
            </Marker>
            </Map>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Location;
