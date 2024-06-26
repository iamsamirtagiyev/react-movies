import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    movie: false,
}

export const movie = createSlice({
    name: 'movie',
    initialState,
    reducers: {
        setMovie: (state, action) => {
            state.movie = action.payload
        }
    }
})

export const { setMovie } = movie.actions
export default movie.reducer