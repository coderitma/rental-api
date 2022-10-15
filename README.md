# Rental API

Sistem informasi peminjaman dan pengembalian mobil berbasis REST API menggunakan Express.js.

## Quick Start

Clone terlebih dahulu repo ini:

```
git clone https://github.com/coderitma/rental-api.git
```

Masuk ke project dan instal dependensi yang diperlukan:

```
cd rental-api.git
npm install
```

Buat file config bernama `.env`:

```
PROJECT_PORT=3001
PROJECT_KEY=<your-token>

DB_CLIENT=mysql2
DB_NAME=<your-db>
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=
DB_PORT=3306
```

Buat database dan satu tabel user:

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
