var hour = document.getElementById('hour');
var minute = document.getElementById('minute');

var form = document.getElementById('form');

var reset = document.getElementById('reset');
var start = document.getElementById('start');

var watch = function(jin){
	var i;
	var j;
	
  
   if(start.value || reset.value){
   	  for(i=0;i<60;i++){
		  for(j=0;j<60;j++){
			  minute.innerText=j;
			  jin.preventDefault();
		  }
		         hour.innerText=i;
		         jin.preventDefault();
      }
    }
        

}
form.addEventListener('submit',watch);