import {Knex} from 'knex';

const table = 'mst_credential';

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable(table, table => {
    table.bigIncrements();
    table.string('uuid', 50);

    table.bigInteger('mst_user_id');
    table.string('credential');
    table.enum('type', ['email', 'phone', 'username', 'facebook', 'google']);
    table.string('password', 100).nullable();

    table.timestamps();
    table.dateTime('deleted_at').nullable();
    table.bigInteger('created_by').nullable();
    table.bigInteger('updated_by').nullable();
    table.bigInteger('deleted_by').nullable();
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTableIfExists(table);
}
