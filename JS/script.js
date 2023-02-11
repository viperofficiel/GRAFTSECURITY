$(function () {
  $("#contact-form").submit(function (e) {
    e.preventDefault();
    $(".comments").empty();
    var postdata = $("#contact-form").serialize();

    $.ajax({
      type: "POST",
      url: "PHP/contact.php",
      data: postdata,
      dataType: "json",
      success: function (json) {
        if (json.isSuccess) {
          $("#contact-form").append(
            "<p class='thank-you'>Your message has been sent. Thank you for having contacted us :)</p>"
          );
          $("#contact-form")[0].reset();
        } else {
          $("#firstname + .comments").html(json.firstnameError);
          $("#name + .comments").html(json.nameError);
          $("#email + .comments").html(json.emailError);
          $("#phone + .comments").html(json.phoneError);
          $("#message + .comments").html(json.messageError);
        }
      },
    });
  });
});
