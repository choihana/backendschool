a = {10, 20, 30 }
print("초기 세팅",a )
a.add(15)
print("add: ",a)
a.update([10,15,20,25,35])
print("update:" , a)
a.remove(35)
print("remove:", a)
a.discard(10)
print("discard:", a)
b = {20,25,30,35}
a_b = a.intersection(b)
print("b:",b)
print("intersection:",a_b)
print("union:",a.union((b)))
print("diff a-b:",a.difference(b))
print("diff b-a:",b.difference(a))
print(b.discard(5))
print(a&b)