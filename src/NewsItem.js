import React  from "react";

const NewsItem=(props)=> {
    let { title, description, imgurl, newsurl, mode ,author,published} = props;
    return (
      <div
        className="card"
        style={{
          width: "18rem",
          border: mode === "light" ? "0px solid black" : "2px solid white",
        }}
      >
        <img
          src={
            imgurl
              ? imgurl
              : "https://media.istockphoto.com/photos/breaking-news-world-news-with-map-backgorund-picture-id1182477852?k=20&m=1182477852&s=612x612&w=0&h=I3wdSzT_5h1y9dHq_YpZ9AqdIKg8epthr8Guva8FkPA="
          }
          className="card-img-top"
          alt="..."
          style={{ width: "17.7rem", height: "10rem" }}
        />
        <div
          className="card-body"
          style={{
            backgroundColor: mode === "light" ? "white" : "#212529",
            color: mode === "light" ? "black" : "white",
          }}
        >
          <h5 className="card-title">{title}...</h5>
          <p className="card-text">{description.slice(28)}...</p>
          <p className="card-text"><small className="text-muted"> By {author?author:"Anaoymous" } on {new Date(published).toGMTString()}</small> </p>
          <a href={newsurl} className="btn btn-sm btn-primary" target="_blank" rel="noreferrer">
            Read More
          </a>
        </div>
      </div>
    );
  }
export default NewsItem