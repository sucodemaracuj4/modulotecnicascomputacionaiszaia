const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPergunta = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const caixaResultado1 = document.querySelector(".caixa-principal");
const pergunta = [
    {
        enunciado:"De que maneira podemos abordar as discriminações de classe propagadas nas redes de comunicação e ainda, podendo abranger resoluções frugais no intuito de enaltecer essas comunidades?",
        alternativas:[ 
            {
            texto: "Permitindo conexões com o mundo digital",
            afirmacao:  "Utilizar redes de comunicação mais acessíveis para divulgar novidades ecológicas e simples que caiba no cotidiano de cada cidadão.",
    },
    {
         texto:"Utilizar redes de comunicação mais acessíveis para divulgar novidades ecológicas e simples que caiba no cotidiano de cada cidadão.",
         afirmacao:" É possível, já que há inúmeros acessos e diversas compreensões do que é passado e pode ajudar muitas comunidades com simplicidade e inovação",
    }
        ]
    },
      { enunciado: "Qual é a visão da comunidade diante das resoluções e propostas intuitivamente ecológicas?",
        alternativas:[
            {
                texto: "Um novo dilema a ser enfrentado",
                afirmacao:"É um novo desafio, uma novidade diante das barreiras culturais",
            },
            {texto:"Aceitam o incentivo e trabalham para o bem-estar comum",
                afirmacao:"A contribuição, quando o objetivo é reconhecido, se torna imprescindível. À essas comunidades cabe realocar-se.",
            }
            ]
        },
       
    {
     enunciado: "Como os ecossistemas irão beneficiar-se  das resoluções propostas, adiantando que a divulgação será iminente e abordará diferentes residências?",
        alternativas: [
            {texto:"Através da mudança na quantidade de materiais descartados, a fauna e flora poderão perpetuar-se de forma natural e benéfica, habituando a vida de pessoas em diferentes realidades socioeconômicas",
                afirmacao:"a reprodução e biodiversidade poderão continuar, uma vez que o metabolismo animal vai aos poucos se alterando, através das renovações de ciclos.",
            },
            {texto:"As consequências negativas em meio à natureza  irão diminuir substancialmente, com níveis de lixo, doença, emissões de carbono reduzida",
                afirmacao:"Impactando diretamente na qualidade de vida das pessoas residentes nas proximidades dos locais onde, hoje, estão contaminados.",

            } ] 

    }
];

let atual = 0;
let perguntaAtual;
let historiaFinal="";


function mostraPergunta(){
    if(atual>=pergunta.length){
        mostraResultado();
        return;
    }
}

perguntaAtual = pergunta[atual];
caixaPergunta.textContent = perguntaAtual.enunciado;
caixaAlternativas.textContent = "";
mostraAlternativas();

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas){
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click",() => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}
function respostaSelecionada(opcaoSelecionada){
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();

}
function mostraResultado(){
    caixaPergunta.textContent = ".";
    textoResultado.textContent = "historiaFinal";
    caixaAlternativas.textContent = ".";
}
mostraPergunta()


