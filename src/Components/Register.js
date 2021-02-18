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
                            name="firstName"
                            placeholder="Enter first name"
                        />
                        {errors.firstName && touched.firstName ? (
                            <div>{errors.firstName}</div>
                        ) : null}

                        <label htmlFor="lastName">{T("label.lastName")}</label>
                        <Field name="lastName" placeholder="Enter last name" />
                        {errors.lastName && touched.lastName ? (
                            <div>{errors.lastName}</div>
                        ) : null}

                        <label htmlFor="email">{T("label.email")}</label>
                        <Field name="email" placeholder="Enter email address" />
                        {errors.email && touched.email ? (
                            <div>{errors.email}</div>
                        ) : null}

                        <label htmlFor="username">{T("label.username")}</label>
                        <Field name="username" placeholder="Enter a username" />
                        {errors.username && touched.username ? (
                            <div>{errors.username}</div>
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

                        <label htmlFor="confirmPassword">
                            {T("label.password")}
                        </label>
                        <Field
                            name="confirmPassword"
                            type="password"
                            placeholder="Confirm password"
                        />
                        {errors.confirmPassword && touched.confirmPassword ? (
                            <div>{errors.confirmPassword}</div>
                        ) : null}

                        <button type="submit">Submit</button>
                        {userMessage ? <Message message={userMessage} /> : null}
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default Register;
