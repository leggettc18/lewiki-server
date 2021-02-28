import { MikroORM } from "@mikro-orm/core";
import { Page } from "./entities/Page";
import mikroOrmConfig from "./mikro-orm.config";

const main = async () => {
  const orm = await MikroORM.init(mikroOrmConfig);
  await orm.getMigrator().up();
};

main();

console.log("hello world!");
