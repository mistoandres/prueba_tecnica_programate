import { createSlice } from '@reduxjs/toolkit'

export const slice = createSlice({
    name: 'states',
    initialState: {
      input: "",
    },
    reducers: {
        setInput: (state, action) => {
            state.input = action.payload;
        }
    }
  })
  
  // Action creators are generated for each case reducer function
  export const { setInput } = slice.actions
  
  export default slice.reducer