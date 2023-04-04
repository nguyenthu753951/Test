import './hotel.css'
import { AiFillPhone } from "react-icons/ai";
import { AiFillHome } from "react-icons/ai";
import { BsFillStarFill } from "react-icons/bs";
function Hotel({ hotel }) {
  return (
    <div className="hotelCard">
      <div className="hotelUpper">
        <img
          src={
            hotel.photo
              ? hotel.photo.images.large.url
              : "https://images.unsplash.com/photo-1592861956120-e524fc739696?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          }
          alt="hotel"
          className='hotelImg'
        />
        <div className="hotelReview">
          <h6 className='hotelH6'>{hotel.name}</h6>
          <div className="hotelPhone">
            <AiFillPhone className='hotelIcon' />
            <span>{hotel.phone}</span>
          </div>
          <div className="hotelPhone">
            <AiFillHome className='hotelIcon' />
            <span>{hotel.address}</span>
          </div>
          <div className="hotelPhone">
            <span style={{ marginRight: "5px", marginTop: "1px" }}>
              {hotel.rating}
            </span>
            <BsFillStarFill style={{ color: "#FFD700" }} />
          </div>
          <div className="actionCard">
            <button
              onClick={() => window.open(hotel.web_url, "_blank")}
              className="mapButton"
            >
              Trip Advisor
            </button>
            <button
              onClick={() => window.open(hotel.website, "_blank")}
              className="mapButton"
            >
              Website
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hotel
