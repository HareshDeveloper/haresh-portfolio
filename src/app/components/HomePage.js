import MenuBar from "./Menu";
import "../style/HomePage.scss";

const Homepage = () => {
  return (
    <div className="bg-gradient-to-r from-blue-900 to-blue-200 min-h-screen">
      <div>
        <MenuBar />
        <div>
          <div><h1 className="heading">Hi,<br/>I'm <span className="name">Haresh</span></h1>
            <h1 className="role">Software Developer</h1>
            </div>   
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
