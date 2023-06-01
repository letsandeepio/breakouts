console.log(1); // sync

const six = () => console.log(6); // will not run

setTimeout(() => console.log(2), 0); // async

setTimeout(() => console.log(3), 2000); // aysnc

setTimeout(() => console.log(4), 500); //aysnc

console.log(5); //sync

six(); //sync

// output =>

// 1
// 5
// 6
// --- main thread has finished, callback queue will start---
// 2
// 4
// 3
