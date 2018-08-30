$("ul").on("click","li",function(){
	$(this).toggleClass("completed");
	});
$("ul").on("click","span",function(){
$(this).parent().fadeOut(1000,function(){
	$(this).remove();
});
});
$("input[type='text']").keypress(function(e){
if(e.which == 13){
	var todos = $(this).val();
	$("ul").append("<li> <span><i class='fas fa-trash'></i></span>"+ todos+"</li>");
	$(this).val("");
}
});