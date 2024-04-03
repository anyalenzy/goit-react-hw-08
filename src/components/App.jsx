import "./App.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "../redux/contacts/operations";
import ContactForm from "./ContactForm/ContactForm";
import SearchBox from "./SearchBox/SearchBox";
import ContactList from "./ContactList/ContactList";
import { selectError, selectIsLoading } from "../redux/contacts/selectors";
import Loader from "./Loader/Loader";
import ErrorMessage from "./ErrorMessage/ErrorMessage";
import { Toaster } from "react-hot-toast";

function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      {isLoading && !error && <Loader />}
      {error && <ErrorMessage message={error}></ErrorMessage>}
      {!isLoading && !error && <ContactList />}
      <Toaster position="top-right"></Toaster>
    </div>
  );
}

export default App;
