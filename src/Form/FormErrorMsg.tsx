import React from "react";
import { ErrorMessage } from "formik";

export interface FormErrorMsgProps {
  name: string;
}

const FormErrorMsg: React.FC<FormErrorMsgProps> = ({ name }) => {
  return (
    <ErrorMessage name={name}>
      {msg => <label style={{ color: "#9f3a38" }}>{msg}</label>}
    </ErrorMessage>
  );
};

export default FormErrorMsg;
