import css from "./Home.module.css";
import DocumentTitle from "../../components/DocumentTitle";
import CircleBlock from "../../components/CircleBlock/CircleBlock";

export default function Home() {
  return (
    <>
      <DocumentTitle>Home</DocumentTitle>

      <section className={css.sectionHome}>
        <h1 className={css.homeTitle}>Create Your Perfect Contact Book! </h1>
        <h2 className={css.homeSubTitle}>
          Manage your contacts with ease and never lose touch.
        </h2>
        <CircleBlock />
      </section>
    </>
  );
}
