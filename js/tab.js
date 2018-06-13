(function ($) {
	// 创建Tab构造函数
	var Tab = function (tab) {
		// 获取菜单LI
		var aMenuLi = tab.find('.notice-tab a');
		console.log(aMenuLi)

		// 获取所有的panel
		var aPanel = tab.find('.notice-content');

		aMenuLi.click(function () {
			var index = $(this).index();

			// 切换菜单
			aMenuLi.removeClass('active').eq(index).addClass('active');

			// 切换panel
			aPanel.removeClass('active').eq(index).addClass('active');
		});
	};

	// 注册成jQuery方法
	$.fn.extend({
		tab1: function () {
			this.each(function (k, v) {
				new Tab($(v));
			});
		}
	});
})(jQuery);




(function ($) {
	// 创建Tab构造函数
	var Tab = function (tab) {
		// 获取菜单LI
		var MenuLi = tab.find('.done-nav span');

		// 获取所有的panel
		var Panel = tab.find('.done-content');

		MenuLi.click(function () {
			var index = $(this).index();

			// 切换菜单
			MenuLi.removeClass('active').eq(index).addClass('active');

			// 切换panel
			Panel.removeClass('active').eq(index).addClass('active');
		});
	};

	// 注册成jQuery方法
	$.fn.extend({
		tab: function () {
			this.each(function (k, v) {
				new Tab($(v));
			});
		}
	});
})(jQuery);


(function ($) {
	// 创建Tab构造函数
	var Tab = function (tab) {
		// 获取菜单LI
		var MenuLi = tab.find('.title-tab span');

		// 获取所有的panel
		var Panel = tab.find('.describe-content');

		MenuLi.click(function () {
			var index = $(this).index();

			// 切换菜单
			MenuLi.removeClass('active').eq(index).addClass('active');

			// 切换panel
			Panel.removeClass('active').eq(index).addClass('active');
		});
	};

	// 注册成jQuery方法
	$.fn.extend({
		tab2: function () {
			this.each(function (k, v) {
				new Tab($(v));
			});
		}
	});
})(jQuery);