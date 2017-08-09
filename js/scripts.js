$(document).ready(function(){
  $("form#identity").submit(function(event){
    event.preventDefault();
    var nameInput = $("input#name").val();
    $("#name").text(nameInput);
  });

  $("form#birthday").submit(function(event){
    event.preventDefault();
    var dob = $("#born").val();
  });


  $("form#drink").submit(function(event){
    event.preventDefault();
    var beverage = $("#beverage").val();
  });

  $("form#music").submit(function(event){
    event.preventDefault();
    var genre = $("input:radio[name=genre]:checked").val();
  });

  $("form#shades").submit(function(event){
    event.preventDefault();
    var favoriteColor = $("#color").val();
  });

});
