import { useContext } from "react";
import { PokeballIconSmall } from "../../assets/pokeball"
import { Filters } from "../../components/Filters";
import { Pagination } from "../../components/Paginarion";
import { PokemonList } from "../../components/PokemonList"
import { PokemonContext } from "../../context/PokemonContext";
import { usePagination } from "../../hooks/usePagination";
import styles from "./style.module.scss"

export const Home = () => {

    const { pokemonsFiltered } = useContext(PokemonContext);
    const { page, nextPage, previousPage, backToHome } = usePagination();

    let perPage = 12

    return (
        <div className={styles.home}>
            <header>
                <div>
                    <PokeballIconSmall />
                    <span>Pokedex</span>
                </div>
            </header>
            <Filters />
            <PokemonList page={page} perPage={perPage} pokemonsUrls={pokemonsFiltered} />
            <Pagination
                page={page}
                perPage={perPage}
                nextPage={nextPage}
                previousPage={previousPage}
                maxItems={pokemonsFiltered?.length!}
            />
        </div>
    )
}