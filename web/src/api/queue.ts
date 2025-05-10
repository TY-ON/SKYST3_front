import { Cookies } from "react-cookie";

const part_random = async (
    start_date: string, end_date: string, 
    time_slot: string, 
    genre: string,
    instrument: string
): Promise<Boolean | string> => {
    const jwt = localStorage.getItem("jwt");
    if (!jwt) {
        return false;
    }
    console.log(jwt);

    const result = fetch("http://155.138.201.89:8000/api/queue/part_random", {
    method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": jwt
        },
        body: JSON.stringify({
            "start_date": start_date,
            "end_date": end_date,
            "time_slot": time_slot,
            "genre": genre,
            "instrument": instrument
        }),
    })
    .then((response) => {
        if (response.status === 200) {
            return response.json();
        }
        return false;
    });
    console.log(result);
    return result;
}

const true_random = (
    start_date: string, end_date: string, 
    time_slot: string, 
    genre: string,
    instrument: string
): Promise<Boolean> => {
    const result = fetch("http://155.138.201.89:8000/api/queue/true_random", {
    method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            "start_date": start_date,
            "end_date": end_date,
            "time_slot": time_slot,
            "genre": genre,
            "instrument": instrument
        }),
    })
    .then((response) => {
        if (response.status === 200) {
            return true;
        }
        return false;
    });

    return result;
}

export { part_random, true_random }