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
	document.getElementById("drawingNo").value="GB 894.1-86";
}
function area2(){
	document.getElementById("imageNo").value="2";
	document.getElementById("partsName").value="挡圈62";
	document.getElementById("drawingNo").value="GB 893.1-86";
}
function area3(){
	document.getElementById("imageNo").value="3";
	document.getElementById("partsName").value="轴承107(35X62X14)";
	document.getElementById("drawingNo").value="GB/T276-1994-82";
}
function area4(){
	document.getElementById("imageNo").value="4";
	document.getElementById("partsName").value="半轴油封 40X62X10";
	document.getElementById("drawingNo").value="5136002/1.41.538";
}
function area5(){
	document.getElementById("imageNo").value="5";
	document.getElementById("partsName").value="半轴油封挡圈";
	document.getElementById("drawingNo").value="4996762/1.41.537";
}
function area61(){
	document.getElementById("imageNo").value="6.1";
	document.getElementById("partsName").value="长叉轴";
	document.getElementById("drawingNo").value="8A5142253-1/20";
}
function area62(){
	document.getElementById("imageNo").value="6.2";
	document.getElementById("partsName").value="挡圈";
	document.getElementById("drawingNo").value="885142040-6/20";
}
function area63(){
	document.getElementById("imageNo").value="6.3";
	document.getElementById("partsName").value="滚针轴承总成";
	document.getElementById("drawingNo").value="885142040-5/20";
}
function area64(){
	document.getElementById("imageNo").value="6.4";
	document.getElementById("partsName").value="十字轴";
	document.getElementById("drawingNo").value="885142040-4/20";
}
function area65(){
	document.getElementById("imageNo").value="6.5";
	document.getElementById("partsName").value="双联叉";
	document.getElementById("drawingNo").value="885142040-2/20";
}
function area66(){
	document.getElementById("imageNo").value="6.6";
	document.getElementById("partsName").value="短叉轴";
	document.getElementById("drawingNo").value="88514204-3/20";
}
function area7(){
	document.getElementById("imageNo").value="7";
	document.getElementById("partsName").value="驱动叉轴油封 42X62X17";
	document.getElementById("drawingNo").value="885133799/1.41.539";
}
function area8(){
	document.getElementById("imageNo").value="8";
	document.getElementById("partsName").value="轴用挡圈";
	document.getElementById("drawingNo").value="5140018/20";
}
function area9(){
	document.getElementById("imageNo").value="9";
	document.getElementById("partsName").value="太阳轮";
	document.getElementById("drawingNo").value="1254.31.107";
}
function area10(){
	document.getElementById("imageNo").value="10";
	document.getElementById("partsName").value="齿圈档环";
	document.getElementById("drawingNo").value="4997571/1.41.549";
}
function area11(){
	document.getElementById("imageNo").value="11";
	document.getElementById("partsName").value="齿圈支座";
	document.getElementById("drawingNo").value="1254.31.110";
}
function area12(){
	document.getElementById("imageNo").value="12";
	document.getElementById("partsName").value="齿圈";
	document.getElementById("drawingNo").value="1254.31.109";
}
function area131(){
	document.getElementById("imageNo").value="13.1";
	document.getElementById("partsName").value="行星轮轴承挡圈 20X45X0.8";
	document.getElementById("drawingNo").value="4997510/1.41.552";
}
function area132(){
	document.getElementById("imageNo").value="13.2";
	document.getElementById("partsName").value="行星齿轮";
	document.getElementById("drawingNo").value="5108747/1.41.545";
}
function area133(){
	document.getElementById("imageNo").value="13.3";
	document.getElementById("partsName").value="滚针轴承 25.6X35.6X29.8";
	document.getElementById("drawingNo").value="5101693/1.41.546";
}
function area134(){
	document.getElementById("imageNo").value="13.4";
	document.getElementById("partsName").value="行星架";
	document.getElementById("drawingNo").value="5137689/20";
}
function area135(){
	document.getElementById("imageNo").value="13.5";
	document.getElementById("partsName").value="行星齿轮轴";
	document.getElementById("drawingNo").value="4997509/1.41.547";
}
function area14(){
	document.getElementById("imageNo").value="14";
	document.getElementById("partsName").value="矩形截面密封圈 22X18X1.5";
	document.getElementById("drawingNo").value="10263460/14607";
}
function area15(){
	document.getElementById("imageNo").value="15";
	document.getElementById("partsName").value="六角头螺塞 M22X15";
	document.getElementById("drawingNo").value="10305114/14530";
}
function area16(){
	document.getElementById("imageNo").value="16";
	document.getElementById("partsName").value="锁紧螺栓 M10X1.25X30";
	document.getElementById("drawingNo").value="14233634/10357/04";
}