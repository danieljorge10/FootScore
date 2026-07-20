// ==============================
// FOOTSCORE - APP.JS
// ==============================

console.log("FootScore iniciado!");

// Seleciona todos os cards
const cards = document.querySelectorAll(".card");

// Efeito ao clicar nos cards
cards.forEach((card) => {
    card.addEventListener("click", () => {
        alert("Em breve você verá as estatísticas completas desta partida.");
    });
});

// Campo de pesquisa
const pesquisa = document.querySelector(".pesquisa input");

pesquisa.addEventListener("keyup", () => {

    const texto = pesquisa.value.toLowerCase();

    const lista = document.querySelectorAll(".card");

    lista.forEach((item) => {

        const conteudo = item.innerText.toLowerCase();

        if (conteudo.includes(texto)) {
            item.style.display = "block";
        } else {
            item.style.display = "none";
        }

    });

});

// Saudação dependendo do horário

const hora = new Date().getHours();

if(hora < 12){

    console.log("Bom dia!");

}else if(hora < 18){

    console.log("Boa tarde!");

}else{

    console.log("Boa noite!");

}

// Simulação de atualização ao vivo

setInterval(() => {

    console.log("Atualizando partidas...");

},30000);

// Botões do menu inferior

const botoes = document.querySelectorAll("nav button");

botoes.forEach((botao)=>{

    botao.addEventListener("click",()=>{

        const nome = botao.innerText;

        switch(nome){

            case "🏠 Home":
                window.location.href="index.html";
            break;

            case "⚽ Jogos":
                window.location.href="jogos.html";
            break;

            case "🏆 Tabela":
                window.location.href="tabela.html";
            break;

            case "⭐ Favoritos":
                window.location.href="favoritos.html";
            break;

            case "👤 Perfil":
                window.location.href="perfil.html";
            break;

        }

    });

});

// Dados simulados (serão substituídos pela API depois)

const partidas = [

{
timeCasa:"Flamengo",
timeFora:"Palmeiras",
placar:"2 x 1",
campeonato:"Brasileirão"
},

{
timeCasa:"Barcelona",
timeFora:"Real Madrid",
placar:"0 x 0",
campeonato:"La Liga"
},

{
timeCasa:"Manchester City",
timeFora:"Liverpool",
placar:"1 x 0",
campeonato:"Premier League"
}

];

console.table(partidas);
