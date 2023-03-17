const candyMachine = {
  status: {
    name: 'node',
    count: 5,
  },
  getCandy() {
    this.status.count--;
    return this.status.count;
  },
};
var getCandy = candyMachine.getCandy;
console.log(getCandy);
const { getCandy, status: { count } } = candyMachine;
