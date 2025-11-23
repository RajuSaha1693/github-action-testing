/* eslint-env vitest */
/* global expect test */
import React from "react";
import { render, screen } from "@testing-library/react";
import Hello from "./Hello";
test("renders greeting", () => {
  render(<Hello name="Test" />);
  expect(screen.getByText(/Hello, Test/i)).toBeInTheDocument();
});
