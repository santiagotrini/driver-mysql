// importar librerias
const express = require('express');
const mysql   = require('mysql');
const cors    = require('cors'); 

// crear objeto app
const app = express();
// para evitar errores de CORS porque las 
// peticiones del cliente son a un dominio 
// distinto a si mismo
app.use(cors());
// parsear cuerpos de peticiones en JSON
app.use(express.json());

// conectarse a la base de datos
// hay que pasar en un objeto los datos de conexion
// ajustar de acuerdo a la instalacion de cada uno
const connection = mysql.createConnection({
  host: 'localhost',
  user: '',
  password: '',
  database: 'tp'
});

// peticiones tipo POST a /query 
// cada vez que alguien haga una peticion a http://localhost:3000/query 
// y mande una consulta de SQL en la peticion 
// el servidor responde en formato JSON con 
// la respuesta de la query
app.post('/query', (req, res) => {
  const { query } = req.body; // la query que mandaron
  // hacer una query
  connection.query(query, (err, rs) => {
    res.json(rs); // responder en formato JSON con el resultado
  });
});

// escuchar peticiones en el puerto 3000
app.listen(3000, () => console.log('Server andando...'));