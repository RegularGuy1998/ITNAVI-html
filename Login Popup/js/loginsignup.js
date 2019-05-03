function openLoginSignup(evt, value) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("login-tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("login-tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(value).style.display = "block";
  evt.currentTarget.className += " active";
}

$('#keeplogin-checkbox').on('click', function () {
  console.log($('#keeplogin-checkbox'));
  if ($('#keeplogin-checkbox').hasClass('checkbox-icon-active')) {
    $('#keeplogin-checkbox').removeClass('checkbox-icon-active');
    $('#keeplogin').prop('value', false);
  } else {
    $('#keeplogin-checkbox').addClass('checkbox-icon-active');
    $('#keeplogin').prop('value', true);
  }
})

$('#close-icon').on('click', function () {
  $('.login-popup').removeClass('showing');
  $('.login-popup').addClass('hiding');
  setTimeout(() => {
    $('.login-background').addClass('hidden');
  }, 300);
})

$('#LoginButton').on('click', function () {
  console.log('dddddd');
  $('.login-popup').removeClass('hiding');
  $('.login-background').removeClass('hidden');
  $('.login-popup').addClass('showing');
  document.getElementById("LoginTabButton").click();
})

$('#SignupButton').on('click', function () {
  $('.login-popup').removeClass('hiding');
  $('.login-background').removeClass('hidden');
  $('.login-popup').addClass('showing');
  document.getElementById("SignupTabButton").click();
})