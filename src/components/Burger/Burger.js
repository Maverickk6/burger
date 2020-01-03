import React from 'react';
import styles from './burger.module.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';
//import { transform } from '@babel/core';


const burger = (props) => {    
        // let transformedIngredients = Object.keys(props.ingredients).map((igKey, i) => (
        //   <BurgerIngredient key={igKey + i} type= {igKey} />
        // ))
      

   // transforming an object of key value pairs into an array of burger ingredients
    let transformedIngredients = Object.keys(props.ingredients).map(igKey => {
        return [...Array(props.ingredients[igKey])].map((_, i) => {
            return <BurgerIngredient key = {igKey + i} type = {igKey} /> 
        });
    }).reduce((arr, el) => {
        return arr.concat(el)
    }, []);
    if (transformedIngredients.length === 0) {
        transformedIngredients = <p>Please select the ingredients you want added</p>
    }

    //console.log(transformedIngredients);

    return(
        <div className = {styles['Burger']}>
            <BurgerIngredient type = "bread-top" />
            {transformedIngredients}
            <BurgerIngredient type = "bread-bottom" />
        </div>
    );
}


export default burger;