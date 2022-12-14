import styled from "styled-components";
import palette from "../../lib/styles/palette";
import Button from "../common/Button";
import Responsive from "../common/Responsive";
import { Link } from "react-router-dom";
import SubInfo from "../common/SubInfo";
import Tags from "../common/Tags";
import TagBox from "../write/TagBox";

const PostListBlock = styled(Responsive)`
  margin-top: 3rem;
`;
const WritePostButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 3rem;
`;
const PostItemBlock = styled.div`
  padding-top: 3rem;
  padding-bottom: 3rem;
  &:first-child {
    padding-top: 0;
  }
  & + & {
    border-top: 1px solid ${palette.gray[2]};
  }
  h2 {
    font-size: 2rem;
    margin-bottom: 0;
    margin-top: 0;
    &:hover {
      color: ${palette.gray[6]};
    }
  }
  p {
    margin-top: 2rem;
  }
`;

const PostItem = (poster) => {
  const { body, tags, title, user, publishedDate } = poster.poster;
  return (
    <PostItemBlock>
      <h2>{title}</h2>
      <SubInfo
        username={user.username}
        publishedDate={new Date(publishedDate).toLocaleDateString()}
      />
      <Tags tags={tags} />
      <SubInfo>
        <span>
          <b>username</b>
        </span>
      </SubInfo>
      <p>{body}</p>
    </PostItemBlock>
  );
};

const PostList = ({ loading, error, posts, showWriteButton }) => {
  if (error) {
    return <PostListBlock>에러발생</PostListBlock>;
  }
  return (
    <PostListBlock>
      <WritePostButtonWrapper>
        <Button cyan to="/write">
          새 글 작성하기
        </Button>
      </WritePostButtonWrapper>
      {loading !== true && posts && (
        <div>
          {posts.map((post) => (
            <PostItem poster={post} key={post._id} />
          ))}
        </div>
      )}
    </PostListBlock>
  );
};
export default PostList;
