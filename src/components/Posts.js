import React, {useEffect} from 'react'
import PostItem from './PostItem'
import {GetPosts} from "../store/reducers/PostSlice";
import {useDispatch, useSelector} from "react-redux";

const Posts = () => {

    const dispatch = useDispatch();

    const handleGetPosts = () => {
        dispatch(GetPosts())
    };


    const posts = useSelector(state => state.posts.posts)
    return (
        <div>
            <button onClick={handleGetPosts}
                    type='submit'
                    className='bg-lime-300  hover:bg-lime-400 transition-all p-2 text-sm'
            >
                Get posts
            </button>

            {
                posts?.map(p =>
                    <PostItem key={p.id} post={p}/>)
            }

        </div>
    )
}

export default Posts
