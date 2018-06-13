// var form = document.forms['search-form'];
var input = document.querySelector('.search-text');
var list = document.querySelector('.searchform .list');
console.log(list)

console.log(input);

function callback(data){
		console.log(data)
   	list.innerHTML = '';
    data.result.forEach( v => {
        var newLi = document.createElement('li');
        newLi.innerHTML = v[0];

        list.appendChild(newLi);
    });
}

input.oninput = function () {
    var Script = document.createElement('script');
    Script.src = 'https://suggest.taobao.com/sug?code=utf-8&q='+ this.value +'&_ksTS=1519882003129_547&callback=callback&k=1&area=c2c&bucketid=3';
    document.body.appendChild(Script);

};
