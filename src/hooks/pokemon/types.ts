/* eslint-disable no-unused-vars */

import React from "react";
import { Pokemon } from "../../query/types";


export interface MutateState {
  loading: boolean;
  error: string | null;
}

export const CREATE = "CREATE_POKEMON";

export const REMOVE = "REMOVE_POKEMON";

export type CreateType = "CREATE_POKEMON";

export type RemoveType = "REMOVE_POKEMON";

export type TypesOption = "CREATE_POKEMON" | "REMOVE_POKEMON";

export type HandleCreate = (name: string, pokemon: Pokemon) => Promise<any>;

export type HandleRemove = (name: string) => Promise<any>;

export type UseCreatePokemon = [HandleCreate, MutateState];

export type UseDeletePokemon = [HandleRemove, MutateState];





export type RemovePokemonType = (nickname: string) => void;

export type CreatePokemonType = (nickname: string, pokemon: Pokemon) => boolean;

