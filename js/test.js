var test = "span35span";
var value = "";

function getCost() {
  for (var i = 0; i < test.length; i++) {
    if (isNaN(test[i])) {
    } else {
      value = value + test[i];
      if (value.length === 2) {
        console.log(value);
        return value;
      }
    }
  }
}

getCost();
