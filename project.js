//var sizePicker = document.getElementById('sizePicker');
//var color =document.getElementById('colorPicker');
//color.querySelector('color');
//function getColor(colorPicker){
   //var color= document.getElementById('colorPicker').value;
//}


function makeGrid(gridHeight , gridWidth) {
// create table
  var convas = document.getElementById('sizePicker');
  var table = document.querySelectorAll('.pixelCanvas');
  var gridHeight = document.getElementById('inputHeight').value;
  var gridWidth = document.getElementById('inputWidth').value;
  convas.appendChild(table);
  table = "";
  
  for (var x=0; x<=gridHeight; x++){ 
    var tr =document.createElement('tr'); 
    table.appendChild(tr);
    for (var y=0; y<=gridWidth; y++){
      var td =document.creteElement('td');
      tr.appendChild(td);
    }
    
  }
  
  document.getElementById("pixelCanvas").addEventListener("click", function(e){
    e= document.getElementById('pixelCanvas').innerHTML})
}

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
