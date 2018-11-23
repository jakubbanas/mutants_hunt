import { ReactComponent as EmptyStarIcon } from "../assets/empty_star.svg";
import { ReactComponent as FullStarIcon } from "../assets/full_star.svg";
import React, { Component } from "react";

const MAX_VALUE = 5;

class Rating extends Component {
  state = { rating: this.props.rating || 0 };

  setRating = rating => this.setState({ rating });

  render() {
    let stars = [];
    const { rating } = this.state;
    for (let i = 1; i <= MAX_VALUE; i++)
      stars.push(
        <Star key={i} isFull={i <= rating} onClick={() => this.setRating(i)} />
      );

    return <>{stars}</>;
  }
}

class Star extends Component {
  render() {
    const { onClick, isFull } = this.props;
    return (
      <span onClick={onClick}>
        {isFull ? <FullStarIcon /> : <EmptyStarIcon />}
      </span>
    );
  }
}

export default Rating;
