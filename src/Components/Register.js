import React, { useState, useRef, useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import AuthService from "../Services/AuthService";
import Message from "./Message";
import RegisterSchema from "../Models/RegisterFormModel";

const Register = (props) => {
    const [userMessage, setUserMessage] = useState(null);
    let timerID = useRef(null);

    useEffect(() => {
        return () => {
            clearTimeout(timerID);
        };
    }, []);

    const { register, handleSubmit, errors, reset } = useForm({
        resolver: yupResolver(RegisterSchema),
    });

    const submitRegisterForm = (userData) => {
        AuthService.register(userData).then((serverMessage) => {
            if (!serverMessage.isError) {
                reset();
                setUserMessage(
                    serverMessage.msgBody +
                        ", you will soon be redirected to the login page"
                );
                timerID = setTimeout(() => {
                    props.history.push("/login");
                }, 2000);
            } else {
                setUserMessage(serverMessage.msgBody);
            }
        });
    };

    return (
        <div>
            <form onSubmit={handleSubmit(submitRegisterForm)}>
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
                {errors.password ? (
                    <Message message={errors.password.message} />
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
                <br />
                {userMessage ? <Message message={userMessage} /> : null}
            </form>
        </div>
    );
};

export default Register;
