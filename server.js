const express = require("express");
const path = require("path");
const app = express();

// Servir os arquivos da pasta 'public' (onde estará o index.html)
app.use(express.static("public"));

// Rota dinâmica para qualquer chave
app.get("/:key", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Iniciar o servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
