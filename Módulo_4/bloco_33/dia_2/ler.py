import csv

def leitura():

  with open("graduacao_unb.csv", encoding = "utf-8") as file:
      graduacao_reader = csv.reader(file, delimiter=",", quotechar='"')
    # Usando o conceito de desempacotamento
      header, *data = graduacao_reader
  infos = []
  for row in data:
    init = {}
    for index,lines in enumerate(header):
      init[lines] = row[index]
    infos.append(init)
  b = {}
  for a in infos:
    b[a["grau_academico"]] = 0
  print("XABLAUUUUUUUUUUUUUUUUUUUUUUUUUUUU",[b])
  return infos


if __name__ == "__main__":
  leitura()
