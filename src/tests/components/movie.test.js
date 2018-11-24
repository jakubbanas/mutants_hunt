import React from "react";
import { shallow } from "enzyme";

import Movie from "../../components/movie";

it("renders without crashing", () => {
  shallow(<Movie />);
});
