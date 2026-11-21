const list = [20,3,234,12,17,541,6,87,275,1000];

const newList = list.filter(number => {
    return number % 2 === 0 && number % 5 ===0;
})

console.log(newList);

const companies = [
    {name: 'Samsung',markeValue: 50, CEO: 'Kim Hyun Suk',foundedOne: 1938},
    {name: 'Microsoft',markeValue: 415, CEO:'Satya Nadella',foundedOne: 1975},
    {name: 'Intel',markeValue: 117, CEO: 'Brien Krzanich',foundedOne: 1968},
    {name: 'Facebook',markeValue: 383, CEO: 'Mark Zuckerberg',foundedOne: 2004},
    {name: 'Spotify',markeValue: 30, CEO: 'Kim Hyun Suk',foundedOne: 2006},
    {name: 'Apple',markeValue: 845, CEO: 'Tim Cook',foundedOne: 1976},

];//empresa so dps de 1975 e com mais de 2bi

const richCompanies = companies.filter(company => {
    return company.markeValue > 2 && company.foundedOne > 1975
})

console.log(richCompanies);