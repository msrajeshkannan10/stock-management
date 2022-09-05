const mongoose = require("mongoose");

const TableSchema = new mongoose.Schema(
  [
    {
        Name:{type:String},
        Department:{type:String},
        Year:{type:Number},
        Address:{type:String}
    }
  ]
);

module.exports = mongoose.model("Table", TableSchema);
