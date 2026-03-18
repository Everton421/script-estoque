 // import 'dotenv/config';
import mysql from 'mysql2/promise';


 export  const estoque:any  | undefined = process.env.estoque;
               export  const vendas :any  | undefined = process.env.vendas;
               export  const publico:any  | undefined = process.env.publico;

                const host:string       = process.env.host!;
                const user:string       = process.env.user!;
                const port:number       = Number(process.env.port!);
                const password:string   = process.env.password!;

                export const con:any = await  mysql.createPool({
                    connectionLimit : 10,
                    host: host,
                    user: user,
                    port: port,
                    password: password,
                })


 


               export  const estoque3:any = process.env.estoque3!;
               export  const vendas3 :any = process.env.vendas3!;
               export  const publico3:any = process.env.publico3!;

                const host3:string       = process.env.host3!;
                const user3:string       = process.env.user3!;
                const port3:number       = Number(process.env.port3!);
                const password3:string   = process.env.password3!;

                export const con3:any = await  mysql.createPool({
                    connectionLimit : 10,
                    host: host3,
                    user: user3,
                    password:password3,
                    port: port3,
                })




             export   const estoque4:any  = process.env.estoque4!;
             export   const vendas4 :any  = process.env.vendas4!;
             export   const publico4:any  = process.env.publico4!;

               const host4:string      = process.env.host4!;
               const user4:string      = process.env.user4!;
               const port4:number      = Number(process.env.port4!);
               const password4:string  = process.env.password4!;

               export const con4:any = mysql.createPool({
                   connectionLimit : 10,
                   host: host4,
                   user: user4,
                   port: port4,
                   password: password4,
               })

             
             // con4.getConnection(function(err:any, connection:any) {
              //      if(err) throw err;
              //      console.log(`conectado banco ${estoque4} `)
              //  });

             
             export  const estoque5:any   = process.env.estoque5!;
             export  const vendas5 :any   = process.env.vendas5!;
             export  const publico5:any   = process.env.publico5!;

               const host5:string      = process.env.host5!;
               const user5:string      = process.env.user5!;
               const port5:number      = Number(process.env.port5!);
               const password5:string  = process.env.password5!;

               export   const con5:any = await mysql.createPool({
                   connectionLimit : 10,
                   host: host5,
                   user: user5,
                   port: port5,
                   password: password5,
               })
               

/**----------------------------------------------------------------------- */

 