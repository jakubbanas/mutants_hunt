import React, { Component } from "react";
import MoviesList from "./components/moviesList";

class App extends Component {
  render() {
    return (
      <div className="container">
        <MoviesList />
      </div>
    );
  }
}

export default App;
