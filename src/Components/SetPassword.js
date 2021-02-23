import React, { useState, useRef, useEffect, useContext } from "react";
import { Formik, Form, Field } from "formik";

import AuthService from "../Services/AuthService";
import Message from "./Message";
import SetPasswordSchema from "../Models/SetPasswordFormModel";
import T from "../translation";

const SetPassword = (props) => {
    const [userMessage, setUserMessage] = useState(null);
    let timerID = useRef(null);

    useEffect(() => {
        return () => {
            clearTimeout(timerID);
        };
    }, []);

    const handleSubmit = (userData) => {
        console.log(userData);

        AuthService.setPassword(userData).then((serverMessage) => {
            console.log(serverMessage);
            const { msgBody } = serverMessage;
            console.log("SET PASSWORD");
            setUserMessage(T(msgBody));
        });
    };

    return (
        <div>
            <h3>{T("title.setPassword")}</h3>
            <Formik
                initialValues={{
                    email: ""
                }}
                validationSchema={SetPasswordSchema}
                onSubmit={handleSubmit}
            >
                {({ errors, touched }) => (
                    <Form>
                        <label htmlFor="token">{T("label.token")}</label>
                        <Field name="token" placeholder={T("placeholder.token")} />
                        {errors.token && touched.token ? (
                            <Message message={errors.token} />
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

                        <button type="submit">{T("button.submit")}</button>
                        {userMessage ? <Message message={userMessage} /> : null}
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default SetPassword;
