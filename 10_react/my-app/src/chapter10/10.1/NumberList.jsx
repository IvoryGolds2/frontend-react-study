import React from 'react';

function NumberList(props) {
  const { numbers } = props;

  const listItems = numbers.map((number, index) => { 
    return <li key={index}>{number}</li>
  });

  // map() 함수의 결과 이 결과가 listItems에 담김
  [
    <li>1</li>,
    <li>2</li>,
    <li>3</li>,
    <li>4</li>,
    <li>5</li>
  ] 

  return (
    <>
    <ul>{listItems}</ul>
    {/* <ul>
      {[
      <li>1</li>,
      <li>2</li>,
      <li>3</li>,
      <li>4</li>,
      <li>5</li>
    ]}
    </ul> */}
    </>
  );
}

export default NumberList;