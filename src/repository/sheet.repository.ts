import { Injectable } from "@nestjs/common"
import { response } from "express"

const axios = require('axios')

// @Injectable
// export class {
//   constructor ()
// }
export default function sheet  (logradouro, bairro, localidade, cep, uf){
    axios.post('https://sheetdb.io/api/v1/to8vhwddex27w', {
        rua: logradouro,
        bairro: bairro,
        cidade:localidade,
        cep:cep,
        uf:uf,
        idEntrega: Math.floor(Math.random() * 3000000 + 100000),
        status: 'Não entregue'
        
      }) .then((response) =>{
        return 'teste'
      }).catch((erro)=>{`Deu erro \n ${erro}`})
};

// module.exports= sheet