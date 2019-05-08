$('#navbar-seemore').on('click', function () {
  if ($('#navi-navbar-item').hasClass('showfullnavbar')) {
    $('#navi-navbar-item').removeClass('navbarfull-showing');
    $('#navi-navbar-item').addClass('navbarfull-hidding');
    setTimeout(() => {
      $('#navi-navbar-item').removeClass('showfullnavbar');
    }, 150);
  } else {
    $('#navi-navbar-item').removeClass('navbarfull-hidding');
    $('#navi-navbar-item').addClass('navbarfull-showing');
    setTimeout(() => {
      $('#navi-navbar-item').addClass('showfullnavbar');
    }, 150);
  }
})

$('#Services-Scroll').on('click', function () {
  var elmnt = document.getElementById("Our-Services");
    elmnt.scrollIntoView();
    if ($('#navi-navbar-item').hasClass('showfullnavbar')) {
      document.getElementById("navbar-seemore").click();
    }
})

$('#ContactUs-Scroll').on('click', function () {
  var elmnt = document.getElementById("contact-us-form");
    elmnt.scrollIntoView();
    if ($('#navi-navbar-item').hasClass('showfullnavbar')) {
      document.getElementById("navbar-seemore").click();
    }
})