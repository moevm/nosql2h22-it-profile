import "reflect-metadata";
import { useExpressServer } from "routing-controllers";
import { DisableCorsMiddleware } from "./middlewares/disable-cors";
import { controllers } from "./modules";
import * as dotenv from "dotenv";
import mongoose from "mongoose";
import * as path from "path";
import * as bodyParser from "body-parser";
import * as cookieParser from "cookie-parser";
import express = require("express");
import { authorizationChecker } from "./middlewares/authorizationChecker";
import { currentUserChecker } from "./middlewares/currentUserChecker";

dotenv.config({
  path: path.resolve(__dirname, "..", `.${process.env.NODE_ENV}.env`),
});

const app = express();

app.use(cookieParser());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

const server = useExpressServer(app, {
  currentUserChecker,
  authorizationChecker,
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
