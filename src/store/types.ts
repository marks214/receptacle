export interface IRecipe {
    id: string;
    name: string;
    author: string;
    ingredients?: string[];
  }
  
  export type IIngredients = string[];

  export interface ISingleMeal {
    id: string;
    meal: string;
    img: string;
  }
  
  export interface IFetchedMeals {
    idMeal: string;
    strMeal: string;
    strMealThumb: string;
  }
  
  