import { ReactComponent as EmptyStar } from "../assets/empty_star.svg";
import { ReactComponent as FullStar } from "../assets/full_star.svg";
import React, { Component } from "react";

const MAX_VALUE = 5;

class Rating extends Component {
  render() {
    let stars = [];
    const { rating } = this.props;
    for (let i = 1; i <= MAX_VALUE; i++)
      stars.push(i <= rating ? <FullStar /> : <EmptyStar />);
    console.log(stars);
    return <>{stars}</>;
  }
}

export default Rating;
