import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";


export const GetPosts = createAsyncThunk(
    "posts/GetPosts",
    async (_, {rejectWithValue, dispatch}) => {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts`, {
            params: {_page: 0, _limit: 15}
        })
        dispatch(setPosts(response.data));
    }
);

export const deletePostById = createAsyncThunk(
    "posts/deletePostById",
    async (id, {rejectedWithValue, dispatch}) => {
        await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`);
        dispatch(deletePost(id))
    }
);


const PostSlice = createSlice({
    name: "posts",
    initialState: {
        posts: [],
    },
    reducers: {
        setPosts: (state, action) => {
            state.posts = action.payload
        },
        deletePost: (state, action) => {
            state.posts = state.posts.filter((post) => post.id !== action.payload)
        },
    },
    extraReducers: {
        [GetPosts.pending]: () => console.log("GetPosts pending"),
        [GetPosts.fulfilled]: () => console.log("getPosts fulfilled"),
        [deletePostById.pending]: () => console.log("deletePostById pending"),
        [deletePostById.fulfilled]: () => console.log("deletePostById fulfilled"),
    }
})

export const {setPosts, deletePost} = PostSlice.actions;
export default PostSlice.reducer;