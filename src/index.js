import { async } from "regenerator-runtime";
import "./assets/styles/styles.scss";
import "./index.scss";

const articleContainerElement = document.querySelector(".articles-container");

const showArticles = articles => {
    const articlesDOM = articles.map(article => {
        const articleDOM = document.createElement("div");
        articleDOM.classList.add("article");
        articleDOM.innerHTML = `
<img src="${article.img}" alt="portrait_user">
<h2> ${article.title} - ${article.category} </h2>
<p class="article-author"> Auteur : ${article.author} </p>
<p class="article-content">${article.content} </p>
<div class="article-actions">
    <button class="btn btn-primary">Modifier</button>
    <button class="btn btn-danger" data-id=${article._id}>Supprimer</button>
</div>
`;
        return articleDOM;
    });
    articleContainerElement.innerHTML = "";
    articleContainerElement.append(...articlesDOM);
    const deleteButtons = articleContainerElement.querySelectorAll(".btn-danger");
    deleteButtons.forEach(button => {
        button.addEventListener("click", async event => {
            try {
                const target = event.target;
                const articleId = target.dataset.id;
                console.log(articleId);
                const response = await fetch(`https://restapi.fr/api/bfd/${articleId}`, { method: "DELETE" });
                const body = await response.json();

                console.log(body);
                fetchArticle();
            } catch (error) {
                console.log("(delete)error : ", error);
            }
        });
    });
};

const fetchArticle = async() => {
    try {
        const response = await fetch("https://restapi.fr/api/bfd");
        const articles = await response.json();
        // console.log(articles);
        showArticles(articles);
    } catch (e) {
        console.log("(receive-data)error : ", e);
    }
};

fetchArticle();