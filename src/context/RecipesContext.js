import React,  { createContext, useState } from "react"

export const RecipesContext = createContext();

const RecipesProvider = (props) => {

  const [recipes, setRecipes] = useState([]);
  const [searchDrink, setSearchDrink] = useState({
    name: '',
    category: '',
  });

  return (
    <RecipesContext.Provider
      value={{
        setSearchDrink
      }}
    >
      {props.children}
    </RecipesContext.Provider>
  )
}

export default RecipesProvider;
