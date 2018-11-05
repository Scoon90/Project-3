function makeGride(){
  console.log("makeGrid is running!");
  var table = document.getElementById("pixelCanvas");
  var row = document.createElement("tr");
  var thight = document.getElementById("inputHeight").value;
  var twidth = document.getElementById("inputWidth").value;
  CellH = document.createElement("td");

  table.innerHTML = '';

 
      table.appendChild(row)

    for (let x = 0; x < thight; x++) {
      
    for (let y = 0; y < twidth; y++) {
      row.appendChild(CellH);
      //alert("W"+y)
    }
    alert("H"+x)


    }
   
  }

  document.addEventListener("submit", tValue);
  function tValue(event){
  event.preventDefault()
  makeGride();
  clearGride();
  }

function clearGride(){
  document.remove (table);
}

var color =document.getElementById('colorPicker');
color.querySelector('color');
function getColor(colorPicker){
   color= document.getElementById('colorPicker').value;
}
