$(document).ready(function () {
      $(".form").submit(function(event){
        event.preventDefault()
      $("#Submit").click(function () {
        $("#drop").toggle()
      })
        let first = $("#first").val();
        let second = $("#second").val();
        let last = $("#last").val();
        let mail = $("#mail").val();
        let age = $("#age").val();

        $(".first").text(first)
        $(".second").text(second)
        $(".last").text(last)
        $(".mail").text(mail)
        $(".age").text(age)
      });
    });
