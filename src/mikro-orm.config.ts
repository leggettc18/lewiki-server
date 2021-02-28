import { PROD } from "./constants";
import { Page } from "./entities/Page";
import { MikroORM } from "@mikro-orm/core";
import path from "path";

export default {
  entities: [Page],
  migrations: {
    path: path.join(__dirname, "./migrations"),
    pattern: /^[\w-]+\d+\.[tj]s$/,
    disableForeignKeys: false,
  },
  wrap: false,
  dbName: "lewiki",
  user: "lewiki",
  password: "lewiki",
  type: "postgresql",
  debug: !PROD,
} as Parameters<typeof MikroORM.init>[0];
