# CodeIgniter 4 and React

## Setup

Requerimientos: https://www.codeigniter.com/user_guide/intro/requirements.html

Posicionarse en la carpeta tickets-api, copiar o renombar `env` a `.env` y especifica los datos de la base de datos:

```
database.default.hostname = localhost
database.default.database = dbname
database.default.username = dbuser
database.default.password = userpass
database.default.DBDriver = MySQLi
database.default.DBPrefix =
database.default.port = 3306
```
 Ejecutar composer:
```
composer install
```
Ejecutar migraciones y seeder

```
php spark migrate
php spark db:seed Issues
```

Posicionarse en la carpeta raíz (tickets-buzz) y ejecutar
```
npm install
npm run dev
```
Finalmente ingresar a: 
http://localhost:5173/



