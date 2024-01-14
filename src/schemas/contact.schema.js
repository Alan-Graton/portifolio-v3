import * as yup from "yup";

const contactSchema = yup.object({
  name: yup.string(),
  message: yup.string().required("Mensagem é obrigatória."),
});

const DEFAULT_VALUES = {
  name: "",
  message: "",
};

export { contactSchema, DEFAULT_VALUES };
