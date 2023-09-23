import Head from "next/head";
import "../style/LogoHome.scss";
import MenuBar from "./Menu";

const HomeLogo=()=>{
    return(<div className="bg-gradient-to-r from-blue-900 to-blue-200 min-h-screen">
<section>
    <MenuBar/>
    <div className="logoHome">
    <span className="down"></span>
    <div className="centerRight"></div>
    <span className="right"></span>
    </div>
</section>
    </div>);
}

export default HomeLogo;