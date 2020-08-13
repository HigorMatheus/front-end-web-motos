const axios = require('axios')
axios.get('https://servicodados.ibge.gov.br/api/v1/localidades/estados')
.then(response => {
//   document.querySelector('#state').innerHTML = `<code>${JSON.stringify(response.data)}</code>`

 for (let i = 0; i < response.data.length; i++) {
    console.log(response.data[i].sigla);
    console.log(response.data[i].nome);
    document.querySelector('#result').innerHTML = `<code>${JSON(response.data[i].name)}</code>`
 }
}) 

