type P= {
  pequena:4,
}
type M = {
  media:6
}
type G = {
  grande:8
} 


interface slice<T> {
  flavor:string
  tamanho:T
}
const pizza:slice<P> = {
  flavor: "calabresa",
  tamanho: { pequena: 4,}
}