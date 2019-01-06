window.onload = function(){
	var cover = document.getElementById("contain1");
	window.onscroll = function(){
		var st = document.documentElement.scrollTop || document.body.scrollTop;
		if(st > 180){
			cover.style.position = 'fixed';
		}
		else{
			cover.style.position = 'static';
		}
	}
}

var lj = document.getElementById("lj");
var rj = document.getElementById("rj");
var c2u = document.getElementById("c2u");
var ixi = document.getElementById("ixi");
lj.onclick = function(){
	ixi.src = "../img/pp0.jpeg";
	Bimg.src = "../img/pp0.jpeg";
	c2u.children[0].id = 'act';
	c2u.children[1].id = '';
}
rj.onclick = function(){
	ixi.src = "../img/pp1.jpeg";
	Bimg.src = "../img/pp1.jpeg";
	c2u.children[1].id = 'act';
	c2u.children[0].id = '';
}
c2u.onmouseover = function(ev){
	var ev = ev||event;
	var i = 0;
	if (ev.clientX >= 305 && ev.clientX <= 390) { i = 1; }
	c2u.children[i].id = 'act';
	c2u.children[1-i].id = '';
	if(i == 0){
		ixi.src = "../img/pp0.jpeg";
		Bimg.src = "../img/pp0.jpeg";
	}
	else if(i == 1){
		ixi.src = "../img/pp1.jpeg";
		Bimg.src = "../img/pp1.jpeg";
	}
}

var c2u = document.getElementById("c2u");
var img1 = document.getElementById("img1");
	var img2 = document.getElementById("img2");
	var slider = document.getElementById("slider");
	var Bimg = document.getElementById("Bimg");
	var box = document.getElementById('fangda'); 
	img1.onmouseover=function(){
	    slider.style.display='block';
		img2.style.display='block';
		img2.style.width = "410px";
		box.style.width = "818px";
 	}
	img1.onmouseout=function(){
	    slider.style.display='none';
		img2.style.display='none';
		img2.style.width = "0";
		box.style.width = "411px";
 	}
  
    img1.onmousemove=function(ev){
		var ev=ev||event;
		  
		var oL=ev.clientX-box.offsetLeft-slider.offsetWidth/2;
		var oT=ev.clientY-box.offsetTop-slider.offsetHeight/2;
		  
		var oMaxw=img1.offsetWidth-slider.offsetWidth;
		var oMaxh=img1.offsetHeight-slider.offsetHeight;
		  
		oL=oL>oMaxw?oMaxw:oL<0?0:oL;
		oT=oT>oMaxh?oMaxh:oT<0?0:oT;
		
		slider.style.left = oL+'px';
		slider.style.top = oT+'px' ;
		
		var oBmaxw = img2.offsetWidth - Bimg.offsetWidth; 
		var oBmaxh = img2.offsetHeight - Bimg.offsetHeight; 
		Bimg.style.left = ( oL/oMaxw ) * oBmaxw + 'px';
		Bimg.style.top = ( oT/oMaxh ) * oBmaxh + 'px';
	}
var ro = document.getElementById("ro");
var roox = document.getElementById("roox");
console.log(ro.children[0].tagName);
console.log(ro.tagName);
ro.children[0].onclick = function(){
	ro.children[0].className = 'rox';
	ro.children[1].className = '';
	roox.innerHTML = "150ml";
}
ro.children[1].onclick = function(){
	ro.children[1].className = 'rox';
	ro.children[0].className = '';
	roox.innerHTML = "200ml";
}
var ddd = document.getElementById("ddd");
var shul = document.getElementById("shul");
var iii = document.getElementById("iii");
ddd.onclick = function(){
	var nu = parseInt(shul.value);
	if (nu>1) { nu--;shul.value = nu }
}
iii.onclick = function(){
	var nu = parseInt(shul.value);
	if (nu<5) {nu++; shul.value = nu }
}

var gouwu = document.getElementById("gouwu");
var zhezhao = document.getElementById("zhezhao");
var gq = document.getElementById("gq");
var chazi = document.getElementById("chazi");
var gomaiq = document.getElementById("gomaiq");
gouwu.onclick = function() {
	zhezhao.style.display = 'block';
	gq.style.display = 'block';
}
var guandiao = function(){
	zhezhao.style.display = 'none';
	gq.style.display = 'none';
}

chazi.onclick = guandiao;
gomaiq.onclick = guandiao;