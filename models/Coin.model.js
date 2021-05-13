const { Schema, model } = require("mongoose");

let UserSchema = new Schema(
  {
  name: {
    type: String,
    required: true,
    unique: true
  },
  purchaseDate: Date,
  amount: Decimal128,
  user: ObjectId
  },
  {
    timestamps: true,
  }
);

let UserModel = model('user', UserSchema)

module.exports = UserModel