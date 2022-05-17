// o que são vetores ou arrays
// como declarar um array

/* let array = ['string', 1, true];
console.log(array) */

// pode guardar vários tipos de dados

let array = ['string', true, ['array1'], ['array2'], ['array3'], ['array4']]
//console.log(array[1])

//forEach
/* array.forEach(function(item, index){console.log(item, index)}) */

/* array.push('novo item');
console.log(array) */

/* array.pop();
console.log(array) */ //remove o ultimo item

/* array.shift()
console.log(array) */ //remove o primeiro item

/* array.unshift('novo item no inicio')
console.log(array) */ //adiciona item no inicio

// console.log(array.indexOf(true))

let object = {string: 'string', number: 1, boolean: true, array: ["array"], objectInterno: {objetInterno: 'objeto interno'}}

console.log(object.objectInterno)

var string = object.string;
console.log(string);

var arrayInterno = object.array
console.log(arrayInterno);

var {string, boolean, objectInterno} = object;
console.log(string, boolean, objectInterno)