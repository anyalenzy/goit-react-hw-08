import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import DocumentTitle from "../../components/DocumentTitle";
import { fetchContacts } from "../../redux/contacts/operations";
import { selectIsLoading } from "../../redux/contacts/selectors";
import ContactList from "../../components/ContactList/ContactList";
import ContactForm from "../../components/ContactForm/ContactForm";
import Loader from "../../components/Loader/Loader";
import SearchBox from "../../components/SearchBox/SearchBox";
import css from "./Contacts.module.css";

export default function Contacts() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <DocumentTitle>Your contacts</DocumentTitle>
      <section className={css.contactsSection}>
        <ContactForm />
        <div className={css.flexRight}>
          <h2>Contacts</h2>
          <SearchBox />
          {isLoading && <Loader />}
          <ContactList />
        </div>
      </section>
    </>
  );
}
