const list = [
    {name: "Rodolfo", vip: true},
    {name: "Maria", vip: false},
    {name: "João", vip: true},
    {name: "Bruno", vip: true},
    {name: "Carla", vip: false},
    {name: "Ana", vip: true},
    {name: "Julio", vip: false},
];

const newList = list.map((item) => {
    return {

        name: item.name,
        sector: item.vip ? "Black" : "Green"
    };

});

console.log(newList)

//2

const students = [
    { name: "Rodolfo", testGrade: 7},
    { name: "Maria", testGrade: 5},
    { name: "João", testGrade: 8},
    { name: "Bruno", testGrade: 9},
    { name: "Carla", testGrade: 3},
    { name: "Ana", testGrade: 2},
    { name: "Julio", testGrade: 10}
];

const approvedStudents =  students.map((person) =>{

    return {
        name: person.name,
        finalResult: person.testGrade > 7 ? "Approved" : "Disapproved"
    }

})

console.log(approvedStudents)