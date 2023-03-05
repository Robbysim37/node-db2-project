// STRETCH

const cars = [
{
    vin: "111111111",
    make: "toyota",
    model: "prius",
    mileage: 10000,
    title: "clean",
    transmission: "manual"
},
{
    vin: "222222222",
    make: "toyota",
    model: "corolla",
    mileage: 23510,
    title: "salvage"
},
{
    vin: "333333333",
    make: "ford",
    model: "focus",
    mileage: 100,
}
]

exports.seed = async function(knex) {
    await knex("cars").truncate()
    await knex("cars").insert(cars)
}