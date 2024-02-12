import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface IProduct {
  status: boolean;
  priceRange: number;
  brand:string;
  modelNumber:string;
  category:string,
  os:string,
  connectivity:string,
  power:string,
  feature:string
}

const initialState: IProduct = {
  status: false,
  priceRange: 5000,
  brand:'',
  modelNumber:'',
  category:'',
  os:'',
  connectivity:'',
  power:'',
  feature:''
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
    searchbyCategory:(state, action:PayloadAction<string>)=>{
      state.category = action.payload;
    },
    searchbyOS:(state, action:PayloadAction<string>)=>{
      state.os = action.payload;
    },

    searchbyConnectivity:(state, action:PayloadAction<string>)=>{
      state.connectivity = action.payload;
    },

    searchbyPower:(state, action:PayloadAction<string>)=>{
      state.power = action.payload;
    },

    searchbyFeature:(state, action:PayloadAction<string>)=>{
      state.feature = action.payload;
    },
  },
});

export const { toggleState, setPriceRange, searchByBrand, searchBymodelNumber, searchbyCategory, searchbyOS, searchbyConnectivity, searchbyPower, searchbyFeature } = gadgetSlice.actions;

export default gadgetSlice.reducer;