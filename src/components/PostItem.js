import React, {useEffect} from 'react'
import {useDispatch} from "react-redux";
import {deletePostById} from "../store/reducers/PostSlice";

const PostItem = ({post}) => {

    const dispatch = useDispatch();

    const handleDeletePost = () => {
        dispatch(deletePostById(post.id))
    };


    return (
        <div>

            <div
                className='flex-row w-full bg-indigo-500 hover:bg-indigo-300 transition-all py-1 px-2 text-white rounded-sm cursor-pointer mt-4'>
                <div style={{color: "black"}}>{post.id}.Title: {post.title}.</div>
                <div>{post.body}.</div>
            </div>

            <button style={{border: "1px solid black", marginTop: "10px", padding: "10px"}}
                    onClick={handleDeletePost}>
                Delete Post
            </button>
        </div>
    )
}

export default PostItem
