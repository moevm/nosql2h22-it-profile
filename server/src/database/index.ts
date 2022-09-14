import { MongoClient, MongoClientOptions } from "mongodb";

class CustomORM {
  private static instance: CustomORM | null;

  constructor() {
    if (CustomORM.instance) {
      return CustomORM.instance;
    }

    CustomORM.instance = this;
  }

  async connect(url: string, option?: MongoClientOptions) {
    return MongoClient.connect(url, option);
  }
}

export const ORM = new CustomORM();
