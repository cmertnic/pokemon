"use client";

import { $pocemonsStore, getPocemonFx } from "@/store/pokimons/pocemonStore";
import { useUnit } from "effector-react";
import { useEffect, useState } from "react";
import styles from "./pokedex.module.scss";
import Image from "next/image";
import Card from "@/widgets/card/Card";
import { getPocemonSearchFx, pocemonsSearchStore, resetPocemonsSearch } from "@/store/pokemonSearchStore";

const Pokedex = () => {
  const pokemons = useUnit({
    pokemons: $pocemonsStore,
    getPokemonFx: getPocemonFx,
  });

	const [isSearch, setSearch] = useState([]);

	const pokemonsSearch = useUnit({
    pokemonsSearch: pocemonsSearchStore,
    getPokemonSearchFx: getPocemonSearchFx,
  });

	const firstArrPokemon = async () => {
    //resetPocemons();
    const newList = await pokemons.getPokemonFx(0);
    setSearch(newList);
  };

	const [pokemoned, setPokemon] = useState()

  useEffect(() => {
    pokemons.getPokemonFx();
  }, [pokemons.getPokemonFx]);

	useEffect(() => {
    pokemonsSearch.getPokemonSearchFx();
  }, [pokemonsSearch.getPokemonSearchFx]);

	useEffect(() => {
    firstArrPokemon();
  }, []);

	// if (!pokemons.pokemons) return <> <p>dsfsdf</p> </>

	// useEffect(() => {
	// 	fetch(pokemons.pokemons)
	// 		.then((res) => res.json())
	// 		.then(setPokemon)
	// }, [])

	const search = async (query, pokemonsSearch) => {
    if (!query) {
			firstArrPokemon()
      return;
    }
    return pokemonsSearch.filter((pokemon) => pokemon.name.includes(query));
  };

  const hendleChenge = async (e) => {
    const newList = await search(e.target.value, pokemonsSearch.pokemonsSearch);
    setSearch(newList);
  };

  return (
    <section className={styles.pokinex}>
      <div className="container">
        <div className={styles.pokinex__row}>
          <p className={styles.txt}>
            800 <b>Pokemons</b> for you to choose your favorite
          </p>
          <input type="text" placeholder="Encuentra tu pokémon..." className={styles.input} onChange={(e) => hendleChenge(e)}/>
          <ul>
					{isSearch ? isSearch.map((pokemon, i) => (
							<li key={i}><Card pokimon={pokemon.url}/></li>
          )): (
						<div>loader</div>
					)}
					</ul>
        </div>
      </div>
    </section>
  );

	
};

export default Pokedex;
