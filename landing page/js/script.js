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
    console.log('sdfefe');
    setTimeout(() => {
      $('#navi-navbar-item').addClass('showfullnavbar');
    }, 150);
  }
})