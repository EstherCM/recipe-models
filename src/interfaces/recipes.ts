import { TypeRecipe } from "../enums/type-recipe.enum";

export interface IRecipe {
  id: string;
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
