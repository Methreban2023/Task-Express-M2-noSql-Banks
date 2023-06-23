// let accounts = require("../../accounts");
const Account = require("../../db/models/Account");

exports.accountCreate = async (req, res) => {
  try {
    const newAccount = await Account.create(req.body);
    return res.status(201).json(newAccount);
  } catch (error) {
    res.status(500).json({ message: "500 Internal Server Error" });
    console.log(error);
  }
};

exports.accountDelete = async (req, res) => {
  const { accountId } = req.params;
  try {
    const foundAccount = await Account.findById(accountId);
    if (foundAccount) {
      await foundAccount.deleteOne();
      res.status(204).end();
    } else {
      res.status(404).json({ message: "Account not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
  // const foundAccount = accounts.find((account) => account.id === +accountId);
};

exports.accountUpdate = async (req, res) => {
  const { accountId } = req.params;
  try {
    const foundAccount = await Account.findById(accountId);

    res.status(204).end();
    if (foundAccount) {
      await foundAccount.updateOne(req.body);
      res.status(204).end();
    } else {
      res.status(404).json({ message: "Account not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
  // const foundAccount = accounts.find((account) => account.id === +accountId);
};

exports.accountsGet = async (req, res) => {
  try {
    const getAllAccounts = await Account.find({}, "-createdAt -updatedAt");
    console.log("accounts:", getAllAccounts);
    res.json(getAllAccounts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getAccountByUsername = async (req, res) => {
  const { username } = req.params;
  // const foundAccount = accounts.find(
  //   (account) => account.username === username
  // );
  const getAccount = await Account.findOne({ username: username }).exec();
  if (req.query.currency === "usd") {
    const accountInUsd = { ...foundAccount, funds: foundAccount.funds * 3.31 };
    res.status(201).json(accountInUsd);
  }
  res.status(201).json(foundAccount);
};
