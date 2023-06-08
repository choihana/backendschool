fruits = ["apple","banana","cherry","orange"]
print("첫 리스트:",fruits)
fruits.append("grape")
print("append: ",fruits)
fruits.insert(2, "kiwi")
print("insert kiwi: ",fruits)
print("pop: ",fruits.pop(), fruits)
fruits.insert(1,"cherry")
print("insert cherry: ",fruits)
fruits.remove("cherry")
print("remove cherry: ",fruits) #첫번째만 지움