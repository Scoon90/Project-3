//var sizePicker = document.getElementById('sizePicker');
//var color =document.getElementById('colorPicker');
//color.querySelector('color');
//function getColor(colorPicker){
   //var color= document.getElementById('colorPicker').value;
//}

function makeGrid(gridHeight , gridWidth) {
// create table
  var convas = document.getElementById('pixelCanvas');
  var table = document.querySelectorAll('.pixelCanvas');
  var body = "";
  var gridHeight = document.getElementById('inputHeight').value;
  var gridWidth = document.getElementById('inputWidth').value;
  var tr =document.getElementsByClassName('tr'); 
  var td =document.creteElement('td');
  for (var x=0; x<inputHeight; x++){ 
    sizePicker.appendChild(tr);
    for (var y=0; y<inputWidth; y++){
      sizePicker.appendChild(td);
    }
    body = tr[x]+ td[y];
  }
  
    
    //addClickEventToCells();
}

document.getElementById("pixelCanvas").addEventListener("click", function(e){
e= document.getElementById('pixelCanvas').innerHTML;
table.innerHTML = body;})

makeGrid();

//sizePicker.appendChild(tr);
//table.appendChild(sizePicker);
//sizePicker.addEventListener('click', function(s){
//console.log(s.target);
//console.log(s);
//})

//console.log(tr[i].td[j].innerHTML);
//tr[i].td[j].addEventListener('click', function(){
        //console.log('click');
//})
