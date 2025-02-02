const car = require("./cars-model")
const vin = require("vin-validator")

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
  if(!req.body.vin){
    return next({status:400,message:"vin is missing"})
  }
  if(!req.body.make){
    return next({status:400,message:"make is missing"})
  }
  if(!req.body.model){
    return next({status:400,message:"model is missing"})
  }
  if(!req.body.mileage){
    return next({status:400,message:"mileage is missing"})
  }
  next()
}

const checkVinNumberValid = (req, res, next) => {
  // DO YOUR MAGIC
  if(vin.validate(req.body.vin)){
    next()
  } else {
    next({status: 400, message: `vin ${req.body.vin} is invalid`})
  }
}

const checkVinNumberUnique = async (req, res, next) => {
  // DO YOUR MAGIC
  try {
    const existing = await car.getByVin(req.body.vin)
    if(!existing){
      next()
    } else {
      next({status:400,message: `vin ${req.body.vin} already exists`})
    }
  } catch (err) {
    next(err)
  }
}

module.exports = {
  checkCarId,
  checkCarPayload,
  checkVinNumberUnique,
  checkVinNumberValid
}