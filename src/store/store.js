import {configureStore} from "@reduxjs/toolkit";
import UserSlice from "./reducers/UserSlice";
import TodoSlice from "./reducers/TodoSlice";
import PostSlice from "./reducers/PostSlice";

export const store = configureStore({
    reducer: {
        user: UserSlice,
        todo: TodoSlice,
        posts: PostSlice,
    }
});

export default store