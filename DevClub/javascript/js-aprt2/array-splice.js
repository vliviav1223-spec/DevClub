const students = ['Livia', 'Vitoria', 'Julia', 'Maria']

//vou tirar a Julia e Vitoria
students.splice(1, 2)
console.log(students)

const estudantes = ['Livia', 'Vitoria', 'Julia', 'Maria']
//vai ignorar Livia e vai fatiar vitoria ate julia
//ele via criarr um novo array
const novosEstudantes = estudantes.slice(1,2)
console.log(novosEstudantes)

const frutas = ["Maçã", "Banana", "Uva", "Morango"];
//vai removar o primeiro elemento do array
frutas.shift();

console.log(frutas);

const frutas = ["Maçã", "Banana", "Uva", "Morango"];
//vai remover o ultimo da posicao
frutas.pop();

console.log(frutas);

//push () add elementos no final
// unshift() add elemenos no inicio