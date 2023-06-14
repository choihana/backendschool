class Node:
    def __init__(self, data):
        self.data = data
        self.next = None

head = Node(1)
head.next = Node(74)
head.next.next = Node(30)

# 리스트 출력 1. 반복문
while head != None:
    print(head.data)
    head = head.next

# 리스트 출력2. 재귀호출
def printNodesRecur(node):
    print("째귀",node.data)
    if node.next is not None:
        printNodesRecur(node.next)

printNodesRecur(head)

