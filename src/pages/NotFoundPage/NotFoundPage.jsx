import { useLocation } from "react-router-dom";
import css from "./NotFoundPage.module.css";
import BackLink from "../../components/BackLink/BackLink";
import DocumentTitle from "../../components/DocumentTitle";

export default function NotFoundPage() {
  const location = useLocation();
  const backLink = location.state?.from ?? "/";
  return (
    <>
      <DocumentTitle>Page not found</DocumentTitle>
      <section>
        <div className={css.container}>
          <h1 className={css.notFoundTitle}>404</h1>
          <h2 className={css.notFoundSubTitle}>There's NOTHING here...</h2>
          <p className={css.notFoundText}>
            ...maybe the page you're looking for is not found or never existed.
          </p>
          <BackLink to={backLink}>Back to home</BackLink>
        </div>
      </section>
    </>
  );
}
