$('#SearchJob-Input').on('click', function () {
    $('#SearchJob-Input input').focus();
});

$('#FindJob-Carousel').carousel({
    interval: 5000
});

$('#Carousel-Hot-Job').carousel({
    interval: 5000
});

$('#Carousel-Hot-Job').on('hover', function () {
    $('#Carousel-Hot-Job').carousel('pause');
})

$('.select-use-select2-dropdown').select2();
