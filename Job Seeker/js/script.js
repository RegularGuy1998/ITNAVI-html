function startJS() {
  if ($('#location-dropdown').height() > 400) {
    $('#location-dropdown').height(400)
  }
}

function openHri(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("hri-tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("hri-tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}

$('.radio1').on('click', function () {
  let name = $(this).data('name');
  let value = $(this).data('value');
  $('#' + name).prop('value', value);
  $('.radio1[data-name="' + name + '"]').not('[data-value="' + value + '"]').removeClass('radioactive');
  $('.radio1[data-name="' + name + '"][data-value="' + value + '"]').addClass('radioactive');

  if (name === 'nationality') {
    if (value !== 'Vietnamese') {
      $('#locationItem').addClass('hidden');
    } else {
      $('#locationItem').removeClass('hidden');
    }
  }
})

$('.checkbox1').on('click', function () {
  let name = $(this).data('name');
  if ($('.checkbox1[data-name="' + name + '"]').hasClass('checkboxactive')) {
    $('#' + name).prop('value', false);
    $('.checkbox1[data-name="' + name + '"]').removeClass('checkboxactive');
  } else {
    $('.checkbox1[data-name="' + name + '"]').addClass('checkboxactive');
    $('#' + name).prop('value', true);
  }
})

$('#search-icon').on('click', function () {
  $('#search-job').focus();
})

$('.location-focus').on('click', function () {
  $('#search-location-input').focus();
})

$('#search-location-input').on('focus', function () {
  $('#location-dropdown').removeClass('hidden');
});

$('#search-location-input').on('focusout', function () {
  setTimeout(function () {
    $('#location-dropdown').addClass('hidden');
  }, 100);
});

$('.location-dropdown-item').on('click', function () {
  $('#search-location-input').val($(this).data('value'));
});

$('#search-location-input').on('input', function () {
  let keyword = $('#search-location-input').val().toLowerCase();
  let haveResult = false;

  for (let index = 1; index < 6; index++) {
    let element = $('#location-item-' + index).data('value');
    if (element === undefined) {
      break;
    } else {
      if (element.toLowerCase().includes(keyword)) {
        haveResult = true;
        $('#location-item-' + index).removeClass('hidden');
      } else {
        $('#location-item-' + index).addClass('hidden');
      }
    }
  }

  if (haveResult === false) {
    $('#no-result').removeClass('hidden');
  } else {
    $('#no-result').addClass('hidden');
  }
});

startJS();