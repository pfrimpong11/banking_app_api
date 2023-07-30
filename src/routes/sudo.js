
const express = require( "express");
const getAllCustomers = require( "../controllers/sudo/GetAllCustomers.js");

const route  =  express.Router()



route.get("/allcustomers",getAllCustomers)



module.exports =  route