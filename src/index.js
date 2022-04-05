const { async } = require("regenerator-runtime");

const user = {
    name: "tofik",
    email: "kipo@brief.fr"
};

const promesse = fetch("https://jsonplaceholder.typicode.com/users", {
    method: "POST",
    body: JSON.stringify(user),
    headers: {
        "Content-Type": "application/json"
    }
});

promesse.then(async response => {
    try {
        console.log(response);
        const body = await response.json();
        console.log(body);
    } catch (e) {
        console.log(e);
    }
});

// promesse.then(async response => {
//     try {
//         const users = await response.json();
//         console.log(users);
//     } catch (e) {
//         console.log(e);
//     }
// }).catch(error => {
//     console.log(error);
// });