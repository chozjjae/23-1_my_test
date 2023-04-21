const EventEmitter = require('events'); //events모듈을 불러오는 작업입니다.

const myEvent = new EventEmitter();
myEvent.addListener('event1', () => {
  console.log('이벤트 1');
});
myEvent.on('event2', () => {
  console.log('이벤트 2');
});
myEvent.on('event2', () => {
  console.log('이벤트 2 추가');
});
myEvent.once('event3', () => {
  console.log('이벤트 3');
}); // 한 번만 실행됨

myEvent.emit('event1'); // 이벤트 호출
myEvent.emit('event2'); // 이벤트 호출

myEvent.emit('event3');
myEvent.emit('event3'); // 실행 안 됨

myEvent.on('event4', () => {
  console.log('이벤트 4');
});
myEvent.removeAllListeners('event4');
myEvent.emit('event4'); // 실행 안 됨

const listener = () => {
  console.log('이벤트 5');
};
myEvent.on('event5', listener);
myEvent.removeListener('event5', listener);
myEvent.emit('event5'); // 실행 안 됨

console.log(myEvent.listenerCount('event2'));


const answer = `events 모듈을 이용하여 커스텀 이벤트를 만들수 있다.
on : 이벤트 이름과 이벤트 발생시의 콜백을 연결해줍니다.
addlistener : on기능과 같습니다.
emit : 이벤트를 호출하는 메서드입니다.
once : 한번만 실행되는 이벤트입니다.
removeAllListeners : 이벤트에 연결된 모든 이벤트 리스너를 제거합니다
removeListner : 이벤트에 연결된 리스너를 하나씩제거합니다.
off : 노드 10 버전에서 추가된 메서드로 removeListener와 기능이 같습니다.
lintenerCount : 현재 리스너가 몇 개 연결되어 있는지 확인합니다.
위 부터 순차적으로 실행 순서가 진행됩니다.
`
;
console.log(answer);