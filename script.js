"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var client_1 = require("@prisma/client");
var mysql = require('mysql');
var cron = require('node-cron');
var prisma = new client_1.PrismaClient();
var estoque = "space_eletro_estoque";
var vendas = "space_eletro_vendas";
var publico = "space_eletro_publico";
var con = mysql.createPool({
    connectionLimit: 10,
    host: "179.184.9.227",
    user: "intersig",
    port: '3110',
    password: "Nileduz",
    database: estoque,
    database2: publico,
    database3: vendas,
});
/*   var estoque2:string = "testeestoque_estoque";
   var vendas2:string ="testeestoque_vendas";
   var publico2:string = "testeestoque_publico";

   var con2:any = mysql.createPool({
   connectionLimit : 10,
       host: "server.intersig.com.br",
       user: "intersig",
       password: "Ganapataye",
       database: estoque2,
       database2: publico2,
       database3: vendas2,
   })
*/
var estoque3 = "eletrodigital_estoque";
var vendas3 = "eletrodigital_vendas";
var publico3 = "eletrodigital_publico";
var con3 = mysql.createPool({
    connectionLimit: 10,
    host: "server.intersig.com.br",
    user: "intersig",
    port: '3306',
    password: "Ganapataye",
    database: estoque3,
    database2: publico3,
    database3: vendas3,
});
var estoque4 = "filialsc_estoque";
var vendas4 = "filialsc_vendas";
var publico4 = "filialsc_publico";
var con4 = mysql.createPool({
    connectionLimit: 10,
    host: "server.intersig.com.br",
    user: "intersig",
    port: '3306',
    password: "Ganapataye",
    database: estoque4,
    database2: publico4,
    database3: vendas4,
});
var estoque5 = "digital_estoque";
var vendas5 = "digital_vendas";
var publico5 = "digital_publico";
var con5 = mysql.createPool({
    connectionLimit: 10,
    host: "179.184.11.220",
    user: "intersig",
    port: '3307',
    password: "Nileduz",
    database: estoque5,
    database2: publico5,
    database3: vendas5,
});
/*
    var estoque6:string = "eletrogold_estoque";
    var vendas6:string ="eletrogold_vendas";
    var publico6:string = "eletrogold_publico";

    var con6:any = mysql.createPool({
    connectionLimit : 10,
    host: "177.125.218.237",
    user: "intersig",
    port:'3306',
    password: "Ganapataye",
    database: estoque6,
    database2: publico6,
    database3: vendas6,
    })
*/
var funcaomain = function execute() {
    return __awaiter(this, void 0, void 0, function () {
        var resposta1, err_1, resposta5, err_2, resposta4, err_3, resposta3, err_4, ProdSku, _loop_1, i, productsResposta1, productsResposta3, productsResposta4, productsResposta5, _loop_2, i;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, queryProd(con, vendas, estoque, publico)];
                case 1:
                    resposta1 = _a.sent();
                    return [3 /*break*/, 3];
                case 2:
                    err_1 = _a.sent();
                    console.log(err_1 + " erro ao consultar o produto empresa **SPACE");
                    return [3 /*break*/, 3];
                case 3:
                    _a.trys.push([3, 5, , 6]);
                    return [4 /*yield*/, queryProd(con5, vendas5, estoque5, publico5)];
                case 4:
                    resposta5 = _a.sent();
                    return [3 /*break*/, 6];
                case 5:
                    err_2 = _a.sent();
                    console.log(err_2 + " erro ao consultar o produto empresa **digital");
                    return [3 /*break*/, 6];
                case 6:
                    _a.trys.push([6, 8, , 9]);
                    return [4 /*yield*/, queryProd(con4, vendas4, estoque4, publico4)];
                case 7:
                    resposta4 = _a.sent();
                    return [3 /*break*/, 9];
                case 8:
                    err_3 = _a.sent();
                    console.log(err_3 + " erro ao consultar o produto empresa **filialsc");
                    return [3 /*break*/, 9];
                case 9:
                    _a.trys.push([9, 11, , 12]);
                    return [4 /*yield*/, queryProd(con3, vendas3, estoque3, publico3)];
                case 10:
                    resposta3 = _a.sent();
                    return [3 /*break*/, 12];
                case 11:
                    err_4 = _a.sent();
                    console.log(err_4 + " erro ao consultar o produto empresa **eletromatriz");
                    return [3 /*break*/, 12];
                case 12: return [4 /*yield*/, ConsultaProd_saldo()];
                case 13:
                    ProdSku = _a.sent();
                    _loop_1 = function (i) {
                        var aux = ProdSku.some(function (item) { return item.CODIGO === resposta1[i].CODIGO; });
                        var codigoProduto = resposta1[i].CODIGO;
                        var SkuProduto = resposta1[i].SKU;
                        if (aux) {
                            try {
                                updateSku(codigoProduto, SkuProduto);
                                console.log("update :".concat(resposta1[i].CODIGO, " sku: ").concat(resposta1[i].SKU));
                            }
                            catch (err) {
                                console.log(err + " erro ao atualizar  o produto");
                            }
                        }
                        else {
                            try {
                                addSku(codigoProduto, SkuProduto);
                                console.log("cadastrando produto :".concat(codigoProduto, " sku: ").concat(SkuProduto, " "));
                            }
                            catch (err) {
                                console.log(err + " erro ao cadastrar o produto");
                            }
                        }
                    };
                    for (i = 0; i < resposta1.length; i++) {
                        _loop_1(i);
                    }
                    productsResposta1 = resposta1.filter(function (item) {
                        return item.ESTOQUE !== undefined;
                    });
                    productsResposta3 = resposta3.filter(function (item) {
                        return item.ESTOQUE !== undefined;
                    });
                    productsResposta4 = resposta4.filter(function (item) {
                        return item.ESTOQUE !== undefined;
                    });
                    productsResposta5 = resposta5.filter(function (item) {
                        return item.ESTOQUE !== undefined;
                    });
                    _loop_2 = function (i) {
                        var selectedSku = productsResposta1[i].SKU;
                        var saldo = 0; // Inicialize o saldo para cada SKU
                        var prodEmpresa1 = productsResposta1.find(function (item) {
                            return item.SKU === selectedSku && item !== undefined;
                        });
                        var prodEmpresa3 = productsResposta3.find(function (item) {
                            return item.SKU === selectedSku && item !== undefined;
                        });
                        var prodEmpresa4 = productsResposta4.find(function (item) {
                            return item.SKU === selectedSku && item !== undefined;
                        });
                        var prodEmpresa5 = productsResposta5.find(function (item) {
                            return item.SKU === selectedSku && item !== undefined;
                        });
                        /*    let prodEmpresa6 = productsResposta6.find((item: any) => {
                            return item.SKU === selectedSku && item !== undefined;
                        });*/
                        if (prodEmpresa1 !== undefined) {
                            console.log("  ".concat(prodEmpresa1.SKU, "            saldo: ").concat(prodEmpresa1.ESTOQUE, "  **Space"));
                            saldo += prodEmpresa1.ESTOQUE;
                        }
                        if (prodEmpresa3 !== undefined) {
                            console.log("  ".concat(prodEmpresa3.SKU, "            saldo: ").concat(prodEmpresa3.ESTOQUE, "  **eletroPR"));
                            saldo += prodEmpresa3.ESTOQUE;
                        }
                        if (prodEmpresa4 !== undefined) {
                            console.log("  ".concat(prodEmpresa4.SKU, "            saldo: ").concat(prodEmpresa4.ESTOQUE, "  **filialSC"));
                            saldo += prodEmpresa4.ESTOQUE;
                        }
                        if (prodEmpresa5 !== undefined) {
                            console.log("  ".concat(prodEmpresa5.SKU, "            saldo: ").concat(prodEmpresa5.ESTOQUE, "  **digitalmga"));
                            saldo += prodEmpresa5.ESTOQUE;
                        }
                        try {
                            updateProd(con, estoque, saldo, prodEmpresa1.SKU);
                        }
                        catch (err) {
                            console.log(err + " erro ao atualizar saldo do produto");
                        }
                    };
                    /*     const productsResposta6 = resposta6.filter( (item:any)=>{
                          return item.ESTOQUE !== undefined;
                        });*/
                    for (i = 0; i < productsResposta1.length; i++) {
                        _loop_2(i);
                    }
                    return [2 /*return*/];
            }
        });
    });
};
cron.schedule('*/1 * * * *', function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                console.log('executando');
                return [4 /*yield*/, funcaomain()];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); });
/*______________atualiza o sku dos produtos______________*/
function updateSku(codigoProduto, skuProduto) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, prisma.prod_saldo.update({
                        where: { CODIGO: codigoProduto },
                        data: {
                            SKU: skuProduto,
                        },
                    })];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
/*______________cdastra produto na tabela prod_saldo ______________*/
function addSku(codigoProduto, skuProduto) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, prisma.prod_saldo.create({
                        data: {
                            CODIGO: codigoProduto,
                            SKU: skuProduto,
                        },
                    })];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
/*______________consulta a tabela prodsaldo devolvendo todos os valores______________*/
function ConsultaProd_saldo() {
    return __awaiter(this, void 0, void 0, function () {
        var consulta;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, prisma.prod_saldo.findMany()];
                case 1:
                    consulta = _a.sent();
                    return [2 /*return*/, consulta
                        //console.log(consulta)
                    ];
            }
        });
    });
}
/*______________consulta o saldo real dos produtos devolvendo todos os valores______________*/
function queryProd(con, vendas, estoque, publico) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, new Promise(function (resolve, reject) {
                    con.query("\n                            SELECT  \n                            est.CODIGO,est.SKU,\n                            IF(est.estoque < 0, 0, est.estoque) AS ESTOQUE\n                          FROM \n                            (SELECT\n                              P.CODIGO, P.OUTRO_COD SKU,\n                              (SUM(PS.ESTOQUE) - \n                                (SELECT COALESCE(SUM((IF(PO.QTDE_SEPARADA > (PO.QUANTIDADE - PO.QTDE_MOV), PO.QTDE_SEPARADA, (PO.QUANTIDADE - PO.QTDE_MOV)) * PO.FATOR_QTDE) * IF(CO.TIPO = '5', -1, 1)), 0)\n                                  FROM ".concat(vendas, ".cad_orca AS CO\n                                  LEFT OUTER JOIN ").concat(vendas, ".pro_orca AS PO ON PO.ORCAMENTO = CO.CODIGO\n                                  WHERE CO.SITUACAO IN ('AI', 'AP', 'FP')\n                                  AND PO.PRODUTO = P.CODIGO)) AS estoque\n                            FROM ").concat(estoque, ".prod_setor AS PS\n                            LEFT JOIN ").concat(publico, ".cad_prod AS P ON P.CODIGO = PS.PRODUTO\n                            INNER JOIN ").concat(publico, ".cad_pgru AS G ON P.GRUPO = G.CODIGO\n                            LEFT JOIN ").concat(estoque, ".setores AS S ON PS.SETOR = S.CODIGO\n                            WHERE S.EST_ATUAL = 'X' AND P.OUTRO_COD <> ''  OR P.OUTRO_COD <> null\n                            GROUP BY P.CODIGO) AS est;\n                          "), function (err, response) {
                        if (err)
                            reject(err);
                        else {
                            resolve(response);
                        }
                        // res.json(response);  
                    });
                })];
        });
    });
}
//______update nos saldos//______
function updateProd(con, estoque, saldo, sku) {
    var sql = "\n                      UPDATE ".concat(estoque, ".prod_saldo\n                      SET ESTOQUE=").concat(saldo, "\n                      WHERE SKU= '").concat(sku, "';");
    con.query(sql, function (err, response) {
        console.log("produto ".concat(sku, " atualizado saldo:").concat(saldo));
    });
}
