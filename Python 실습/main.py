# # while
# i = 0
# while i<10:
#     i+=1
#     print(i)
# else:
#     print("end")
#
# a = 2
# while a <= 20:
#     print(a)
#     a += 2
# print("코드종료")
#
# i=0
# while True:
#     i += 1
#     print(i)
#     if i == 5:
#         break

# for문
# for i in range(-1,-10,-2):
#     print(i)
#
# r = range(5,0,-1)
# print(r[0])
# print(r[1])
# print(r[2])
# print(r[3])
# print(r[4])
#

# st = "멋쟁이사자"
# for ch in st:
#     print(ch)
# else:
#     print("end")

# pass 문
# a = 0
# if a < 1:
#     pass
# else:
#     print("else")

#배열
import array
stu_roll = array.array('i',[101,102,103,104,105])
print(stu_roll[0], stu_roll[4])

for element in stu_roll:
    print(element, end=' ' )

stu_roll.insert(1, 106)
stu_roll.insert(3,107)
print('\n')
print(stu_roll)
i =0
n = len(stu_roll)
while i < n:
    print(stu_roll[i], end = '')
    i+=1

stu_roll.remove(107)
print(stu_roll, len(stu_roll))

stu_roll.pop()
print(stu_roll, len(stu_roll))

print(stu_roll,stu_roll.pop(2))
print(stu_roll.index(104))
#extend
stu_roll2 = array.array('i',[201,202,203])
stu_roll.extend(stu_roll2)
print(stu_roll)
#reverse
stu_roll.reverse()
print(stu_roll)