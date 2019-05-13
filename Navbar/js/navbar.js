$('#Navbar-Mobile-Button').on('click', function () {
    if ($('#Navbar-Mobile-Item').hasClass('collapse in')) {
        $('#Navbar-Mobile-Item').collapse('hide');
    } else {
        $('#Navbar-Mobile-Item').css('display', 'block');
        $('#Navbar-Mobile-Item').collapse('show');
    }
})

$('#Navbar-Mobile-Item').on('hidden.bs.collapse', function () {
    $('#Navbar-Mobile-Item').css('display', 'none');
})