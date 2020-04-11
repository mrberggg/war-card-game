import React from "react";
import { render } from "@testing-library/react";
import Board from "./Board";

test("displays card", () => {
  const { getByText } = render(<Board />);
  const button = getByText("King of Hearts");
  expect(button).toBeInTheDocument();
});
