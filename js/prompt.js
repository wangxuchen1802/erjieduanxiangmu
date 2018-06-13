 var txt = document.querySelector('.search-text');
    var notice = ['爆款女包','新款上线','秋衣打底外穿圆领印','2018新款短袖T恤'];
    var index = 0;
    txt.value = notice[index];
    var timer = null;
    autoMove();
    function autoMove(){
      timer = setInterval(function(){
         index++;
         if(index >= notice.length){
           index = 0
         } 
         txt.value = notice[index];
      },3000)
    }
    txt.onfocus = function(){
      if(txt.value == notice[index]){
          txt.value = '';
      }
    }
    txt.onblur = function(){
      if(txt.value == ''){
          txt.value = notice[index];
      }
    }