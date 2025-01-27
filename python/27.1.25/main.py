# class Person:
#     def __init__(self, name, age, phone ):
#           self.name = name
#           self.age = age
#           self.phone = phone

#     def greet(self):
#           print(f"hello {self.name}")

# person1 = Person(name = "eden", age = 24, phone = 507771542)

# person1.greet()




#  # # # # # # # # # # # #

class Sup:
     def __init__(self, name, alterAgo, ability, weakness, team, strength, is_secret = True, is_active = True):
          self.name = name
          self.alterAgo = alterAgo
          self.ability = ability
          self.weakness = weakness
          self.team = team
          self.is_secret = is_secret
          self.is_active = is_active
          self.strength = strength

     def reactivate(self):
          self.is_active = True

     def deactivate(self):
          self.is_active = False

     def reviled(self):
          self.is_secret = False

     def intro(self):
          print(f"I am {self.alterAgo} but my real name is {self.name}. My powers are {self.ability} and i fight for the future of mankind with the {self.team} my power level is {self.strength}")

     def train(self, hours):
          self.strength += int(hours) * 10

     def fight(self, villain):
          print(f"\n {self.alterAgo} is fighting {villain}")
          self.strength -= 5
          if (self.strength < 45):
               print(f"\n you lose {self.name} died")
               self.deactivate()
               print("the dead cannot fight")
          elif (self.is_active == False):
               print(f"{self.alterAgo} already dead")
          else:
               print(f"{self.name} won the fight good job!!")
               

sup1 = Sup(name = "James Howlet", alterAgo = "wolverine", ability = ["healing factor", "adamantium skeleton"], weakness = "adamantium poisoning", team = "x-men", is_secret = True, is_active = True, strength = 30)
sup2 = Sup(name = "Tony Stark", alterAgo = "iron-man", ability = ["iron suit", "money"], weakness = ["hacking", "magnets"], team = "avengers", is_secret = True, is_active = True, strength = 10)
sup3 = Sup(name = "Bruce Waine", alterAgo = "batman", ability = "money", weakness = "joker", team = "justice league", is_secret = True, is_active = True, strength = 10)
sup4 = Sup(name = "Bruce Banner", alterAgo = "hulk", ability = "anger", weakness = "", team = "avengers", is_secret = True, is_active = True , strength = 50)



sup3.train(5)
sup3.intro()

sup3.fight("Thanos")
sup3.fight("Thanos")
sup3.fight("Thanos")
sup3.fight("Thanos")
sup3.fight("Thanos")
sup3.fight("Thanos")
sup3.fight("Thanos")
sup3.fight("Thanos")
sup3.fight("Thanos")
sup3.fight("Thanos")
sup3.fight("Thanos")