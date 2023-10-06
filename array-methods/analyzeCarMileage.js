function analyzeCarMileage(cars) {
    const outputObject = {}

    const averageMileage = cars.reduce((total, car) => total + car.mileage, 0) / cars.length;
    outputObject['averageMileage'] = parseFloat(averageMileage.toFixed(2))

    const highestMileageCar = cars.reduce((highest, car) => car.mileage > highest.mileage ? car : highest, cars[0]);
    outputObject['highestMileageCar'] = highestMileageCar

    const lowestMileageCar = cars.reduce((lowest, car) => car.mileage < lowest.mileage ? car : lowest, cars[0]);
    outputObject['lowestMileageCar'] = lowestMileageCar

    const totalMileage = cars.reduce((total, car) => total + car.mileage, 0)
    outputObject['totalMileage'] = totalMileage

    return outputObject
}

console.log(analyzeCarMileage([
    { make: 'Toyota', model: 'Camry', year: 2020, mileage: 30800 },
    { make: 'Honda', model: 'Civic', year: 2019, mileage: 32000 },
    { make: 'Chevrolet', model: 'Impala', year: 2021, mileage: 17500 },
    { make: 'Audi', model: 'R8', year: 2020, mileage: 13000 },
    { make: 'Tesla', model: 'Model 3', year: 2018, mileage: 50000 },
]))