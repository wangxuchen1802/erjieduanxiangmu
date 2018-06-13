var oAdd = document.querySelector('.buy-button .buy-car');


oAdd.onmouseover = function(){
	// ID、名称、价格、图片地址、数量、
		var
			goodsId    = oAdd.getAttribute('data-id'),
			goodsUrl   = oAdd.getAttribute('data-url'),
			goodsTitle = oAdd.getAttribute('data-title'),
			goodsPrice = oAdd.getAttribute('data-price'),
			goodsColor = oAdd.getAttribute('data-color');
			goodsSize  = oAdd.getAttribute('data-size');
			goodsOprice  = oAdd.getAttribute('data-oprice');
			console.log(goodsOprice)
		// 存储一件商品的信息
		var oGoods = {
			id: goodsId,
			url: goodsUrl,
			title: goodsTitle,
			price: goodsPrice,
			color: goodsColor,
			size : goodsSize,
			oprice: goodsOprice,
			num: 1
		};

		// 读取cookie
		var sGoods = getCookie('goods');
		console.log(sGoods)
		// 如果sGoods存在，说明有商品被添加过
		// 如果不存在，则需要创建一个新数组
		var aGoods = sGoods ? JSON.parse(sGoods) : [];


		// 判断即将添加的商品是否存在，如果存在则直接数量+1，不存在则将该商品对象添加到数组中
		var notExists = aGoods.every(function (v) {
			if(v.id === oGoods.id) {
				// 商品数量+1
				v.num++;
				return false;
			}
			return true;
		});

		// 如果商品没有存在过，则将商品对象添加到数组中
		if(notExists) {
			aGoods.push(oGoods);
		}

		// 存储到cookie中
		setCookie('goods', JSON.stringify(aGoods), 20);
	}



	