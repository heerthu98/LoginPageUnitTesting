import { render as rt1Render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../App/store";
import Login from "../components/Login";
import userEvent from "@testing-library/user-event";

const render = (component) =>
  rt1Render(<Provider store={store}>{component}</Provider>);

describe("Test the Login component", () => {
  test("Render the login component with 1 button", async () => {
    render(<Login />);
    const buttonList = await screen.findAllByRole("button");
    expect(buttonList).toHaveLength(1);
  });

  test("password input should have type password", async () => {
    render(<Login />);
    const password = screen.getByPlaceholderText("Password");
    expect(password).toHaveAttribute("type", "password");
  });

  test("email input should have type email", async () => {
    render(<Login />);
    const email = screen.getByPlaceholderText("Email");
    expect(email).toHaveAttribute("type", "email");
  });
});
