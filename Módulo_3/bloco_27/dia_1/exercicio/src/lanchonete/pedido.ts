import  cliente  from "./cliente";
import  itemPedido, { PedidosDTO } from "./itemPedido";

export default class Pedido{
  clienteName:cliente
  p: itemPedido
  desconto:number
  constructor(clienteName:cliente,p:itemPedido,desconto:number){
    this.clienteName = clienteName
    this.p = p
    this.desconto = desconto | 0
  }
  conta(){
    const result = this.p.pedido.preco - (this.p.pedido.preco * this.desconto)
    console.log(`${this.clienteName.nome} sua conta deu ${result}`)
  }

}
// const pedido:PedidosDTO = {produto:"suco",preco:10}
const pessoa = new cliente("zé o brabo")
const item = new itemPedido({produto:"suco",preco:11})
const vqv = new Pedido(pessoa,item,0)
vqv.conta()