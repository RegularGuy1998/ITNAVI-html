function openJobTab(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("job-tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("job-tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}

$('.mess-radio').on('click', function () {
  let name = $(this).data('name');
  let value = $(this).data('value');
  $('#' + name).prop('value', value);
  $('.mess-radio[data-name="' + name + '"]').not('[data-value="' + value + '"]').removeClass('active');
  $('.mess-radio[data-name="' + name + '"][data-value="' + value + '"]').addClass('active');
})



let ChangeApplyToProduct = document.getElementById('Message-Apply-To-Product-Owner');
let ChangeSuccessfullyApplied = document.getElementById('Message-Successfully-Applied');

function OpenPopup(input) {
  switch (input) {
    case 'Message-Apply-To-Product-Owner':
      Swal.fire({
        showConfirmButton: false,
        html: ChangeApplyToProduct,
        width: 536,
      })
      break;

    case 'Message-Successfully-Applied':
      Swal.fire({
        showConfirmButton: false,
        html: ChangeSuccessfullyApplied,
        width: 536,
      })
      break;

    default:
      break;
  }
}