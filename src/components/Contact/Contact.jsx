import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/operations";
import css from "./Contact.module.css";
import { FaRegUser } from "react-icons/fa";
import { MdOutlinePhone } from "react-icons/md";

export default function Contact({ contact: { id, name, number } }) {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteContact(id));

  return (
    <li className={css.contactItem}>
      <div className={css.contactContainer}>
        <p className={css.contactName}>
          <FaRegUser className={css.contactIcon} />
          {name}
        </p>
        <p className={css.contactNumber}>
          <MdOutlinePhone className={css.contactIconPhone} />
          {number}
        </p>
      </div>
      <button className={css.deleteBtn} onClick={handleDelete}>
        Delete
      </button>
    </li>
  );
}
