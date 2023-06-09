class ParentClass:
    def __init__(self):
        self.name = 'parent'
        self.number = 10
    def __str__(self):
        return f'ParentClass name:{self.name}, number: {self.number}'

    def add_num(self, new_number):
        self.number = self.number + new_number

class ChildClass(ParentClass):
    def __init__(self):
        super().__init__()
        self.name = 'child'
        self.age = 5
    def __str__(self):
        return f'ChildClass name:{self.name}, number:{self.number}, age{self.age}'

    def add_num(self, new_number):
        self.number = new_number

parent = ParentClass()
print(parent)
child = ChildClass()
print(child)

parent.add_num(7)
child.add_num(5)

print(parent.number)
print(child.number)