import math


def tinta(parede):
  preco = 80
  litros = 18 * 3
  latas = math.ceil(parede / litros)
  t = (latas, latas * preco)
  return t

print(tinta(60))
