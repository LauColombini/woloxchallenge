import React from "react";
import { render, screen, test, expect } from "@testing-library/react";
import Main from "./Main";

test("renders learn react link", () => {
  render(<Main />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
