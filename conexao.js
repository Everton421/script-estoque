"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.con5 = exports.publico5 = exports.vendas5 = exports.estoque5 = exports.con4 = exports.publico4 = exports.vendas4 = exports.estoque4 = exports.con3 = exports.publico3 = exports.vendas3 = exports.estoque3 = exports.con = exports.publico = exports.vendas = exports.estoque = void 0;
var mysql = require('mysql');
require('dotenv').config();
exports.estoque = process.env.estoque;
exports.vendas = process.env.vendas;
exports.publico = process.env.publico;
var host = process.env.host;
var user = process.env.user;
var port = process.env.port;
var password = process.env.password;
exports.con = mysql.createPool({
    connectionLimit: 10,
    host: host,
    user: user,
    port: port,
    password: password,
    database: exports.estoque,
    database2: exports.publico,
    database3: exports.vendas,
});
exports.con.getConnection(function (err, connection) {
    if (err)
        throw err;
    console.log("conectado banco ".concat(exports.estoque, " "));
});
exports.estoque3 = process.env.estoque3;
exports.vendas3 = process.env.vendas3;
exports.publico3 = process.env.publico3;
var host3 = process.env.host3;
var user3 = process.env.user3;
var port3 = process.env.port3;
var password3 = process.env.password3;
exports.con3 = mysql.createPool({
    connectionLimit: 10,
    host: host3,
    user: user3,
    port: port3,
    password: password3,
    database: exports.estoque3,
    database2: exports.publico3,
    database3: exports.vendas3,
});
exports.con3.getConnection(function (err, connection) {
    if (err)
        throw err;
    console.log("conectado banco ".concat(exports.estoque3, " "));
});
exports.estoque4 = process.env.estoque4;
exports.vendas4 = process.env.vendas4;
exports.publico4 = process.env.publico4;
var host4 = process.env.host4;
var user4 = process.env.user4;
var port4 = process.env.port4;
var password4 = process.env.password4;
exports.con4 = mysql.createPool({
    connectionLimit: 10,
    host: host4,
    user: user4,
    port: port4,
    password: password4,
    database: exports.estoque4,
    database2: exports.publico4,
    database3: exports.vendas4,
});
exports.con4.getConnection(function (err, connection) {
    if (err)
        throw err;
    console.log("conectado banco ".concat(exports.estoque4, " "));
});
exports.estoque5 = process.env.estoque5;
exports.vendas5 = process.env.vendas5;
exports.publico5 = process.env.publico5;
var host5 = process.env.host5;
var user5 = process.env.user5;
var port5 = process.env.port5;
var password5 = process.env.password5;
exports.con5 = mysql.createPool({
    connectionLimit: 10,
    host: host5,
    user: user5,
    port: port5,
    password: password5,
    database: exports.estoque5,
    database2: exports.publico5,
    database3: exports.vendas5,
});
exports.con5.getConnection(function (err, connection) {
    if (err)
        throw err;
    console.log("conectado banco ".concat(exports.estoque5, " "));
});
//       var estoque6:string  | undefined = process.env.estoque6;
//       var vendas6 :string  | undefined = process.env.vendas6;
//       var publico6:string  | undefined = process.env.publico6;
//       var host6:string     | undefined = process.env.host6;
//       var user6:string     | undefined = process.env.user6;
//       var port6:string     | undefined = process.env.port6;
//       var password6:string | undefined = process.env.password6;
//
//       var con6:any = mysql.createPool({
//           connectionLimit : 10,
//           host: host6,
//           user: user6,
//           port: port6,
//           password: password6,
//           database: estoque6,
//           database2: publico6,
//           database3: vendas6,
//       })
//          con6.getConnection(function(err:any, connection:any) {
//              if(err) throw err;
//              console.log(`conectado banco ${estoque6} `)
//          });
