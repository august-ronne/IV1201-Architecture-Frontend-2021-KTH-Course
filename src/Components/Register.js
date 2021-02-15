import React, { useState, useRef, useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import AuthService from "../Services/AuthService";
import Message from "../Components/Message";
import RegisterSchema from "../Models/RegisterFormModel";
import T from "../translation";

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
                <h3>{T("title.register")}</h3>

                <label htmlFor="firstName">{T("label.firstName")}</label>
                <input
                    type="text"
                    name="firstName"
                    placeholder={T("placeholder.firstName")}
                    ref={register}
                />
                <br />
                {errors.firstName ? (
                    <Message message={errors.firstName.message} />
                ) : null}

                <label htmlFor="lastName">{T("label.lastName")}</label>
                <input
                    type="text"
                    name="lastName"
                    placeholder={T("placeholder.lastName")}
                    ref={register}
                />
                <br />
                {errors.lastName ? (
                    <Message message={errors.firstName.message} />
                ) : null}

                <label htmlFor="email">{T("label.email")}</label>
                <input
                    type="text"
                    name="email"
                    placeholder={T("placeholder.email")}
                    ref={register}
                />
                <br />
                {errors.email ? (
                    <Message message={errors.firstName.message} />
                ) : null}

                <label htmlFor="username">{T("label.username")}</label>
                <input
                    type="text"
                    name="username"
                    placeholder={T("placeholder.username")}
                    ref={register}
                />
                <br />
                {errors.username ? (
                    <Message message={errors.username.message} />
                ) : null}

                <label htmlFor="password">{T("label.password")}</label>
                <input
                    type="text"
                    name="password"
                    placeholder={T("placeholder.password")}
                    ref={register}
                />
                <br />
                {errors.password ? (
                    <Message message={errors.password.message} />
                ) : null}

                <label htmlFor="confirmPassword">{T("label.password")}</label>
                <input
                    type="text"
                    name="password"
                    placeholder={T("placeholder.password")}
                    ref={register}
                />
                <br />
                {errors.confirmPassword ? (
                    <Message message={errors.confirmPassword.message} />
                ) : null}

                <button type="submit">{T("button.register")}</button>
                <br/>
                {userMessage ? <Message message={userMessage} /> : null}
            </form>
        </div>
    );
};

export default Register;
