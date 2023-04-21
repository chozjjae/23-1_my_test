const answer = `노드 js는 기본적으로 싱글 스레드라고 표현합니다.
그 이유는 노드프로세스는 멀티스레드이지만 직접 다룰 수 있는 스레드는 하나이기 때문에 싱글 스레드라고 표현합니다.
따라서 하위 스레드를 처리하는 방법은 하나씩 실행되는 싱글 스레드에서 가장 먼저 나온 값이 나가고 기다리는 스레드가 나오길 대기하는 방법이 있습니다.
멀티 스레드를 지원하기 위한 방법으로는 worker_threads모듈을 도입하는 방법입니다.
해당 방법은 노드 14버전 이후 사용가능 한 방법으로 하나의 프로세스 안에서 여러개의 스레드를 사용하는 방법으로 멀티 스레딩 방법이라고 합니다.
CPU를 많이 사용하는 작업인 경우 주로 사용하며 단점으로는 프로그래밍이 어렵다는 단점이 있습니다.`;

console.log(answer);