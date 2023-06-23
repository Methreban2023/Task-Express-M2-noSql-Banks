let accounts = require("./accounts");
const express = require("express");
const connectdb = require("./connectDb");
const app = express();
const accountsRoutes = require("./api/accounts/accounts.routes");
const dontenv = require("dotenv");
dontenv.config();

app.use(express.json());
app.use("/accounts", accountsRoutes);
connectdb();
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`The application is running on localhost:${PORT}`);
});
