// const { async } = require("regenerator-runtime");
import { even } from "../dist/main.bundle";

// FETCH POST

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

// FORM DATA

// const form = document.querySelector("form");

// form.addEventListener("submit", event => {
//     event.preventDefault();

//     const formData = new FormData(form);

//     formData.append("name", "value");
//     formData.set("email", "email@testing.com");
//     console.log(formData.get("email"));

//     for (let pair of formData) {
//         console.log(pair);
//     }

//     fetch("/test", {
//         method: "POST",
//         body: formData
//     });
// });

// URL
// const url = new URL("https://wikipedia.fr");

// url.searchParams.append("key", "defjqrefyqzef35e54fe");
// url.searchParams.set("key2", "hfgefgzdgzd");

// console.log(url);

// console.log("ok push");

// XMLHTTPREQUEST
const todo = {
    completed: false,
    title: "Parle Français mon frère",
    userId: 9999
};

const xhr = new XMLHttpRequest();
xhr.open("POST", "https://jsonplaceholder.typicode.com/todos");

// xhr.timeout = 100;
// xhr.responseType = "json";

// xhr.setRequestHeader("Content-type", "application/json");

// xhr.send(JSON.stringify(todo));
// xhr.abort();
// xhr.addEventListener("load", response => {
//     console.log(response);
//     console.log(xhr.status);
//     const result = xhr.response;
//     console.log(result);
// });

// xhr.addEventListener("error", error => {
//     console.log(error);
// });

// xhr.addEventListener("progress", progress => {
//     const pourcentage = ((event.loaded / event.total) * 100).toFixed(0);
//     console.log(pourcentage, "%");
//     console.log(progress);
// });

// xhr.addEventListener("readystatechange", event => {
//     console.log(event);
//     console.log(xhr.readyState);
// });

// xhr.addEventListener("timeout", event => {
//     console.log(event);
// });