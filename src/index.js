// const { async } = require("regenerator-runtime");
import { even } from "../dist/main.bundle";

// const user = {
//     name: "tofik",
//     email: "kipo@brief.fr"
// };

// const promesse = fetch("https://jsonplaceholder.typicode.com/users", {
//     method: "POST",
//     body: JSON.stringify(user),
//     headers: {
//         "Content-Type": "application/json"
//     }
// });

// promesse.then(async response => {
//     try {
//         console.log(response);
//         const body = await response.json();
//         console.log(body);
//     } catch (e) {
//         console.log(e);
//     }
// });

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

const form = document.querySelector("form");

form.addEventListener("submit", event => {
    event.preventDefault();

    const formData = new FormData(form);

    formData.append("name", "value");
    formData.set("email", "email@testing.com");
    console.log(formData.get("email"));

    for (let pair of formData) {
        console.log(pair);
    }

    fetch("/test", {
        method: "POST",
        body: formData
    });
});