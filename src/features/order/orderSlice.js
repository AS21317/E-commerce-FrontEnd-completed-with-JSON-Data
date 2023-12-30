import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { createOrder, fetchCount } from './orderApi';

const initialState = {
  orders: [],
  status: 'idle',
  currentOrder:null
};
//we may need more info about placed order , so store recently placed order in current order 

export const createOrderAsync = createAsyncThunk(
  'order/createOrder',
  async (order) => {
    const response = await createOrder(order);
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);


// ऑर्डर को reset करने के लिए हम normal reducer का use कर सकते है , क्योंकि वो लोकल state मे है न की db मे 

export const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
   resetOrder:(state)=>{
    state.currentOrder=null
   }

  },

  extraReducers: (builder) => {
    builder
      .addCase(createOrderAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(createOrderAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.orders.push(action.payload);
        state.currentOrder=action.payload   // latest order ki puri info yha hai
      });
  },
});

export const {resetOrder } = orderSlice.actions
export  const selectCurrentOrder = (state)=>state.order.currentOrder

export default orderSlice.reducer;
