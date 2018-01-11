$(document).ready(function() {
	$(".cbalink").remove();

	$("[name='email']").blur(function() {
		  var pattern = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,6}\.)?[a-z]{2,6}$/i;
		  if($(this).val() && !pattern.test($(this).val())) {
		    $(this).siblings().removeClass('hidden');
			$(this).siblings().addClass('active-span');
		    $(this).focus();
  }
});

	$("[name='register']").click(function(event) {
		event.preventDefault();
		if ($("[name='login']").val()=="") {
			$("[name='login']").siblings().removeClass('hidden');
			$("[name='login']").siblings().addClass('active-span');
		}
			if ($("[name='email']").val()=="") {
			$("[name='email']").siblings().removeClass('hidden');
			$("[name='email']").siblings().addClass('active-span');
		}
		if ($("[name='password']").val()=="") {
			$("[name='password']").siblings().removeClass('hidden');
			$("[name='password']").siblings().addClass('active-span');
		}
		if ($("[name='confirm']").val()==""||$("[name='confirm']").val()!=$("[name='password']").val()){
			$("[name='confirm']").siblings().removeClass('hidden');
			$("[name='confirm']").siblings().addClass('active-span');
		}
	});


});