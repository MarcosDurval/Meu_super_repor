from stack import Stack

class StackOverflow(Exception):
  ...

class Value(Stack):
  def __init__(self,number = -1):
    super().__init__()
    self.limit = number
  
  def min_value(self):
    if self.is_empty():
       return None
    value_min = self._data[-1]
    for value in self._data:
      if value_min > value:
        value_min = value
    return value_min
  def push(self, value):
      if -1 < self.limit >= len(self._data):
          raise StackOverflow('Não é possível adicionar outro item à pilha')
      return super().push(value)


if __name__ == "__main__":
    elements = [-2, 3, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    content_stack = Value(1)
    for elem in elements:
        content_stack.push(elem)
    print(content_stack)
    print(content_stack.min_value())