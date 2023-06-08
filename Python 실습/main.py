def pw(x, y):
    z = x ** y
    print(z)


pw(2, 5)


def show(name, age):
    print(f"Name: {name}  Age : {age}")


show("hana", 31)
show(age=29, name="hana2")  # keyword적을경우 순서 변경 가능


def add(*num):
    z = num[0] + num[1] + num[2]
    print(z)


add(5, 2, 4)


def add2(x, *num):
    print(x, num[0], num[2], num[1])


add2(1, 10, 20, 30)

