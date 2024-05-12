import {Knex} from 'knex';

const table = 'mst_user';

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable(table, table => {
    table.bigIncrements();
    table.string('uuid', 50);

    table.string('name').nullable();
    table.dateTime('dob').nullable();

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
