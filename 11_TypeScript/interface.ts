// type 키워드 사용 시
type Square = {
  color: string,
  width: number
};
let rect: Square = {
  color: 'red',
  width: 200
}

// 객체 타입 지정 시 유용한 interface
// 선언문은 ; 찍으면 안됨 표현식은 찍어야됨
interface Square2 {
  color: string;
  width: number;
}
let rect2: Square2 = {
  color: 'red',
  width: 100
};

// 인터페이스도 ?를 붙여 선택적 속성을 설정 가능
// readonly 키워드를 사용하여 특정 속성을 편집 할 수 없도록 하는 것도 가능
interface Car {
  readonly wheel:number;
  color: string,
  brand: string,
  coupe?: boolean
}

// 인터페이스 사용하여 타입 지정해보기
let people: Person = { name: 'Alice' };
let teacher:Teacher = { name: 'Peter', age: 30 };

// 단 teacher에는 job 속성이 선택적으로 들어 올 수 있음
interface Teacher {
  name: string,
  age: number,
  job?: string
}
interface Person {
  name: string
}


// 인터페이스 확장
// 인터페이스는 다른 인터페이스를 상속 받을 수 있다.
// extends로 상속 가능(객체지향 개념)
interface Person  {
  name: string
}
interface Teacher extends Person {
  age: number,
  job?: string
}

// (참고)
// type 키워드로 동일하게 하려면..?
type Animal = {
  name: string
}
type Cat = Animal & {
  age: number
};
// & 기호: 두 타입을 전부 만족하는 타입이라는 뜻(교차, intersection)

// type 키워드랑 차이점음?? 인터페이스는
// 1. 상속 기능이 있음 (타입 확장 편리함)
// 2. 중복 선언이 가능함
// 인터페이스를 중복 선언하면 타입 선언이 계속 중첩됨
// (주의 ) 타입이 다른 중복 선언이 생기면 에러 발생
interface InterA {
  name: string;
}
interface InterA {
  age: number;
}
interface InterA {
  name: string;
}
let personA: InterA = {
  name: 'KIm',
  age: 15
}

// 결론: 
// 무엇이 되었던 간에, 프로젝트 전반에서 type을 쓸 지 interface를 쓸지 통일 필요!!
// 객체, 그리고 타입 확장 등을 고려해 보았을 때 interface 쓰는 것을 추천


// Quiz
// Q1. interface를 이용해서 타입을 만들어보세요.
interface Product {
  brand: string,
  serialNumber: number,
  model: string[]
}

let product: Product = { 
  brand: 'Samsung', 
  serialNumber: 12345, 
  model: ['TV', 'phone']
};


// Q2. interface를 이용해서 타입을 만들어보세요.
// 아래와 같이 배열 안에 객체 여러 개가 들어갑니다.
interface CartList {product: string, price: number}

let cartList: CartList[] = [
  { product: '냉장고', price: 2000000 }, 
  { product: '모니터', price: 800000 },
  { product: '마우스', price: 150000 } 
]; 
// 이렇게 객체들이 잔뜩 들어갈 수 있는 배열은 어떻게 타입을 지정할지?


// Q3. 위에서 만든 interface 타입을 확장해보세요.
// 갑자기 서비스가 업데이트 되어서 일부 상품은 soldout 속성이 들어가야합니다. 
let item: NewCartList = { product: '청소기', price: 700000, soldout: true };
// 위에서 만든 interface를 확장해서 타입을 만들어보세요.

interface NewCartList extends CartList {
  soldout?: boolean
}
