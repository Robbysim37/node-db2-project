// DO YOUR MAGIC
const express = require("express")

const router = express.Router()

router.get("/", async (req,res,next) => {
    res.json("getting all cars")
})
router.get("/:id", async (req,res,next) => {
    res.json(`get car with id ${req.params.id}`)
})
router.post("/", async (req,res,next) => {
    res.json("posting new car")
})

module.exports = router