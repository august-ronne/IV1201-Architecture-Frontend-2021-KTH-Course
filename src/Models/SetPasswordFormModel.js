import * as yup from "yup";

const SetPasswordSchema = yup.object().shape({
    token: yup
        .string()
        .required("error.validToken"),//"You must enter your email address"
    password: yup
        .string()
        .min(6)
        .max(1024)
        .required("error.validPassword"),
});

export default SetPasswordSchema;
