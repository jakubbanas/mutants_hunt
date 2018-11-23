import React, { Component } from "react";
import Rating from "./rating";

class Movie extends Component {
  render() {
    const { title, image, rating } = this.props;
    return (
      <div className="card" style={{ width: "18rem" }}>
        <img className="card-img-top" src={image} alt="" />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <Rating rating={rating} />
        </div>
      </div>
    );
  }
}

export default Movie;
