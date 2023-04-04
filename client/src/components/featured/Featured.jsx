import "./featured.css";
import halongbay from "../../Images/halongbay.webp"
function Featured() {
  return (
    <div>
      <div className="featuredBig">
        <div className="featuredItemBig">
          <img
            src={halongbay}
            alt=""
            className="featuredImg"
          />
          <div className="featuredTitles">
            <h2>Ha long bay</h2>
            <h3>399 properties</h3>
          </div>
        </div>
        <div className="featuredItemBig">
          <img
            src="https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1228&q=80"
            alt=""
            className="featuredImg"
          />
          <div className="featuredTitles">
            <h2>Da Nang</h2>
            <h3>101 properties</h3>
          </div>
        </div>
      </div>
      <div className="featured">
        <div className="featuredItem">
          <img
            src="https://images.unsplash.com/photo-1519046904884-53103b34b206?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8YmVhY2h8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
            alt=""
            className="featuredImg"
          />
          <div className="featuredTitles">
            <h2>Dublin</h2>
            <h3>123 properties</h3>
          </div>
        </div>
        <div className="featuredItem">
          <img
            src="https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y2l0eXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
            alt=""
            className="featuredImg"
          />
          <div className="featuredTitles">
            <h2>New York</h2>
            <h3>456 properties</h3>
          </div>
        </div>
        <div className="featuredItem">
          <img
            src="https://images.unsplash.com/photo-1451976426598-a7593bd6d0b2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y2l0eSUyMGdyZWVufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
            alt=""
            className="featuredImg"
          />
          <div className="featuredTitles">
            <h2>Singapore</h2>
            <h3>232 properties</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Featured;
