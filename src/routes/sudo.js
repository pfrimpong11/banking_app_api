
import express from "express";
import getAllCustomers from "../controllers/sudo/GetAllCustomers.js";

const route  =  express.Router()



route.get("/allcustomers",getAllCustomers)



export const sudo =  route