var wrapperEle = document.body.querySelector(".wrapper");

var numbers=[-30, 14, 66, 21, 72, -4];

//var nums=[];


for (i = 0; i < numbers.length; i++) {
 var numEle = document.createElement("div");
 const num = numbers[i];
  
 numEle.addEventListener("click", function(){
 num=num+1;
});
  
 numEle.innerHTML = "The number is " + numbers[i]+ " and ";
  if (numbers[i] < 0){
    numEle.innerHTML = "The number is " + numbers[i]+ " and it is less than 0."
  } else if (numbers[i] > 50){
    numEle.innerHTML = "The number is " + numbers[i]+ " and it is greater than 50."
  } else if (numbers[i] == 14){
    numEle.innerHTML = "The number is " + numbers[i]+ " and it, amazingly, equals 14."
  } else {
    numEle.innerHTML = "The number is " + numbers[i]+ " and it doesn't meet any of the requirements."
  }
    

  
  wrapperEle.appendChild(numEle);
  
};