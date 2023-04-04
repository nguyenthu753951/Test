import React from "react";
import Hero from "../../components/Hero";
import Banner from "../../components/Banner";
import Location from "../../components/location/Location";
import { Link } from "react-router-dom";
import Footer from "../../components/footer/Footer";
import EmailFeedBack from "../../components/emailFeedback/EmailFeedBack";



const BookingHotel = () => {
  return (
    <>
      <Hero>
        <Banner
          title="Luxurious Rooms"
          subtitle="Deluxe Rooms starting at $299"
        >
          <Link to="/rooms" className="btn-primary">
            Our Rooms
          </Link>
        </Banner>
      </Hero>
      <Location />
      <EmailFeedBack />
      <Footer />
    </>
  );
};

export default BookingHotel;
