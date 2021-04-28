# Python

Python is een taal die veel lijkt op Javascript, hieronder zijn een aantal verschillen met JS beschreven en ook hoe je OOP kan toepassen binnen Python. Ten slotte wordt er globaal omschreven hoe gebruik te maken van Python in Visual Studio Code.

## Basis

https://edabit.com/tutorial/Python

- Length van een array krijg je door len(array) te doen
- Dictionaries = objects

## OOP

https://realPython.com/Python3-object-oriented-programming/

- classes:

  ```py
  class Dog:
      # pass is a placeholder so there is no error
      pass

      # Class attribute that's the same for every instance
      species = "Canis familiaris"

      # init is a sort of constructor
      def __init__(self, name, age):
        self.name = name
        self.age = age
  ```

  - maak een nieuwe class:

  ```py
  buddy = Dog("Buddy", 9)
  ```

- Je kan class variablen bereiken met class notation `buddy.age`
- Het is soms handig om een class informatie over zichzelf terug te laten geven

```py
# Replace .description() with __str__()
    def __str__(self):
        return f"{self.name} is {self.age} years old"
```

- Je kan een class maken die een andere klas inherit door de naam van de klas tussen haakjes te zetten: `class JackRussellTerrier(Dog):`
- Vervolgens kan je `>>> type(miles)` gebruiken om te checken wat voor type het is of `isinstance(miles, Dog)` om een specifieke klas te checken
- Je kan `super()` gebruiken om een methode aan te roepen in een parent-class

## Installatie

https://code.visualstudio.com/docs/Python/Python-tutorial

- Installeer Python vanaf de website en de Python plugin voor VSC van Microsoft
- Voer dit uit: `py -3 -m venv .venv` en selecteer volgens de interpreter in VSC met `ctrl+shift+p` en selecteer degene met venv in de path naam
- Je kan de virtual environment activeren door dit te doen: `.venv\scripts\activate` in de terminal en dan de bestandsnaam intypen om het uit te voeren
