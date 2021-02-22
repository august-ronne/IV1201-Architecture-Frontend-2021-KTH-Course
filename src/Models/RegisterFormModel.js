import * as yup from "yup";

const RegisterSchema = yup.object().shape({
    firstName: yup
        .string("Text only")
        .matches(/^[a-z]*$/, "error.lowercase")// "Only enter lowercase letters"
        .min(2, "Your first name must be at least 2 characters")
        .max(50, "Your last name must be 50 characters or shorter")
        .required("You must enter your first name"),
    lastName: yup
        .string()
        .matches(/^[a-z]*$/, "Only enter lowercase letters")
        .min(2, "Your last name must be at least 2 characters")
        .max(50, "Your last name must be 50 characters or shorter")
        .required("You must enter your last name"),
    email: yup
        .string()
        .email("Please enter a valid e-mail address")
        .min(6)
        .max(50)
        .required("You must enter your email address"),
    username: yup
        .string()
        .min(2)
        .max(50)
        .required("You must enter your prefered username")
        .matches(
            /^[a-zA-Z0-9]+$/,
            "Only lowercase and capital letters, as well as numbers are allowed"
        ),
    password: yup
        .string()
        .min(6)
        .max(1024)
        .required("You must enter a password"),
    confirmPassword: yup
        .string()
        .oneOf(
            [yup.ref("password"), null],
            "Password confirmation is not the same as the first password you entered"
        ),
});

export default RegisterSchema;
