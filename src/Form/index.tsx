import React, { useState } from "react";
import * as Yup from "yup";
import { Field as FormikField, Formik, ErrorMessage } from "formik";
import {
  CheckboxProps,
  Form,
  Divider,
  Button,
  Message,
} from "semantic-ui-react";
import PasswordField from "./PasswordField";

const FormSchema = Yup.object().shape({
  username: Yup.string()
    .min(3, " is too short!")
    .max(15, " is too long!")
    .required(" is required"),
  email: Yup.string()
    .min(8, " is too short!")
    .max(25, " is too long!")
    .required(" is required"),
  password: Yup.string()
    .min(8, " is too short!")
    .max(30, " is too long!")
    .required(" is required"),
});

function checkError(formProps: any, key: any) {
  return !!formProps.errors[key] && !!formProps.touched[key];
}

const CustomForm = () => {
  const [rdBoxVal, setRdBoxVal] = useState("m");
  const [successMessage, showSuccessMessage] = useState(false);

  function handleRadioBoxChange(
    e: React.FormEvent<HTMLInputElement>,
    data: CheckboxProps,
  ) {
    setRdBoxVal(data.value as string);
  }

  function onSubmitHandler() {
    showSuccessMessage(true);
  }

  return (
    <Formik
      validationSchema={FormSchema}
      onSubmit={onSubmitHandler}
      initialValues={{ username: "", email: "", password: "" }}
    >
      {({ handleSubmit, ...formProps }) => {
        return (
          <Form
            onSubmit={handleSubmit}
            success={successMessage ? true : false}
            data-testid="form"
          >
            <Form.Field
              error={checkError(formProps, "username") ? true : false}
            >
              <label htmlFor="username">
                Username
                <ErrorMessage name="username" />
              </label>
              <FormikField
                name="username"
                id="username"
                placeholder="Enter username"
              />
            </Form.Field>

            <Form.Field error={checkError(formProps, "email") ? true : false}>
              <label htmlFor="email">
                Email <ErrorMessage name="email" />
              </label>
              <FormikField
                name="email"
                type="email"
                id="email"
                placeholder="Enter email"
              />
            </Form.Field>

            <Form.Field
              error={checkError(formProps, "password") ? true : false}
            >
              <label htmlFor="password">
                Password <ErrorMessage name="password" />
              </label>
              <PasswordField id="password" />
            </Form.Field>
            <Divider />

            <Form.Group inline>
              <label>Gender</label>
              <Form.Radio
                label="Male"
                value="m"
                onChange={handleRadioBoxChange}
                checked={rdBoxVal === "m"}
              />
              <Form.Radio
                label="Female"
                value="f"
                onChange={handleRadioBoxChange}
                checked={rdBoxVal === "f"}
              />
              <Form.Radio
                label="Other"
                value="o"
                onChange={handleRadioBoxChange}
                checked={rdBoxVal === "o"}
              />
            </Form.Group>
            <Divider />

            <Form.Checkbox label="I agree to the Terms and Conditions" />
            <Divider />

            {successMessage && (
              <Message
                success
                header="Form Completed"
                content="Lorem ipsum dolor sit, amet consectetur adipisicing elit."
                data-testid="message"
              />
            )}

            <Button type="submit" fluid color="linkedin">
              Submit
            </Button>
          </Form>
        );
      }}
    </Formik>
  );
};

export default CustomForm;
