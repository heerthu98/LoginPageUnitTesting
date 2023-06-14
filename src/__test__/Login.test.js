import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../app/store";
import Login from "../components/Login";

describe("Test the Login component", () => {
  test("Render the login component with 1 button", async () => {
    render(
      <Provider store={store}>
        <Login />
      </Provider>
    );

    const buttonList = await screen.findAllByRole("button");
    expect(buttonList).toHaveLength(1);
  });

  test("password input should have type password", () => {
    render(
      <Provider store={store}>
        <Login />
      </Provider>
    );

    const password = screen.getByPlaceholderText("Password");
    expect(password).toHaveAttribute("type", "password");
  });

  test("email input should have type email", () => {
    render(
      <Provider store={store}>
        <Login />
      </Provider>
    );

    const email = screen.getByPlaceholderText("Email");
    expect(email).toHaveAttribute("type", "email");
  });
});
