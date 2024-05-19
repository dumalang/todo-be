import {Knex} from 'knex';

const table = 'mst_todo';

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable(table, table => {
    table.bigIncrements();
    table.string('uuid', 50);

    table.bigInteger('mst_user_id').nullable();

    table.string('todo').nullable();
    table.text('desc');

    table.tinyint('day').nullable();
    table.tinyint('month').nullable();
    table.time('time_start_at').nullable();
    table.time('time_end_at').nullable();
    table.tinyint('repeat').defaultTo(0);
    table.enum('repeat_period', ['daily', 'weekly', 'biweekly', 'monthly']);

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
