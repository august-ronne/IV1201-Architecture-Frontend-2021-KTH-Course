import * as yup from "yup";

const RecoverSchema = yup.object().shape({
    email: yup
        .string()
        .email("error.validEmail")
        .min(6)
        .max(50)
        .required("error.validEmail"),
});

export default RecoverSchema;
