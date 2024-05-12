create table tr_todo
(
  id            bigint unsigned auto_increment
    primary key,
  uuid          varchar(50)                                     null,
  mst_todo_id   bigint                                          null,
  day           tinyint                                         null,
  month         tinyint                                         null,
  time_start_at time                                            null,
  time_end_at   time                                            null,
  `repeat`      tinyint default 0                               null,
  repeat_period enum ('daily', 'weekly', 'biweekly', 'monthly') null,
  created_at    datetime                                        null,
  updated_at    datetime                                        null,
  deleted_at    datetime                                        null,
  created_by    bigint                                          null,
  updated_by    bigint                                          null,
  deleted_by    bigint                                          null
);

