// const serverURL = process.env.REACT_APP_SERVER_URL;
const serverURL = ""

const AuthService = {
    login: (user) => {
        return fetch(`${serverURL}/auth/login`, {
            method: "post",
            body: JSON.stringify(user),
            headers: {
                "Content-Type": "application/json",
            },
        }).then((res) => {
            if (res.status !== 401 && res.satus !== 400)
                return res.json().then((data) => data);
            else
                return {
                    isAuthenticated: false,
                    user: { uid: "", firstName: "", email: "" },
                };
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
            .then((data) => data);
    },
    logout: () => {
        return fetch(`${serverURL}/auth/logout`)
            .then((res) => res.json())
            .then((data) => data);
    },
    isAuthenticated: () => {
        return fetch(`${serverURL}/auth/authenticated`).then((res) => {
            if (res.status !== 401 && res.status !== 400) {
                return res.json().then((data) => data);
            } else {
                return {
                    isAuthenticated: false,
                    user: { uid: "", firstName: "", email: "" },
                };
            }
        });
    },
};

export default AuthService;
