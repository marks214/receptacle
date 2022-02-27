import { useState } from "react";

export const Ingredients = (props: any) => {

    const [name, setName] = useState<string>(props.name);
    const [ingredients, setIngredients] = useState<string[]>(props.ingredients);
    
    console.log("props", props)

    return (
      <>
        {/* {recipes.map((recipe: any, _: number) => {
          return (
            <>
              <h1 key={_}>{recipe.name}</h1>
              <ul>
                {recipe.ingredients.map((ingredient: any, _: number) => {
                  return(
                  <li key={_}>
                    {ingredient}
                  </li>
                  )
                })}
              </ul>
            </>
          )
        })} */}
      </>
    );
  };
  