import React,  { createContext, useState, useEffect } from "react"
import axios from 'axios'

export const RecipesContext = createContext();

const RecipesProvider = (props) => {

  const [consult, setConsult] = useState(false);
  const [recipes, setRecipes] = useState([]);
  const [searchDrink, setSearchDrink] = useState({
    name: '',
    category: '',
  });

  const { name, category } = searchDrink;

  useEffect(() => {

    if (consult) {
      const getRecipes = async () => {
        const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${name}&c=${category}`;
        const result = await axios.get(url);
        // console.log(result.data.drinks);
        setRecipes(result.data.drinks);

      }
      getRecipes();
    }

  }, [searchDrink, category, consult, name])
  return (
    <RecipesContext.Provider
      value={{
        recipes,
        setSearchDrink,
        setConsult,
      }}
    >
      {props.children}
    </RecipesContext.Provider>
  )
}

export default RecipesProvider;
