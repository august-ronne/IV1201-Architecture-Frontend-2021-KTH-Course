// const serverURL = process.env.REACT_APP_SERVER_URL;
const serverURL = "";

const ApplicationService = {
    getProfiles: () => {
        return fetch(`${serverURL}/app/competences`).then((res) => {
            console.log(res)
            return res.json().then(({serverMessage}) => {
                return serverMessage
            })

        })
    },
    changeStatus: (data) => {
        console.log('data is ', data)
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