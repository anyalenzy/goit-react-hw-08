import toast from "react-hot-toast";

export const successAdd = () => toast.success("Contact was added");

export const successDelete = () => toast.success("Contact was deleted!");

export const successEdit = () => toast.success("Contact successfully updated!");

export const nameCheckerError = () => toast.error("Contact already exists");

export const errorToast = (message) => toast.error(message);
