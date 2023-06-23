const { model, Schema } = require("mongoose");
const accountSchema = Schema({
  username: { type: String, required: true },
  funds: { type: Number, default: 0, required: true },
});

module.exports = model("Account", accountSchema);
