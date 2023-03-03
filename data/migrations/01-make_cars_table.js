exports.up = function (knex) {
  // DO YOUR MAGIC
  return knex.schema.createTable(`cars`, tbl => {
    tbl.increments()
    tbl.text("vin").notNullable().unique()
    tbl.text("make").notNullable()
    tbl.text("model").notNullable()
    tbl.text("mileage").notNullable()
    tbl.text("title")
    tbl.text("tansmission")
  })
};

exports.down = function (knex) {
  // DO YOUR MAGIC
};
