import {useCookies} from 'react-cookie';

const login = async (username: string, password: string): Promise<Boolean> => {
    
    const result = fetch("http://155.138.201.89:8000/api/login", {
    method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            username: username,
            password: password,
        }),
    })
    .then((response) => response.json())
    .then((data) => {
        localStorage.setItem("jwt", data.access_token);
        console.log(localStorage.getItem("jwt"));
    });
    
    return true;
}

export { login }