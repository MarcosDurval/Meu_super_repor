import Character from "./Character";
import MeleeCharacter from "./MeleeCharacter";

export default class LongRangeCharacter extends MeleeCharacter{
  talk(): void {

    console.log(`${this.name} está falando`)  
  }
  specialMove(): void {
    console.log(`${this.name} usou um ataque especial`)
  }
}

const myFunc = (character:Character) => {
  character.specialMove()
}
const falando = (character:Character) => {
  character.talk()
}
const e = new LongRangeCharacter("Batman")
falando(e)
myFunc(e)
