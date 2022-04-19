
# Se define de donde con que va a  estar ejecutando el proyecto
# latest
FROM node
# FROM node:12.18.1

# Se establece la ruta donde va a estar corriendo node en nuestro container 
WORKDIR /app

# Copiar el package json y se va en la raiz del contenedor
# COPY origen destino 
COPY package.json ./

# Instalar las librerias necesarias para que correra el proyecto
RUN npm install

# Se va a copiar todo donde estas ubicado a la raiz del contenedor 
 COPY  . .

 
 #Exponer un puerto desde el contenedor
 EXPOSE 3001


# El comando para correr el proyecto con node
CMD ["node", "index.js"]


 