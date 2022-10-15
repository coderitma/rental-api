# JuCo Boilerplate

boilerplate to build a REST API with express more easily. It is equipped with various optional libraries such as `knex`, `mysql2`, `jwt` and many more.

It also provides a user model that can be directly used for authentication. It is modular following the Django design pattern.

![JuCo Logo](./juco.png?raw=true)

## Quick Start

Create database and create table user:

```sql
CREATE TABLE `user` (
	`email` VARCHAR(50) NOT NULL COLLATE 'latin1_swedish_ci',
	`namaDepan` VARCHAR(50) NULL DEFAULT NULL COLLATE 'latin1_swedish_ci',
	`namaBelakang` VARCHAR(50) NULL DEFAULT NULL COLLATE 'latin1_swedish_ci',
	`password` VARCHAR(255) NOT NULL COLLATE 'latin1_swedish_ci',
	`salt` VARCHAR(255) NOT NULL COLLATE 'latin1_swedish_ci',
	`aktif` TINYINT(4) NULL DEFAULT '1',
	`admin` TINYINT(4) NULL DEFAULT '0',
	`staff` TINYINT(4) NULL DEFAULT '0',
	PRIMARY KEY (`email`) USING BTREE
)
COLLATE='latin1_swedish_ci'
ENGINE=InnoDB
```
