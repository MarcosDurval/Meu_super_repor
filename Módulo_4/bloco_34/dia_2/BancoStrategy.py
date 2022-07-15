from abc import ABC, abstractmethod

class BancoStrategy(ABC):  # Interface
    @classmethod
    @abstractmethod
    def debitar(cls):
        raise NotImplementedError





# ... métodos para todos os bancos