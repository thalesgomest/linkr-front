import { createContext } from "react";
import axios from "axios";

export const PostContext = createContext();

export const LikeProvider = ({ children }) => {
    const likeAndDislike = async (postId) => {
        axios.post(`${process.env.REACT_APP_URI}/like`, { postId });
    };

    return (
        <PostContext.Provider value={{ likeAndDislike }}>
            {children}
        </PostContext.Provider>
    );
};
