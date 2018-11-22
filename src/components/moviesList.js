import React, { Component } from "react";
import Movie from "./movie";

class MoviesList extends Component {
  render() {
    return (
      <div class="columns">
        <div class="column">
          <Movie />
        </div>
        <div class="column">
          <Movie />
        </div>
        <div class="column">
          <Movie />
        </div>
      </div>
    );
  }
}

export default MoviesList;
