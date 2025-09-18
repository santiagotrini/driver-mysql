// importar librerias
const express = require('express');
const mysql   = require('mysql');
const cors    = require('cors'); 

// crear objeto app
const app = express();
app.use(cors());
// parsear cuerpos de peticiones en JSON
app.use(express.json());

// conectarse a la base de datos
const connection = mysql.createConnection({
  host: 'localhost',
  user: '',
  password: '',
  database: 'tp'
});

// peticiones tipo POST a /query 
app.post('/query', (req, res) => {
  const { query } = req.body; // la query que mandaron
  // hacer una query
  connection.query(query, (err, rs) => {
    res.json(rs);
  });

});

app.listen(3000, () => console.log('Server andando...'));