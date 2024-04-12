import { useFormik } from "formik";
import {
  Dialog,
  DialogActions,
  DialogContent,
  TextField,
  Box,
} from "@mui/material";
import css from "./EditDialog.module.css";
import { ContactSchema } from "../ContactForm/ContactForm";

const EditDialog = ({
  open,
  handleClose,
  handleEdit,
  editNumber,
  editName,
}) => {
  const initialValues = {
    name: editName,
    number: editNumber,
  };
  const handleSubmit = ({ name, number }) => {
    if (name === editName && number === editNumber) {
      handleClose();
      return;
    }
    handleEdit({ name, number });
    handleClose();
  };

  const formik = useFormik({
    initialValues,
    onSubmit: handleSubmit,
    validationSchema: ContactSchema,
  });

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogContent>
        <Box
          component="form"
          sx={{ mt: 2 }}
          noValidate
          autoComplete="off"
          onSubmit={formik.handleSubmit}
        >
          <TextField
            fullWidth
            id="name"
            label="Name"
            name="name"
            value={formik.values.name}
            onChange={formik.handleChange}
            error={formik.touched.name && Boolean(formik.errors.name)}
            helperText={formik.touched.name && formik.errors.name}
            onBlur={formik.handleBlur}
            color="secondary"
            variant="outlined"
            sx={{ mb: 2 }}
          />
          <TextField
            fullWidth
            id="number"
            label="Number"
            name="number"
            value={formik.values.number}
            onChange={formik.handleChange}
            error={formik.touched.number && Boolean(formik.errors.number)}
            helperText={formik.touched.number && formik.errors.number}
            onBlur={formik.handleBlur}
            color="secondary"
            variant="outlined"
            sx={{ mb: 2 }}
          />
          <button className={css.editBtn} type="submit">
            Edit contact
          </button>
        </Box>
      </DialogContent>
      <DialogActions>
        <button
          type="button"
          className={css.cancelBtn}
          onClick={handleClose}
          autoFocus
        >
          Cancel
        </button>
      </DialogActions>
    </Dialog>
  );
};

export default EditDialog;
