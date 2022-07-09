window.addEventListener("keydown",function(event){
  if(event.key=="Enter"){
    startCounter();
  }
});
var arr;
var arrIds=["zero","first","second","third","fourth"];
var si=4;
var currentAll=document.querySelectorAll(".current");
var nextAll=document.querySelectorAll(".next");
var input;
function getNumber(){
  var visbileNumber=0;
  for(var i of arr){
    visbileNumber=visbileNumber*10+i;
  }
  return visbileNumber;
}
function updateBox(currentIndex,desire){
  console.log(desire);
  nextAll[currentIndex].textContent=desire;
  nextAll[currentIndex].classList.add("animate");
  setTimeout(function(){
    currentAll[currentIndex].textContent=nextAll[currentIndex].textContent;
    nextAll[currentIndex].classList.remove("animate");
  },500);
}
function fillCounter(){
  // console.log(arr);
  var interval=setInterval(function() {
      if(getNumber()>=input){
          clearInterval(interval);
          window.alert("!!Time Over");
          return;
      }
      if(arr[si]!=9){
        arr[si]++;
        updateBox(si,arr[si]);
        if(si!=4){
          si=4;
        }
      }else{
        if(arr[si]==9){
          arr[si]=0;
          updateBox(si,arr[si]);
          si--;
        }        
      }
  }, 1000);    
  return;
}
function startCounter(){
  input=document.getElementById("number").value;
  //initzation to 0
  for( let i=0;i<currentAll.length;i++){
    currentAll[i].textContent=0;
  }
  si=4;
  arr=[0,0,0,0,0];
  if((input<="99999"&&input>="1")&&input.length<=5){    
    fillCounter();
  }else{
    window.alert("!!Incorrect Input");
  }
  return;
}
