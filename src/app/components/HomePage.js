import MenuBar from "./Menu";
import "../style/HomePage.scss";

const Homepage = () => {
  return (
    <div className="bg-gradient-to-r from-blue-900 to-blue-200 min-h-screen">
      <div>
        <MenuBar />
        <div>
          <div className="logoHome">
            <span className="down"></span>
            <span className="rightToLeft"></span>
            <span className="right"></span>
          </div>
          </div>
        </div>
      </div>
  );
};

export default Homepage;
