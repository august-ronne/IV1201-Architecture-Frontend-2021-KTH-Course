import React, { useState, useRef, useEffect, useContext } from "react";
import { Formik, Form, Field } from "formik";

import AuthService from "../Services/AuthService";
import { AuthContext } from "../Context/AuthContext";
import Message from "./Message";
import LoginSchema from "../Models/LoginFormModel";
import T from "../translation";

/**
 * Component of Login page.
 * @param props props sent to the page
 */
const Login = (props) => {
    const [userMessage, setUserMessage] = useState(null);
    const authContext = useContext(AuthContext);
    let timerID = useRef(null);

    /**
     * Hook that is called at the loading of the page.
     */
    useEffect(() => {
        return () => {
            clearTimeout(timerID);
        };
    }, []);

    /**
     * Submit function for the login form.
     * @param userData data that is used as credentials.
     */
    const handleSubmit = (userData) => {
        console.log(userData);
        AuthService.login(userData).then((serverMessage) => {
            console.log(serverMessage);
            const { isAuthenticated, user, msgBody } = serverMessage;
            if (isAuthenticated) {
                setUserMessage(T(msgBody));
                timerID = setTimeout(() => {
                    authContext.setUser(user);
                    authContext.setIsAuthenticated(isAuthenticated);
                    authContext.setRole(user.role)
                }, 2000);
            } else {
                setUserMessage(T(msgBody));
            }
        });
    };
    return (
        <div>
            <h3>{T("title.signin")}</h3>
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
                        <Field id='email-login' name="email" placeholder={T("placeholder.email")} />
                        {errors.email && touched.email ? (
                            <Message message={errors.email} />
                        ) : null}

                        <label htmlFor="password">{T("label.password")}</label>
                        <Field id='password-login'
                            name="password"
                            type="password"
                            placeholder={T("placeholder.password")}
                        />
                        {errors.password && touched.password ? (
                            <Message message={errors.password} />
                        ) : null}

                        <button id='button-login' type="submit">{T("button.submit")}</button>
                        {userMessage ? <Message message={userMessage} /> : null}
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default Login;
