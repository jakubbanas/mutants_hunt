import React from "react";
import ReactDOM from "react-dom";
import Movie from "../../components/movie";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Movie />, div);
  ReactDOM.unmountComponentAtNode(div);
});
