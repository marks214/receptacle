import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Recipe } from "../components/Recipe";
import { useState, memo } from "react";
import { useSelector } from 'react-redux';
import { getRecipes, selectRecipes } from "../store/recipesSlice";
import { useAppDispatch } from "../store/store";

export const Recipes = () => {
  const history = useNavigate();
  const dispatch = useAppDispatch();
  const { isLoading, hasError, recipes } = useSelector(selectRecipes);

  useEffect(() => {
    dispatch(getRecipes())

  }, [dispatch]);

  const renderRecipes = () => {
    // if (isLoading) return <Spinner />;
    if (hasError)
      return (
        <p >Cannot display categories...</p>
      );

    return (
      <>
        {recipes?.map((recipe) => (
          <div key={recipe.id}>
            <h1>TEST {recipe.name}</h1>
            <Recipe key={recipe.id} {...recipe} />
          </div>
        ))}
      </>
    );
  };

  return (
    <section>
      <h3 >
        Choose your favourite <span>recipe!</span>
      </h3>
      <div>{renderRecipes()}</div>
    </section>
  );
};
