import { useDispatch } from "react-redux";
import { deleteContact, updateContact } from "../../redux/contacts/operations";
import css from "./Contact.module.css";
import { FaRegUser } from "react-icons/fa";
import { MdOutlinePhone } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";
import { BiEdit } from "react-icons/bi";
import DialogDelete from "../DialogDelete/DialogDelete";
import { useState } from "react";
import EditDialog from "../EditDialog/EditDialog";

export default function Contact({ contact: { id, name, number } }) {
  const [open, setOpen] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);

  const handleClickOpenDialog = () => {
    setOpen(true);
  };
  const handleClickOpenEditDialog = () => {
    setOpenEdit(true);
  };
  const handleCloseDialog = () => {
    setOpen(false);
  };
  const handleCloseEditDialog = () => {
    setOpenEdit(false);
  };

  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteContact(id));
  const handleEdit = (contact) => {
    dispatch(updateContact({ contact, id }));
    handleCloseEditDialog();
  };

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
      <div className={css.buttonContainer}>
        <button className={css.editBtn} onClick={handleClickOpenEditDialog}>
          <BiEdit />
          Edit
        </button>
        <button className={css.deleteBtn} onClick={handleClickOpenDialog}>
          <RiDeleteBin6Line />
          Delete
        </button>
      </div>
      <DialogDelete
        open={open}
        id={id}
        handleClose={handleCloseDialog}
        handleDelete={handleDelete}
      />
      <EditDialog
        open={openEdit}
        handleClose={handleCloseEditDialog}
        handleEdit={handleEdit}
        editName={name}
        editNumber={number}
      />
    </li>
  );
}
