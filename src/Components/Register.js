import React, { useState, useRef, useEffect } from "react";
import { Formik, Form, Field } from "formik";

import AuthService from "../Services/AuthService";
import Message from "./Message";
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

    const handleSubmit = (userData) => {
        AuthService.register(userData).then((serverMessage) => {
            if (!serverMessage.isError) {
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
            <h3>{T("title.register")}</h3>
            <Formik
                initialValues={{
                    firstName: "",
                    lastName: "",
                    email: "",
                    username: "",
                    password: "",
                    confirmPassword: "",
                }}
                validationSchema={RegisterSchema}
                onSubmit={handleSubmit}
            >
                {({ errors, touched }) => (
                    <Form>
                        <label htmlFor="firstName">
                            {T("label.firstName")}
                        </label>
                        <Field
                            id='fname-register'
                            name="firstName"
                            placeholder={T("placeholder.firstName")}
                        />
                        {errors.firstName && touched.firstName ? (
                            <Message message={errors.firstName} />
                        ) : null}

                        <label htmlFor="lastName">{T("label.lastName")}</label>
                        <Field
                            id='lname-register'
                            name="lastName"
                            placeholder={T("placeholder.lastName")}
                        />
                        {errors.lastName && touched.lastName ? (
                            <Message message={errors.lastName} />
                        ) : null}

                        <label htmlFor="email">{T("label.email")}</label>
                        <Field
                            id='email-register'
                            name="email"
                            placeholder={T("placeholder.email")}
                        />
                        {errors.email && touched.email ? (
                            <Message message={errors.email} />
                        ) : null}

                        <label htmlFor="username">{T("label.username")}</label>
                        <Field
                            id='username-register'
                            name="username"
                            placeholder={T("placeholder.username")}
                        />
                        {errors.username && touched.username ? (
                            <Message message={errors.username} />
                        ) : null}

                        <label htmlFor="password">{T("label.password")}</label>
                        <Field
                            id='password-register'
                            name="password"
                            type="password"
                            placeholder={T("placeholder.password")}
                        />
                        {errors.password && touched.password ? (
                            <Message message={errors.password} />
                        ) : null}

                        <label htmlFor="confirmPassword">
                            {T("label.password")}
                        </label>
                        <Field
                            id='confirm-register'
                            name="confirmPassword"
                            type="password"
                            placeholder={T("placeholder.password")}
                        />
                        {errors.confirmPassword && touched.confirmPassword ? (
                            <Message message={errors.confirmPassword} />
                        ) : null}

                        <button id='submit-register' type="submit">Submit</button>
                        {userMessage ? <Message message={userMessage} /> : null}
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default Register;
