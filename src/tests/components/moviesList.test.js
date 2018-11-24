import React from "react";
import { shallow } from "enzyme";

import MoviesList from "../../components/moviesList";

it("renders without crashing", () => {
  shallow(<MoviesList />);
});
