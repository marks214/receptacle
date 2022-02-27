import { Ingredients } from "./Ingredients";
import { Link, Route, Routes, useNavigate, useParams } from "react-router-dom";
import React, { useEffect, useState, memo, MouseEvent } from "react";
import { IRecipe } from "../store/types";
import { useAppDispatch } from "../store/store";
import { setSelectedRecipe, getRecipe, selectSelectedRecipe, selectHasError, selectIsLoading } from "../store/recipesSlice";
import { useSelector } from "react-redux";


interface Id {
  id: string | undefined;
}

export const Recipe = (): JSX.Element => {
  const recipe = useSelector(selectSelectedRecipe);
  const loading = useSelector(selectIsLoading);
  const hasError = useSelector(selectHasError);
  const dispatch = useAppDispatch();

  const getName = (str: string) => {
    return str.replace(/\s/g, '')
  }

  // const handleClick = (event: MouseEvent<HTMLElement>) => {
  //   dispatch(getRecipe(name));
  //   console.log("🔥", event, name);
  // }

  useEffect(() => {
    dispatch(getRecipe(recipe?.id??"1"));
  }, [dispatch])

  return (
    <>
      <nav>
        <h1>test {recipe?.name}</h1>
        {/* {name?.map((recipe: any, _: number) => {
          return (
            <div key={_}>

              <Link to={`/recipes/${getName(recipe.name)}`} >
                <button onClick={() => handleClick(recipe)}>{recipe.name}</button>
              </Link>

            </div>
          )
        })} */}
      </nav>
    </>
  );
}

