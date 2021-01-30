function addone(){
  var count = document.getElementById('thisone').innerHTML;
	count++;
	// memberikan getaran pada saat ditekan
  navigator.vibrate([100]); 
  document.getElementById('thisone').innerHTML = count;
}
function reset(){
  document.getElementById('thisone').innerHTML = 0;
}
