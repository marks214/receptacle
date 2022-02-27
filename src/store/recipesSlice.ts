import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getLocalStorage } from '../utils/localStorageHelper';
import { RootState } from './store';
import axios from "axios";
import { IRecipe, } from './types';

const urlRecipes: string =
  '/recipes';

const urlMacros: string =
  '/macros';


export const getRecipes = createAsyncThunk(
  'recipes/all',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(urlRecipes);
      const recipes: IRecipe[] = response.data
        .map((recipe: IRecipe) => {
          return (
            {
              id: recipe.id,
              name: recipe.name
            })
        })
      return recipes;
    } catch (error: any) {
      return thunkAPI.rejectWithValue({ error: error.message });
    }
  },
);

export const getRecipe = createAsyncThunk(
  'recipes/id',
  async (id: string, thunkAPI) => {
    try {
      console.log("💯", id)
      const response = await axios.get(`${urlRecipes}/${id}`);
      console.log(`recipe ${id}`, response)
      const recipe: IRecipe = response.data;
      console.log("🔥❗️🔥", recipe)
      return recipe;
    } catch (error: any) {
      return thunkAPI.rejectWithValue({ error: error.message })
    }
  },
  //TODO .requests isn't working
  // https://redux-toolkit.js.org/api/createAsyncThunk
  // {
  //   condition: (id, { getState, extra }) => {
  //     const { recipe } = getState() as { recipe: RecipesState}
  //     const fetchStatus = recipe.requests[id]
  //     if (fetchStatus === 'fulfilled' || fetchStatus === 'loading') {
  //       // Already fetched or in progress, don't need to re-fetch
  //       return false
  //     }
  //   }
  // }
)


interface RecipesState {
  recipes: IRecipe[];
  isLoading: boolean;
  hasError: boolean;
  selectedRecipe?: IRecipe;
}

const initialState: RecipesState = {
  recipes: [],
  isLoading: false,
  hasError: false,
  selectedRecipe: undefined,
};

const recipesSlice = createSlice({
  name: 'recipes',
  initialState,
  reducers: {
    setSelectedRecipe(state, { payload }: PayloadAction<IRecipe>) {
      state.selectedRecipe = payload;
      localStorage.setItem('recipe', JSON.stringify(state.selectedRecipe));
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getRecipes.pending, (state) => {
      state.isLoading = true;
      state.hasError = false;
    });
    builder.addCase(
      getRecipes.fulfilled,
      (state, { payload }: PayloadAction<IRecipe[]>) => {
        state.recipes = payload;
        state.isLoading = false;
        state.hasError = false;
      }
    );
    builder.addCase(getRecipes.rejected, (state) => {
      state.isLoading = false;
      state.hasError = true;
    });
    builder.addCase(getRecipe.pending, (state) => {
      state.isLoading = false;
      state.hasError = false;
    });
    builder.addCase(
      getRecipe.fulfilled,
      (state, { payload }: PayloadAction<IRecipe>) => {
        state.selectedRecipe = payload;
        state.isLoading = false;
        state.hasError = false;
      }
    );
    builder.addCase(getRecipe.rejected, (state) => {
      state.isLoading = false;
      state.hasError = true;
    });
  },
});

//actions
export const { setSelectedRecipe } = recipesSlice.actions;

// selectors
export const selectRecipes = (state: RootState) => state.recipes;
export const selectIsLoading = (state: RootState) => state.recipes.isLoading;
export const selectHasError = (state: RootState) => state.recipes.hasError;
export const selectSelectedRecipe = (state: RootState) =>
  state.recipes.selectedRecipe;
// export const selectSelectedCategoryMeals = (state: RootState) =>
//   state.categories.selectedCategoryMeals;

//reducer
export default recipesSlice.reducer;