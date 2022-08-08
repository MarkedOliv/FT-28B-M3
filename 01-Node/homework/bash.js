const commands = require('./commands/index.js');

const print = function(output) {
    process.stdout.write(output);
    process.stdout.write(`\nprompt > `)
}

process.stdin.on('data', function (data) {

  var args = data.toString().trim().split(' ');
  let cmd = args.shift();

  if(commands[cmd]) {
    commands[args, print];
  }
  else {
    process.stdout.write('command not found');
  }
});