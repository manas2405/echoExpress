import "./settings.css"
import Sidebar from "../../components/sidebar/Sidebar"
export default function Settings() {
  return (
    <div className = "settings">
      <div className = "settingsWrapper"> 
         <div className="settingsTitle">
            <span className="settingsUpdateTitle"> Update Your Account</span>
            <span className="settingsDeleteTitle"> Delete Account</span>
         </div>
         <form className="settingsForm">
            <label> Profile Picture</label>
            <div className = "settingsPP">
              <img 
                src = "https://wallpapers.com/images/high/anime-profile-picture-light-yagami-v4xqknbej5vzv65k.webp"
                alt = ""
              />
                <label htmlFor = "fileInput">
                  <i class="settingsPPIcon fa-regular fa-circle-user"></i>
                </label>
              <input type = "file" id = "fileInput" style = {{display : "none"}}/>
            </div>
            <label> Username</label>
            <input type = "text" placeholder = "Safak" />
            <label>Email</label>
            <input type = "Email" placeholder = "safak@gmail.com" />
            <label>Password</label>
            <input type = "Password"/>
            <button className = "settingsSubmit"> Update </button>
         </form>
      </div>
      <Sidebar />
    </div>
  )
}
