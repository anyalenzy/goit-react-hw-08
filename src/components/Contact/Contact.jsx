import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/operations";
import css from "./Contact.module.css";
import { FaRegUser } from "react-icons/fa";
import { MdOutlinePhone } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";
import { BiEdit } from "react-icons/bi";
import DialogDelete from "../DialogDelete/DialogDelete";
import { useState } from "react";

export default function Contact({ contact: { id, name, number } }) {
  const [open, setOpen] = useState(false);
  const handleClickOpenDialog = () => {
    setOpen(true);
  };
  const handleCloseDialog = () => {
    setOpen(false);
  };

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
          <MdOutlinePhone className={css.contactIcon} />
          {number}
        </p>
      </div>
      <button className={css.editBtn}>
        <BiEdit />
        Edit
      </button>
      <button className={css.deleteBtn} onClick={handleClickOpenDialog}>
        <RiDeleteBin6Line />
        Delete
      </button>
      <DialogDelete
        open={open}
        id={id}
        handleClose={handleCloseDialog}
        handleDelete={handleDelete}
      />
    </li>
  );
}
