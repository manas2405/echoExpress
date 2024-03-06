import "./settings.css";
import Sidebar from "../../components/sidebar/Sidebar";
import { useContext, useState } from "react"; 
import { Context } from "../../context/Context";
import axios from "axios";
import { PF } from "../../apiPaths";

export default function Settings() {
  const [file, setFile] = useState(null);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const { user, dispatch } = useContext(Context);
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    
    if (!username || !email) {
      setError("Username and email cannot be empty.");
      return;
    }

    // Prepare updated user data
    const updatedUser = {
      userId: user._id,
      username,
      email,
      password,
    };

    // Upload profile picture if selected
    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      updatedUser.profilePic = filename;
      try {
        await axios.post("/upload", data);
      } catch (err) {
        console.error("Error uploading profile picture:", err);
      }
    }

    try {
      // Send update request to the server
      const res = await axios.put(`/users/${user._id}`, updatedUser);
      setSuccess(true); // Set success state
      dispatch({ type: "UPDATE_SUCCESS", payload: res.data });
    } catch (err) {
      // Handle errors from the server response
      if (err.response) {
        const { status, data } = err.response;
        if (status === 400) {
          setError(data.message || "Username or email already exists.");
        } else {
          setError(data.message || "An error occurred while updating your account.");
          console.error("Error updating user:", err);
        }
      } else {
        setError("An error occurred while updating your account.");
        console.error("Error updating user:", err);
      }
      dispatch({ type: "UPDATE_FAILURE" });
    }
  };

  return (
    <div className="settings">
      <div className="settingsWrapper"> 
        <div className="settingsTitle">
          <span className="settingsUpdateTitle"> Update Your Account</span>
          <span className="settingsDeleteTitle"> Delete Account</span>
        </div>
        <form className="settingsForm" onSubmit={handleSubmit}>
          <label> Profile Picture</label>
          <div className="settingsPP">
            <img 
              src={file ? URL.createObjectURL(file) : PF + user.profilePic}
              alt=""
            />
            <label htmlFor="fileInput">
              <i className="settingsPPIcon fa-regular fa-circle-user"></i>
            </label>
            <input 
              type="file" 
              id="fileInput" 
              style={{ display: "none" }}
              onChange={(e) => setFile(e.target.files[0])}
            />
          </div>
          <label> Username</label>
          <input 
            type="text" 
            placeholder={user.username} 
            value={username} 
            onChange={(e) => setUsername(e.target.value)}
          />
          <label>Email</label>
          <input 
            type="email" 
            placeholder={user.email} 
            value={email} 
            onChange={(e) => setEmail(e.target.value)}
          />
          <label>Password</label>
          <input 
            type="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="settingsSubmit" type="submit"> Update </button>
          {error && <span className="errorMessage">{error}</span>}
          {success && !error && <span style={{ color: "green", textAlign: "center", marginTop: "20px" }}>Profile has been updated... </span>}
        </form>
      </div>
      <Sidebar />
    </div>
  )
}
