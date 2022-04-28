
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
# COPY package.json ./
COPY package.json .

# Ya que se copio el package.json en el container
# instalar las librerias necesarias para que corra el proyecto
RUN npm install

# Instala nodemon de manera global
# RUN npm install -g nodemon

# Se va a copiar todo donde estas ubicado a la raiz del contenedor 
 COPY  . .

 
# Exponer un puerto desde el contenedor
EXPOSE 3001

## THE LIFE SAVER
# ADD https://github.com/ufoscout/docker-compose-wait/releases/download/2.2.1/wait /wait
# RUN chmod +x /wait

# El comando para correr el proyecto con node
CMD ["node", "index.js"]

# El comando para correr el proyecto con nodemon
# CMD ["nodemon", "-L", "--watch", ".", "index.js"]

## Launch the wait tool and then your application
# CMD /wait && npm run dev

 
 # limpiar cache en build docker 
 # build --no-cache -t name_container .