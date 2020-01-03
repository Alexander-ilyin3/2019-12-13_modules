import { pic } from './variables.js'

export default class Pet {
    constructor( name, image ) {
        this.petName = name
        this.image = image
    }
    
    makeSound(container, sound) {
        pic.innerHTML = `<span> ${sound} </span>`
        container.appendChild(pic);
        let tl = gsap.timeline(),
            top = this.top,
            left = this.left,
            duraction = '-1'

        if (this.__proto__.constructor.name === 'Dog') duraction = '+1'

        tl.set(pic, {top, left, opacity: 0})
        tl.to(pic, {duration: .5, top: (top + 30), left: (left * +duraction + 30), opacity: 1})
        tl.to(pic, {duration: 1, opacity: 0})
    }
}

