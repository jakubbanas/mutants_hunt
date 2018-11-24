import React from "react";
import { shallow } from "enzyme";

import Rating from "../../components/rating";

it("renders without crashing", () => {
  const wrapper = shallow(<Rating />);
  expect(wrapper).toMatchSnapshot();
});
