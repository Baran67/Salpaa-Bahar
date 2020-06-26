function submit(){
	if($("input[name=email]").val()=="")
	{
		$(".alert").html("لطفا آدرس ایمیل را صحیح وارد کنید");
	}
}