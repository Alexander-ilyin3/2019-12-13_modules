import Pet from './pet.js';

export default class Dog extends Pet {
    constructor( name, picture ) {
          super( name, picture )
          this.sound = 'WOUF'
          this.left = 120
          this.top = 66
    }
}

