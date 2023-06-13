process.stdin.setEncoding('utf8');

console.log('Welcome to Holberton School, what is your name?');

process.stdin.on('data', (data) => {
  const name = data.trim();

  console.log(`Your name is ${name}!`);
  process.stdin.pause();
});

process.stdin.on('pause', () => {
  console.log('This important software is now closing');
  process.exit(0);
});

