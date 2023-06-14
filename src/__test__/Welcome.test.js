import { render as rt1Render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../App/store";
import Welcome from "../components/Welcome";

const render = (component) =>
  rt1Render(<Provider store={store}>{component}</Provider>);

describe("Test the Welcome component", () => {
  test("Render the welcome component with 1 button", async () => {
    render(<Welcome />);
    const buttonList = await screen.findAllByRole("button");
    expect(buttonList).toHaveLength(1);
  });
});
