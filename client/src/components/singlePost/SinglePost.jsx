import "./singlePost.css"

export default function SinglePost() {
  return (
    <div className = "singlePost">
      <div className = "singlePostWrapper">
        <img src = "https://plus.unsplash.com/premium_photo-1667311649552-2cfab63bdcfc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bmF0dXJlJTIwaW1hZ2VzfGVufDB8fDB8fHww" alt = "" className = "singlePostImg"
        />
        <h1 className = "singlePostTitle">
          Lorem ipsum dolor sit amet.
          <div className="singlePostEdit">
            <i className ="singlePostIcon fa-regular fa-pen-to-square"></i>
            <i className="singlePostIcon fa-solid fa-trash-can"></i>
          </div>
        </h1>

        <div className = "singlePostInfo">
          <span className = "singlePostAuthor">Author : <b>Safak</b></span>
          <span className = "singlePostAuthor">1 hour ago</span>
        </div>
        <p className = "singlePostDesc"> Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Ex iusto alias expedita cum. Non molestias rem, 
          laudantium repudiandae at id obcaecati neque consequuntur, 
          quasi in magnam voluptatum ipsa nam perferendis!
           Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Ex iusto alias expedita cum. Non molestias rem, 
          laudantium repudiandae at id obcaecati neque consequuntur, 
          quasi in magnam voluptatum ipsa nam perferendis!
           Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Ex iusto alias expedita cum. Non molestias rem, 
          laudantium repudiandae at id obcaecati neque consequuntur, 
          quasi in magnam voluptatum ipsa nam perferendis!
           Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Ex iusto alias expedita cum. Non molestias rem, 
          laudantium repudiandae at id obcaecati neque consequuntur, 
          quasi in magnam voluptatum ipsa nam perferendis!</p>
      </div>
    </div>
  )
}

