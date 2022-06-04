nomes = ["José", "Lucas", "Nádia", "Fernanda", "Cairo", "Joana"]
maior = ''
for index in nomes:
  if(len(maior) < len(index)):
      maior = index
print(maior)