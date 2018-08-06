// if statement when clicked on a to do item. If you click on it, it would have a gray line through the item, if not it stays black.
$("ul").on("click", "li", function(){
  if($(this).css("color") === "rgb(128, 128, 128)"){
      $(this).css({
        color: "black",
        textDecoration: "none",
    });
  }
    else{
    $(this).css({
      color: "gray",
      textDecoration: "line-through"
    });
  }
});
// Clicking on the X to delete a todo item
$("ul").on("click", "span", function(){
  $(this).parent().fadeOut(500, function(){
    $(this).remove();
  });
  event.stopPropagation();
});

$("input[type = 'text']").keypress(function(event){
  if(event.which === 13){
// grabbing a new input when typed.
    var todoText = $(this).val();
    $(this).val("");
// adding a new input to the list.
    $("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>");
  }
});

$(".fa-plus-square").click(function(){
  $("input[type= 'text']").fadeToggle();
});
