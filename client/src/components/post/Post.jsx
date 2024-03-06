import "./post.css";
import {Link} from "react-router-dom"
import { PF } from "../../apiPaths";

export default function Post({post}) {
  return (
    <div className="post">
      {post.photo && (<img className="postImg" src = {PF + post.photo} alt = "" />)}
      <div className="postInfo">
        <Link to = {`/post/${post._id}`} className = "link">
          <span className="postTitle"> {post.title} </span>
        </Link>
        
        <hr />
        <span className="postDate">{new Date(post.createdAt).toDateString()}</span>
      </div>
      <p className="postDesc">{post.desc}</p>
    </div>
  );
}

