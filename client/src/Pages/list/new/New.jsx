import React, { useEffect, useState } from "react";
import axios from "axios";
import "./new.css";
import { useLocation } from "react-router-dom";
import baoChi from "../../../Images/bao-chi.jpg"
const URL = "https://bing-news-search1.p.rapidapi.com/news/search";

const New = () => {
    const [news, setNews] = useState([]);

    let location = useLocation();
    const [destination, setDestination] = useState(location.state.destination);
    useEffect(() => {
        const options = {
            params: {
                q: destination,
                freshness: "Day",
                textFormat: "Raw",
                safeSearch: "Off",
            },
            headers: {
                "X-BingApis-SDK": "true",
                "X-RapidAPI-Key": "02830c346emsh2606c2508f81c59p1b7059jsn5006c032fb80",
                "X-RapidAPI-Host": "bing-news-search1.p.rapidapi.com",
            },
        };
        const getNews = async () => {
            const {
                data: { value },
            } = await axios.get(URL, options);
            setNews(value);
        };

        if (destination !== "") {
            getNews();
        }
    }, [destination]);
    return (
        <>
            {news && (
                <div className="newsContainer">
                    <h5 style={{ fontWeight: "700", fontSize: "30px" }}>News from {destination.toUpperCase()}</h5>
                    {news.map((n, i) => (
                        <div className="newCard" key={i}>
                            <div className="newImgs">
                                <img
                                    src={n.image ? n.image.thumbnail.contentUrl : baoChi}
                                    alt="news"
                                    className="newImg"
                                />
                            </div>
                            <div className="newHeadline">
                                <a href={n.url} target="_blank" rel="noreferrer noopener" className="newLink">
                                    {n.name}
                                </a>
                                <p>{n.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </>
    );
};

export default New;
