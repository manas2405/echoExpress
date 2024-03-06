import "./posts.css";
import Post from "../post/Post";

export default function Posts({ posts }) {
  return (
    <div className="posts">
      {posts ? (
        posts.map((post) => (
          <Post key={post._id} post={post} />
        ))
      ) : (
        <p>No posts to display.</p>
      )}
    </div>
  );
}
