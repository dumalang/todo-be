import {Knex} from 'knex';

const table = 'tr_todo';

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable(table, table => {
    table.bigIncrements();
    table.string('uuid', 50);

    table.bigInteger('mst_todo_id');
    table.bigInteger('mst_user_id').nullable();

    table.dateTime('datetime_start_at').nullable();
    table.dateTime('datetime_end_at').nullable();

    table.enum('status', ['done', 'skipped']).nullable();

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
