import React, { useEffect, useState } from "react";
import axios from "axios";
import "./overview.css";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const URL = "https://wiki-briefs.p.rapidapi.com/search";

const Overview = () => {

    let location = useLocation();
    const navigate = useNavigate();
    const [info, setInfo] = useState();
    const [destination, setDestination] = useState(location.state.destination);


    useEffect(() => {
        const options = {
            params: { q: destination, topk: "5" },
            headers: {
                "X-RapidAPI-Key": "02830c346emsh2606c2508f81c59p1b7059jsn5006c032fb80",
                "X-RapidAPI-Host": "wiki-briefs.p.rapidapi.com",
            },
        };
        const getPlaceDetail = async () => {
            setInfo();
            const { data } = await axios.get(URL, options);
            setInfo(data);
        };

        if (destination !== "") { 
            getPlaceDetail();
        }
    }, [destination]);
    const handleSearch = () => {
        navigate("/places", { state: { destination } });
    };

    const handleKeyDown = (event) => {
        if (event.key === "Enter") {
            navigate("/places", { state: { destination } });
        }
    };
    return (
        <div className="overview">
            <div className="searchOverview">
                <div className="overviewContainer">
                    <input
                        type="text"
                        placeholder="Search your destination"
                        value={destination}
                        onChange={(e) => setDestination(e.target.value)}
                        className="inputOverview"
                        onKeyDown={handleKeyDown}
                    />
                </div>
                <button onClick={handleSearch} className="btnOvervirew">Search</button>
            </div>
            {destination && info && (
                <div className="informationContainer">
                    <h4 className="overViewH4">{destination.toUpperCase()}</h4>
                    <div className="overViewDetails">
                        {info.image && (
                            <img
                                src={info.image}
                                alt="placePic"
                                height="600px"
                                width="100%"
                                style={{ objectFit: "cover", borderRadius: "20px" }}
                                className="overviewImage"
                            />
                        )}
                        <div className="overviewPara">
                            {info.summary.map((s, i) => (
                                <p key={i}>{s}</p>
                            ))}
                        </div>

                    </div>
                </div>
            )}
        </div>
    );
};

export default Overview;
