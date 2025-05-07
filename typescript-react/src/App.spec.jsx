import "@testing-library/jest-dom"
import {render, screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import App from "./App";

describe("Simple working test", () => {

  it("the title is visible", async () => {
    await render(<App />);
    const welcomeText = screen.getByText(/Vite \+ React/i);
    expect(welcomeText).toBeInTheDocument();
  });

  it("should increment count on click", async () => {
    await render(<App />);
    expect(screen.getByText(/count is 0/i)).toBeInTheDocument();
    await userEvent.click(screen.getByRole("button"));
    expect(screen.getByText(/count is 1/i)).toBeInTheDocument();
  });
});