import React, { useState, useRef, useEffect } from "react";
import T from "../translation";
import {useLocation} from "react-router-dom";
import AuthService from "../Services/AuthService";
import { Formik, Form, Field } from "formik";


/**
 * Component which is only shown if user is authenticated.
 */
const Application = (props) => {
    let data= useLocation()
    console.log(data.state)

    const [status, setStatus] = useState('');

    useEffect(() => {
        setStatus(data.state.status.name)
        console.log('test ' + status)
        let select = document.getElementById('status')
        select.value = data.state.status.name
        // AuthService.getProfiles().then((servermessage) => {
        //     setProfiles(servermessage.profiles)
        //     console.log(servermessage.profiles[0].competence.name)
        // })
    }, []);

    const handleSubmit = (status) => {
        console.log(status);
        status.id = data.state._id
        AuthService.changeStatus(status).then((serverMessage) => {
            console.log(serverMessage);
        });
        setTimeout(function(){ props.history.push('/admin'); }, 500);
        

    };


    return (
        <div>
            <h1>{T('titel.application')}</h1>
            <div>
                <p>{T('label.firstName') + `: ${data.state.person.firstName}`}</p>
                <p>{T('label.lastName') + `: ${data.state.person.lastName}`}</p>
                <p>{T('label.email') + `: ${data.state.person.email}`}</p>
                <p>{T('label.birthdate') + `: ${data.state.person.dateOfBirth}`}</p>
                <p>{T('label.competence') + T("data.competence." + data.state.competence.name)}</p>
                <p>{T('label.year.experience') + `: ${data.state.years_of_experience}`}</p>
                <label htmlFor="status" >{T('label.status')}</label>
                <Formik 
                    initialValues={{
                        status: data.state.status.name
                    }}
                    onSubmit={handleSubmit}>
                    <Form>
                        <Field as="select" name="status" id="status">
                            <option value = "unhandled">{T('option.unhandled')}</option>
                            <option value = "accepted">{T('option.accepted')}</option>
                            <option value = "rejected">{T('option.rejected')}</option>
                        </Field>
                        <input type="submit" value={T('input.change')}></input>
                    </Form>
                </Formik>
            </div>
        </div>
    );
};

export default Application;