$('.phone-n').focus(function(){				
    if($(this).val()==='') {
    $('.phone-n').next().html("请输入手机号码").css({
	"color": "#666",
	"display":'inline-block',
	"background":"#dadada",
	"line-height":"22px",
	"padding":"0 10px",
	"text-align":'center'
		});
     return false;
	}
	return true;
});
$('.phone-n').blur(function(){
	var name=$(this).val();
	var pattern = /^1[34578]\d{9}$/;		
    if(name==='') {
    $('.phone-n').next().html("请输入手机号码").css({
	"color": "#fff",
	"display":'inline-block',
	"background":"#eb5e00",
	"line-height":"22px",
	"padding":"0 10px",
	"text-align":'center'
		});
     return false;
}
	else if(!pattern.test(name)) {
     	 $(this).next().html("手机号格式不正确").css({
	"color": "#fff",
	"display":'inline-block',
	"background":"#eb5e00",
	"line-height":"22px",
	"padding":"0 10px",
	"text-align":'center'
		});
     }else{
     	 $(this).next().html("");
     }

	return true;
});
$('.verification').focus(function(){				
    if($(this).val()==='') {
    $('.hied').after().html("请输入验证码").css({
	"color": "#666",
	"display":'inline-block',
	"background":"#dadada",
	"line-height":"22px",
	"padding":"0 10px",
	"text-align":'center'
		});
     return false;
	}
	return true;
});
$('.verification').blur(function(){
	var name=$(this).val();	
    if(name==='') {
    $('.hied').after().html("请输入验证码").css({
	"color": "#fff",
	"display":'inline-block',
	"background":"#eb5e00",
	"line-height":"22px",
	"padding":"0 10px",
	"text-align":'center'
		});
     return false;
}

	return true;
});
$('.note').focus(function(){				
    if($(this).val()==='') {
    $('.hied1').after().html("请输入短信验证码").css({
	"color": "#666",
	"display":'inline-block',
	"background":"#dadada",
	"line-height":"22px",
	"padding":"0 10px",
	"text-align":'center'
		});
     return false;
	}
	return true;
});
$('.note').blur(function(){
	var name=$(this).val();	
    if(name==='') {
    $('.hied1').after().html("请输入短信验证码").css({
	"color": "#fff",
	"display":'inline-block',
	"background":"#eb5e00",
	"line-height":"22px",
	"padding":"0 10px",
	"text-align":'center'
		});
     return false;
}

	return true;
});

$('.password').focus(function(){				
    if($(this).val()==='') {
    $('.hied2').after().html("6~16个字符，请使用英文字母（区分大小写）、符号或数字。").css({
	"color": "#666",
	"width":"300px",
	"display":"block",
	"background":"#dadada",
	"line-height":"22px",
	"padding":"0 10px",
	"text-align":'center'
		});
     return false;
	}
	return true;
});
$('.password').blur(function(){
	var name=$(this).val();	
	var regstr = /^\w{6}$/;
    if(name==='') {
    $('.hied2').after().html("请输入密码").css({
	"color": "#fff",
	"display":"inline",
	"background":"#eb5e00",
	"line-height":"22px",
	"padding":"0 10px",
	"text-align":'center'
		});
     return false;
}else if(!regstr.test(name)) {
     	 $(this).next().html("密码格式不正确").css({
	"color": "#fff",
	"display":'inline',
	"background":"#eb5e00",
	"line-height":"22px",
	"padding":"0 10px",
	"text-align":'center'
		});
     }else{
     	 $(this).next().html("");
     }

	return true;
});
$('.passwordt').focus(function(){				
    if($(this).val()==='') {
    $('.hied3').after().html("确认您上面的输的密码").css({
	"color": "#666",
	"display":"inline",
	"background":"#dadada",
	"line-height":"22px",
	"padding":"0 10px",
	"text-align":'center'
		});
     return false;
	}
	return true;
});
$('.passwordt').blur(function(){
	var name=$(this).val();	
    if(name==='') {
    $('.hied3').after().html("请输入确认密码").css({
	"color": "#fff",
	"display":"inline",
	"background":"#eb5e00",
	"line-height":"22px",
	"padding":"0 10px",
	"text-align":'center'
		});
     return false;
}

	return true;
});
$('.username').focus(function(){				
    if($(this).val()==='') {
    $('.hied4').after().html("4~20个字符，可使用、英文、下划线。注册后用户名不能修改").css({
	"color": "#666",
	"width":"300px",
	"display":"block",
	"background":"#dadada",
	"line-height":"22px",
	"padding":"0 10px",
	"text-align":'center'
		});
     return false;
	}
	return true;
});
$('.username').blur(function(){
	var name=$(this).val();	
	var regstr1 = /^[\u4e00-\u9fa5]{2,4}$/;
    if(name==='') {
    $('.hied4').after().html("请输入用户名").css({
	"color": "#fff",
	"display":"inline",
	"background":"#eb5e00",
	"line-height":"22px",
	"padding":"0 10px",
	"text-align":'center'
		});
     return false;
}else if(!regstr1.test(name)) {
     	 $(this).next().html("用户名格式不正确").css({
	"color": "#fff",
	"display":'inline',
	"background":"#eb5e00",
	"line-height":"22px",
	"padding":"0 10px",
	"text-align":'center'
		});
     }else{
     	 $(this).next().html("");
     }

	return true;
});