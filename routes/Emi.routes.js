const express = require("express");
const { EmiModel } = require("../models/Emi.model");

const emiRoutes = express.Router();

emiRoutes.post("/calculate", async (req, res) => {
  const { loanAmt = 100000, rate=14, months=6 } = req.body;

  const p = loanAmt;
  const r = rate/12/100;
  const n = months*12;
  
//   const p = loanAmt;
//   const r = rate/12/100;
//   const n = months*12;




  const emi = (p * r * (1 + r) * n) / ((1 + r) * n - 1);

  const userEmi = new EmiModel({ ...req.body, emi });
  await userEmi.save();

  console.log('userEmi',userEmi);
  console.log('emi',emi);

//   res.status(200).send("emi is", emi.toString());
  res.status(200).send(`emi is, ${userEmi.toString()}`);
});


module.exports = {
    emiRoutes
}