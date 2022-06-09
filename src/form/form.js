import "./form.scss";
import "../assets/styles/styles.scss";

const form = document.querySelector("form");
const errorElement = document.querySelector("#errors");
let errors = [];

form.addEventListener("submit", async event => {
    event.preventDefault();
    const formData = new FormData(form);
    const entries = formData.entries();
    const obj = Object.fromEntries(entries);
    if (formIsValid(obj)) {
        try {
            const json = JSON.stringify(obj);
            const response = await fetch("https://restapi.fr/api/bfd", {
                method: "POST",
                body: json,
                headers: {
                    "Content-type": "application/json"
                }
            });
            const body = await response.json();
            console.log(body);
        } catch (e) {
            console.error("erreur : ", e);
        }

        // console.log(entries);
        // const obj = Array.from(entries).reduce((acc, value) => {
        //     acc[value[0]] = value[1];
        //     return acc;
        // }, {});

        // for (let entry of entries) {
        //     console.log(entry);
        // }
    }
});

const formIsValid = obj => {
    if (!obj.author || !obj.category || !obj.content || !obj.img || !obj.title) {
        errors.push("Tout les champs doivent être complèter!");
    } else {
        errors = [];
    }
    if (errors.length) {
        let errorHTML = "";
        errors.forEach(e => {
            errorHTML += `<li>${e}</li>`;
        });
        errorElement.innerHTML = errorHTML;
        return false;
    } else {
        errorElement.innerHTML = "";
        return true;
    }
};