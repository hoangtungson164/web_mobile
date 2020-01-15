var con = require('../config/db');

exports.getAllBank = function (req, res) {
    var sql = "SELECT*FROM banks";
    con.query(sql, function(err, result) {
        if(err) return res.status(500).send('there is problem with server');
        if(result.length<1) return res.status(204).send("No content");
        res.status(200).json(result);
    })
}

exports.getAllConsensus = function (req, res) {
    var sql = "SELECT*FROM bankContract WHERE bank_id = " + req.params.id;
    con.query(sql, function(err, result) {
        if(err) return res.status(500).send('there is problem with server');
        if(result.length < 1) return res.status(204).send("there are no information regarding to this bank");
        res.status(200).json(result);
    })
}

exports.getAllReport = function (req, res) {
    var sql = "SELECT*FROM reports"
    con.query(sql, function(err, result) {
        if(err) return res.status(500).send('there is problem with server');
        if(result.length<1) return res.status(204).send("No content");
        res.status(200).json(result);
    })
}
