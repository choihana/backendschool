class Mobile:
    fp = "yes"

realme = Mobile()
redme = Mobile()
geek = Mobile()

print("1",Mobile.fp)
print("1",realme.fp)
print("1",redme.fp)
print("1",geek.fp)

Mobile.fp = "no"
print("2",Mobile.fp)
print("2",realme.fp)
print("2",redme.fp)
print("2",geek.fp)

realme.fp = "Not Working"
print("3",Mobile.fp)
print("3",realme.fp)
print("3",redme.fp)
print("3",geek.fp)

