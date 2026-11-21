const companies = [
    {name: 'Samsung',markeValue: 50, CEO: 'Kim Hyun Suk',foundedOne: 1938},
    {name: 'Microsoft',markeValue: 415, CEO:'Satya Nadella',foundedOne: 1975},
    {name: 'Intel',markeValue: 117, CEO: 'Brien Krzanich',foundedOne: 1968},
    {name: 'Facebook',markeValue: 383, CEO: 'Mark Zuckerberg',foundedOne: 2004},
    {name: 'Spotify',markeValue: 30, CEO: 'Kim Hyun Suk',foundedOne: 2006},
    {name: 'Apple',markeValue: 845, CEO: 'Tim Cook',foundedOne: 1976},

];


const sum = companies.reduce((acc, current) => {

    return acc += current.markeValue;
    
}, 0);

console.log(sum)
