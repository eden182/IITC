// i = 10
// j = 10
// house = 1 2 3 4 5 6 7 8 9 10 /n 2 4 6 8 10 12 14 16 18 20
// console.log(house)

// let output = {
// h = 1
// e = 1
// l = 2
// o = 1 }
function countFreq(str) {
  let freqObject = {};
  for (let i = 0; i < str.length; i++) {
    console.log("scanning letter *" + str[i] + "*");
    if (!freqObject[str[i]]) {
      for (let j = 0; j < str.length; j++) {
        console.log(`scanning letter ${str[i]} on ${str[j]}`);
        if (str[i] === str[j]) {
          if (!freqObject[str[i]]) {
            freqObject[str[i]] = 1;
          } else {
            freqObject[str[i]]++;
          }
        }
      }
    }
  }
  console.log(`end of scanning`);
  console.log(freqObject);
}
countFreq("hello");

// psodo code
