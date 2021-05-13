const { Schema, model } = require("mongoose");

let UserSchema = new Schema(
  {
    name: {
      type: String,
      required: true
    },
    email: {
      type: String,
      unique: true,
      required: true
    },
    passwordHash: {
      type: String,
      required: true
    },
    image: String,
  },
  {
    timestamps: true,
  }
);

let UserModel = model('user', UserSchema)

module.exports = UserModel