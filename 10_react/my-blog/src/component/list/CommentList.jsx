import React from 'react';
import styled from "styled-components";
import CommentListItem from './CommentListItem';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  & > * {
    :not(:last-child) {
      margin-bottom: 16px;
    }
  }
`;

// map() 함수를 사용하여 CommentListItem을 반복 렌더링하는 컴포넌트
function CommentList(props) {
  const { comments } = props;

  return (
    <Wrapper>
      {/* Quiz: 반복렌더링 */}
      {comments.map((comment) => {
        return (
        <CommentListItem key={props.id} comment={comment}/>
        );
      })};
    </Wrapper>
  );
}

export default CommentList;