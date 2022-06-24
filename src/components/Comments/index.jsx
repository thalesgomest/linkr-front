import { useContext } from "react";

import { FollowersContext } from "../../providers/FollowersProvider";

import * as S from "./styles";

const Comments = ({ userId, currentUserId, comment, username, pictureUrl }) => {
    const { followers } = useContext(FollowersContext);
    console.log(followers);
    return (
        <S.CommentContainer>
            <img src={pictureUrl} />
            <S.CommentContent>
                <S.CommentUserInfo>
                    <S.CommentUserName>{username}</S.CommentUserName>
                    <S.CommentUserStatus>
                        {userId === currentUserId && "• post's author"}
                        {followers.includes(userId) && "• following"}
                    </S.CommentUserStatus>
                </S.CommentUserInfo>
                <S.CommentText>{comment}</S.CommentText>
            </S.CommentContent>
        </S.CommentContainer>
    );
};

export default Comments;
