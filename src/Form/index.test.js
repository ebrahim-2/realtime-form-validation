import React from "react";
import { render, fireEvent, waitForElement } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Form from ".";

describe("Form Component", () => {
  test("should submit a form successfully", async () => {
    const { getByLabelText, getByText, getByTestId } = render(<Form />);

    const username = getByLabelText(/username/i);
    const email = getByLabelText(/email/i);
    const password = getByLabelText(/password/i);

    fireEvent.change(username, { target: { value: "ebrahem" } });
    fireEvent.change(email, { target: { value: "me@gmail.com" } });
    fireEvent.change(password, { target: { value: "mySecretPassword" } });

    fireEvent.click(getByText(/submit/i));

    const [successMessage, ...formFields] = await waitForElement(() => [
      getByTestId(/message/i),
      username.parentElement,
      email.parentElement,
      password.parentElement.parentElement,
    ]);

    expect(successMessage).toBeInTheDocument()
    formFields.map(field => expect(field.className).not.toContain("error"));
    formFields.map(field => expect(field.className).toEqual("field"));
  });

  test("should show an error on fields when submitting form without input values", async () => {
    const { getByLabelText, getByText } = render(<Form />);

    fireEvent.click(getByText(/submit/i));

    const formFields = await waitForElement(() => [
      getByLabelText(/username/i).parentElement,
      getByLabelText(/email/i).parentElement,
      getByLabelText(/password/i).parentElement.parentElement,
    ]);

    formFields.map(field => expect(field.className).toContain("error"));
  });
});
