
let numero = 5

if(numero > 10){
    console.log('Numero Maior')
}else if(numero < 10){
    console.log('Numero eh menor')
}else {
    console.log('Numero eh igual')
}

const person = 'brasileira'

const isBrasileira = person === 'brasileira'

if(isBrasileira){
    console.log(isBrasileira)
}else {
    console.log(isBrasileira)
}

const aleatorio = Math.floor(Math.random() * 10) + 1;
const resposta = Math.floor(Math.random() * 10) + 1;

if(resposta === aleatorio){
    console.log('Ganhou')
}else {
    console.log('Perdeu')
}


const array = [3, 10, 2, 90, 15]
array.sort((a, b) => a - b);
console.log(array)

const concurso = [
    {
    nome: "Livia",
    idade: 19,
    sexo: "F",
    profissao: "",
    nacionalidade: "Brasileira"},

    {
    nome: "fdsf",
    idade: 21,
    sexo: "F",
    profissao: "",
    nacionalidade: "Iraniano"},
    
    {
    nome: "gfdgd",
    idade: 32,
    sexo: "F",
    profissao: "",
    nacionalidade: "Brasileira"},
    
    {
    nome: "dfsfdsfds",
    idade: 43,
    sexo: "F",
    profissao: "",
    nacionalidade: "Japones"},
    
    {
    nome: "dasda",
    idade: 12,
    sexo: "F",
    profissao: "",
    nacionalidade: "Mexicano"},
    ]

for(let pessoa of concurso){
    if ((pessoa.nacionalidade === "Brasileiro" || pessoa.nacionalidade === "Brasileira") && pessoa.idade >= 18) {
        console.log(pessoa);
    }
}

let notas = [0 , 1, 2, 3, 4, 5];

const aleatoriozz = Math.floor(Math.random() * notas.length);
const nota = notas[aleatoriozz];

switch(nota){
    case 0:
        console.log('Essa comida deveria ser crime, nem chamada de comida');
        break
    case 1: 
        console.log('Horrivel. Cozinhou com sua bunda?');
        break;
    case 2: 
        console.log('Aceita pedidos? Pare');
        break;
    case 3:
        console.log('Da pra melhorar, mas da tempo se desistir tambem');
        break;
    case 4:
        console.log('Otimo, muito bom, porem a apresentação pecou');
        break;
    case 5:
        console.log('Masterchafe!!!');
        break;
};

import readline from 'readline/promises';
import { stdin as input, stdout as output } from 'process';

async function perguntar () {
    const rl = readline.createInterface({ input, output });

    const resposta = await rl.question('Digite algo ai: ');

    const numero = Number(resposta);
    
    if (isNaN(numero)) {
        console.log("Numero invalido");
    } else if (numero % 2 === 0) {
        console.log("Numero eh par");
    } else {
        console.log("Numero eh impar"); 
    }
    
    rl.close();
}

perguntar();

async function verificarNumeros(){
    const rl = readline.createInterface({input, output});

    let qntPares = 0;
    let qntImpar = 0;

    for(let i = 0; i < 4; i++){
        const resp = await rl.question("Digite o ${[i] + 1} numero");
        const num = Number(resp);

        if(isNaN(num)) {
            console.log("Numero invalido, digite certo bosta");
            i--;
            continue;
        }

        if(num % 2 === 0){
            qntPares++;
        }else {
            qntImpar++;
        }
    }
    rl.close();

    if(qntPares === 4){
        console.log("Todos os numeros sao pares");
    }else if (qntImpar === 4){
        console.log("Todos os numeros sao impares");
    }else {
        console.log("Tem mistura de numeros pares e impares");
    }
}

verificarNumeros();
