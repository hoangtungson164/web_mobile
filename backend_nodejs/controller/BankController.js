var con = require('../config/db');

exports.getAllBank = function (req, res) {
    var sql = "SELECT*FROM banks";
    con.query(sql, function(err, result) {
        if(err) throw err
        return res.status(200).json(result);
    })
}

exports.getAllConsensus = function (req, res) {
    var sql = "SELECT*FROM bankContract WHERE bank_id = " + req.params.id;
    con.query(sql, function(err, result) {
        if(err) throw err
        if(result.length < 1) return res.status(204).send("there are no information regarding to this bank")
        return res.status(200).json(result)
    })
}

