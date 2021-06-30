process.stdout.write('hello from spinner1.js... \rheyyy\n');

setTimeout(() => {
  process.stdout.write('\r|   ');
}, 100);

setTimeout(() => {
  process.stdout.write('\r/   ');
}, 300);

setTimeout(() => {
  process.stdout.write('\r-   ');
}, 500);

setTimeout(() => {
  // Need to escape the backslash since it's a special character.
  process.stdout.write('\r\\   ');
}, 700);

setTimeout(() => {
  process.stdout.write('\r5')
}, 1000);

setTimeout(() => {
  process.stdout.write('\r4')
}, 2000);

setTimeout(() => {
  process.stdout.write('\r3')
}, 3000);

setTimeout(() => {
  process.stdout.write('\r2')
}, 4000);

setTimeout(() => {
  process.stdout.write('\r1')
}, 5000);

setTimeout(() => {
  process.stdout.write('\r0')
}, 6000);

setTimeout(() => {
  process.stdout.write('\rBlastOff!!')
}, 7000);

setTimeout(() => {
  console.log('\n')
}, 7500);

// ... fill in the rest yourself ...