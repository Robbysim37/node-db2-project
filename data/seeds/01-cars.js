// STRETCH

const cars = [
{
    vin: "JM1GJ1V51F1211362",
    make: "toyota",
    model: "prius",
    mileage: 10000,
    title: "clean",
    transmission: "manual"
},
{
    vin: "1FTRX18L7YNA86347",
    make: "toyota",
    model: "corolla",
    mileage: 23510,
    title: "salvage"
},
{
    vin: "1FTHS24Y3THA87231",
    make: "ford",
    model: "focus",
    mileage: 100,
}
]

exports.seed = async function(knex) {
    await knex("cars").truncate()
    await knex("cars").insert(cars)
}