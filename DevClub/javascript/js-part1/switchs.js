const temperature = 38

switch(temperature){
    case 30:
        console.log('Hipotermico')
        break

    case 33:
        console.log('Quase hipotermico')
        break
    case 36:
        console.log('Afebril')
        break
    case 38:
        console.log('Febril')
        break
    default:
        console.log('Bagulho errado')
        break
}