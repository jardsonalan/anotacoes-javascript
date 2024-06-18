// Retorna uma coleção de elementos

/*
// Retorna uma Array com elementos das div's

const collectionHTML = [...document.getElementsByTagName('div')]

console.log(collectionHTML);

collectionHTML.map((e) => {
    console.log(e)
})
*/

let collectionHTML = document.getElementsByTagName('div')

collectionHTML=[...collectionHTML]

collectionHTML.map((e) => {
    console.log(e)
})