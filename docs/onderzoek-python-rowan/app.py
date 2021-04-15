from TeamFormulaOne import TeamFormulaOne

alfaRomeo = TeamFormulaOne("Alfa Romeo Racing Orlen",
                           "Alfa Romeo Racing-Ferrari", "C41", "Ferrari 065/6", ["Kimi Räikkönen", "Antonio Giovinazzi"])

alphaTauriHonda = TeamFormulaOne(
    "Scuderia AlphaTauri Honda", "AlphaTauri-Honda", "AT02", "Honda RA621H", ["Pierre Gasly", "Yuki Tsunoda"])

formulaOne = {
    "description": "The 2021 FIA Formula One World Championship is a motor racing championship for Formula One cars which is the 72nd running of the Formula One World Championship.[a] It is recognised by the Fédération Internationale de l'Automobile (FIA), the governing body of international motorsport, as the highest class of competition for open-wheel racing cars. The championship is being contested over twenty-three Grands Prix, which will be held around the world. Drivers and teams are scheduled to compete for the titles of World Drivers' Champion and World Constructors' Champion respectively.",
    "teams": [alfaRomeo, alphaTauriHonda]
}

print("***2021 Formula One World Championship***")
print(formulaOne["description"])

print("")

print("**Entries**")
print(
    "The following constructors and drivers are currently under contract to compete in the 2021 World Championship. All teams are competing with tyres supplied by Pirelli.[3] Each team is required to enter at least two drivers, one for each of the two mandatory cars.")

print("")

for team in formulaOne["teams"]:
    print(team)
    print("")
