
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from '@reduxjs/toolkit'


interface IProduct {
    productId: string[]

}
const initialState: IProduct = {
    productId: []

}


export const bulkDeleteSlice = createSlice({
    name: 'cartgadger',
    initialState,
    reducers: {

        addProductId: (state, action: PayloadAction<string>) => {
            const existingIndex = state.productId.findIndex(item => item === action.payload);

            if (existingIndex !== -1) {
               
                state.productId.splice(existingIndex, 1);
            } else {
                
                state.productId.push(action.payload);
            }

        },




    }
})


export const { addProductId } = bulkDeleteSlice.actions;
export default bulkDeleteSlice.reducer;