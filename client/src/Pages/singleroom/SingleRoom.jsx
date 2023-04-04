import React, { useContext, useEffect, useState } from "react";
import defaultBcg from "../../Images/room-1.jpeg";
import { useCookies } from 'react-cookie';
import Banner from "../../components/Banner";
import { Link, useLocation } from "react-router-dom";
import StyledHero from "../../components/StyledHero";
import image1 from "../../Images/room-12.jpeg";
import image2 from "../../Images/details-2.jpeg";
import image3 from "../../Images/details-3.jpeg";
import moment from "moment";
import EmailFeedBack from "../../components/emailFeedback/EmailFeedBack";
import Footer from "../../components/footer/Footer";
import DateTimeRangePicker from '@wojtekmaj/react-datetimerange-picker';
import { Context } from "../../context/Context";
import axios from "axios";
function SingleRoom() {
  let { state } = useLocation();
  const [cookies, setCookie] = useCookies(['iduser']);
  const [error, setError] = useState();

  const { user, dispatch } = useContext(Context);
  const [activeBt, setActiveBt] = useState(false);
  console.log(activeBt)
  const [valueDate, setValueDate] = useState([new Date(), new Date()]);
  const handleInputChange = status => {
    //console.log(status);
    setValueDate(status);
  };
  const closeCalender = () => {
      debugger;
      console.log(
          "StartDate:" +
          moment(valueDate[0]).format("YYYY-MM-DD hh:mm:ss") +
          "           EndDate:" +
          moment(valueDate[1]).format("YYYY-MM-DD hh:mm:ss")
      );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);
        try {
            const res = await axios.post("/rooms/reserva", {
                id_kh: cookies.iduser,
                id_nv: 10,
                ngay_dat: moment(valueDate[0]).format("YYYY-MM-DD hh:mm:ss"),
                ngay_tra_dk: moment(valueDate[1]).format("YYYY-MM-DD hh:mm:ss"),
                tien_coc: 0,
                maphongdk: state.id,
                tinh_trang: 0
            });
            res.data && window.location.replace("/order");
            alert("success")
        } catch (err) {
            setError("Some thing went wrong");
        }
};

  return (

          <div className="singgleRoom">
            {activeBt && <div className="toglebt">
              <button className="toglebtBtnX" onClick={()=>setActiveBt(false)}>X</button>
             
              <form className="bookFormChose">
                <h2 style={{textAlign: "center", margin: "20px"}}>Nhập thông tin đặt phòng</h2>
                <div className="valueIp">
                      <DateTimeRangePicker
                        onChange={handleInputChange}
                        value={valueDate}
                        disableClock={true}
                        disableCalendar={false}
                        format={"d-MM-yyyy HH:mm"}
                        minDate={new Date()}
                        onCalendarClose={closeCalender}
                        id="dateTimePicker"
                        />
                  </div>
                  <h4 className="valueIp">Customer information for booking</h4>
                  <p className="valueIp"><b>Name:</b> {user.username}</p>
                  <p className="valueIp"><b>Phone number:</b> {user.phone}</p>
                  <p className="valueIp"><b>Email:</b> {user.email}</p>
                </form>
                <button className="btn-primary btn_submit kh" onClick={handleSubmit}>Booking now</button>
              </div>
            }
            <StyledHero img={image1}>
              <Banner title="Room for rent">
                <Link to="/rooms" className="btn-primary">
                  Back to Rooms
                </Link>
              </Banner>
            </StyledHero>
            <section className="single-room">
              <div className="single-room-images">
               <img src={defaultBcg} alt="detail art"/>
               <img src={image2} alt="detail art"/>
               <img src={image3} alt="detail art"/>
              </div>
              <div className="single-room-info">
                <article className="desc">
                  <h3>Details</h3>
                  <p>Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi alias explicabo ex magni nesciunt. Magnam voluptatum praesentium vero neque maxime?.</p>
                  {/* <Link to=""> */}
                    <button className="btn-primary btn_submit" onClick={()=>setActiveBt(true)}>BOOKING NOW</button>
                  {/* </Link> */}
                  
                </article>
                <article className="info">
                  <h3>Info Room</h3>
                  <span>Price : {state.gia}</span>
                  <span>Room number : {state.sophong}</span>
                  <span> Max Capacity : {state.songuoi} </span>
                  <span> Name room : {state.tenLp} </span>
                  <span> "Pets allowed" : "no pets allowed"</span>
                  <span> No free breakfast included </span>
                  <span> Phone Number: 07658484474</span>
                </article>  
              </div>
            </section>
            <EmailFeedBack />
            <Footer />
          </div>
        );
}

export default SingleRoom

// export default class SingleRoom extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       slug: this.props.slug,
//       defaultBcg,
//     };
//   }
//   // componentDidMount() {
//   //   console.log();
//   // }
//   static contextType = RoomContext;
//   render() {
//     const { getRoom } = this.context;
//     const room = getRoom(this.state.slug);

//     if (!room) {
//       return (
//         <div className="error">
//           <h3>No such room could be found</h3>
//           <Link to="/rooms" className="btn-primary">
//             Back to Rooms
//           </Link>
//         </div>
//       );
//     }
   
//     const [mainImg, ...defaultImg] = images;
//     return (
//       <>
//         <StyledHero img={mainImg}>
//           <Banner title={`${name} room`}>
//             <Link to="/rooms" className="btn-primary">
//               Back to Rooms
//             </Link>
//           </Banner>
//         </StyledHero>
//         <section className="single-room">
//           <div className="single-room-images">
//             {defaultImg.map((image, index) => {
//               return <img src={image} alt={name} key={index} />;
//             })}
//           </div>
//           <div className="single-room-info">
//             <article className="desc">
//               <h3>Details</h3>
//               <p>{description}</p>
//             </article>
//             <article className="info">
//               <h3>Info</h3>
//               <h6>Price : ${price}</h6>
//               <h6>Size : ${size} Sqft</h6>
//               <h6>
//                 Max Capacity :{" "}
//                 {capacity > 1 ? `${capacity} people` : `${capacity} person`}
//               </h6>
//               <h6>{pets ? "pets allowed" : "no pets allowed"}</h6>
//               <h6>{breakfast && "free breakfast included"}</h6>
//             </article>
//           </div>
//         </section>
//       </>
//     );
//   }
// }
