import React from 'react';
import { Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

// 방법1: 스타일도 컴포넌트로 스타일 확장
// const styledCol = styled(Col)`
//   cursor: pointer;
// `
// 방법2: 공통 스타일로 작성

function ProductListItem(props) {
  const { product } = props;
  console.log(product);
  // 이동 경로 설정하기
  const navigate = useNavigate();

  return (
    <Col md={4} className='cursor-pointer'>
    <img src={product.imagePath} width="80%" 
      onClick={() => 
        // /detail/해당상품id
        navigate(`/detail/${product.id}`)
      }
    />
    <h4>{product.title}</h4>
    <p>{product.price}원</p>
  </Col>
  );
}

export default ProductListItem;