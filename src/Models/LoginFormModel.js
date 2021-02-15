import * as yup from "yup";

const LoginSchema = yup.object().shape({
    email: yup
        .string()
        .email("Please enter a valid e-mail address")
        .min(6)
        .max(50)
        .required("You must enter your email address"),
    password: yup
        .string()
        .min(6)
        .max(1024)
        .required("You must enter a password"),
});

export default LoginSchema;
