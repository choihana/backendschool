def disp():
    name = 'hana'
    print('welcome', name)

disp()

def add():
    x=10;
    y = 20;
    c = x+y
    print(c)
add()

def add2():
    a = 10
    b = 5
    c = a+b
    return a,b,c

s1,s2,s3 = add2()
print(s1,s2,s3)

def disp(sh):
    print("sh")
    return sh

def show():
    return "show"

r_sh = disp(show)
print(r_sh())
print(show())