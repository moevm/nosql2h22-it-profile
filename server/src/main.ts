import { NextFunction, Request, Response } from "express";
import "reflect-metadata";

import { createExpressServer } from "routing-controllers";
import { ORM } from "./database";
import { UsersController } from "./modules/users/users.controller";

const app = createExpressServer({
  cors: true,
  controllers: [UsersController],
});

app.use((req: Request, res: Response, next: NextFunction) => {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

async function serve(app, port: number) {
  await ORM.connect(process.env.MONGODB_URL as any).then(() => {
    app.listen(port, () => {
      console.info(`Server is listening on port ${port}`);
    });
  });
}

serve(app, (process.env.PORT as any) ?? 3000);
