import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from "axios";
import PokeItem from './PokeItem';


const PokeListBlock = styled.div`
  box-sizing: border-box;
  padding-bottom: 3rem;
  width: 768px;
  margin: 0 auto;
  margin-top: 2rem;
  /* background-color: pink; */


  @media screen and (max-width: 768px) {
    width: 100%;
    padding-left: 1rem;
    padding-right: 1rem;
  }
`

function PokeList() {
  const [pokes, setPokes] = useState(null);

  useEffect(() => {
    const fetchPokeData = async () => {
      try {
        const response = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=100&offset=0")
        console.log(response);
        setPokes(response.data.results)
      } catch (error) {
        console.error(error);
      }
    };
    fetchPokeData()
  }, [])
  return (
    <PokeListBlock>
      {pokes && pokes.map((poke) => {
        return <PokeItem key={poke.name} poke={poke}/>
      })}
    </PokeListBlock>
  );
}

export default PokeList;