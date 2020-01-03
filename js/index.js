import Cat from './cat.js'
import Dog from './Dog.js'

// import { CreateImage } from './canvas.js'
// CreateImage()

let animals = [
    new Cat('Borya', '../pic/Cat.png'),
    new Dog('Fedor', '../pic/Dog.png'),
    new Cat('Borya2', '../pic/Cat.png'),
    new Dog('Vasya', '../pic/Dog.png'),
]

let container = document.querySelector('#container')
// let container2 = document.querySelector('#container-2')

// 1 вариант
animals.forEach( (pet) => {
    let nodePet = document.createElement('div')
        nodePet.setAttribute( 'style', `background-image: url(${pet.image}); background-size: cover; display: inline-block; width: 200px; height: 206px` )
        nodePet.setAttribute( 'data-name', pet.petName )
    container.appendChild(nodePet)
});
// ---------

// 2 вариант
// const makePicture = ( { image, petName } ) => `<img src="${image}" data-name="${petName}">`

// container2.innerHTML = animals.map(makePicture).join('')
// ---------

document.body.addEventListener('click', e => {
    let thePet;
    let currentTarget = e.target;
    while (!currentTarget || !currentTarget.dataset || !currentTarget.dataset.name) {
        if(currentTarget.parentNode)
            currentTarget = currentTarget.parentNode;
        else break;
    }
    if (currentTarget.dataset && currentTarget.dataset.name) {
        thePet= animals.find(pet => pet.petName === currentTarget.dataset.name)
        thePet && thePet.makeSound(currentTarget, thePet.sound)
    }
})
