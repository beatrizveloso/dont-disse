const express = require("express");
const path = require("path");
const firebaseAdmin = require("firebase-admin");
const app = express();

// Configuração do Firebase Admin SDK
const serviceAccount = require("./path/to/your/firebase-adminsdk.json"); // Baixe o arquivo JSON do Firebase

firebaseAdmin.initializeApp({
  credential: firebaseAdmin.credential.cert(serviceAccount),
  databaseURL: "https://your-database-name.firebaseio.com" // URL do seu Firebase Realtime Database
});

const db = firebaseAdmin.database();

// Servir os arquivos da pasta 'public' (onde estará o index.html)
app.use(express.static("public"));

// Rota para a página principal
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Rota dinâmica para qualquer chave
app.get("/:key", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "editor.html"));
});

// Iniciar o servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
