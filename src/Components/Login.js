import React, { useState, useRef, useEffect, useContext } from "react";
import { Formik, Form, Field } from "formik";

import AuthService from "../Services/AuthService";
import { AuthContext } from "../Context/AuthContext";
import Message from "./Message";
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

    const handleSubmit = (userData) => {
        console.log(userData);
        AuthService.login(userData).then((serverMessage) => {
            console.log(serverMessage);
            const { isAuthenticated, user, msgBody } = serverMessage;
            if (isAuthenticated) {
                setUserMessage(msgBody + ", you will soon be redirected");
                timerID = setTimeout(() => {
                    authContext.setUser(user);
                    authContext.setIsAuthenticated(isAuthenticated);
                }, 2000);
            } else {
                setUserMessage(msgBody);
            }
        });
    };
    return (
        <div>
            <h3>{T("title.login")}</h3>
            <Formik
                initialValues={{
                    email: "",
                    password: "",
                }}
                validationSchema={LoginSchema}
                onSubmit={handleSubmit}
            >
                {({ errors, touched }) => (
                    <Form>
                        <label htmlFor="email">{T("label.email")}</label>
                        <Field name="email" placeholder="Enter email address" />
                        {errors.email && touched.email ? (
                            <div>{errors.email}</div>
                        ) : null}

                        <label htmlFor="password">{T("label.password")}</label>
                        <Field
                            name="password"
                            type="password"
                            placeholder="Enter password"
                        />
                        {errors.password && touched.password ? (
                            <div>{errors.password}</div>
                        ) : null}

                        <button type="submit">Submit</button>
                        {userMessage ? <Message message={userMessage} /> : null}
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default Login;
