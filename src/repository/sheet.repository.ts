const axios = require('axios')


function sheet  (logradouro, bairro, localidade, cep, uf){
    axios.post('https://sheetdb.io/api/v1/to8vhwddex27w', {
        rua: logradouro,
        bairro: bairro,
        cidade:localidade,
        cep:cep,
        uf:uf,
        idEntrega: Math.floor(Math.random() * 3000000 + 100000),
        status: 'Não entregue'
      })
}

module.exports= sheet