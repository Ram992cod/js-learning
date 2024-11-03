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
  //fixedNum = num.trim();

  for (element of num) {
    if (!isNaN(Number(element))) {
      fixedNum += element;
    }
  }

  fixedNum = fixedNum.replaceAll(' ', '');
  fixedNum = fixedNum.replaceAll('+', '');
  fixedNum = fixedNum.replaceAll('(', '');
  fixedNum = fixedNum.replaceAll(')', '');
  fixedNum = fixedNum.replaceAll('-', '');

  if (fixedNum.slice(0, 4) != '8910' && fixedNum.slice(0, 4) != '7910') {
    console.log(fixedNum);
    return 'Неверное начало номера';
  }




  if (fixedNum.length < 11 || fixedNum.length > 11) {


    return console.log(fixedNum, fixedNum.length, 'неверный номер');
  } else
    return fixedNum;

}

console.log(checkN(num5));
