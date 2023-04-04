
import Header from "../../components/header/Header";
import heroHeader from "../../Images/imgHomeBackground.jpg";
import "./home.css";
import Featured from "../../components/featured/Featured";
import EmailFeedBack from "../../components/emailFeedback/EmailFeedBack";
import Footer from "../../components/footer/Footer";

const Home = () => {
  return (
    <div>
      <div className="home">
        <img src={heroHeader} alt="" className="videoHero"/>       
        <Header />
      </div>
      <div className="homContainer">
        <Featured />
        
        <EmailFeedBack />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
