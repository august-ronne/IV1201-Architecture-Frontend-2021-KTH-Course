// const serverURL = process.env.REACT_APP_SERVER_APP_URL;
const serverURL = "";

const ApplicationService = {
    getProfiles: (token) => {
        return fetch(`${serverURL}/app/competences`, {
                    method: "post",
                    body: JSON.stringify({token}),
                    headers: { "Content-Type": "application/json" },
                }).then((res) => {
            return res.json().then(({serverMessage}) => {
                return serverMessage
            })

        })
    },
    changeStatus: (data) => {
        return fetch(`${serverURL}/app/changestatus`, {
            method: 'post',
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json",
            },
        })
        .then((res) => res.json())
        .then(({serverMessage}) => serverMessage);
    }
}

export default ApplicationService;