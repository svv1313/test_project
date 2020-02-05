import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("renders BET AMOUNT input", () => {
  const { getByText } = render(<App />);
  const pElement = getByText("BET AMOUNT");
  expect(pElement).toBeInTheDocument();
});
