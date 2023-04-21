const answer = `먼저 모듈이란 특정한 기능을 하는 함수나 변수들의 집합을 의미합니다.
모듈을 불러올 때 사용하는 2가지 방식은
방법 1 첫번째 require(파일경로) 이용하기
방법 2 두번째 import(파일경로) 이용하기, 자바 스크립트 자체 모듈 시스템으로 mjs확장자를 사용하거나 packge.jseon에
type : "module"을 추가해야 실행 됨
`;
console.log(answer);

//방법 1
const { odd, even } = require('./var');
const checkNumber = require('./func');

function checkStringOddOrEven(str) {
  if (str.length % 2) { // 홀수면
    return odd;
  }
  return even;
}

console.log(checkNumber(10));
console.log(checkStringOddOrEven('hello'));

// 방법2
import {odd, even} from './var,mjs';
import checkNumber from './func,mjs';

function checkStringOddOrEven(str) {
    if (str.length % 2) { // 홀수면
      return odd;
    }
    return even;
  }
  
  console.log(checkNumber(10));
  console.log(checkStringOddOrEven('hello'));