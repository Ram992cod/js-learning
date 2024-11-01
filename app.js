const num1 = "89103235356";
const num2 = "+79103235356";
const num3 = "+7(910)3235356";
const num4 = "+7(910) 323-53-56";
const num5 = "   +7(910) 323-53-56";
const num1Error = "89103235";
const num2Error = "+7d910d323-53-56";
const num3Error = "9+7103235356";
const num4Error = "89103g35356";
let fixedNum = "";

function checkN(num) {
  fixedNum = num.trim();
  //console.log(fixedNum);

  console.log(fixedNum.lenght);

  if (num.lenght < 10) {
    return false;
  } else {
    return fixedNum;
  }
}

console.log(checkN(num1Error));
