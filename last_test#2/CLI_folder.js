const fs = require('fs');

// fs 모듈을 가져옵니다.

const folderName = '202312711_조재현_test';
// 생성할 폴더의 이름을 지정합니다. 여기서는 '202312711_조재현'라는 폴더 이름을 사용합니다.

fs.mkdir(folderName, (err) => {
  // fs.mkdir() 메서드를 사용하여 폴더를 생성합니다. 첫 번째 인자로 폴더의 경로 및 이름을 전달합니다.
  // 두 번째 인자로 콜백 함수를 전달합니다.

  if (err) {
    // 콜백 함수에서 오류가 발생한 경우, 오류를 처리합니다.

    console.error(err);
    // 오류 메시지를 출력합니다.
  } else {
    // 오류가 발생하지 않은 경우, 폴더가 성공적으로 생성되었음을 알립니다.

    console.log('폴더가 정상적으로 생성되었습니다.');
  }
});