const args = process.argv;
let time = args.slice(2);
time.forEach(function(element){
  if (element > 0) {
    setTimeout(() => {
      // process.stdout.write('\x07'); for sound
      process.stdout.write('beep ')
    }, element*1000)
  }
});