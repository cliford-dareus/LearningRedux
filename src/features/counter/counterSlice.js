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
            state.value++
        },
        // decrement
        decremented(state){
            state.value--
        }
    }
});

export const { incremented, decremented } = counterSlice.actions;
export default counterSlice.reducer


