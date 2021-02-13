import * as yup from "yup";

const RegisterSchema = yup.object().shape({
    firstName: yup
        .string("Text only")
        .min(2)
        .max(50)
        .required("You must enter your first name"),
    lastName: yup
        .string()
        .min(2)
        .max(50)
        .required("You must enter your last name"),
    email: yup
        .string()
        .email("Please enter a valid e-mail address")
        .max(50)
        .required("You must enter your email address"),
    username: yup
        .string()
        .min(2)
        .max(50)
        .required("You must enter your prefered username"),
    password: yup
        .string()
        .min(6)
        .max(1024)
        .required("You must enter a password"),
    confirmPassword: yup.string().oneOf([yup.ref("password"), null]),
});

export default RegisterSchema;
