const car = require("./cars-model")

const checkCarId = async (req, res, next) => {
  // DO YOUR MAGIC
  try{
    const carById = await car.getById(req.params.id)
    if(!carById) {
      next({status:404,message:"not found"})
    } else{
      req.carById = carById
      next()
    }
  } catch (err) {
    next(err)
  }
}

const checkCarPayload = (req, res, next) => {
  // DO YOUR MAGIC

}

const checkVinNumberValid = (req, res, next) => {
  // DO YOUR MAGIC

}

const checkVinNumberUnique = (req, res, next) => {
  // DO YOUR MAGIC
  
}

module.exports = {
  checkCarId,
  checkCarPayload,
  checkVinNumberUnique,
  checkVinNumberValid
}