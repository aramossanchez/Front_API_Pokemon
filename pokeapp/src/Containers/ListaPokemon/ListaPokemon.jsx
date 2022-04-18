import React, { useEffect, useState } from 'react';
import axios from 'axios';
const ListaPokemon = () =>{

    //HOOK
    const [listaPokemon, setlistaPokemon] = useState("")

    //HANDLER

    useEffect(async() =>{
        let lista = await axios.get("https://pokeapi.co/api/v2/pokemon/?limit=150&offset=0");
        setlistaPokemon(lista.data);
    },[])


    return(
        <div>{JSON.stringify(listaPokemon)}</div>
    )
}

export default ListaPokemon;