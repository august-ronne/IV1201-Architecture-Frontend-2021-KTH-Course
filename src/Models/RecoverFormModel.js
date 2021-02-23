import * as yup from "yup";

const RecoverSchema = yup.object().shape({
    email: yup
        .string()
        .email("Please enter a valid e-mail address")
        .min(6)
        .max(50)
        .required("You must enter your email address"),
});

export default RecoverSchema;
