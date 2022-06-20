/* eslint-disable no-undef */
/* eslint-disable no-console */
import { createContext, useState } from "react";
import axios from "axios";

import authorizationHeader from "../utils/authorizationHeader";
import getUserData from "../utils/getUserData";

export const TimelineContext = createContext();

export const TimelineProvider = ({ children }) => {
    const [DataPosts, setDataPosts] = useState([]);
    const authHeader = authorizationHeader(getUserData()?.token);
    //console.log(authHeader, "primeiro");
    const catchPosts = () => {
        //console.log(authHeader);
        if (!authHeader) return catchPosts();
        const promise = axios.get(
            `${process.env.REACT_APP_URI}/timeline`,
            authHeader,
        );
        promise.then(({ data }) => {
            setDataPosts(data);
        });
        promise.catch((res) => {
            console.log(res);
        });
    };
    return (
        <TimelineContext.Provider value={{ DataPosts, catchPosts }}>
            {children}
        </TimelineContext.Provider>
    );
};
