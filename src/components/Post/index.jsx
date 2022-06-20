import { useNavigate } from "react-router-dom";
import ReactHashtag from "react-hashtag";
import { AiOutlineHeart } from "react-icons/ai";

import * as S from "./styles";
import { useContext } from "react";
import { PostContext } from "../../providers/PostProvider";

const Post = ({
    username,
    postId,
    userpic,
    userid,
    article,
    link,
    urlMetadata,
    likes,
}) => {
    const { likeAndDislike } = useContext(PostContext);
    const navigate = useNavigate();
    // garbiel vai usar depois
    // window.scrollTo({
    //     top: 0,
    //     behavior: "smooth",
    // });
    return (
        <S.PostContainer>
            <S.PostSideContainer>
                <S.PostUserImage
                    src={userpic}
                    onClick={() => navigate(`/user/${userid}`)}
                />
                <AiOutlineHeart
                    onClick={() => {
                        likeAndDislike(postId);
                    }}
                />
                <p>{`${likes} likes`}</p>
            </S.PostSideContainer>
            <S.PostContentContainer>
                <S.PostUserName onClick={() => navigate(`/user/${userid}`)}>
                    {username}
                </S.PostUserName>
                <S.PostText>
                    <ReactHashtag
                        onHashtagClick={(hashtagValue) =>
                            navigate(
                                `/hashtag/${hashtagValue
                                    .replace("#", "")
                                    .toLowerCase()}`,
                            )
                        }
                    >
                        {article}
                    </ReactHashtag>
                </S.PostText>
                <S.PostLinkPreviewContainer href={link} target="_blank">
                    <S.PostLinkContent>
                        <span>
                            <S.PostLinkTitle>
                                {urlMetadata.title}
                            </S.PostLinkTitle>
                            <S.PostLinkDescription>
                                {urlMetadata.description}
                            </S.PostLinkDescription>
                        </span>
                        <S.PostLinkUrl>{link}</S.PostLinkUrl>
                    </S.PostLinkContent>
                    <S.PostLinkImage src={urlMetadata.image} />
                </S.PostLinkPreviewContainer>
            </S.PostContentContainer>
        </S.PostContainer>
    );
};

export default Post;
