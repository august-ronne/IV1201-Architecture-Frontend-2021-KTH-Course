import React, { useState, useRef, useEffect, useContext } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import AuthService from "../Services/AuthService";
import { AuthContext } from "../Context/AuthContext";
import Message from "../Components/Message";
import LoginSchema from "../Models/LoginFormModel";
import T from "../translation";

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
                <h3>{T("title.signin")}</h3>
                <label htmlFor="email" className="sr-only">
                    {T("label.email")}
                </label>
                <input
                    id="email"
                    type="text"
                    name="email"
                    placeholder={T("placeholder.email")}
                    ref={register}
                />
                {errors.email ? (
                    <Message message={errors.email.message} />
                ) : null}
                <br />

                <label htmlFor="password" className="sr-only">
                    {T("label.password")}
                </label>
                <input
                    id="password"
                    type="text"
                    name="password"
                    placeholder={T("placeholder.password")}
                    ref={register}
                />
                {errors.password ? (
                    <Message message={errors.password.message} />
                ) : null}
                <br />
                
                <button
                    type="submit"
                >
                    {T("button.login")}
                </button>
                <br />
                {userMessage ? <Message message={userMessage} /> : null}
            </form>
        </div>
    );
};

export default Login;
