const INSTRUMENT_SET = ["기타"]

const register = (
    username: string, password: string, password_check: string, 
    instrument: string, 
): Promise<Boolean> | Boolean => {
    /* validation of password */
    if (password !== password_check) {
        return false;
    }

    const result = fetch("http://localhost:5000/api/register", {
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

export { register }