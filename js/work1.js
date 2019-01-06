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
var money = document.getElementById("mon");

money.onclick = function(){
	var jiazhi = document.getElementById("jiazhi");
	jiazhi.innerHTML = "&nbsp;&nbsp;¥"+money.value;
}




// lan的设置
var lan1 = document.getElementById("lan1");
lan1.onmouseover = function(){
	lan1.style.right = "0";
}
lan1.onmouseout = function(){
	lan1.style.right = "-80px";
}
var lan2 = document.getElementById("lan2");
lan2.onmouseover = function(){
	lan2.style.right = "0";
}
lan2.onmouseout = function(){
	lan2.style.right = "-80px";
}
var lan3 = document.getElementById("lan3");
lan3.onmouseover = function(){
	lan3.style.right = "0";
	var erwei = document.getElementById("erwei");
	erwei.innerHTML = "&nbsp;&nbsp;<img src='../img/erwei.png'>";
	erwei.style.marginTop = "5px";
}
lan3.onmouseout = function(){
	lan3.style.right = "-80px";
	var erwei = document.getElementById("erwei");
	erwei.innerHTML = "&nbsp;&nbsp;<img src='../img/serwei.png'>";
	erwei.style.marginTop = "55px";
	erwei.style.marginLeft = "0";
}
var lan4 = document.getElementById("lan4");
lan4.onmouseover = function(){
	lan4.style.right = "0";
}
lan4.onmouseout = function(){
	lan4.style.right = "-80px";
}


//lunbuo
var luobuo = document.getElementById('lunbuo');
		var oNavlist = document.getElementById('nav').children;
		var slider = document.getElementById('slider');
		var left = document.getElementById('jiantou1');
		var right = document.getElementById('jiantou2');
		var index = 1;
		var timer;
		var isMoving = false;
		luobuo.onmouseover = function(){
			animate(left,{opacity:60})
			animate(right,{opacity:60})
			clearInterval(timer)
		}
		luobuo.onmouseout = function(){
			animate(left,{opacity:0})
			animate(right,{opacity:0})
			timer = setInterval(next, 600);
		}
		right.onclick = next;
		left.onclick = prev;
		for( var i=0; i<oNavlist.length; i++ ){
			oNavlist[i].index = i;
			oNavlist[i].onclick = function(){
				index = this.index+1;
				navmove();
				animate(slider,{left:-800*index});
			}
		}
		function next(){
			if(isMoving){
				return;
			}
			isMoving = true;
			index++;
			navmove();
			animate(slider,{left:-800*index},function(){
				if(index==7){
					slider.style.left = '-800px';
					index = 1;
				}
				isMoving = false;
			});
		}
		function prev(){
			if(isMoving){
				return;
			}
			isMoving = true;
			index--;
			navmove();
			animate(slider,{left:-800*index},function(){
				if(index==0){
					slider.style.left = '-800px';
					index = 7;
				}
				isMoving = false;
			});
		}
		function navmove(){
			for( var i=0; i<oNavlist.length; i++ ){
				oNavlist[i].className = "";
			}
			if(index >6 ){
				oNavlist[0].className = "active";
			}else if(index<=0){
				oNavlist[6].className = "active";
			}else {
				oNavlist[index-1].className = "active";
			}
		}
		timer = setInterval(next, 500);
function getStyle(obj, attr){
	if(obj.currentStyle){
		return obj.currentStyle[attr];
	} else {
		return getComputedStyle(obj, null)[attr];
	}
}
function animate(obj,json,callback){
	clearInterval(obj.timer);
	obj.timer = setInterval(function(){
		var isStop = true;
		for(var attr in json){
			var now = 0;
			if(attr == 'opacity'){
				now = parseInt(getStyle(obj,attr)*100);
			}else{
				now = parseInt(getStyle(obj,attr));
			}
			var speed = (json[attr] - now) / 8;
			speed = speed>0?Math.ceil(speed):Math.floor(speed);
			var cur = now + speed;
			if(attr == 'opacity'){
				obj.style[attr] = cur / 100;
			}else{
				obj.style[attr] = cur + 'px';
			}
			if(json[attr] !== cur){
				isStop = false;
			}
		}
		if(isStop){
			clearInterval(obj.timer);
			callback&&callback();
		}
	}, 30)
}
var cgoo1 = document.getElementsByClassName("goo1");
var go1 = document.getElementById("go1");
var goo1 = document.getElementsByClassName("goo1");
var dong = function(){
		var l = parseInt(getStyle(go1,'top'));
		if(l < (-29*13)){
			l = 0;
		}
		else{
			l --;
		}
		go1.style.top = l+"px";
	}
var dodo = setInterval(dong,20);
go1.onmouseover = function(){
	clearInterval(dodo)
}
go1.onmouseout = function(){
	dodo = setInterval(dong,20);
}