import React from 'react';
import { Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { decreaseCount, increaseCount, removeItemFromCart, selectCartList } from '../features/cart/cartSlice';


function Cart(props) {
  const cartList = useSelector(selectCartList);
  console.log(cartList);

  const formatter = new Intl.NumberFormat('ko-KR');
  const dispatch = useDispatch();
  return (
    <>
      <Table hover>
      <thead>
        <tr>
          <th>No</th>
          <th>상품명</th>
          <th>수량</th>
          <th>가격</th>
        </tr>
      </thead>
      <tbody>
        {/* <tr>
          <td>1</td>
          <td>라켓</td>
          <td>2</td>
          <td>199,000원</td>
        </tr> */}
        {/* Quiz: cartList 반복 렌더링 및 데이터 바인딩 하기 */}
        {cartList.map((list, index) => 
          <tr key={list.id}>
            <td>{index + 1}</td>
            <td>{list.title}</td>
            <td>
              <button onClick={() => dispatch(decreaseCount(list.id))}>-</button>
              {list.count}
              <button onClick={() => dispatch(increaseCount(list.id))}>+</button>
            </td>
            <td>{formatter.format(list.price * list.count)}원</td>
            <td>
              <button
                onClick={() => dispatch(removeItemFromCart(list.id))}
              >X</button>
            </td>
          </tr>
        )}
      </tbody>
    </Table>
    </>
  );
}

export default Cart;