import React from "react";
import { shallow } from "enzyme";

import Rating, { Star } from "../../components/rating";

it("renders without crashing", () => {
  const rating = shallow(<Rating />);
  expect(rating).toMatchSnapshot();

  rating
    .find(Star)
    .first()
    .props()
    .onClick();

  expect(rating.state().rating).toEqual(1);
});
