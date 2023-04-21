const answer = `
promise : 내용이 실행은 되었지만 결과를 반환하지 않은 객체를 의미한다.
async/await는 프로미스 패턴 코드를 한번 더 축약 가능한 코드를 의미한다.
`;
console.log(answer);

const fs = require('fs');

const readFilePromise = (fileName) => {
  return new Promise((resolve, reject) => {
    fs.readFile(fileName, (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
};

readFilePromise('file.txt')
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.error(err);
  });

  
//해당 프로미스 함수를 이를 한번 더 anync/await로 압축하여 아래와 같이 나타낼 수 있다.
const fs = require('fs');

const readFileAsync = async (fileName) => {
  try {
    const data = await fs.promises.readFile(fileName);
    console.log(data);
  } catch (err) {
    console.error(err);
  }
};

readFileAsync('file.txt');