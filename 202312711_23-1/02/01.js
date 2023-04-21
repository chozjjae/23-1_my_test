const answer = `
콜백 핸들러는 태스크 큐로 들어가 보관되며 함수들 간의 순서를 이벤트 루프가 결정합니다. 
콜백 지옥이란 : 내용이 실행은 되었지만 결과를 아직 반환하지 않은 객체를 의미합니다.
이를 해결하기 위해서는 Then을 붙여 결과를 반환합니다. 만약 실행이 완료되지 않았으면 완료된 후 Then내부 함수가 실행 됩니다.`;
console.log(answer);

const condition = true;
const promise = new Promise((resolve, reject) => {
    if (condition) {
        resolve('성공');
    } else {
        reject('실패');
    }
});

promise
    .then((message) => {
        console.log(message);
    })
    .catch((error) => {
        console.error(error);
    })
    .finally(() => {
        console.log("출력")
    })