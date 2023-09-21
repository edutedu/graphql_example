import * as yup from "yup";
export const yupSchema = () => yup.object({
  id: yup.number().required(),
  title: yup.string().max(255),
  owner: yup.string().max(255),
  category: yup.string().max(255),
  url: yup.string().max(255).url()
}).required();
