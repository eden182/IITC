function doSomthing(callback) {
  const info = "baba is the man";
  callback(info);
}

function alertAndLog(data) {
  console.log(data);
  alert(data);
}

doSomthing(alertAndLog);

setTimeout(function () {
  console.log("hi mom");
}, 1000);
