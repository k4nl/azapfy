const ERROR_MESSAGE = 'Não foram encontrados herois!';

const getHeros = async () => {
  try {
    const response = await fetch('http://homologacao3.azapfy.com.br/api/ps/metahumans');
    const herosData = await response.json();
    return herosData;
  } catch (error) {
    throw new Error(ERROR_MESSAGE); 
  }
}

export default getHeros;