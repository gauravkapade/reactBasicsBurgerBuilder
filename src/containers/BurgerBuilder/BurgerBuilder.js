import React, { Component } from 'react';

import Aux from '../../hoc/Auxillary';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";
const INGREDIENT_PRICE = {
    salad:1,
    bacon:2,
    cheese:1.5,
    chicken:3
};

class BurgerBuilder extends Component {
    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            chicken: 0
        },
        totalCost: 4,
        purchasable: false,
        purchasing: false
    }

    purchaseHandle = () =>{
        this.setState({purchasing:true})
    }

    purchaseCancelHandle = () =>{
        this.setState({purchasing:false})
    }

    purchaseContinueHandle = () =>{
        alert("Please Continue!")
    }

    updatePurchaseState = (ingredients) =>{
        const sumOfAllIngredients = Object.keys(ingredients).map((ele)=>{
            return ingredients[ele]
        }).reduce((sum, el)=>{return sum+el},0);
        this.setState({purchasable: sumOfAllIngredients>0});
    }


    addIngredient = (type) =>{
        const currentCount = this.state.ingredients[type];
        const addedCount = currentCount+1; 
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = addedCount;
        const addedCost = this.state.totalCost +(updatedIngredients[type]*INGREDIENT_PRICE[type]);
        this.setState({totalCost: addedCost, ingredients:updatedIngredients});
        this.updatePurchaseState(updatedIngredients);
    }

    removeIngredient = (type) =>{        
        const currentCount = this.state.ingredients[type];
        const addedCount = currentCount ? currentCount - 1 : -1; 
        if(addedCount<0)return;
        const updatedIngredients = {
                ...this.state.ingredients
        };
        updatedIngredients[type] = addedCount;
        const deductedCost = this.state.totalCost - (updatedIngredients[type]*INGREDIENT_PRICE[type]);
        this.setState({totalCost: deductedCost, ingredients:updatedIngredients});
        this.updatePurchaseState(updatedIngredients);
    }

    render () {
        const disableInfo = {
            ...this.state.ingredients
        }
        for(let key in disableInfo){
            disableInfo[key] = disableInfo[key]<=0;
        }
        return (
            <Aux>
                <Modal show={this.state.purchasing} modalClodsed={this.purchaseCancelHandle}>
                    <OrderSummary 
                    ingredients={this.state.ingredients}
                    price={this.state.totalCost.toFixed(2)}
                    purchaseCancel = {this.purchaseCancelHandle}
                    purchaseContinue = {this.purchaseContinueHandle}
                    />
                </Modal>
                <Burger ingredients={this.state.ingredients} />
                <BuildControls ingredientsAdd = {this.addIngredient} 
                ingredientsRemove = {this.removeIngredient}
                purchasable = {this.updatePurchaseState}
                disable = {disableInfo}
                price = {this.state.totalCost}
                placeOrder = {this.purchaseHandle}
                />
            </Aux>
        );
    }
}

export default BurgerBuilder;