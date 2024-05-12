create table mst_credential
(
  id          bigint unsigned auto_increment
    primary key,
  uuid        varchar(50)                                               null,
  mst_user_id bigint                                                    null,
  credential  varchar(255)                                              null,
  type        enum ('email', 'phone', 'username', 'facebook', 'google') null,
  password    varchar(100)                                              null,
  created_at  datetime                                                  null,
  updated_at  datetime                                                  null,
  deleted_at  datetime                                                  null,
  created_by  bigint                                                    null,
  updated_by  bigint                                                    null,
  deleted_by  bigint                                                    null
);

