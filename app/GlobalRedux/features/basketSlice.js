'use client';

import { createSlice } from "@reduxjs/toolkit";

const initialState={
    basketList:[],
    totalSum:0,
    totalQuantity:0,
}

export const basketSlice=createSlice({
    name:'basket',
    initialState,
    reducers:{
        addToBasket:((state,action)=>{
            const newItem=action.payload;
            const existingItem=state.basketList.find(item=>item.name===newItem.name)
            if(existingItem){
                existingItem.goodQuantity+=1;
            }
            else{
                state.basketList=[...state.basketList,{...newItem,goodQuantity:1}]
            }
        }),
        incrementQuantity:((state,action)=>{
            const newItem=action.payload;
            state.basketList = state.basketList.map(item =>
                item.name === newItem.name ? { ...item, goodQuantity: item.goodQuantity + 1 } : item
            );
        }),
        decrementQuantity:((state,action)=>{
            const newItem=action.payload;
            state.basketList = state.basketList.map(item =>
                item.name === newItem.name && newItem.goodQuantity>=2 ? { ...item, goodQuantity: item.goodQuantity - 1 } : item
            );
        }),
        calculateAllSum:((state)=>{state.totalSum=state.basketList.reduce((sum,item)=>sum+item.price*item.goodQuantity,0)}),
        calculateAllGoods:((state)=>{state.totalQuantity=state.basketList.reduce((items,item)=>items+item.goodQuantity,0)}),
        deleteFromBasket: ((state, action) => {
            const deleteItem = action.payload;
            const updatedBasketList = state.basketList.filter(item => item.name !== deleteItem.name);
            return { ...state, basketList: updatedBasketList };
        }),
    }
})

export const {addToBasket,incrementQuantity,decrementQuantity,calculateAllSum,calculateAllGoods,deleteFromBasket}=basketSlice.actions;
export default basketSlice.reducer;