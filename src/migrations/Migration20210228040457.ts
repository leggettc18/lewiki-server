import { Migration } from '@mikro-orm/migrations';

export class Migration20210228040457 extends Migration {

  async up(): Promise<void> {
    this.addSql('create table "page" ("id" serial primary key, "created_at" timestamptz(0) not null, "updated_at" timestamptz(0) not null, "title" text not null);');
  }

}
