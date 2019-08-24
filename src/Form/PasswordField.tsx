import React, { useState } from "react";
import { Input, Icon } from "semantic-ui-react";
import { Field as FormikField, FieldProps } from "formik";

interface IPasswordProps {
  placeholder?: string;
  name?: string;
}
const Password: React.FC<IPasswordProps> = ({ placeholder, name }) => {
  const [revealPass, setRevealPass] = useState(false);

  const handleRevealPassword = () => setRevealPass(!revealPass);

  return (
        <FormikField type="password" name={name ? name : "password"} >
          {({ field }: FieldProps) => {
            return (
              <Input
                {...field}
                type={revealPass ? "text" : "password"}
                icon={
                  <Icon
                    name={revealPass ? "eye" : "eye slash"}
                    circular
                    link
                    onClick={handleRevealPassword}
                  />
                }
                placeholder={placeholder ? placeholder : "Password"}
              />
            );
          }}
        </FormikField>
  );
};

export default Password;
