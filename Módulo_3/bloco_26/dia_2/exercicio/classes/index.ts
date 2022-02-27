import { Car,color,porta } from "./car";
enum direcao{
  esquerda = "vire à esquerda",
  direita = "vire à direita"
}
const carrinho = new Car("volkswagen",color.prata,4)
carrinho.turnOn()
carrinho.openTheDoor(porta.direita)
