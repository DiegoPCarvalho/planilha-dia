const path = require('path');
const express = require('express');
const app = express();
const port = 5006;
 
app.use(express.static(path.join(__dirname, 'build')));
app.use(express.static("private"));

app.use((req, res, next) => {
  res.sendFile(path.join(__dirname, ".", "build", "index.html"));
});

app.listen(port, (err) => {
  try{
      console.log('Servidor Online na Porta: ' + port);
  }catch(error) {
    console.log("Erro: " + error)
  }
});