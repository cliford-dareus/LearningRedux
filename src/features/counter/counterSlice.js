import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value : 0,
};

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        // increment
        incremented(state){
            state.value+=1
        },
        // decrement
        decremented(state){
            state.value-=1
        },
        increaseByAmount(state, action){
            state.value += action.payload
        }
    }
});

export const { incremented, decremented, increaseByAmount } = counterSlice.actions;
export default counterSlice.reducer


