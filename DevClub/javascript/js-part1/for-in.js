const student = {
    name: "Livia",
    age: 26,
    genre: "Male",

}

for(let property in student){
    console.log(student[property])
}

for(let property in student){
    console.log(`${property} : ${student[property]}`)
}