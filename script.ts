
import { PrismaClient } from '@prisma/client'
const mysql = require('mysql')
var cron = require('node-cron');
const prisma = new PrismaClient();
import { vendas,vendas3,vendas4, vendas5 } from './conexao';
import { publico,publico3,publico4, publico5 } from './conexao';
import { estoque,estoque3,estoque4, estoque5} from './conexao';
import { con, con3,con4,con5 } from './conexao';



        
const funcaomain = async function execute() {
  try{
    var resposta1: any = await queryProd(con, vendas, estoque, publico); //space
  }catch(err){
    console.log(err+ ` erro ao consultar o produto empresa **SPACE`)
  }
  try{
    var resposta5: any = await queryProd(con5, vendas5, estoque5, publico5); //digital
  }catch(err){
    console.log(err+ ` erro ao consultar o produto empresa **digital`)
  }

  try{
    var resposta4: any = await queryProd(con4, vendas4, estoque4, publico4);  //filialsc
  }catch(err){
    console.log(err+ ` erro ao consultar o produto empresa **filialsc`)
  }

  try{
    var resposta3: any = await queryProd(con3, vendas3, estoque3, publico3); //eletromatriz
  }catch(err){
    console.log(err+ ` erro ao consultar o produto empresa **eletromatriz`)
  }

  const ProdSku = await ConsultaProd_saldo();
  for (let i = 0; i < resposta1.length; i++) {
        const aux = ProdSku.some((item: any) => item.CODIGO === resposta1[i].CODIGO)
        const codigoProduto = resposta1[i].CODIGO
        const SkuProduto = resposta1[i].SKU

        if (!aux) {

            try{
            cadastraProduto(con,codigoProduto,  SkuProduto);
                console.log(`cadastrando produto :${codigoProduto} sku: ${SkuProduto} `)
            }catch(err){ 
                console.log(err+ ` erro ao cadastrar o produto`)
            }
          }
      }

  const productsResposta1 = resposta1.filter((item: any) => {
    return item.ESTOQUE !== undefined;
  });
  const productsResposta3 = resposta3.filter((item: any) => {
    return item.ESTOQUE !== undefined;
  });
  const productsResposta4 = resposta4.filter((item: any) => {
    return item.ESTOQUE !== undefined;
  });
  const productsResposta5 = resposta5.filter((item: any) => {
    return item.ESTOQUE !== undefined;
  });

  /*     const productsResposta6 = resposta6.filter( (item:any)=>{
        return item.ESTOQUE !== undefined;
      });*/

  for (let i = 0; i < productsResposta1.length; i++) {
          let selectedSku: string = productsResposta1[i].SKU;
          let saldo: number = 0; // Inicialize o saldo para cada SKU
          let prodEmpresa1 = productsResposta1.find((item: any) => {
            return item.SKU === selectedSku && item !== undefined;
          });
          let prodEmpresa3 = productsResposta3.find((item: any) => {
            return item.SKU === selectedSku && item !== undefined;
          });
          let prodEmpresa4 = productsResposta4.find((item: any) => {
            return item.SKU === selectedSku && item !== undefined;
          });
          let prodEmpresa5 = productsResposta5.find((item: any) => {
            return item.SKU === selectedSku && item !== undefined;
          });
    /*    let prodEmpresa6 = productsResposta6.find((item: any) => {
        return item.SKU === selectedSku && item !== undefined;
    });*/

    if (prodEmpresa1 !== undefined) {
      console.log(`  ${prodEmpresa1.SKU}            saldo: ${prodEmpresa1.ESTOQUE}  **Space`)
      saldo += prodEmpresa1.ESTOQUE;
    }
    if (prodEmpresa3 !== undefined) {
      console.log(`  ${prodEmpresa3.SKU}            saldo: ${prodEmpresa3.ESTOQUE}  **eletroPR`)
      saldo += prodEmpresa3.ESTOQUE;
    }
    if (prodEmpresa4 !== undefined) {
      console.log(`  ${prodEmpresa4.SKU}            saldo: ${prodEmpresa4.ESTOQUE}  **filialSC`)
      saldo += prodEmpresa4.ESTOQUE;
    }
    if (prodEmpresa5 !== undefined) {
      console.log(`  ${prodEmpresa5.SKU}            saldo: ${prodEmpresa5.ESTOQUE}  **digitalmga`)
      saldo += prodEmpresa5.ESTOQUE;
    }

  try{
    updateProd(con, estoque, saldo, prodEmpresa1.SKU);

  }catch(err){
    console.log(err+` erro ao atualizar saldo do produto`)
  }
  }

}


              cron.schedule('*/1 * * * *', async () => {
                  console.log('executando')          
                  await funcaomain();
                            });




      async function cadastraProduto(con:any,codigo:any, sku:any){
        let sql = `INSERT INTO ${estoque}.prod_saldo (CODIGO, SKU) VALUES (?, ?) ON DUPLICATE KEY UPDATE SKU = ?`;
          await con.query(sql, [codigo, sku, sku], (err: any, response: any) => {
            if (err) {
              console.log(err, "erro ao cadastrar o produto");
            }
          })

      }

/*______________consulta a tabela prodsaldo devolvendo todos os valores______________*/ 
      async function ConsultaProd_saldo(){
            const consulta = await prisma.prod_saldo.findMany()
          return consulta
            //console.log(consulta)
        }

/*______________consulta o saldo real dos produtos devolvendo todos os valores______________*/ 

          async function queryProd(con:any, vendas:string,estoque:string,publico:string){
            return new Promise((resolve,reject)=>{
              con.query(
                         `
                            SELECT  
                            est.CODIGO,est.SKU,
                            IF(est.estoque < 0, 0, est.estoque) AS ESTOQUE
                          FROM 
                            (SELECT
                              P.CODIGO, P.OUTRO_COD SKU,
                              (SUM(PS.ESTOQUE) - 
                                (SELECT COALESCE(SUM((IF(PO.QTDE_SEPARADA > (PO.QUANTIDADE - PO.QTDE_MOV), PO.QTDE_SEPARADA, (PO.QUANTIDADE - PO.QTDE_MOV)) * PO.FATOR_QTDE) * IF(CO.TIPO = '5', -1, 1)), 0)
                                  FROM ${vendas}.cad_orca AS CO
                                  LEFT OUTER JOIN ${vendas}.pro_orca AS PO ON PO.ORCAMENTO = CO.CODIGO
                                  WHERE CO.SITUACAO IN ('AI', 'AP', 'FP')
                                  AND PO.PRODUTO = P.CODIGO)) AS estoque
                            FROM ${estoque}.prod_setor AS PS
                            LEFT JOIN ${publico}.cad_prod AS P ON P.CODIGO = PS.PRODUTO
                            INNER JOIN ${publico}.cad_pgru AS G ON P.GRUPO = G.CODIGO
                            LEFT JOIN ${estoque}.setores AS S ON PS.SETOR = S.CODIGO
                            WHERE S.EST_ATUAL = 'X' AND P.OUTRO_COD <> ''  OR P.OUTRO_COD <> null
                            GROUP BY P.CODIGO) AS est;
                          `
                          ,(err:any,response:any)=>{
                              if(err)
                              reject( err);
                              else{
                                resolve(response)
                              }
                              // res.json(response);  

                              }
                           )
                        })
                    }

   //______update nos saldos//______
                  function updateProd( con:any, estoque:any, saldo:any, sku:string ){
                    let sql =`
                      UPDATE ${estoque}.prod_saldo
                      SET ESTOQUE=${saldo}
                      WHERE SKU= '${sku}';`
                    con.query(sql,(err:string, response:any)=>{
                      console.log(`produto ${sku} atualizado saldo:${saldo}`)
                    })
                  }
               
               