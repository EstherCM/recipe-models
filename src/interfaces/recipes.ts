import { TypeRecipe } from '../enums/type-recipe';

export interface IRecipe {
    name: string;
    image: string;
    ingredients: string[];
    preparation: string[];
    people: number;
    time: number;
    notes: string;
    tags: string[];
    type: TypeRecipe[];
  }