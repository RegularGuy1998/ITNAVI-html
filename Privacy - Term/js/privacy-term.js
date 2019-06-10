$('.daylacollapse').collapse({
    toggle: false
});

function collapseAction(inputId) {
    // console.log($('#' + inputId + ' .daylacollapse'));
    if ($('#' + inputId).hasClass('active') ) {
        $('#' + inputId).removeClass('active');
        $('#' + inputId + ' .daylacollapse').collapse('hide');
    } else {
        $('#' + inputId).addClass('active');
        $('#' + inputId + ' .daylacollapse').collapse('show');
    }

}