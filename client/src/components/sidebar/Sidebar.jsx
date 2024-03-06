import { useEffect, useState } from "react";
import "./sidebar.css"
import axios from "axios"
import {Link} from "react-router-dom"

export default function Sidebar() {
  const [cats, setCats] = useState([]);
  useEffect(() => {
    const getCats = async () => {
      const res = await axios.get("/categories");
      setCats(res.data);
    }
    getCats();
  }, [])

  return (
    <div className = "sidebar">
      <div className = "sidebarItem">
        <span className = "sidebarTitle">ABOUT ME</span>
        <img src = "https://cdn.pixabay.com/photo/2018/09/21/08/54/book-3692572_1280.jpg" alt = ""/>
        <p>
            The question is in a way meaningless, she knows, but one must ask. Love in such situations is rarely real. Sex is the engine, exalting and ruining people, sex and frustration. Love is what people believe is worth the path of devastation.
        </p>
      </div>
      <div className = "sidebarItem">
        <span className = "sidebarTitle">CATEGORIES</span>
            <ul className="sidebarList">
               {/* {
                cats?.map((c) => (
                  <Link key = {c._id} to = {`/?cat=${c.name}`} className = "link">
                    <li key = {c._id} className = "sidebarListItem"> {c.name} </li>
                  </Link>
                ))} */}
            </ul>
        </div>
        <div className="sidebarItem">
            <span className="sidebarTitle"> FOLLOW US </span>
            <div className="sidebarSocial">
                <i className="sidebarIcon fa-brands fa-square-facebook"></i>
                <i className="sidebarIcon fa-brands fa-square-twitter"></i>
                <i className="sidebarIcon fa-brands fa-pinterest-p"></i>
                <i className="sidebarIcon fa-brands fa-square-instagram"></i>
            </div>
        </div>
    </div>
  )
}
