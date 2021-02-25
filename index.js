function saturdayFun(activity = "roller-skate"){
  return `This Saturday, I want to ${activity}!`
}

function mondayWork(work = "go to the office"){
  return `This Monday, I will ${work}.`
}

let wrapAdjective = function(style="*"){
  return function(adjective = "special"){
    return `You are ${style}${adjective}${style}!`
  }
}

const Calculator = {
  add: function(a,b){
    return a + b;
  },
  subtract: function(a,b){
    return a - b;
  },
  multiply: function(a,b){
    return a * b;
  },
  divide: function(a,b){
    return a / b;
  }
}

let actionApplyer = function(int, arr){
  let a = int

  for (let i = 0; i < arr.length; i++){
    a = arr[i](a)
  }
  return a
}