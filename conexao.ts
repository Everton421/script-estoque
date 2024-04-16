
const mysql = require('mysql')
require('dotenv').config()

               export  var estoque:any  | undefined = process.env.estoque;
               export  var vendas :any  | undefined = process.env.vendas;
               export  var publico:any  | undefined = process.env.publico;

                var host:string     | undefined = process.env.host;
                var user:string     | undefined = process.env.user;
                var port:string     | undefined = process.env.port;
                var password:string | undefined = process.env.password;

                export var con:any = mysql.createPool({
                    connectionLimit : 10,
                    host: host,
                    user: user,
                    port: port,
                    password: password,
                    database: estoque,
                    database2: publico,
                    database3: vendas,
                })



                con.getConnection(function(err:any, connection:any) {
                    if(err) throw err;
                    console.log(`conectado banco ${estoque} `)
                });


               export  var estoque3:any  | undefined = process.env.estoque3;
               export  var vendas3 :any  | undefined = process.env.vendas3;
               export  var publico3:any  | undefined = process.env.publico3;

                var host3:string     | undefined = process.env.host3;
                var user3:string     | undefined = process.env.user3;
                var port3:string     | undefined = process.env.port3;
                var password3:string | undefined = process.env.password3;

                export var con3:any = mysql.createPool({
                    connectionLimit : 10,
                    host: host3,
                    user: user3,
                    port: port3,
                    password: password3,
                    database: estoque3,
                    database2: publico3,
                    database3: vendas3,
                })

              
               
                con3.getConnection(function(err:any, connection:any) {
                    if(err) throw err;
                    console.log(`conectado banco ${estoque3} `)
                });


             export   var estoque4:any  | undefined = process.env.estoque4;
             export   var vendas4 :any  | undefined = process.env.vendas4;
             export   var publico4:any  | undefined = process.env.publico4;

               var host4:string     | undefined = process.env.host4;
               var user4:string     | undefined = process.env.user4;
               var port4:string     | undefined = process.env.port4;
               var password4:string | undefined = process.env.password4;

               export var con4:any = mysql.createPool({
                   connectionLimit : 10,
                   host: host4,
                   user: user4,
                   port: port4,
                   password: password4,
                   database: estoque4,
                   database2: publico4,
                   database3: vendas4,
               })

             
              con4.getConnection(function(err:any, connection:any) {
                    if(err) throw err;
                    console.log(`conectado banco ${estoque4} `)
                });

             
             export  var estoque5:any  | undefined = process.env.estoque5;
             export  var vendas5 :any  | undefined = process.env.vendas5;
             export  var publico5:any  | undefined = process.env.publico5;

               var host5:string     | undefined = process.env.host5;
               var user5:string     | undefined = process.env.user5;
               var port5:string     | undefined = process.env.port5;
               var password5:string | undefined = process.env.password5;

               export   var con5:any = mysql.createPool({
                   connectionLimit : 10,
                   host: host5,
                   user: user5,
                   port: port5,
                   password: password5,
                   database: estoque5,
                   database2: publico5,
                   database3: vendas5,
               })
               
                
                con5.getConnection(function(err:any, connection:any) {
                    if(err) throw err;
                    console.log(`conectado banco ${estoque5} `)
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
               
