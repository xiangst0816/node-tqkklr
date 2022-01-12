const process = require('process');
// console.log(process.getgroups())
// console.log(process.getgid())
// console.log("process.ppid", process.binding('credentials'));
console.log('process.ppid', process.ppid);
console.log('process.pid', process.pid);
console.log('process.getgid()', process.getgid());
console.log('process.getuid()', process.getuid());
console.log('process.setuid()', process.setuid);
console.log('process.setuid()', process.initgroups);
console.log('process.getgroups()', process.getgroups());

// const { fork } = require('child_process');
//
// fork('./test.js');
