arr = [1,2,3,4]

function printReverse() {
  var i = (arr.length - 1);
  while (i >= 0) {
    console.log(i + ": " + arr.slice(i, i + 1));
    i--;
  }
}
