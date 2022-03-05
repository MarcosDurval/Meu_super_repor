export interface PedidosDTO{
  produto:string,
  preco:number
}
export default class itemPedido{
  pedido:PedidosDTO
  constructor(pedido:PedidosDTO){
    this.pedido = pedido
  }
  
}


