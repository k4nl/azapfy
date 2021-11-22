const getHeros = async () => {
  const response = await fetch (
    'http://homologacao3.azapfy.com.br/api/ps/metahumans',
    );
    const herosData = await response.json();

    return herosData;
}

export default getHeros;