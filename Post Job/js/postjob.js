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

function openInfoTab(evt, postJobName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("info-tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("info-tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(postJobName).style.display = "block";
    evt.currentTarget.className += " active";


    if (postJobName !== 'Attached-CV') {
        document.getElementById('itnavi-attached').className = document.getElementById('itnavi-attached').className.replace(' fullscreen', '');
        document.getElementById('ITNavi-TitleRight').className += ' hidden';
    } else {
        document.getElementById('ITNavi-TitleRight').className = document.getElementById('ITNavi-TitleRight').className.replace(' hidden', '');
    }
}

function TitleRightfull () {
    if ($('#itnavi-attached').hasClass('fullscreen')) {
        $('#itnavi-attached').removeClass('fullscreen');
        document.getElementById('fullscreenbutton').innerHTML = ' <div style="background-image: url(image/full-size@3x.png)" class="button-icon"></div> View Fullscreen';
    } else {
        $('#itnavi-attached').addClass('fullscreen');
        document.getElementById('fullscreenbutton').innerHTML = ' <div style="background-image: url(image/full-size@3x.png)" class="button-icon"></div> Out Fullscreen';
    }
    // document.getElementById('itnavi-attached').className += ' fullscreen';
}

function TitleRightfull2 () {
    if ($('#itnavi-attached2').hasClass('fullscreen')) {
        $('#itnavi-attached2').removeClass('fullscreen');
        document.getElementById('fullscreenbutton2').innerHTML = ' <div style="background-image: url(image/full-size@3x.png)" class="button-icon"></div> View Fullscreen';
    } else {
        console.log('ko co');
        $('#itnavi-attached2').addClass('fullscreen');
        document.getElementById('fullscreenbutton2').innerHTML = ' <div style="background-image: url(image/full-size@3x.png)" class="button-icon"></div> Out Fullscreen';
    }
    // document.getElementById('itnavi-attached').className += ' fullscreen';
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


function openSearchTips(evt) {
    if ($('#search-tip-show').hasClass('hidden')) {
        $('#search-tip-show').removeClass('hidden');
        document.getElementById('search-tips-button').innerHTML = '<img src="image/apple@3x.png" alt=""> Hide tips';
    } else {
        $('#search-tip-show').addClass('hidden');
        document.getElementById('search-tips-button').innerHTML = '<img src="image/apple@3x.png" alt=""> Search tips';
    }
}

$('#BASICINFOMATIONButton').on('click', function () {
    window.scrollTo(0, document.getElementById('BASICINFOMATION').offsetTop - 173);
})
$('#WORKENVIRONMENTButton').on('click', function () {
    window.scrollTo(0, document.getElementById('WORKENVIRONMENT').offsetTop - 173);
})
$('#HEADERIMAGEPICTURESButton').on('click', function () {
    window.scrollTo(0, document.getElementById('HEADERIMAGEPICTURES').offsetTop - 173);
})


window.onscroll = function () {
    if (window.pageYOffset + 59 > defaultheader) {
        document.getElementById('Companyprofile-Header').classList.add('headerfixtop');
    } else {
        document.getElementById('Companyprofile-Header').classList.remove('headerfixtop');
    }

    if (window.pageYOffset + 220 > WORKENVIRONMENT) {
        if (window.pageYOffset + 220 > HEADERIMAGEPICTURES) {
            document.getElementById('BASICINFOMATIONButton').classList.remove('active');
            document.getElementById('WORKENVIRONMENTButton').classList.remove('active');
            document.getElementById('HEADERIMAGEPICTURESButton').classList.add('active');
        } else {
            document.getElementById('BASICINFOMATIONButton').classList.remove('active');
            document.getElementById('WORKENVIRONMENTButton').classList.add('active');
            document.getElementById('HEADERIMAGEPICTURESButton').classList.remove('active');
        }
    } else {
        document.getElementById('BASICINFOMATIONButton').classList.add('active');
        document.getElementById('WORKENVIRONMENTButton').classList.remove('active');
        document.getElementById('HEADERIMAGEPICTURESButton').classList.remove('active');
    }
}







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