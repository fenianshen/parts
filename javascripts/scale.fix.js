fixScale = function(doc) {

	var addEvent = 'addEventListener',
	    type = 'gesturestart',
	    qsa = 'querySelectorAll',
	    scales = [1, 1],
	    meta = qsa in doc ? doc[qsa]('meta[name=viewport]') : [];

	function fix() {
		meta.content = 'width=device-width,minimum-scale=' + scales[0] + ',maximum-scale=' + scales[1];
		doc.removeEventListener(type, fix, true);
	}

	if ((meta = meta[meta.length - 1]) && addEvent in doc) {
		fix();
		scales = [.25, 1.6];
		doc[addEvent](type, fix, true);
	}

};
function area1(){
	document.getElementById("imageNo").value="1";
	document.getElementById("partsName").value="挡圈35";
}
function area2(){
	document.getElementById("imageNo").value="2";
	document.getElementById("partsName").value="挡圈62";
}
function area3(){
	document.getElementById("imageNo").value="3";
	document.getElementById("partsName").value="轴承107(35X62X14)";
}
function area4(){
	document.getElementById("imageNo").value="4";
	document.getElementById("partsName").value="半轴油封 40X62X10";
}
function area5(){
	document.getElementById("imageNo").value="5";
	document.getElementById("partsName").value="半轴油封挡圈";
}
function area61(){
	document.getElementById("imageNo").value="6.1";
	document.getElementById("partsName").value="长叉轴";
}
function area62(){
	document.getElementById("imageNo").value="6.2";
	document.getElementById("partsName").value="挡圈";
}
function area63(){
	document.getElementById("imageNo").value="6.3";
	document.getElementById("partsName").value="滚针轴承总成";
}
function area64(){
	document.getElementById("imageNo").value="6.4";
	document.getElementById("partsName").value="十字轴";
}
function area65(){
	document.getElementById("imageNo").value="6.5";
	document.getElementById("partsName").value="双联叉";
}
function area66(){
	document.getElementById("imageNo").value="6.6";
	document.getElementById("partsName").value="短叉轴";
}
function area7(){
	document.getElementById("imageNo").value="7";
	document.getElementById("partsName").value="驱动叉轴油封 42X62X17";
}
function area8(){
	document.getElementById("imageNo").value="8";
	document.getElementById("partsName").value="轴用挡圈";
}
function area9(){
	document.getElementById("imageNo").value="9";
	document.getElementById("partsName").value="太阳轮";
}
function area10(){
	document.getElementById("imageNo").value="10";
	document.getElementById("partsName").value="齿圈档环";
}
function area11(){
	document.getElementById("imageNo").value="11";
	document.getElementById("partsName").value="齿圈支座";
}
function area12(){
	document.getElementById("imageNo").value="12";
	document.getElementById("partsName").value="齿圈";
}
function area131(){
	document.getElementById("imageNo").value="13.1";
	document.getElementById("partsName").value="行星轮轴承挡圈 20X45X0.8";
}
function area132(){
	document.getElementById("imageNo").value="13.2";
	document.getElementById("partsName").value="行星齿轮";
}
function area133(){
	document.getElementById("imageNo").value="13.3";
	document.getElementById("partsName").value="滚针轴承 25.6X35.6X29.8";
}
function area134(){
	document.getElementById("imageNo").value="13.4";
	document.getElementById("partsName").value="行星架";
}
function area135(){
	document.getElementById("imageNo").value="13.5";
	document.getElementById("partsName").value="行星齿轮轴";
}
function area14(){
	document.getElementById("imageNo").value="14";
	document.getElementById("partsName").value="矩形截面密封圈 22X18X1.5";
}
function area15(){
	document.getElementById("imageNo").value="15";
	document.getElementById("partsName").value="六角头螺塞 M22X15";
}
function area16(){
	document.getElementById("imageNo").value="16";
	document.getElementById("partsName").value="锁紧螺栓 M10X1.25X30";
}