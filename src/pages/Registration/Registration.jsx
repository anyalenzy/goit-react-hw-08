import css from "./Registration.module.css";
import CircleBlock from "../../components/CircleBlock/CircleBlock";
import DocumentTitle from "../../components/DocumentTitle";
import RegistrationForm from "../../components/RegistrationForm/RegistrationForm";

export default function Register() {
  return (
    <section className={css.sectionRegistration}>
      <DocumentTitle>Registration</DocumentTitle>
      <div className={css.containerRegisterForm}>
        <RegistrationForm />
      </div>
      <CircleBlock />
    </section>
  );
}
