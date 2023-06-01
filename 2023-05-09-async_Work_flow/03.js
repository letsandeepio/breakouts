// 3rd Core Idea => Async code is always handled separately from the main thread

console.log("Helo on the main thread");

setTimeout(() => console.log("I am not the main thread"), 0);

console.log("hello again on the main thread");
