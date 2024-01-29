import { configureStore } from "@reduxjs/toolkit";
import {gadgetApi} from './api'
import gadgetReducer from './Feature/GadgetCollection/gadgetSlice'


export const store = configureStore({
    reducer: {
        product:gadgetReducer,
        [gadgetApi.reducerPath]:gadgetApi.reducer
    },

    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(gadgetApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch