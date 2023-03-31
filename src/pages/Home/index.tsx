import { useContext } from "react";
import { PokeballIconSmall } from "../../assets/pokeball"
import { PokemonList } from "../../components/PokemonList"
import { PokemonContext } from "../../context/PokemonContext";
import styles from "./style.module.scss"

export const Home = () => {

    const { pokemonsFiltered } = useContext(PokemonContext);

    return (
        <div className={styles.home}>
            <header>
                <div>
                    <PokeballIconSmall/>
                    <span>Pokedex</span>
                </div>
            </header>
            <PokemonList pokemonsUrls={pokemonsFiltered}/>
        </div>
    )
}