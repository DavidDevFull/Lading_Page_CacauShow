
let cont = 0

setInterval(function(){
  lastSlider()
},1500)

function lastSlider(){
  cont++
  if(cont >= 5){
    cont = 1;
  }
  document.getElementById("slider"+cont).checked = true;
  console.log(cont)
}




