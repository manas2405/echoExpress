import "./post.css";

export default function Post() {
  return (
    <div className="post">
      <div className="postImgContainer">
        <img
          className="postImg"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYscfUBUbqwGd_DHVhG-ZjCOD7MUpxp4uhNe7toUg4ug&s"
          alt=""
        />
      </div>
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">Music</span>
          <span className="postCat">Life</span>
        </div>
        <span className="postTitle">
          place on the page, and the order in which they want peace.
        </span>
        <hr />
        <span className="postDate">1 hour ago</span>
      </div>
      <p className="postDesc">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium
        doloribus quae ducimus maxime, minus saepe excepturi labore sequi optio,
        ipsam beatae deleniti neque, quasi debitis harum possimus ea ipsa
        consequuntur? Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        Laudantium doloribus quae ducimus maxime, minus saepe excepturi labore
        sequi optio, ipsam beatae deleniti neque, quasi debitis harum possimus
        ea ipsa consequuntur? Lorem ipsum dolor, sit amet consectetur adipisicing
        elit. Laudantium doloribus quae ducimus maxime, minus saepe excepturi
        labore sequi optio, ipsam beatae deleniti neque, quasi debitis harum
        possimus ea ipsa consequuntur?
      </p>
    </div>
  );
}
