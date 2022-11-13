import "reflect-metadata";
import { createExpressServer } from "routing-controllers";
import { DisableCorsMiddleware } from "./middlewares/disable-cors";
import { controllers } from "./modules";
import * as dotenv from "dotenv";
import mongoose from "mongoose";
import { NextFunction, Request } from "express";

dotenv.config({ path: `./.${process.env.NODE_ENV}.env` });

const app = createExpressServer({
  cors: true,
  controllers,
  middlewares: [DisableCorsMiddleware],
});

function logger(request: Request, response: Response, next: NextFunction) {
  console.log(request.baseUrl);
  next();
}

app.use("*", logger);

async function serve(app, port: number) {
  try {
    await mongoose.connect(process.env.DATABASE_URL, {
      auth: {
        username: process.env.DATABASE_USERNAME,
        password: process.env.DATABASE_PASSWORD,
      },
      dbName: process.env.DATABASE__NAME,
    });

    app.listen(port, () => {
      console.info(`Server is listening on port ${port}`);
    });
  } catch (error) {
    console.error(error);
  }
}

serve(app, (process.env.PORT as any) ?? 3000);
