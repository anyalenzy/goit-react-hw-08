import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";
import css from "./DialogDelete.module.css";

const DialogDelete = ({ open, handleClose, handleDelete }) => {
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">
        {"Are you sure you want to delete the contact?"}
      </DialogTitle>
      <DialogActions>
        <button className={css.deleteBtn} onClick={handleDelete}>
          Delete
        </button>
        <button className={css.cancelBtn} onClick={handleClose} autoFocus>
          Cancel
        </button>
      </DialogActions>
    </Dialog>
  );
};

export default DialogDelete;
