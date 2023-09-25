import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import helmet from "helmet";

//routes

import Connection from "./config/Connection.js";
import generalRoutes from "./routes/general.js";
import clientRoutes from "./routes/client.js";
import managementRoutes from "./routes/management.js";
import salesRoutes from "./routes/sales.js";

import {
  dataUser,
  dataProduct,
  dataProductStat,
  dataTransaction,
  dataOverallStat,
  dataAffiliateStat,
} from "./data/index.js";

import User from "./models/User.js";
import Product from "./models/Product.js";
import ProductStat from "./models/ProductStat.js";
import Transaction from "./models/Transaction.js";
import OverallStat from "./models/OverallStat.js";
import AffiliateStat from "./models/AffiliateStat.js";

const port = 9000 || process.env.PORT;

dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

app.use("/general", generalRoutes);
app.use("/client", clientRoutes);
app.use("/management", managementRoutes);
app.use("/sales", salesRoutes);

app.listen(port, () => {
  console.log("server started");
  //  Product.insertMany(dataProduct)
  //  ProductStat.insertMany(dataProductStat);
  // User.insertMany(dataUser);
  // Transaction.insertMany(dataTransaction);
  // OverallStat.insertMany(dataOverallStat);
  // AffiliateStat.insertMany(dataAffiliateStat);
});

Connection();
