import {connectApi} from "./connectApi.js";
import createCard from "./showVideo.js";

async function searchVideo(e){
    e.preventDefault();
    const dataSearch = document.querySelector("[data-search]").value;
    
    const search = await connectApi.searchVideo(dataSearch);

    const list = document.querySelector("[data-list]");

    while(list.firstChild){
        list.removeChild(list.firstChild);
    }

    search.forEach( element => list.appendChild(createCard(element.titulo,element.descricao,element.url,element.imagem)));

    if(search.length == 0){
        list.innerHTML = `<h2 class='mensagem__titulo'> Não existem vídeos com esse termo</h2>`
    }
}

const dataSearchButton = document.querySelector("[data-search-button]");
dataSearchButton.addEventListener('click', e => searchVideo(e));