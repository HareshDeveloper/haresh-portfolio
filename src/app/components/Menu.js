import "../style/MenuIcon.scss";

const MenuBar =() =>{
   return(
    <div className="menuDiv">
        <label className="logo">Portfolio</label>
        <section className="buttons">
        <button className="menuButton bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded ">
  About
</button>
<button className="menuButton bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
  Skills
</button>
<button className="menuButton bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
  Experience
</button>
<button className="menuButton bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded mr-43">
  Projects
</button>
        </section>
    </div>
   );
}
export default MenuBar;