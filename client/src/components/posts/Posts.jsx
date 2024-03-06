import "./posts.css";
import Post from "../post/Post";

export default function Posts({ posts }) {
  return (
    <div className="posts">
      {Array.isArray(posts) && posts.length > 0 ? (
        posts.map((post) => (
          <Post key={post._id} post={post} />
        ))
      ) : (
        <p>No posts available.</p>
      )}
    </div>
  );
}
