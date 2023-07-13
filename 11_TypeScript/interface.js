let rect = {
    color: 'red',
    width: 200
};
let rect2 = {
    color: 'red',
    width: 100
};
// 인터페이스 사용하여 타입 지정해보기
let people = { name: 'Alice' };
let teacher = { name: 'Peter', age: 30 };
let personA = {
    name: 'KIm',
    age: 15
};
let product = {
    brand: 'Samsung',
    serialNumber: 12345,
    model: ['TV', 'phone']
};
let cartList = [
    { product: '냉장고', price: 2000000 },
    { product: '모니터', price: 800000 },
    { product: '마우스', price: 150000 }
];
// 이렇게 객체들이 잔뜩 들어갈 수 있는 배열은 어떻게 타입을 지정할지?
// Q3. 위에서 만든 interface 타입을 확장해보세요.
// 갑자기 서비스가 업데이트 되어서 일부 상품은 soldout 속성이 들어가야합니다. 
let item = { product: '청소기', price: 700000, soldout: true };
