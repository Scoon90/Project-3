function makeGride(){
  var table = document.getElementById('pixelCanvas');
  var row = document.createElement('tr');
  var createhight = document.getElementById('inputHeight').value;
  var createwidth = document.getElementById('inputWidth').value;
 var cloume = document.createElement('td');

  table.innerHTML = '';
  

  for (let x = 1; x <= createhight; x++) {
     row; 
    for (let y = 1; y <= createwidth; y++){
      cloume;
      row.appendchiled(cloume);
    }
    alert("H"+x)


    }
   table.appendChild(row)
  }

  document.addEventListener("submit", tValue);
  function tValue(event){
  event.preventDefault()
  makeGride();
  }


var color =document.getElementById('colorPicker');
color.querySelector('color');
function getColor(colorPicker){
   color= document.getElementById('colorPicker').value;
}
