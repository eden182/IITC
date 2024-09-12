// question 1
let playlist = {
  name: "deadpool 3",
  duration: 6,
  songs: ["bye,bye,bye", "like a prayer"],
};

playlist.songs.push("the greatest showman");

function songTime() {
  for (let i = 0; i < playlist.songs.length; i++) {
    let songNumber = playlist.songs.length;
    if (songNumber === 0) {
      return (playlist.duration = 0);
    } else {
      return (playlist.duration = songNumber * 3);
    }
  }
}
console.log(`playlist duration: `, songTime());
console.log(playlist);

// question 2
let bankAccount = {
  accountNumber: 1824,
  balance: 28300,
  isActive: true,
};

function deposit(g) {
  let addNum;
  if (addNum !== 0) addNum = bankAccount.balance + g;
  return (bankAccount.balance = addNum);
}
console.log(deposit(10000));

function withdraw(g) {
  let addNum;
  if (addNum !== 0) addNum = bankAccount.balance - g;
  return (bankAccount.balance = addNum);
}
console.log(withdraw(8300));

// question 3
let circle = {
    radius: 380,
    color: "red",
    function calculateArea (){
        (2*PI*this.radius^)
    }
};

