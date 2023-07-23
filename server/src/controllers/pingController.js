const connection = require('../models/db');

//Export ping function
module.exports.ping = (req, res) => {
    const consulta = 'SELECT * FROM login';

    try {
        connection.query(consulta, (err,results) => {
            console.log(results);
            res.json(results)
        })
    } catch (error) {
        
    }
};