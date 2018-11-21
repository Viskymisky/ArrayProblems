arr = [1,2,3];

function printReverse() {
  var i = (arr.length - 1);
  while (i >= 0) {
    console.log(i + ": " + arr.slice(i, i + 1));
    i--;
  }
}


function printReverseFromSarah() {
// first part says that i is equal to 3 in this case.
// second part says that i should never be less than 0.
// third part says that i should be subtracted by 1 after every iteration

    for (var i = arr.length-1; i >= 0; i--) {
        console.log(arr[i]);
    }
}

function whileLoopFromSarah() {
    var i = (arr.length - 1); //<--statement 1
    while (i >= 0) {          //<--statement 2
        console.log(arr[i]);
        i--;                  //<--statement 3
    }
}

function isUniform2() {
    var value = arr[0];

    for (var index = 1; index < arr.length; index++) {
        if (value !== arr[index]) {
            return false;
        }
    }

    return true;
}

function isUniform2While() {
    var value = arr[0];
    var index = 1;

    while (index < arr.length) {
        if (value !== arr[index]) {
            return false;
        }
        index++;
    }

    return true;
}


function sumArray() {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        sum = sum + arr[i];
    }
    return sum;
}

function sumArrayWhile(fancyArray) {
    var sum = 0;
    var i = 0;
    while (i < fancyArray.length) {
        sum = sum + fancyArray[i];
        i++;
    }
    return sum;
}

//arr = [1,2,3];

function howParametersWork() {
    var something = [1,2,3,4,5,6,7,8,9];
    var response = sumArrayWhile(something);
    return response;
}

function max() {
    var superMaximum = 0;
    for (var i = 0; i < arr.length; i++) {
        if (superMaximum < ) {
            superMaximum = arr[i];
        }
    }
}