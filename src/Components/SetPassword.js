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
        <div id="setpassword-body">
            <h3>{T("title.setPassword")}</h3>
            <Formik
                initialValues={{
                    token: "",
                    password: "",
                }}
                validationSchema={SetPasswordSchema}
                onSubmit={handleSubmit}
            >
                {({ errors, touched }) => (
                    <Form>
                        <label htmlFor="token">{T("label.token")}</label>
                        <Field id="setpassword-token" name="token" placeholder={T("placeholder.token")} />
                        {errors.token && touched.token ? (
                            <Message message={errors.token} />
                        ) : null}

                        <label htmlFor="password">{T("label.password")}</label>
                        <Field
                            id="setpassword-password"
                            name="password"
                            type="password"
                            placeholder={T("placeholder.password")}
                        />
                        {errors.password && touched.password ? (
                            <Message message={errors.password} />
                        ) : null}

                        <button id="button-setpassword" type="submit">{T("button.submit")}</button>
                        {userMessage ? <Message message={userMessage} /> : null}
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default SetPassword;
