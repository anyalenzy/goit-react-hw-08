import { useDispatch } from "react-redux";
import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useId } from "react";
import * as Yup from "yup";
import { logIn } from "../../redux/auth/operations";
import css from "../ContactForm/ContactForm.module.css";
import { PiEyeClosedBold } from "react-icons/pi";
import { PiEyeBold } from "react-icons/pi";
import style from "./LoginForm.module.css";

const ContactSchema = Yup.object().shape({
  email: Yup.string()
    .email("Enter a valid email")
    .required("Email is required"),
  password: Yup.string()
    .min(8, "Password should be of minimum 8 characters length")
    .required("Password is required"),
});

const initialValues = {
  email: "",
  password: "",
};

export default function ContactForm() {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const handleTogglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };
  const emailFieldId = useId();
  const passwordFieldId = useId();
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(logIn(initialValues));
    actions.resetForm();
  };
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={ContactSchema}
      autoComplete="on"
    >
      <Form className={css.formContainer}>
        <div className={css.fieldContainer}>
          <label htmlFor={emailFieldId}>Email</label>
          <Field
            className={css.formInput}
            type="email"
            name="email"
            id={emailFieldId}
          />
          <ErrorMessage
            className={css.errorMessage}
            name="email"
            component="div"
          />
        </div>
        <div className={css.fieldContainer}>
          <label htmlFor={passwordFieldId}>Password</label>
          <Field
            className={css.formInput}
            type={isPasswordVisible ? "text" : "password"}
            name="password"
            id={passwordFieldId}
          />
          {isPasswordVisible ? (
            <PiEyeBold
              className={style.passwordIcon}
              onClick={handleTogglePasswordVisibility}
            />
          ) : (
            <PiEyeClosedBold
              className={style.passwordIcon}
              onClick={handleTogglePasswordVisibility}
            />
          )}

          <ErrorMessage
            className={css.errorMessage}
            name="password"
            component="div"
          />
        </div>

        <button className={css.btnSubmit} type="submit">
          Log in
        </button>
      </Form>
    </Formik>
  );
}
