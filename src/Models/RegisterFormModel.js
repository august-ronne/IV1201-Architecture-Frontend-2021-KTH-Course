import * as yup from "yup";

const RegisterSchema = yup.object().shape({
    firstName: yup.string("Text only").min(2).max(50).required("This field is required"),
    lastName: yup.string().min(2).max(50).required(),
    email: yup.string().email().max(50).required(),
    username: yup.string().min(2).max(50).required(),
    password: yup.string().min(6).max(1024).required(),
    confirmPassword: yup.string().oneOf([yup.ref("password"), null]),
});

export default RegisterSchema;
