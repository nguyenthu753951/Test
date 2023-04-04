import "./footer.css";
import {
  BsLinkedin,
  BsFacebook,
  BsGithub,
  BsInstagram,
  BsTwitter,
} from "react-icons/bs";

import img from "../../Images/Logomate.png";
function Footer() {
  return (
    <div className="footer">
      <div className="fLists">
        <div className="fList">
          <img src={img} className="fImg" alt="" />
          <div className="fListItem">
            Making the world a better place through constructing elegant
            hierarchies
          </div>
        </div>
        <ul className="fList">
          <li className="fListItem">COUNTRY</li>
          <li className="fListItem">Regions</li>
          <li className="fListItem">Cities</li>
          <li className="fListItem">Districts</li>
          <li className="fListItem">Airports</li>
          <li className="fListItem">Hotels</li>
        </ul>
        <ul className="fList">
          <li className="fListItem">HELP CENTER</li>
          <li className="fListItem">Find Cities</li>
          <li className="fListItem">Find New Friends</li>
          <li className="fListItem">Why Us</li>
          <li className="fListItem">FAQs</li>
          <li className="fListItem">Feedback</li>
        </ul>
        <ul className="fList">
          <li className="fListItem">CONTACT INFO</li>
          <li className="fListItem">Phone: +84 123456789</li>
          <li className="fListItem">Email: travelmate@gmail.com</li>
          <li className="fListItem">Location: Ho Chi Minh City, Vit Nam</li>
          <div className="iconLink">
            <BsGithub />
            <BsFacebook />
            <BsInstagram />
            <BsTwitter />
            <BsLinkedin />
          </div>
        </ul>
      </div>
      <div className="fText">Copyright @2022 NgoTriTruong</div>
    </div>
  );
}

export default Footer;
