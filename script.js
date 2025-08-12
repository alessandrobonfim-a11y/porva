const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Você é um jovem nórdico que cresceu nas terras geladas da Escandinávia. Desde cedo, o desejo de aventura e glória arde em seu peito, mas também o anseio por um lugar ao lado de seu povo e aqueles que ama. Qual é o seu primeiro passo para forjar seu destino?",
        alternativas: [
            {
                texto: "Você se dedica a aprimorar suas habilidades de combate, buscando ser o mais forte e destemido em cada incursão.",
                afirmacao: "Com um machado afiado e um escudo robusto, você se tornou um guerreiro temido, cujo nome era sussurrado com respeito nos salões dos jarls."
            },
            {
                texto: "Você passa horas estudando os mapas e as estrelas, sonhando em descobrir novas terras além do mar ocidental, buscando conhecimento e riquezas para seu clã.",
                afirmacao: "Com um espírito explorador e uma mente curiosa, você desvendou segredos do mar e da terra, trazendo inovações e novas rotas para seu povo."
            }
        ]
    },
    {
        enunciado: "Em meio aos preparativos para uma grande expedição, um novo e inesperado laço se forma em sua vida. Pode ser um amor florescendo, uma amizade profunda com um companheiro de armas, ou até mesmo um vínculo com alguém que o desafia a ver o mundo de outra forma. Como você nutre essa conexão?",
        alternativas: [
            {
                texto: "Você compartilha seus sonhos e ambições com essa pessoa, buscando construir um futuro juntos, seja na glória da batalha ou na paz do lar.",
                afirmacao: "Você e seu companheiro(a) forjaram um laço inquebrável, onde a lealdade e o afeto eram tão fortes quanto as correntes de um navio viking em tempestade."
            },
            {
                texto: "Você demonstra sua lealdade em atos, protegendo essa pessoa nos perigos e dividindo seus saques, provando seu valor através de suas ações.",
                afirmacao: "Sua dedicação e proteção se tornaram uma lenda, e a pessoa amada sabia que poderia confiar em você acima de tudo, em qualquer situação."
            }
        ]
    },
    {
        enunciado: "Uma grande tempestade se forma, não apenas no céu, mas também entre os clãs. Antigas rivalidades ressurgem, ameaçando dividir seu povo. Você é chamado a intervir e ajudar a encontrar uma solução que evite um derramamento de sangue desnecessário. Qual é a sua abordagem?",
        alternativas: [
            {
                texto: "Você desafia os líderes mais obstinados para um julgamento por combate, acreditando que a força e a honra podem resolver a disputa.",
                afirmacao: "Sua coragem em face do conflito inspirou respeito, e a disputa foi resolvida, com seu nome sendo entoado em cânticos de bravura e justiça."
            },
            {
                texto: "Você usa sua inteligência e carisma para negociar uma trégua, propondo um acordo que beneficie a todos e fortaleça a união dos clãs.",
                afirmação: "Sua sabedoria e habilidade em unir corações divergentes trouxeram uma paz duradoura, e você foi aclamado como um verdadeiro líder, capaz de forjar um futuro promissor."
            }
        ]
    },
    {
        enunciado: "Após a superação dos desafios, você tem um momento de contemplação, pensando no legado que deseja deixar. Seja nos deuses, na família ou na terra, você sabe que suas escolhas futuras moldarão sua saga. O que mais te motiva a seguir em frente?",
        alternativas: [
            {
                texto: "A promessa de mais aventuras e riquezas em terras distantes, expandindo os domínios de seu povo e seu próprio nome.",
                afirmacao: "Seu espírito indomável o impulsionou a navegar ainda mais longe, e seus feitos se tornaram lendas contadas por gerações, ecoando pelos mares e montanhas."
            },
            {
                texto: "O desejo de ver seu lar prosperar, com sua família e seu povo vivendo em paz e abundância, construindo um legado de felicidade.",
                afirmacao: "Seu coração permaneceu leal à sua terra e ao seu povo, e você dedicou sua vida a construir um futuro de prosperidade e alegria, onde cada dia era uma benção."
            }
        ]
    },
    {
        enunciado: "Os anos se passaram, e a saga de sua vida se desenrolou, repleta de momentos de glória e felicidade. Qual é o epílogo dessa jornada, que é lembrada por todos como uma canção de alegria e triunfo?",
        alternativas: [
            {
                texto: "Você se tornou um Jarl respeitado, liderando seu povo em eras de prosperidade e glória, com seu nome gravado em runas de feitos heroicos e conquistas lendárias.",
                afirmacao: "Sua liderança sábia e sua bravura inabalável guiaram seu clã a um tempo de grande prosperidade, e seu nome foi gravado nas pedras rúnicas como um dos maiores líderes que o Norte já conheceu."
            },
            {
                texto: "Você viveu uma vida plena ao lado de sua família e amigos, rodeado de amor e risadas, e seus descendentes continuaram seu legado de bondade e união, com a paz reinando em suas terras.",
                afirmacao: "Você encontrou a verdadeira glória na felicidade de seu lar e na união de seu povo. Seus filhos e netos viveram em paz e alegria, e a história de sua bondade foi passada de geração em geração, como a mais bela das sagas."
            }
        ]
    },
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Anos depois, sua saga é contada...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
