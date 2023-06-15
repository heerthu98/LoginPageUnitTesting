import { render as rt1Render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../App/store";
import Login from "../components/Login";

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

  test("submitting the form without email should display an error message", () => {
    render(<Login />);

    const submitButton = screen.getByTestId("submit");

    fireEvent.click(submitButton);

    const emailError = screen.getByText("Email is required");
    expect(emailError).toBeInTheDocument();
  });

  test("submitting the form with an invalid email format should display an error message", () => {
    render(<Login />);

    const emailInput = screen.getByPlaceholderText("Email");
    const submitButton = screen.getByTestId("submit");

    fireEvent.change(emailInput, { target: { value: "example" } });
    fireEvent.click(submitButton);

    const emailError = screen.getByText("Invalid email format");
    expect(emailError).toBeInTheDocument();
  });

  test("submitting the form without a password should display an error message", () => {
    render(<Login />);

    const submitButton = screen.getByTestId("submit");

    fireEvent.click(submitButton);

    const passwordError = screen.getByText("Password is required");
    expect(passwordError).toBeInTheDocument();
  });

  test("submitting the form with an invalid password format should display an error message", () => {
    render(<Login />);

    const passwordInput = screen.getByPlaceholderText("Password");
    const submitButton = screen.getByTestId("submit");

    fireEvent.change(passwordInput, { target: { value: "password123" } });
    fireEvent.click(submitButton);
    const passwordError = screen.getByText(
      "Password must contain at least 8 characters including one letter, one number and one special character"
    );
    expect(passwordError).toBeInTheDocument();
  });
});
