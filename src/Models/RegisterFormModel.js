import * as yup from "yup";

/**
 * Validation schema for registering.
 */
const RegisterSchema = yup.object().shape({
    firstName: yup
        .string("Text only")
        .matches(/^[a-z]*$/, "error.lowercase")// "Only enter lowercase letters"
        .min(2, "error.short") // "Your first name must be at least 2 characters"
        .max(50, "error.long") // "Your last name must be 50 characters or shorter"
        .required("error.validFirstName"), // "You must enter your first name"
    lastName: yup
        .string()
        .matches(/^[a-z]*$/, "error.lowercase") // "Only enter lowercase letters"
        .min(2, "error.short") // "Your last name must be at least 2 characters"
        .max(50, "error.long") // "Your last name must be 50 characters or shorter"
        .required("error.validLastName"), // "You must enter your last name"
    email: yup
        .string()
        .email("error.validEmail")
        .min(6)
        .max(50)
        .required("error.validEmail"),
    username: yup
        .string()
        .min(2)
        .max(50)
        .required("error.validUsername")
        .matches(
            /^[a-zA-Z0-9]+$/,
            "error.validUsername" // "Only lowercase and capital letters, as well as numbers are allowed"
        ),
    password: yup
        .string()
        .min(6)
        .max(1024)
        .required("error.validPassword"), // "You must enter a password"
    confirmPassword: yup
        .string()
        .oneOf(
            [yup.ref("password"), null],
            "error.passwordMissmatch" // "Password confirmation is not the same as the first password you entered"
        ),
});

export default RegisterSchema;
