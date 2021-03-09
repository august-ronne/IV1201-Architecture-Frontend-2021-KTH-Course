import React, { useState, useRef, useEffect } from "react";
import T from "../translation";
import { Link } from "react-router-dom";
import AuthService from "../Services/AuthService";

/**
 * Component showing an admin only page
 */
const Admin = () => {

    const [profiles, setProfiles] = useState([]);

    useEffect(() => {
            AuthService.getProfiles().then((servermessage) => {
                setProfiles(servermessage.profiles)
            })
    }, []);

    const createLinkMessage = (profile) => {
        return `${profile.person.firstName} ${profile.person.lastName} - ` +
        T("data.competence." + profile.competence.name) + " - " + T("option." + profile.status.name)
    }


    

    return ( 
        <div>
            <h1>{T("text.adminsonly")}</h1>
            <ul>
                {profiles.map(profile => (
                    <Link id={"profile-"+profile._id} to = {{pathname:'/application', state:profile}}>{createLinkMessage(profile)}<br /></Link>
                ))
                }
            </ul>
        </div>

    )
};

export default Admin;
