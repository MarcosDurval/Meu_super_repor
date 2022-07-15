def sum_factorial(lst):
    
    items = []
   
    while len(items) != len(lst):
        acumulador = 0
        for number in range(lst[len(items)], 0, -1):
             if acumulador == 0:
                acumulador = number
             else:
                acumulador *= number
        items.append(acumulador)
    return sum(items)

print(sum_factorial([5,6]))