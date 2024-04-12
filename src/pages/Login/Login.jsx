import CircleBlock from "../../components/CircleBlock/CircleBlock";
import DocumentTitle from "../../components/DocumentTitle";
import LoginForm from "../../components/LoginForm/LoginForm";
import css from "./Login.module.css";

export default function Login() {
  return (
    <section className={css.sectionLogin}>
      <DocumentTitle>Login</DocumentTitle>
      <div className={css.containerLoginForm}>
        <LoginForm />
      </div>
      <CircleBlock />
    </section>
  );
}
