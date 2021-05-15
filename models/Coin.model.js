const { Schema, model, ObjectId, timestamps } = require("mongoose");

// TODO: Please make sure you edit the user model to whatever makes sense in this case
const coinSchema = new Schema(
  {
    name: {
      type: String,
      required: true
    },
    purchaseDate: {
      type: Date,
      required: true
    },
    amount: {
      type: Number,
      required: true
    },
    price: {
      type: Object,
      required: true
    },
    user: {
      type: ObjectId,
      required: true
    }
  },
  {
    timestamps
  }
);

const Coin = model("Coin", coinSchema);

module.exports = Coin;
