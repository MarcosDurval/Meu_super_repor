class MainMemory:
    def __init__(self):
        self.clean()

    def load(self, value):
        # Sua implementação
        self.loaded_memory.append(value)


    def get(self, index):
        # Sua implementação
        return self.loaded_memory[index]

    def clean(self):
        self.loaded_memory = []



