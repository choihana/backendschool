# # read
# t = open('../example.txt','r')
# content = t.read()
# print(content)
# t.close()
#
# # write
# t = open('../example.txt','w')
# content = "그래 안녕!"
# t.write(content)
# t.close()

t = open("../example.txt","w")
con_list = ['a','b','c']
for i in con_list:
    t.write(i)

t.close()
t = open("../example.txt","r")
con = t.read()
print(con)
t.close()