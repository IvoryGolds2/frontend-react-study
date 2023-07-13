// 타입 확정하기 방식(여러가지 존재)
// 언제 타입을 확정해야 될까?

// 예를 들어
// 함수의 파라미터에 union type을 사용하면 엄격한 타입스크립트가 에러를 발생시킬 수 있음
// Q. 숫자 또는 문자를 인자값으로 전달하면 +1을 해주는 함수를 만들어보세요

// function addOne(num: number | string) {
//   return num + 1;
// }
// 그냥 자바스크립트에서는 문자나 숫자 모두 +1이 가능하지만,
// 타입스크립트에서는 변수의 타입이 number | string과 같은 union type인 경우 
// 아직 이 파라미터의 타입이 확실하지 않으니까 자료 조작을 막음

// 다른 예로
// 매개 변수로 전달받은 숫자에 *2를 해주는 매개 변후가 옵셔널한 함수
// function multiflyTwo(num?: number) {
//   return num * 2; // 에러 발생
// }
// num 이라는 파라미터는 옵션이고, 옵션인 파라미터 number | undefined 식으로 타입 정의가 됨
// 그래서 아직 num 이라는 파라미터가 뭔지 확실하지 않기 때문에 에러가 발생
// 이럴 때 타입 확정하기를 사용함

// 대표적인 2가지
// 1. Narrowing(타입 좁히기)
function addOnlyOne(num: number | string) {
  // return num + 1; 
  // number | string 이라는 애매한 타입이어서 에러 발생
  // 타입이 아직 하나로 확정되지 않았을 경우 Narrowing 사용
  // 대표적인 Narrowing 방법은 typeof 연산자
  if(typeof num === 'string') {
    return num + '1'; 
  } else {
    return num + 1;
  }
}

function example(num:number | string) {
  let array: number[] = [];
  // array[0] = num; // 에러 발생
  if (typeof num === 'number') {
    array[0] = num;
  }
  console.log(array);
}
example(1000)

// 2. Assertion(타입 단언) => 변수의 타입을 특정 타입으로 생각하라
// 즉, 타입스크립트가 인식을 할 수 있게 해주는거지 실제로 바뀌는 것은 아님

function myFunc(num:number | string) {
  let array: number[] = [];
  // array[0] = num; // 에러 발생
  typeof num === 'number'
  array[0] = num as number; // num의 타입을 number로 인식해라
  console.log(array);
}

myFunc('a1236')