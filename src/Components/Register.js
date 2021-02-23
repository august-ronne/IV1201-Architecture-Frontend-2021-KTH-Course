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
                setUserMessage(T(serverMessage.msgBody));
                timerID = setTimeout(() => {
                    props.history.push("/login");
                }, 2000);
            } else {
                setUserMessage(T(serverMessage.msgBody));
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
                            placeholder={T("placeholder.firstName")}
                        />
                        {errors.firstName && touched.firstName ? (
                            <Message message={errors.firstName} />
                        ) : null}

                        <label htmlFor="lastName">{T("label.lastName")}</label>
                        <Field
                            name="lastName"
                            placeholder={T("placeholder.lastName")}
                        />
                        {errors.lastName && touched.lastName ? (
                            <Message message={errors.lastName} />
                        ) : null}

                        <label htmlFor="email">{T("label.email")}</label>
                        <Field
                            name="email"
                            placeholder={T("placeholder.email")}
                        />
                        {errors.email && touched.email ? (
                            <Message message={errors.email} />
                        ) : null}

                        <label htmlFor="username">{T("label.username")}</label>
                        <Field
                            name="username"
                            placeholder={T("placeholder.username")}
                        />
                        {errors.username && touched.username ? (
                            <Message message={errors.username} />
                        ) : null}

                        <label htmlFor="password">{T("label.password")}</label>
                        <Field
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
                            name="confirmPassword"
                            type="password"
                            placeholder={T("placeholder.password")}
                        />
                        {errors.confirmPassword && touched.confirmPassword ? (
                            <Message message={errors.confirmPassword} />
                        ) : null}

                        <button type="submit">{T("button.submit")}</button>
                        {userMessage ? <Message message={userMessage} /> : null}
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default Register;
