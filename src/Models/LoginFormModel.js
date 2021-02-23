import * as yup from "yup";

const LoginSchema = yup.object().shape({
    email: yup
        .string()
        .email("error.validEmail")
        .min(6)
        .max(50)
        .required("error.validEmail"),
    password: yup
        .string()
        .min(6)
        .max(1024)
        .required("error.validPassword"),
});

export default LoginSchema;
