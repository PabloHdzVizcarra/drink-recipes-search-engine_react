import React, {createContext, useEffect, useState} from 'react';
import axios from 'axios'

export const ModalContext = createContext();

const ModalProvider = (props) => {

  const [idreceta, setIdReceta] = useState(null);
  const [fullRecipe, setFullRecipe] = useState({});

  // una vez que tenemos una receta
  useEffect(() => {
    const getRecipe = async () => {
      if (!idreceta) return;

      const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idreceta}`;
      const result = await axios.get(url);
      setFullRecipe(result.data.drinks[0]);
    }
    getRecipe();
  }, [idreceta])

  return (
    <ModalContext.Provider
      value={{
        fullRecipe,
        setIdReceta,
        setFullRecipe
      }}
    >
      {props.children}
    </ModalContext.Provider>
   );
}

export default ModalProvider;