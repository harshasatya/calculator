import Big from "big.js";

Date.prototype.addDays = function (days) {
  const date = new Date(this.valueOf());
  date.setDate(date.getDate() + days);
  return date;
};


export default function operate(numberOne, numberTwo, operation, toggle) {


  if(toggle === "0" || toggle === null){ 
  const one = Big(numberOne || "0");
  const two = Big(numberTwo || (operation === "÷" || operation === 'x' ? "1": "0")); //If dividing or multiplying, then 1 maintains current value in cases of null
  if (operation === "+") {
    return one.plus(two).toString();
  }
  if (operation === "-") {
    return one.minus(two).toString();
  }
  if (operation === "x") {
    return one.times(two).toString();
  }
  if (operation === "÷") {
    if (two === "0") {
      alert("Divide by 0 error");
      return "0";
    } else {
      return one.div(two).toString();
    }
  }
  if (operation === "x^y") {
    if (two === "0") {
      return "1";
    } else {
      return Math.pow(one,two).toString();
    }
  }
  throw Error(`Unknown operation '${operation}'`);
}
else{
  if(operation === "+"){
    if(numberOne.length === 7){
      numberOne = "0"+numberOne;
    }
    var m1 = parseInt(numberOne.slice(0,2))-1;
    var d1 = parseInt(numberOne.slice(2,4));
    var y1 = parseInt(numberOne.slice(4,8));
    const d = new Date(Date.UTC(y1,m1,d1));
    const two = parseInt(numberTwo)+1;
    const d2 =  d.addDays(two);
    return d2.getFullYear()+'-'+(d2.getMonth()+1)+'-'+d2.getDate();;
  }
  if(operation === "-"){
    if(numberOne.length === 7){
      numberOne = "0"+numberOne;
    }
    var m1 = parseInt(numberOne.slice(0,2))-1;
    var d1 = parseInt(numberOne.slice(2,4));
    var y1 = parseInt(numberOne.slice(4,8));
    const d = new Date(Date.UTC(y1,m1,d1));
    const two = parseInt(numberTwo)-1;
    const d2 =  d.addDays(two*-1);
    return d2.getFullYear()+'-'+(d2.getMonth()+1)+'-'+d2.getDate();;
  }
}

}

