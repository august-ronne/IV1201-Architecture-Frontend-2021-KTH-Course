import * as yup from "yup";

const SetPasswordSchema = yup.object().shape({
    email: yup
        .string()
        .email("error.validEmail")//"Please enter a valid e-mail address"
        .min(6)
        .max(50)
        .required("error.validEmail"),//"You must enter your email address"
    password: yup
        .string()
        .required("error.validToken"),
});

export default SetPasswordSchema;
