/* 드롭다운*/

function dropdown(obj){
	let submenu = document.getElementById("mainmenu_sub");
	submenu.style.display = "flex";
	}
function dropdown_out(obj){
	let submenu = document.getElementById("mainmenu_sub");
	submenu.style.display = "None";
	
}	

/* 이미지 시간에 따라 변환 */
let files = [
	"../images/001.png",
	"../images/002.png",
	"../images/003.png",
	"../images/004.png",
	"../images/005.png",
	]
 let imgs = new Array;
 for(let i =0; i<files.length; i++)
 {
 	imgs[i] = new Image();
 	imgs[i].src = files[i];
 }
let next =0;
function imagedisplay(){
		let image = document.getElementById("main_image_1");
		while(true){ 
		while(next<5){
			image.src = imgs[next].src;
			next++;
		}
		next = 0;
	}
}
setinterval("imagedisplay",5000)

/* 강조 관련 */