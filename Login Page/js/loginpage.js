$(document).ready(function () {

});


function CheckboxClicker(evt, checkid) {
    console.log(evt.currentTarget.classname);
    if ($('#' + checkid).val() == 'true') {
        $('#' + checkid).val(false);
        evt.currentTarget.className = evt.currentTarget.className.replace(' active', '');
    } else {
        $('#' + checkid).val(true);
        evt.currentTarget.className += ' active';
    }
}