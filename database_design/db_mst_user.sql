create table mst_user
(
  id         bigint unsigned auto_increment
    primary key,
  uuid       varchar(50)  null,
  name       varchar(255) null,
  dob        datetime     null,
  created_at datetime     null,
  updated_at datetime     null,
  deleted_at datetime     null,
  created_by bigint       null,
  updated_by bigint       null,
  deleted_by bigint       null
);

