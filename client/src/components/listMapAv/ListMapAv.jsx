import "./listMapAv.css";
import React from "react";
import { useState } from "react";
import PlaceDetailAv from "../placeDetailAv/PlaceDetailAv";
import { AiFillPhone } from "react-icons/ai";
function ListMapAv({ places }) {
  const [slType, setSlType] = useState("Restaurant");
  const [rating, setRating] = useState("");

  return (
    <div>
      <h1>Restaurant, Hotels & Attractions around you</h1>
      <div className="selectContainer">
        <form>
          <label htmlFor="" className="controlLB">
            Type
          </label>
          <br />
          <select
            value={slType}
            name=""
            className="select Type"
            onChange={(e) => setSlType(e.target.value)}
          >
            <option value="Restaurant">Restaurant</option>
            <option value="Hotels">Hotels</option>
            <option value="Attractions">Attractions</option>
          </select>
        </form>
        <form action="">
          <label htmlFor="" className="controlLB">
            Rating
          </label>
          <br />
          <select
            value={rating}
            name=""
            className="select Rating"
            onChange={(e) => setRating(e.target.value)}
          >
            <option value={0}>All</option>
            <option value={3}>Above 3.0</option>
            <option value={4}>Above 4.0</option>
            <option value={4.5}>Above 4.5</option>
          </select>
        </form>
      </div>
      <div className="PlaceDetails">
        {places?.map((place, i) => (
          <div key={i}>
            <PlaceDetailAv place={place} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ListMapAv;
