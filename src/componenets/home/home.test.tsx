import { fireEvent, render, screen } from "@testing-library/react";
import Home from "./Home";
import ButtonTab from "../button/ButtonTab";

describe("home tab", () => {
  test("initially input is empty", () => {
    render(<Home />);
    const initialValue = screen.getByTestId("inputBox");
    // expect(initialValue).toBeInTheDocument()
    expect(initialValue.value).toBe("");
  });

  test("AC button funtionallity", () => {
    render(
      <>
        <Home />
        <ButtonTab />
      </>
    );

    const findAcBtn = screen.getByRole("button", {
      name: "AC",
    });
    fireEvent.click(findAcBtn);
    const inputValue = screen.getByTestId("inputBox");
    expect(inputValue.value).toBe("");
  });
});
