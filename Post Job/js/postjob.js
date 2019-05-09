function openPostJobTab(evt, postJobName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("hri-tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("hri-tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(postJobName).style.display = "block";
    evt.currentTarget.className += " active";
}


$('.super-checkbox-button').on('click', function () {
    let name = $(this).data('name');
    if ($('.super-checkbox-button[data-name="' + name + '"]').hasClass('super-checkbox-button-active')) {
      $('#' + name).prop('value', false);
      $('.super-checkbox-button[data-name="' + name + '"]').removeClass('super-checkbox-button-active');
    } else {
      $('.super-checkbox-button[data-name="' + name + '"]').addClass('super-checkbox-button-active');
      $('#' + name).prop('value', true);
    }
  })
