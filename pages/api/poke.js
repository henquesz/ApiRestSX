async function poke(request, response){
    const pokeResponse = await fetch("https://pokeapi.co/api/v2/pokemon?limit=1000");
    const pokeResponseJson = await pokeResponse.json();

    response.setHeader('Cache-Control', 's-maxage-10, stale-while-revalidate');
    response.json({
        pokemon: pokeResponseJson
    })
}
export default poke;