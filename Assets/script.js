function hamburger() {
	var div = document.getElementById("hide");
	var icon = document.getElementById
	if(div.classList.contains('show')){
		div.classList.remove('show');
		div.classList.add('hide-anm');

	}else{
		div.classList.add('show');
		div.classList.remove('hide-anm');
	}
}