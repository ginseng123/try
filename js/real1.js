/* 드롭다운*/

function dropdown(obj){
	let submenu = document.getElementById("mainmenu_sub");
	submenu.style.display = "flex";
	}
function dropdown_out(obj){
	let submenu = document.getElementById("mainmenu_sub");
	submenu.style.display = "None";
	
}	




/* 이미지 시간에 따라 변환*/
let files = [
		"images/002.png",
		"images/003.png",
		"images/004.png",
		"images/005.png",
		"images/001.png"
	]
let i=0;
function imagedisplay(){
		let image = document.getElementById("mainimage")
			image.src = files[i];
			i = (i+1)% files.length;		
}
setInterval(imagedisplay,7000);




/* 강조 관련 */
