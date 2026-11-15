const students = ['Joao', 'Livia', 'Ana', 'Pedro']

//adicionando item no array
students.push('Duda')
console.log(students)

console.log(students.length)//me fala quantos item tem o array

console.log(students.sort())//coloca em ordem alfabetica

delete students[0] //deixou o lugar do jao como undefined
console.log(students[0])

students.push('Renan')

//tira items exatamente ou poe item exatamente onde queremos
students.splice(3,2,) //vai tirar a ana e o pedro
console.log(students)

students.splice(1, 0, 'Rafael')
console.log(students)


//students.slice(1)//vai começar a tirar a partir do indice 1 e parar tem q po
//uma segunda posicao
const newStudents = students.slice(1)
console.log(newStudents)

students.pop()//tira o ultimo item do array
console.log(students)

console.shift()//tira o primeiro do array