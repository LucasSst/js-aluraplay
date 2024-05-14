import {connectApi} from "./connectApi.js"

const form = document.querySelector("[data-formulario]");

async function createVideo(evento){
    evento.preventDefault();
    let number = Math.floor(Math.random() * 10).toString()
    const img = document.querySelector("[data-imagem]").value;
    const url = document.querySelector("[data-url]").value;
    const titulo = document.querySelector("[data-titulo]").value;
    const descricao = number == 0 ? number + 1 : number ;
    try{
        await connectApi.createVideo(titulo,descricao,url,img);

        window.location.href= "../pages/envio-concluido.html";
    }catch(e){
        alert(e)
    }
    
}

form.addEventListener("submit", evento => createVideo(evento));