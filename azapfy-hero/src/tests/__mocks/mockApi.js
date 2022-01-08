const heros = require('./mockedData');


const fetch = () =>
  Promise.resolve({
    json: () => Promise.resolve(heros)
  });

  console.log(fetch('http://homologacao3.azapfy.com.br/api/ps/metahumans'))

module.exports = fetch;
