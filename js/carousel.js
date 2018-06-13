 $(function() {

     //代码初始化
        var size=$(".img li").size();
       

        //手动控制轮播效果
        $(".img li").eq(0).show();
        $(".smabtn li").eq(0).addClass("active");
        $(".smabtn li").click(function() {
            $(this).addClass("active").siblings().removeClass("active");
            var index = $(this).index();
            i=index;
            $(".img li").eq(index).fadeIn(300).siblings().fadeOut(300);
        })

        //自动
        var i = 0;
        var t = setInterval(move, 1500);
        //核心向左的函数
        function moveLeft() {
            i--;
            if (i == -1) {
                  i = size-1;
            }
            $(".smabtn li").eq(i).addClass("active").siblings().removeClass("active");
            $(".img li").eq(i).fadeIn(700).siblings().fadeOut(700);

        }
        //核心向右的函数
        function move() {
            i++;
            if (i == size) {
                i = 0;
            }
            $(".smabtn li").eq(i).addClass("active").siblings().removeClass("active");
            $(".img li").eq(i).fadeIn(300).siblings().fadeOut(1000);

        }
        //定时器的开始与结束
        $(".carousel").hover(function() {
            clearInterval(t);
        }, function() {
            t = setInterval(move, 3000)
        })
      /*  //左边按钮的点击事件
        $(".carousel .left").click(function() {
            moveLeft();
        })
        //右边按钮的点击事件
        $(".carousel .right").click(function() {
            move();
        })*/
    })


