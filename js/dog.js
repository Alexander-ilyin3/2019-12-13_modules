import Pet from './pet.js';

export default class Dog extends Pet {
    constructor( name, picture ) {
          super( name, picture )
          this.sound = 'WOUF'
          this.top = 58
          this.left = 70
    }
}

