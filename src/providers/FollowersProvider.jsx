import { createContext, useState } from "react";
import axios from "axios";

import authorizationHeader from "../utils/authorizationHeader";
import getUserData from "../utils/getUserData";

export const FollowersContext = createContext();

export const FollowersProvider = ({ children }) => {
    const [followers, setFollowers] = useState([]);
    const authHeader = authorizationHeader(getUserData()?.token);

    const getFollowers = () => {
        axios
            .get(`${process.env.REACT_APP_URI}/followers`, authHeader)
            .then(({ data }) => {
                console.log(data);
                setFollowers(data);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <FollowersContext.Provider value={{ followers, getFollowers }}>
            {children}
        </FollowersContext.Provider>
    );
};
