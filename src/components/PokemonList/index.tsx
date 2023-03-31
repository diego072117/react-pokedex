import { PokemonCard } from '../PokemonCard'
import styles from './style.module.scss'

interface Props {
  pokemonsUrls?: string[] | null
  page?: number
  perPage?: number
}

export const PokemonList = ({ pokemonsUrls, page, perPage }: Props) => {
  return (
    <div className={styles.pokemons}>
      {
        pokemonsUrls?.map((pokemonUrl) => <PokemonCard key={pokemonUrl} url={pokemonUrl} />)
      }
    </div>
  )
}
