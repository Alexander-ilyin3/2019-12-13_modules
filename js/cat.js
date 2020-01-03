import Pet from './pet.js';

export default class Cat extends Pet {
    constructor( name, picture ) {
          super( name, picture )
          this.sound = 'MEOU'
          this.top = 58
          this.left = 28
    }
}

