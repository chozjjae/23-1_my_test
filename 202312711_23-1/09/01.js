function test1(a,b) {
    a = 10
    b = 10
    return a + b;
}
//아래와 같이 화살표 함수로 나타낼 수 있다.
const test2 = (a,b) => {
    return a + b;
};

//최대 단축, return 생략 후 소괄호로 정리
const test3 = (a,b) => (a + b);