import React, {useContext, useState} from 'react'
import {ModalContext} from '../context/ModalContext'

import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types'

const shortid = require('shortid');

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 450,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const Recipe = ({recipe}) => {

  // settings modal
  const [ modalStyle ] = useState(getModalStyle);
  const [open, setOpen] = useState(false);

  const classes = useStyles();

  const handleOpen = () => {
    setOpen(true);
  }
  const handleClose = () => {
    setOpen(false);
  }

  const { setIdReceta, fullRecipe, setFullRecipe } = useContext(ModalContext);

  const showIngredients = data => {
    let ingredients = [];
    for (let i = 1; i < 16; i++) {
      if (data[`strIngredient${i}`]) {
        ingredients.push(
          <li key={shortid.generate()}>{ data[`strIngredient${i}`] } {data[`strMeasure${i}`] }</li>
        );
      }
    }

    return ingredients;
  }

  return (
    <div className="col-md-4 mb-3">
      <div className="card">
        <h2 className="card-header">{recipe.strDrink}</h2>

        <img className="card-img-top" src={recipe.strDrinkThumb} alt={`Imagen de ${recipe.strDrink}`} />
        <div className="card-body">
          <button
            type="button"
            className="btn btn-block btn-primary"
            onClick={() => {
              setIdReceta(recipe.idDrink);
              handleOpen();
            }}
          >
            Ver Receta
          </button>
          <Modal
            open={open}
            onClose={() => {
              setIdReceta(null);
              setFullRecipe({});
              handleClose();
            }}
          >
            <div style={modalStyle} className={classes.paper}>
              <h2>{fullRecipe.strDrink}</h2>
              <h3 className="mt-4">Instrucciones</h3>
              <p>{fullRecipe.strInstructions}</p>

              <img className="img-fluid my-4" src={fullRecipe.strDrinkThumb} alt={fullRecipe.strDrink}/>
              <h3>Ingredientes y cantidades</h3>
              <ul>
                { showIngredients(fullRecipe) }
              </ul>
            </div>
          </Modal>
        </div>
      </div>
    </div>
  )
}

Recipe.propTypes = {
  recipe: PropTypes.object.isRequired
}

export default Recipe