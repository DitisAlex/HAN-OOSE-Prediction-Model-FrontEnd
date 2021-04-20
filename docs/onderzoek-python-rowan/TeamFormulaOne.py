from Team import Team


class TeamFormulaOne(Team):
    className: "FormulaOne"

    def __init__(self, name, constructor, chassis, powerUnit, drivers):
        super().__init__(name, constructor, chassis, powerUnit, drivers)

    def __str__(self):
        return f"{self.name} is a team in the 2021 Formula One World Championship compitition. Their constructor is {self.constructor}, while their chassis is the {self.chassis} with a {self.powerUnit} power unit. They have {len(self.drivers)} drivers: {self.drivers[0]} and {self.drivers[1]}"
