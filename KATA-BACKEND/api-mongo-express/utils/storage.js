const { Storage } = require("@google-cloud/storage");

const storage = new Storage({
  projectId: "bucket-api-g8",
  keyFilename: "service.json",
});

const bucket = storage.bucket("bucket-api-g8.appspot.com");

module.exports = (file) => {
  return new Promise((resolve, reject) => {
    if (!file) reject("El archivo no se encontró");

    console.log("file");
    const newFileName = `${file.originalname}_${Date.now()}`;

    // Se indicar a través de file() que tenemos un archivo
    // y los vamos a ir subiendo en pequeños modulos //torrente de datos
    const fileUpload = bucket.file(newFileName);

    const blobStream = fileUpload.createWriteStream({
      metadata: {
        // VERIFICAR
        contentType: file.mimetype,
      },
    });

    // Eventos que escuchan
    blobStream.on("error", (error) => {
      console.log("error blobStream", blobStream);
      reject(error);
    });

    blobStream.on("finish", () => {
      // VERIFICAR
      const url = `https://storage.googleapis.com/${bucket.name}/${fileUpload.name}`;
      resolve(url);
    });
  });
};
