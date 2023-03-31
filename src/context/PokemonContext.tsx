import { createContext } from "react"
import { PokeType } from "../interfaces/types"

interface ContextProps{
    types: PokeType[]
    filterSelected: PokeType
    pokemonsFiltered: string[] | null
    changeTypeSelected: (type: PokeType) => void
}

export const PokemonContext = createContext<ContextProps>({} as ContextProps)

const PokemonProvaider = ({children}: any) => {

    let allPokemonsUrl = "https://pokeapi.co/api/v2/pokemon?limit=10000&offset=0";

    return (
        <PokemonContext.Provider>
            {children}
        </PokemonContext.Provider>
    )
}

export default PokemonProvaider