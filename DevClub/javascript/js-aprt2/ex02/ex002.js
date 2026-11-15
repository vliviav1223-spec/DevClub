const people = [
    {
        numberChildren: 0,
        salary: 1500
    },{
        numberChildren: 5,
        salary: 2900
    },{
        numberChildren: 2,
        salary: 9000
    },{
        numberChildren: 0,
        salary: 1650
    },{
        numberChildren: 2,
        salary: 1400
    },{
        numberChildren: 0,
        salary: 8040
    },{
        numberChildren: 0,
        salary: -2000
    },
]

function findAverageAndHighestSalary(peopleInformation){
    let averageSalary = 0
    let averageChildren = 0
    let highestSalary = 0

    for (let i = 0; i <= peopleInformation.length; i++){
        const salary = peopleInformation[i].salary
        const children = peopleInformation[i].numberChildren

        if (salary > highestSalary) highestSalary = salary

        if(salary < 0){
            console.log(`Media de salario ${(averageSalary/ i + 1).toFixed(0)}`)
            console.log(`Media de filhos ${(averageChildren/ i + 1).toFixed(0)}`)
            console.log(`Maior salario ${highestSalary}`)
            break;
        }else {
            averageChildren += children
            averageSalary = averageSalary + salary; 
        }
    }
}

findAverageAndHighestSalary(people)