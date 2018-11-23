import React from "react";
import ReactDOM from "react-dom";
import MoviesList from "../../components/moviesList";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<MoviesList />, div);
  ReactDOM.unmountComponentAtNode(div);
});
