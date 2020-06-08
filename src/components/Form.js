import React, {useContext, useState} from 'react'
import { CategoryContext } from '../context/CategoryContext'
import { RecipesContext } from '../context/RecipesContext'

const Form = () => {

  const [search, setSearch] = useState({
    name: '',
    category: '',
  })
  const { categories } = useContext(CategoryContext)
  const { setSearchDrink, setConsult } = useContext(RecipesContext)

  const handleChange = e => {
    e.preventDefault();
    setSearch({
      ...search,
      [e.target.name] : e.target.value,
    })
  }

  return (
    <form
      className="col-12"
      onSubmit={e => {
        e.preventDefault();
        setSearchDrink(search);
        setConsult(true);
      }}
    >
      <fieldset className="text-center">
        <legend>Busca bebidas por Categoria o Ingrediente</legend>
      </fieldset>

      <div className="row mt-4">
        <div className="col-md-4">
          <input
            name="name"
            className="form-control"
            tyep="text"
            placeholder="Ingrediente"
            onChange={handleChange}
          />
        </div>

        <div className="col-md-4">
          <select
            className="form-control"
            name="category"
            onChange={handleChange}
          >
            <option>-- Selecciona Categoria --</option>
            {categories.map(category => (
              <option
                key={category.strCategory}
                value={category.strCategory}
              >{category.strCategory}</option>
            ))}
          </select>
        </div>

        <div className="col-md-4">
          <input
            type="submit"
            className="btn btn-block btn-primary"
            value="Buscar Bebidas"
          />
        </div>

      </div>
    </form>
  )
}

export default Form
