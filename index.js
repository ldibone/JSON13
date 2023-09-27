
//ex 1

const ziuaSaptamanii = 'o zi ordinara';

switch (ziuaSaptamanii) {
    case 'Luni':
        console.log("Astazi e luni!");
        break;
    case 'Marti':
        console.log("Astazi e marti!");
        break;
    case 'Miercuri':
        console.log("Astazi e miercuri!");
        break;
    case 'Joi':
        console.log("Astazi e joi!");
        break;
    default:
        console.log("Nu este zi a saptamanii!");
}



//ex 2

const lungimeastr = 'string';
if(lungimeastr > 10){
    console.log('lungimea str este mai mare de 10');
}
else if (lungimeastr < 10){
    console.log('lungimea str este mai mica de 10');
}



//ex 3



var variabila = 'maine va fi joi';

console.log(variabila.toLowerCase())

var variabila = 'maine va fi o alta joi';

console.log(variabila.toUpperCase())

//ex 4

const arr = [azi,maine,ieri,trecut,prezent]
const arr2 = arr.slice(3)

console. log(arr, 'arr')
console.log(arr2, 'arr2')

var variabila = 'azi,maine,ieri,trecut,prezent';

console.log(variabila.slice(3))