import React from "react";
import { shallow } from "enzyme";

import MoviesList from "../../components/moviesList";

it("renders without crashing", () => {
  const wrapper = shallow(<MoviesList />);
  expect(wrapper).toMatchSnapshot();
});
