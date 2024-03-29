import {createSlice} from "@reduxjs/toolkit"

const CartSlice = createSlice({
    name:'cart',
    initialState:{
        items:[]
    },
    reducers:{
        addItem:(state,action)=>{ //state is the initial state, action is the data which is coming in
            state.items.push(action.payload);
        },
        removeItem: (state,action)=>{
            state.items.pop();
        },
        clearCart: (state)=>{
             state.items=[];
        }
    }
});

export const {addItem, removeItem, clearCart}= CartSlice.actions;

export default CartSlice.reducer;