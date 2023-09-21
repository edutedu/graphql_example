import * as yup from "yup";
export const yupSchema = () => yup.object({
  title: yup.string().max(255).required(),
  owner: yup.string().max(255),
  category: yup.string().required(),
  url: yup.string().max(255).url().required()
}).required();
