import * as yup from "yup";
export const yupSchema = () => yup.string().max(255).required();
