import React from "react";
/* Ready-built hooks to simplify react forms...*/
import { useForm } from "react-hook-form";
/*...which need this resolver to work with Yup, which is
    a schema/model based validation tool */
import { yupResolver } from "@hookform/resolvers/yup";

import AuthService from "../Services/AuthService";
import Message from "../Components/Message";
import RegisterSchema from "../Models/RegisterFormModel";
/*
{
    firstName: "",
    lastName: "",
    email: "",
    username: "",
    password: "",
}
*/

const Form = (props) => {
    const { register, handleSubmit, errors, reset } = useForm({
        resolver: yupResolver(RegisterSchema),
    });
    const submitForm = (data) => {
        console.log(data);
        reset();
    };

    return (
        <div>
            <form onSubmit={handleSubmit(submitForm)}>
                <input
                    type="text"
                    name="firstName"
                    placeholder="First Name..."
                    ref={register}
                />
                {errors.firstName ? (
                    <Message message={errors.firstName.message} />
                ) : null}
                <br />
                <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name..."
                    ref={register}
                />
                {errors.lastName ? (
                    <Message message={errors.lastName.message} />
                ) : null}
                <br />
                <input
                    type="text"
                    name="email"
                    placeholder="Email..."
                    ref={register}
                />
                {errors.email ? (
                    <Message message={errors.email.message} />
                ) : null}
                <br />
                <input
                    type="text"
                    name="username"
                    placeholder="Username..."
                    ref={register}
                />
                {errors.username ? (
                    <Message message={errors.username.message} />
                ) : null}
                <br />
                <input
                    type="text"
                    name="password"
                    placeholder="Password..."
                    ref={register}
                />
                {errors.username ? (
                    <Message message={errors.username.message} />
                ) : null}
                <br />
                <input
                    type="text"
                    name="confirmPassword"
                    placeholder="Confirm password..."
                    ref={register}
                />
                {errors.confirmPassword ? (
                    <Message message="Passwords must match" />
                ) : null}
                <br />
                <button type="submit">Register Account</button>
            </form>
        </div>
    );
};

export default Form;
