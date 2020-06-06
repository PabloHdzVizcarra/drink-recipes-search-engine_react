import React, {} from 'react';
import Header from './components/Header'
import Form from './components/Form'

import CategorysProvider from './context/CategoryContext'
import RecipesProvider from './context/RecipesContext'

function App() {
  return (
    <CategorysProvider>
    <RecipesProvider>

    <Header />

    <div className="container mt-5">
      <div className="row">
        <Form />
      </div>
    </div>

    </RecipesProvider>
    </CategorysProvider>
  );
}

export default App;
