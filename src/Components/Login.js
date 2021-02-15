import React, { useState, useRef, useEffect, useContext } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import AuthService from "../Services/AuthService";
import { AuthContext } from "../Context/AuthContext";
import Message from "./Message";
import LoginSchema from "../Models/LoginFormModel";

const Login = (props) => {
    const [userMessage, setUserMessage] = useState(null);
    const authContext = useContext(AuthContext);
    let timerID = useRef(null);

    useEffect(() => {
        return () => {
            clearTimeout(timerID);
        };
    }, []);

    const { register, handleSubmit, errors, reset } = useForm({
        resolver: yupResolver(LoginSchema),
    });

    const submitLoginForm = (userData) => {
        AuthService.login(userData).then((serverMessage) => {
            console.log(serverMessage);
            const { isAuthenticated, user, msgBody } = serverMessage;
            setUserMessage(msgBody + ", you will soon be redirected");
            if (isAuthenticated) {
                timerID = setTimeout(() => {
                    authContext.setUser(user);
                    authContext.setIsAuthenticated(isAuthenticated);
                }, 2000);
            } else {
                reset();
            }
        });
    };

    return (
        <div>
            <form onSubmit={handleSubmit(submitLoginForm)}>
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
                    name="password"
                    placeholder="Password..."
                    ref={register}
                />
                {errors.password ? (
                    <Message message={errors.password.message} />
                ) : null}
                <br />
                <button type="submit">Log In</button>
                <br />
                {userMessage ? <Message message={userMessage} /> : null}
            </form>
        </div>
    );
};

export default Login;
