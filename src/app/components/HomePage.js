import Head from "next/head";
import "../style/LogoHome.scss";

const HomePage=()=>{
    return(<div className="bg-gradient-to-r from-blue-900 to-blue-200 min-h-screen">
<section>
    <div className="logoHome">
    <span className="down"></span>
    <div className="centerRight"></div>
    <span className="right"></span>
    </div>
</section>
    </div>);
}

export default HomePage;