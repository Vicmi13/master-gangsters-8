# COMANDOS

# Conexión

psql -U postgres -p

# Manual de SQL.

\h keyword

# Manual de comandos postgreSQL.

\?

# Cerrar consola.

\q

# show databases;

\l y \l+

# use database_name;

\c

# show tables;

\dt

# describe table_name;

\d name_table

# Ejecutar script SQL.

\i input.sql

# Dump de la BD.

pg_dump -U nombre_usuario nombre_db > db.out

# Restaurar la BD.

psql -U postgres nombredb < archivo_restauracion.sql

# Iniciar el contador, para medir tiempos.

\timing

# Cambiar versión de postgreSQL.

SELECT version();

# Limpiar consola

ctrl + L

# Repetir el último comando.

\g

# Ver historial de comandos.

\s

# Guardar comando en un archivo.

\s archivo.txt

# SHOW config_file

postgresql.conf ⇒ Configuración gral.
pg_hba.conf ⇒ Equipos e ip’s.
pg_ident.conf ⇒ Usuarios y roles locales.
