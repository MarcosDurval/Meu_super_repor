interface PedidosDTO{
  produto:string,
  preco:number
}
export class Pedidos{
  pedido:PedidosDTO[]
  constructor(pedido:PedidosDTO[]){
    this.pedido = pedido
  }
  adicionarPedido(parament:PedidosDTO){
    this.pedido.push(parament)
  }
}


