
# Se define que versión de node voy a usar para ejecutar el proyecto
# latest
FROM node
# FROM node:12.18.1

# Se establece la ruta de las carpetas donde va a estar corriendo node dentro de nuestro container 
# /usr/src/app
WORKDIR /app


# ======== DECIRLE A DOCKER COMO SE LEVANTA EL PROYECTO DE NODE =======

# Copiar el package json y se va en la raiz del contenedor
# SINTAXIS COPY origen destino 
COPY package.json ./

# Ya que se copio el package.json en el container
# instalar las librerias necesarias para que corra el proyecto
RUN npm install

# Se va a copiar todo donde estas ubicado a la raiz del contenedor 
 COPY  . .

 
# Exponer un puerto desde el contenedor
EXPOSE 3001


# El comando para correr el proyecto con node
CMD ["node", "index.js"]

# CMD["nodemon", '']

 