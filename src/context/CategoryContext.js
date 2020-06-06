import React, {createContext, useState, useEffect} from 'react';
import axios from 'axios'

// crear el context
export const CategoryContext = createContext();

// Provider es donde se encuentran las funciones y state
const CategorysProvider = (props) => {

  // crear el state del context
  const [categories, setCategories] = useState([]);

  // ejecutar el llamado a la API
  useEffect(() => {
    const getCategories = async () => {
      const url = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list';
      const categories = await axios.get(url);
      setCategories(categories.data.drinks)
    }

    getCategories()
  }, [])

  return (
    <CategoryContext.Provider
      value={{
        categories
      }}
    >
      {props.children}
    </CategoryContext.Provider>
  )
}

export default CategorysProvider;