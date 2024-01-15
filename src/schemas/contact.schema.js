import * as yup from "yup";

const contactSchema = yup.object({
  name: yup.string(),
  email: yup.string().required("E-mail obrigatório").email("E-mail inválido"),
  message: yup.string().required("Mensagem obrigatória."),
});

const DEFAULT_VALUES = {
  name: "",
  email: "",
  message: "",
};

export { contactSchema, DEFAULT_VALUES };
