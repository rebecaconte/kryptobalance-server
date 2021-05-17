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
    amountInvested: {
      type: Number,
      required: true
    },
    currencyUsed: {
      type: String,
      required: true
    },
    price: {
      type: Object,
      required: true
    },
    symbol: {
      type: String,
      required: true
    },
    image: {
      type: String,
      required: true
    }
  },
  {
    timestamps
  }
);

const Coin = model("Coin", coinSchema);

module.exports = Coin;