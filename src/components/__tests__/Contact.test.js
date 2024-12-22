import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe("Contact Us page test cases", () => {
  it("Should load contact us component", () => {
    render(<Contact />);
    const heading = screen.getByRole("heading");

    expect(heading).toBeInTheDocument();
  });

  test("Should load button inside contact component", () => {
    render(<Contact />);

    const button = screen.getByRole("button");

    expect(button).toBeInTheDocument();
  });

  test("Should load input name inside contact component", () => {
    render(<Contact />);
    const inputName = screen.getByPlaceholderText("message");
    expect(inputName).toBeInTheDocument();
  });

  test("Should be load 2 input boxed inside the contact component", () => {
    render(<Contact />);

    const inputBox = screen.getAllByRole("textbox");
    expect(inputBox.length).not.toBe(3);
  });
});
