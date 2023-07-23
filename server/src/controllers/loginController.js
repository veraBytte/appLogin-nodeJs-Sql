const connection = require('../models/db');
const jwt = require('jsonwebtoken');

module.exports.login = (req, res) => {
  const { username, password } = req.body;
  console.log(username);
  console.log(password);

  const consulta = `SELECT * FROM login WHERE username = '${username}' AND password = '${password}'`;

  try {
    connection.query(consulta, [username, password], (err, result) => {
      if (err) {
        console.log(err);
      }

      if (result.length > 0) {
        const token = jwt.sign({ username }, 'Stack', { expiresIn: '3m' });
        console.log(result);
        // Enviar solo el token como una cadena, no como un objeto.
        res.send({token});
      } else {
        res.send({ message: "Wrong username/password combination!" });
      }
    });
  } catch (error) {
    // Manejar el error adecuadamente aquí.
    console.error(error);
    res.status(500).send({ message: "Internal server error." });
  }
};