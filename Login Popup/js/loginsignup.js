function openLoginSignupOption(evt, value) {
  var i, tabcontent, tablinks;
  console.log('aaa');
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

function keeplogin () {
  console.log($('#keeplogin-checkbox'));
  if ($('#keeplogin-checkbox').hasClass('checkbox-icon-active')) {
    $('#keeplogin-checkbox').removeClass('checkbox-icon-active');
    $('#keeplogin').prop('value', false);
  } else {
    $('#keeplogin-checkbox').addClass('checkbox-icon-active');
    $('#keeplogin').prop('value', true);
  }
}