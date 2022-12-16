import "reflect-metadata";
import { useExpressServer } from "routing-controllers";
import { DisableCorsMiddleware } from "./middlewares/disable-cors";
import { controllers } from "./modules";
import dotenv from "dotenv";
import mongoose from "mongoose";
import path from "path";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import http from "http";
import https from "https";
import express = require("express");
import { authorizationChecker } from "./middlewares/authorizationChecker";
import { currentUserChecker } from "./middlewares/currentUserChecker";

dotenv.config({
  path: path.resolve(__dirname, "..", `.${process.env.NODE_ENV}.env`),
});

const app = express();

const httpsServer = https.createServer(app);
const httpServer = http.createServer(app);

app.use(cookieParser());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

const server = useExpressServer(app, {
  currentUserChecker,
  authorizationChecker,
  controllers,
  cors: {
    origin: "*", // (note: do not use this in production)
  },
  middlewares: [],
});

async function serve(servers: any, port: number) {
  try {
    mongoose.set("strictQuery", true);

    await mongoose.connect(process.env.DATABASE__URL as string, {
      auth: {
        username: process.env.DATABASE__USERNAME,
        password: process.env.DATABASE__PASSWORD,
      },
      dbName: process.env.DATABASE__NAME,
    });

    servers[1].listen(80, () => {
      console.info(`Server is listening on port ${80}`);
    });

    servers[0].listen(443, () => {
      console.info(`Server is listening on port ${443}`);
    });
  } catch (error) {
    console.error(error);
  }
}

serve([httpsServer, httpServer], (process.env.PORT as any) ?? 3000);
