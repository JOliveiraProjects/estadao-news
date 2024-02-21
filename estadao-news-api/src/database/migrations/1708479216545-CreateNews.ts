import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateNews1708479216545 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
              name: "news",
              columns: [
                { name: "id", type: "varchar", isPrimary: true },
                { name: "hat", type: "varchar" },
                { name: "url", type: "varchar" },
                { name: "title", type: "varchar", isUnique: true },
                { name: "image", type: "varchar" },
                { name: "thumbnail", type: "varchar" },
                { name: "content", type: "longtext" },
                {
                  name: "date_time_publication",
                  type: "timestamp",
                  default: "CURRENT_TIMESTAMP",
                },
              ],
            })
          );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("platforms");
    }

}
