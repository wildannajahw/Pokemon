import { useContext, useState } from "react";
import { PokemonContext } from "../../context/PokemonContext";
// import { usePokemon } from "./MyPokemon";
import { HandleCreate, UseCreatePokemon } from "./types";

// import { HandleCreate, UseCreatePokemon } from "./types";


export default function useCreatePokemon(): UseCreatePokemon {
  const [status, setStatus] = useState<string | null>(null);
  const { create } = useContext(PokemonContext);
  const error = status && status !== "loading" ? status : null;

  const handleCreate: HandleCreate = (name, pokemon) =>
    new Promise((resolve, reject) => {
      try {
        setStatus("loading");
        const result = create(name, pokemon);
        setStatus(null);
        resolve(result);
      } catch (e) {
        setStatus((e as Error).message);
        reject(error);
      }
    });

  return [handleCreate, { loading: status === "loading", error }];
}
