import React from "react";
import { render } from "@testing-library/react";
import Board from "./Board";

describe("Board", () => {
  it("should render", () => {
    const { getByText } = render(<Board />);
    const button = getByText("Play");
    expect(button).toBeInTheDocument();
  });
});
