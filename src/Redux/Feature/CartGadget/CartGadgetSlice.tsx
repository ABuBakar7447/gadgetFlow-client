import { createSlice } from "@reduxjs/toolkit";
import { ILaptop } from "../../../Globaltypes/globaltypes";
import type {PayloadAction} from '@reduxjs/toolkit'


interface IProduct {
    product:ILaptop[],
    
    total:number
}
const initialState :IProduct = {
    product:[],
    
    total:0,
}


export const cartgadgetSlice = createSlice({
   name:'cartgadger',
   initialState,
   reducers:{

    addProduct:(state, action:PayloadAction<ILaptop>)=>{
        const existing = state.product.find(item=>item._id=== action.payload._id);

        if(existing && existing.quantity >0){

            existing.quantity-=1;
            existing.addedquantity+=1;
        }
        else if(!existing && action.payload.quantity>0){
            state.product.push({...action.payload, addedquantity:1, quantity:action.payload.quantity-1});
            
        }
        else{
            state.product.push();
        }
    },

    deleteProduct: (state, action:PayloadAction<ILaptop>)=>{
        const existing = state.product.find(item =>item._id === action.payload._id);

        if(existing && existing.addedquantity > 0){
            existing.quantity +=1;
            existing.addedquantity -=1;
        }
    },

    removeEntireProduct:(state, action:PayloadAction<ILaptop>)=>{
        state.product= state.product.filter(item=>item._id != action.payload._id)
    }


   } 
})


export const {addProduct, deleteProduct, removeEntireProduct} = cartgadgetSlice.actions;
export default cartgadgetSlice.reducer;