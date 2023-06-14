import { render, screen } from "@testing-library/react";
import Welcome from "../components/Welcome";

describe("Test the Login component", () => {
  test("Render the welcome component with 1 button", async () => {
    render(<Welcome />);
    const buttonList = await screen.findAllByRole("button");
    expect(buttonList).toHaveLength(1);
  });
});
