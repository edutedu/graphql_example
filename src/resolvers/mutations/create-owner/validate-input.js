import * as yup from "yup";
export const yupSchema = () => yup.object({
  name: yup.string().max(255).required()
}).required();
