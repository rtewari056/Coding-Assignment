class Planet {

  planetArr = [
    {
      Planet: "Mercury",
      atmosphericGasses: null,
      Moons: 0,
      Rings: "No",
    },
    {
      Planet: "Venus",
      atmosphericGasses: ["Carbon Dioxide", "Nitrogen"],
      Moons: 0,
      Rings: "No",
    },
    {
      Planet: "Earth",
      atmosphericGasses: ["Nitrogen", "Oxygen"],
      Moons: 1,
      Rings: "No",
    },
    {
      Planet: "Jupitor",
      atmosphericGasses: ["Hydrogen", "Helium"],
      Moons: 79,
      Rings: "Yes",
    },
    {
      Planet: "Saturn",
      atmosphericGasses: ["Hydrogen", "Helium"],
      Moons: 83,
      Rings: "Yes",
    },
    {
      Planet: "Uranus",
      atmosphericGasses: ["Hydrogen", "Helium", "Methane"],
      Moons: 27,
      Rings: "Yes",
    },
  ];

  countOfMoons(havingRings) {

    let moonCount = 0;

    for(let i=0; i<this.planetArr.length; i++) {
        if(this.planetArr[i].Rings === havingRings) {
            moonCount += this.planetArr[i].Moons;
        }
    }

    return moonCount;
  }

  gasFoundOnMaximumPlanets() {
    let gasArray = [], gasFoundOnMaximumPlanets, gasFoundOnMaximumPlanetsCount = {};

    for(let i=0; i<this.planetArr.length; i++) {
        if(this.planetArr[i].atmosphericGasses !== null) {
            gasArray = gasArray.concat(this.planetArr[i].atmosphericGasses);
        }
    }

    gasArray.forEach(gasFoundOnMaximumPlanets => gasFoundOnMaximumPlanetsCount[gasFoundOnMaximumPlanets] ? gasFoundOnMaximumPlanetsCount[gasFoundOnMaximumPlanets] ++ : gasFoundOnMaximumPlanetsCount[gasFoundOnMaximumPlanets] = 1);

    // Getting max number of occurrences
    let max = Math.max(...Object.values(gasFoundOnMaximumPlanetsCount));

    let highest = Object.entries(gasFoundOnMaximumPlanetsCount).filter(([gasFoundOnMaximumPlanets, reps]) => reps === max);

    let planetNames = "";

    for (let j = 0; j < highest.length; j++) {
        planetNames += highest[j][0] + " ";
    }

    return planetNames;
  }
}

let planet1 = new Planet;
console.log(planet1.countOfMoons("Yes"));
console.log(planet1.gasFoundOnMaximumPlanets());