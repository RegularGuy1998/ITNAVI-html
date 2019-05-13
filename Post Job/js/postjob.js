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

    if (evt.currentTarget.className.includes('child-of-ManageCandidateButton')) {
        document.getElementById('ManageCandidateButton').className += " active";
    }
    else {
        evt.currentTarget.className += " active";
    }

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

function CloseMessage(evt, param) {
    $('#' + param).removeClass('show-notification');
    $('#' + param).addClass('hide-notification');
    setTimeout(() => {
        $('#' + param).addClass('hidden');
        $('#background-for-notification').addClass('hidden');
    }, 500);
}

function OpenMessage(evt, param) {
    $('#' + param).removeClass('hidden');
    $('#background-for-notification').removeClass('hidden');
    $('#' + param).removeClass('hide-notification');
    $('#' + param).addClass('show-notification');
}


// Show and Hide for WORKINGPREFERENCES Edit form
$('#MJ-PostJob-Turnback').on('click', function () {
    CallSomethingShow('ManageJobs-JobList');
    CallSomethingHide('ManageJobs-PostJob');
})

$('#MJ-PostJob-Cancel').on('click', function () {
    CallSomethingShow('ManageJobs-JobList');
    CallSomethingHide('ManageJobs-PostJob');
})

$('.PJ-ManageJob-PostJob-button').on('click', function () {
    CallSomethingShow('ManageJobs-PostJob');
    CallSomethingHide('ManageJobs-JobList');
})








//Funtion to show Edit
function CallSomethingShow(tabId) {
    $('#' + tabId).css('display', 'block');
    $('#' + tabId).collapse('show');
}

//Function to hide Edit
function CallSomethingHide(tabId) {
    $('#' + tabId).collapse('hide');
}

$('.myresume-use-collapse-event').on('hidden.bs.collapse', function () {
    $('#' + $(this)[0].id).css('display', 'none');
})