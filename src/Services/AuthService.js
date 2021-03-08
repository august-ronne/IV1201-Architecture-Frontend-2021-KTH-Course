// const serverURL = process.env.REACT_APP_SERVER_URL;
const serverURL = "";

/**
 * Object holding all relevant services to the client.
 * Communicates with the endpoints of the backend server.
 * Services are:
 *  -login
 *  -register
 *  -logout
 *  -check user status
 */
const AuthService = {
    login: (user) => {
        return fetch(`${serverURL}/auth/login`, {
            method: "post",
            body: JSON.stringify(user),
            headers: {
                "Content-Type": "application/json",
            },
        }).then((res) => {
            if (res.status === 500) {
                res.json().then(({ serverMessage }) => {
                    return {
                        isAuthenticated: false,
                        user: { uid: "", firstName: "", email: "" },
                        ...serverMessage,
                    };
                });
            } else {
                return res.json().then(({ serverMessage }) => serverMessage);
            }
        });
    },
    register: (user) => {
        return fetch(`${serverURL}/auth/register`, {
            method: "post",
            body: JSON.stringify(user),
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((res) => res.json())
            .then(({ serverMessage }) => serverMessage);
    },
    logout: () => {
        return fetch(`${serverURL}/auth/logout`)
            .then((res) => res.json())
            .then(({ serverMessage }) => serverMessage);
    },
    isAuthenticated: (token) => {
        console.log("userino", token);
        return fetch(`/auth/userstatus`, {
            method: "post",
            body: JSON.stringify({token}),
            headers: { "Content-Type": "application/json" },
        }).then((res) => {
            if (res.status === 500) {
                res.json().then(({ serverMessage }) => {
                    return {
                        isAuthenticated: false,
                        user: { uid: "", firstName: "", email: "" },
                        ...serverMessage,
                    };
                });
            } else {
                return res.json().then(({ serverMessage }) => serverMessage);
            }
        });
    },
    recover: (user) => {
        return fetch(`${serverURL}/auth/recover`, {
            method: "post",
            body: JSON.stringify(user),
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((res) => res.json())
            .then(({ serverMessage }) => serverMessage);
    },
    setPassword: (user) => {
        return fetch(`${serverURL}/auth/setpassword`, {
            method: "post",
            body: JSON.stringify(user),
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((res) => res.json())
            .then(({ serverMessage }) => serverMessage);
    },
};

export default AuthService;
