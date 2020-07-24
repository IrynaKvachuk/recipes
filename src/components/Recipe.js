import React from 'react';
import style from '../recipe.module.css';

const Recipe = ({ title, calories, image, ingredients }) => {
    return (
        <div className={style.recipe}>
            <h1>{title}</h1>
            <ol className={style.ingredients}>
                {ingredients.map((ingredient, i) => (
                    < li key={i} > {ingredient.text}</li>
                ))}
            </ol>
            <img className={style.image} src={image} alt="" />
            <p className={style.calories}>{Math.round(calories)} cal</p>
        </div >
    )
}

export default Recipe;