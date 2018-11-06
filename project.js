//declear Variables
var drawtable = document.getElementById("pixelCanvas");
var size = document.getElementById("sizePicker");
// add event listener to submite butome
size.addEventListener("submit", tvalue);
function tvalue(event){
event.preventDefault();

makeGrid();

}
// this function will be used to create table and select color
function makeGrid(){

 var getwidth = document.getElementById("inputWidth").value;
 var getheight = document.getElementById("inputHeight").value;
 //to clear the inner value when there is 
 drawtable.innerHTML = '';
 // loop to create raws and colums
 for (var i =1 ; i<= getheight ; i++){
   var row = document.createElement("tr");
   for (var y =1 ; y<= getwidth ; y++){
     var colume = document.createElement("td");
     row.appendChild(colume);
	   // select the colour for cell
     colume.addEventListener("click", selectcolor);
     function selectcolor(event){
     let color = document.getElementById("colorPicker").value;
     event.target.style.backgroundColor=color;   
   }
	 
	}
	drawtable.appendChild(row);
  }
}
