let spinner = ["\r|  ", "\r/    ", "\r\\     "];
let delay = 0
for(const i in spinner) {
  setTimeout(() => {
    process.stdout.write(i);
  }, delay)
  delay += 1000;
};

