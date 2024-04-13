import { useDispatch } from "react-redux";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useId } from "react";
import { useState } from "react";
import * as Yup from "yup";
import { register } from "../../redux/auth/operations";
import css from "../ContactForm/ContactForm.module.css";
import { PiEyeClosedBold } from "react-icons/pi";
import { PiEyeBold } from "react-icons/pi";
import style from "../LoginForm/LoginForm.module.css";

const ContactSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too Short!")
    .max(20, "Too Long!")
    .required("Required"),
  email: Yup.string()
    .email("Enter a valid email")
    .required("Email is required"),
  password: Yup.string()
    .min(8, "Password should be of minimum 8 characters length")
    .required("Password is required"),
});

const initialValues = {
  name: "",
  email: "",
  password: "",
};

export default function RegistrationForm() {
  const emailFieldId = useId();
  const passwordFieldId = useId();
  const nameFieldId = useId();
  const dispatch = useDispatch();
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const handleTogglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const handleSubmit = (values, actions) => {
    dispatch(register(values));
    actions.resetForm();
  };
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={ContactSchema}
      autoComplete="off"
    >
      <Form className={css.formContainer}>
        <div className={css.fieldContainer}>
          <label htmlFor={nameFieldId}>Username</label>
          <Field
            className={css.formInput}
            type="text"
            name="name"
            id={nameFieldId}
          />
          <ErrorMessage
            className={css.errorMessage}
            name="name"
            component="div"
          />
        </div>
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
