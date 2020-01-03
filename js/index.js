import Cat from './cat.js'
import Dog from './dog.js'

let animals = [
    new Cat('Borya', 'https://github.com/Alexander-ilyin3/2019-12-13_modules/blob/master/pic/Cat.png?raw=true'),
    new Dog('Fedor', 'https://github.com/Alexander-ilyin3/2019-12-13_modules/blob/master/pic/Dog.png?raw=true'),
]

const container = document.querySelector('#container')

animals.forEach( (pet) => {
    let nodePet = document.createElement('div')
        nodePet.setAttribute( 'style', `background-image: url(${pet.image})`)
        nodePet.classList = 'picture-div'
        nodePet.setAttribute( 'data-name', pet.petName )
    container.appendChild(nodePet)
});

document.body.addEventListener('click', e => {
    let thePet;
    let currentTarget = e.target;

    while (!currentTarget || !currentTarget.dataset || !currentTarget.dataset.name) {
        if(currentTarget.parentNode)
            currentTarget = currentTarget.parentNode;
        else break;
    }
    if (currentTarget.dataset && currentTarget.dataset.name) {
        thePet = animals.find(pet => pet.petName === currentTarget.dataset.name)
        thePet && thePet.makeSound(currentTarget, thePet.sound)
    }
})
