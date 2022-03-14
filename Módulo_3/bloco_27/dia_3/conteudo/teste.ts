/*
Dicionário en-pt:
- fish: peixe
*/

abstract class Animal {
  constructor(readonly name: string) { }
  abstract move(): string
}
class Bird extends Animal {
  move(): string {
      console.log(this.name)
      return "xablau"
  }
}
class Mammal extends Animal {
  move() { return this.name }
}
class Fish extends Animal {
  move() { return this.name }
}

const a = new Bird('Papagaio');
const b = new Fish('Tubarão');
const c = new Mammal('Tatu');

const myMove = (animal: Animal) => {
  return animal.move();
}
myMove(a);
console.log(myMove(b));
console.log(myMove(c));

/*
Saída:
Tubarão está nadando.
Papagaio está voando.
Tatu está andando.
*/