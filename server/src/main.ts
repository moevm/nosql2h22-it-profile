import "reflect-metadata";
import { useExpressServer } from "routing-controllers";
import { controllers } from "./modules";
import dotenv from "dotenv";
import mongoose from "mongoose";
import path from "path";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
// import http from "http";
// import https from "https";
import express = require("express");
import { authorizationChecker } from "./middlewares/authorizationChecker";
import { currentUserChecker } from "./middlewares/currentUserChecker";
import { EducationsModel, ExperiencesModel, UsersModel, InformationsModel } from "./models";
import fs from "node:fs";
import { Db } from "mongodb";
import { usersjson, experiencesjson, educationsjson, informationsjson } from "./database";

dotenv.config({
  path: path.resolve(__dirname, "..", `.${process.env.NODE_ENV}.env`),
});

const app = express();

// const httpsServer = https.createServer(app);
// const httpServer = http.createServer(app);

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

async function serve(server: any, port: number) {
  try {
    mongoose.set("strictQuery", true);

    const connect = await mongoose.connect(process.env.DATABASE__URL as string, {
      auth: {
        username: process.env.DATABASE__USERNAME,
        password: process.env.DATABASE__PASSWORD,
      },
      dbName: process.env.DATABASE__NAME,
    });
    // await initDB(mongoose.connection.db);

    server.listen(port, () => {
      console.info(`Server is listening on port ${port}`);
    });

  } catch (error) {
    console.error(error);
  }
}

serve(server, (process.env.PORT as any) ?? 80);

async function initDB(db: Db) {
  if (await db.collection('users').countDocuments() === 0) {
    const data = JSON.parse(fs.readFileSync('./src/database/data.json', 'utf-8'));
    try {
      data.forEach(elem => {
        elem
      });
      console.log('data successfully load')
    } catch (error) {
      console.log('error', error);
    }
  }
  else {
    console.log('data already uploads');
  }


}