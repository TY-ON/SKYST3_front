const login = (username: string, password: string): Promise<Boolean> => {
    const result = fetch("http://localhost:5000/api/login", {
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
    .then((response) => {
        console.log(response);

        if (!response.status) {
            return false;
        }
        return true;
    });

    return result;
}

export { login }