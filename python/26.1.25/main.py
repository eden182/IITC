# # # # # # # # # # # # # # # # # # # # # # # # # # # # # # #


# squares = [x**2 for x in range(10)]
# print(squares)

# #  1

# def area_of_rectangle(length,width):
#     return length * width
# print(area_of_rectangle(15,13))

# #  2

# def factorial_loop(n):
#     sum = 1
#     for i in range(1, n + 1):
#      sum *= i
#     return sum

# print(factorial_loop(4))

# import math
# print(math.factorial(5))

# #  3

# def precentage_calculator(n , y = 50):
#    result = n - (n * (y / 100))
#    return result

# print(precentage_calculator(100))

# #  4

# def arr(*args):
#     names = " ".join(args)
#     return(f"hello {names}")

# print(arr("baba","mama","dada","kaka"))

# # # # # **kwargs for object ("name":"baba")

# def d_prod(**kwargs):
#     product_details = 'product details: \n'
#     for key, value in kwargs.items():
#         product_details += f"{key}: {value}\n"
#     return(product_details)

# print(d_prod(name="laptop", brand="dell", price=1200, stock=50))

# #  5

# x = lambda a ,b: a + b
# print(x(5,10))

# print((lambda a, b: a + b)(5,7))

# nums = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]

# #  6

# even_nums = list(filter(lambda a: a % 2 == 0, nums))
# print(even_nums)

# #  7 

# import random
# from math import sqrt

# print(sqrt(100))
# print(random.randint(1, 100))

# #  8

# from custom_mudels.sum_sqrt import (calc)

# print(calc(2,5,8,10,15))


# #  9
# a = 5
# b = 10
# a , b = b , a

# print(a)

# x = 1
# y = 2
# z = 3
# print( x , y , z)
# y , z , x = x , y , z 
# print( x , y , z)

# #  10

# try:
#     f = open("./custom_mudels/sum_sqrt.py" , "r")
#     print(f.read())
# except FileNotFoundError:
#     print("file not found")
# finally:
#     print("done")

# # auto close
# try:
#     with open("./custom_mudels/sum_sqrt.py" , "r") as file:
#     print(file.read())
# except FileNotFoundError:
#     print("file not found")
# finally:
#     print("done")

# #  11
# import os

# try:
#     with open("files.txt" , "r") as file:
#         list_of_items = (file.read())
#         new_list = list_of_items[1:-1].split(", ")
#         print(new_list)
#         for file_name in new_list:
#             if os.path.exists(file_name):
#                 print(f"{file_name} exists.")
#                 opened_file = open(f"{file_name}" , "r")
#                 print(opened_file.read())
#             else:
#                 print(f"{file_name} does not exist.")
# except FileNotFoundError:
#     print("file not found")
# finally:
#     print("Done")
