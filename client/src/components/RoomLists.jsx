import React, { useEffect, useState } from "react";
import room1 from "../Images/room-1.jpeg";
import { Link } from "react-router-dom";
const RoomLists = ({ rooms }) => {
  console.log(rooms)
  return (
    <>
      <section className="roomslist">
        <div className="roomslist-center">
          {rooms?.map((room) => room.tinh_trang !=0 &&
            <article className="room" key={room.id}>
              <div className="img-container" >
                <img src={room1} alt="single room" />
                <div className="price-top">
                  <h6>{room.don_gia} VND</h6>
                  <p>per night</p>
                </div>
                <Link to={`/singleroom/`} state={{
                  id: room.id,
                  gia: room.don_gia,
                  songuoi: room.so_nguoi,
                  sophong: room.so_phong,
                  tenLp: room.ten_lp,
                }} className="btn-primary room-link">
                  Features
                </Link>
              </div>
              <div className="roomDec">
                <span className=""><b>Room type name:</b> {room.ten_lp} </span>
                <br />
                <span className=""><b>Guests:</b> {room.so_nguoi} </span>
                <br />
                <span><b>Description:</b> Lorem ipsum dolor sit amet consectetur adipisicing elit. At dolor illum accusamus temporibus minus doloremque.</span>
              </div>
            </article>
          )
          }
        </div>
      </section>
    </>
  );
};

export default RoomLists;
