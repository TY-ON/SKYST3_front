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
            "Authorization": `Bearer ${jwt}`
        },
        body: JSON.stringify({
            "start_date": start_date,
            "end_date": end_date,
            "time_slot": time_slot,
            "genre": genre,
            "instrument": instrument
        }),
    })
    .then((response) => response.json())
    .then((response) => {
        localStorage.setItem("roomcode", response.room_code);
        return false;
    });
    
    return result;
}

const true_random = async (
    start_date: string, end_date: string, 
    time_slot: string, 
    genre: string,
    instrument: string
): Promise<Boolean> => {
    const jwt = localStorage.getItem("jwt");
    if (!jwt) {
        return false;
    }
    console.log(jwt);
    
    const result = fetch("http://155.138.201.89:8000/api/queue/true_random", {
    method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${jwt}`
        },
        body: JSON.stringify({
            "start_date": start_date,
            "end_date": end_date,
            "time_slot": time_slot,
            "genre": genre,
            "instrument": instrument
        }),
    })
    .then((response) => response.json())
    .then((response) => {
        localStorage.setItem("roomcode", response.room_code);
        return false;
    });

    return result;
}

export { part_random, true_random }