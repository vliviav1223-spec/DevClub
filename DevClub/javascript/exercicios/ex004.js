const people = [
    {
        nome: "Livia",
        idade: 24,
        address: {
            rua: "Albert Einstein",
        }
    },
    {
        nome: "Julia",
        idade: 14,
        address: {
            rua: "Albert Einstein",
        }
    },
    {
        nome: "Maria",
        idade: 54,
        address: {
            rua: "Albert Einstein",
        }
    },
    {
        nome: "Ralf",
        idade: 15,
        address: {
            rua: "Albert Einstein",
        }
    }
];

console.log(people);

// Agora sim, comparando o nome da Livia (índice 0) com o da Julia (índice 1)
const compare = (people[0].nome === people[1].nome) ? "São iguais" : "Não são iguais";
console.log(compare); // Vai retornar "Não são iguais"