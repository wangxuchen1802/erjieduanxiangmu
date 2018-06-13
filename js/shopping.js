var oTable = document.querySelector('table');
console.log(oTable);

// 读取cookie
var sCookie = getCookie('goods');

var aCookie = sCookie ? JSON.parse(sCookie) : [];


console.log(aCookie)

for(var i = 0; i < aCookie.length; i++) {
	var oCookie = aCookie[i];
	// 创建LI
	// var oNewLi = document.createElement('li');
	// oNewLi.innerHTML = '<a href="javascript:;" class="delete" data-id="' + oCookie.id +'">删除</a><img src="' + oCookie.url + '" alt=""><div class="title">' + oCookie.title + '</div><div class="price">￥' + oCookie.price + '元, ' + oCookie.num +'个</div>';

	// 创建tr
	
	var oNewTr = document.createElement('tr');
	oNewTr.innerHTML =' <td><a href="javascript:;"><img src="' + oCookie.url + '"></a><p><a href="javascript:;">' + oCookie.title + '</a></p></td><td><p>尺码:M</p><p>颜色:宝石红</p></td><td>￥' + oCookie.price + '元</td><td>￥82.00元</td><td><input type="text" value="' + oCookie.num + '"></td><td></td><td><a href="javascript:;">删除</a></td>'
							
						
	oTable.appendChild(oNewTr);
}