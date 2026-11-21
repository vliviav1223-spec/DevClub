//add 10% de valor em todos
//vai filtar as mais antias antes do ano 2000
//e dps somar valor de mercado
const companies = [
    {name: 'Samsung',markeValue: 50, CEO: 'Kim Hyun Suk',foundedOne: 1938},
    {name: 'Microsoft',markeValue: 415, CEO:'Satya Nadella',foundedOne: 1975},
    {name: 'Intel',markeValue: 117, CEO: 'Brien Krzanich',foundedOne: 1968},
    {name: 'Facebook',markeValue: 383, CEO: 'Mark Zuckerberg',foundedOne: 2004},
    {name: 'Spotify',markeValue: 30, CEO: 'Kim Hyun Suk',foundedOne: 2006},
    {name: 'Apple',markeValue: 845, CEO: 'Tim Cook',foundedOne: 1976},

];

const add10Percent = company => {
    company.markeValue = company.markeValue + company.markeValue / 10
    return company
}

const oldCompany = company => company.foundedOne < 2000

const somar = ((acc, item) => acc += item.markeValue)

const bestCompanies = companies
    .map(add10Percent)
    .filter(oldCompany)
    .reduce(somar, 0)                         

console.log(bestCompanies)
