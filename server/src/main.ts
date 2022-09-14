import "reflect-metadata";

import { createExpressServer } from "routing-controllers";
import { ORM } from "./database";
import { DisableCorsMiddleware } from "./middlewares/disable-cors";
import { UsersController } from "./modules/users/users.controller";

const app = createExpressServer({
  cors: true,
  controllers: [UsersController],
  middlewares: [DisableCorsMiddleware],

});


async function serve(app, port: number) {
  await ORM.connect(process.env.MONGODB_URL as any).then(() => {
    app.listen(port, () => {
      console.info(`Server is listening on port ${port}`);
    });
  });
}

serve(app, (process.env.PORT as any) ?? 3000);
