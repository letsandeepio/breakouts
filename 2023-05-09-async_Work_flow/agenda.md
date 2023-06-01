# Breakout Session: Async Workflow

Questions: Asynchronous?

- [x] What is Asynchronous code?
- [x] Asynchronous vs Synchronous
- [x] Review Async Callbacks
- [x] setTimeout and setInterval functions
- [x] How event loop works in NodeJS? - Quickly Event Loop
  - [x] Event Loop
  - [x] Call Stack
  - [x] Callback Queue
- [x]async code demo: NodeJS readFile api
- [x] 5 minute Breakout Excersize

// asynchronous

- anything that takes time in programming!
- e.g. reading a file from the disk,
  making a network request,
  asking user input
- why async code is preferred?
- non-blocking in nature
- it's faster in nature, and you can handle multiple things all at once

// synchronous

- anything that doesn't take time to run!
- it runs in sequence
- but the previous task must complete before you can move onto the task
- blocking in nature
- it could slow and time consuming, again one thing at time
