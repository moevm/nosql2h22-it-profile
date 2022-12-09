import "reflect-metadata";
import { createExpressServer, useExpressServer } from "routing-controllers";
import { DisableCorsMiddleware } from "./middlewares/disable-cors";
import { controllers } from "./modules";
import * as dotenv from "dotenv";
import mongoose from "mongoose";
import { NextFunction, Request } from "express";
import * as path from "path";
import bodyParser = require("body-parser");
import express = require("express");

dotenv.config({
  path: path.resolve(__dirname, "..", `.${process.env.NODE_ENV}.env`),
});

const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());


const server = useExpressServer(app, {
  cors: true,
  controllers,
  middlewares: [DisableCorsMiddleware],
});

async function serve(server: any, port: number) {
  try {
    mongoose.set("strictQuery", true);

    await mongoose.connect(process.env.DATABASE__URL as string, {
      auth: {
        username: process.env.DATABASE__USERNAME,
        password: process.env.DATABASE__PASSWORD,
      },
      dbName: process.env.DATABASE__NAME,
    });

    server.listen(port, () => {
      console.info(`Server is listening on port ${port}`);
    });
  } catch (error) {
    console.error(error);
  }
}

serve(server, (process.env.PORT as any) ?? 3000);
