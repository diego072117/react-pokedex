import { useState } from "react"
import { IPokemon } from "../interfaces/interfaces"

export const usePokemon = () => {

    const [ pokemon,serPokemon] = useState<null | undefined | IPokemon>()

    return {

    }
}