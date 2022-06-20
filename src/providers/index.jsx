import React from "react";
import { UserPublishProvider } from "./UserPublishProvider";

import { TrendingProvider } from "./TrendingProvider";
import { UserPageProvider } from "./UserPageProvider";
import { TimelineProvider } from "./timelineProvider";
import { LikeProvider } from "./PostProvider";

export default function AppProvider({ children }) {
    return (
        <TimelineProvider>
            <UserPublishProvider>
                <TrendingProvider>
                    <UserPageProvider>
                        <LikeProvider>{children}</LikeProvider>
                    </UserPageProvider>
                </TrendingProvider>
            </UserPublishProvider>
        </TimelineProvider>
    );
}
