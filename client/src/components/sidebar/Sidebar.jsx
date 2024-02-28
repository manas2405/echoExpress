import "./sidebar.css"

export default function Sidebar() {
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
                <li className = "sidebarListItem"> Life </li>
                <li className = "sidebarListItem"> Music </li>
                <li className = "sidebarListItem"> Style </li>
                <li className = "sidebarListItem"> Sport </li>
                <li className = "sidebarListItem"> Tech </li>
                <li className = "sidebarListItem"> Cinema </li>
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
