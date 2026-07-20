// ===============================
// FOOTSCORE - API.JS
// Integração com TheSportsDB
// ===============================

// URL base da API
const API_URL = "https://www.thesportsdb.com/api/v1/json/3";

// Busca os próximos jogos de uma liga
async function buscarJogosLiga(idLiga) {

    try {

        mostrarCarregando();

        const resposta = await fetch(`${API_URL}/eventsnextleague.php?id=${idLiga}`);

        if (!resposta.ok) {
            throw new Error("Erro ao acessar a API.");
        }

        const dados = await resposta.json();

        esconderCarregando();

        if (!dados.events) {
            mostrarMensagem("Nenhuma partida encontrada.");
            return;
        }

        exibirJogos(dados.events);

    } catch (erro) {

        esconderCarregando();

        console.error(erro);

        mostrarMensagem("Falha ao carregar os dados da API.");

    }

}

// Exibe os jogos em cards
function exibirJogos(eventos) {

    const area = document.querySelector(".ao-vivo");

    if (!area) return;

    area.innerHTML = "<h2>⚽ Próximos Jogos</h2>";

    eventos.forEach(jogo => {

        area.innerHTML += `
            <div class="card">

                <h3>${jogo.strLeague}</h3>

                <p>
                    ${jogo.strHomeTeam}
                    <strong> x </strong>
                    ${jogo.strAwayTeam}
                </p>

                <span>
                    ${jogo.dateEvent}
                </span>

            </div>
        `;

    });

}

// Mensagem de erro
function mostrarMensagem(texto) {

    const area = document.querySelector(".ao-vivo");

    if (!area) return;

    area.innerHTML = `
        <div class="card">
            <h3>${texto}</h3>
        </div>
    `;

}

// Loading
function mostrarCarregando() {

    const area = document.querySelector(".ao-vivo");

    if (!area) return;

    area.innerHTML = `
        <div class="card">
            <h3>⏳ Carregando partidas...</h3>
        </div>
    `;

}

function esconderCarregando() {
    // reservado para melhorias
}

// ===============================
// IDs de algumas competições
// ===============================

// Brasileirão Série A = 4351
// Premier League = 4328
// La Liga = 4335
// Champions League = 4480

buscarJogosLiga(4351);
