$('ul').on('click', 'li', function(){
  $(this).toggleClass('completed');
});

$('ul').on('click', 'span', function(event){
  $(this).parent().remove();
});

$('input').keypress(function(event){
  if(event.which===13){
    // '13' equals ACII code for 'enter'
    // we'll add stuff here
    var todoItem = $(this).val();
    $('ul').append(
      "<li>" +
        todoItem +
        "<span>" +
          "<i class='fa fa-times'></i>" +
        "</span>" +
      "</li>"
    );
    // How do you clear the input field?
    $('#entryField').val('');
  }
});