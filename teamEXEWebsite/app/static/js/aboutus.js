

$(document).ready(function () {
  $('.nav-item-aboutus').addClass('active');
})


$('.message-box textarea').focusin(function () {
  $(this).parent().addClass('has-value');
});

$('.message-box textarea').blur(function () {
  if (!$(this).val().length > 0) {
    $(this).parent().removeClass('has-value');
  }
})

function validateEmail($email) {
  var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
  return emailReg.test($email);
}

$('.mail input').blur(function () {

  if (!validateEmail($(this).val())) {
    console.log($(this).val() + " adding");
    $(this).parent().addClass('has-invalid');
  }

  else {
    console.log("Removing" + $(this).val())
    $(this).parent().removeClass('has-invalid');
  }
})