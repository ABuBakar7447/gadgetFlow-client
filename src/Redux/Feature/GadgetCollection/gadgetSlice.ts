import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface IProduct {
  status: boolean;
  priceRange: number;
  brand:string;
  modelNumber:string;
}

const initialState: IProduct = {
  status: false,
  priceRange: 5000,
  brand:'',
  modelNumber:''
};

const gadgetSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    toggleState: (state) => {
      state.status = !state.status;
    },
    setPriceRange: (state, action: PayloadAction<number>) => {
      state.priceRange = action.payload;
    },
    searchByBrand:(state, action:PayloadAction<string>)=>{
      state.brand = action.payload;
    },
    searchBymodelNumber:(state, action:PayloadAction<string>)=>{
      state.modelNumber = action.payload;
    },
  },
});

export const { toggleState, setPriceRange, searchByBrand, searchBymodelNumber } = gadgetSlice.actions;

export default gadgetSlice.reducer;