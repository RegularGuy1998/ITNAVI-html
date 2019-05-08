$(document).ready(function () {
    // Show and Hide for PERSONAL SIMPLE INFO Edit form
    $('#JS-MR-PERSONALSIMPLEINFO-Cancel-Button').on('click', function () {
        CallSomethingHide('JS-MR-PERSONAVATAR-TOOLTIP-view');
        CallSomethingShow('JS-MR-PERSONALSIMPLEINFO-view');
        CallSomethingHide('JS-MR-PERSONALSIMPLEINFO-edit-form');
        CallSomethingShow('JS-MR-PERSONAVATAR-view');
        CallSomethingHide('JS-MR-PERSONAVATAR-edit-form');
        $('.person-avatar img').removeClass('border-thin-blue');
    })

    $('#JS-MR-PERSONALSIMPLEINFO-show-edit').on('click', function () {
        CallSomethingShow('JS-MR-PERSONAVATAR-TOOLTIP-view');
        CallSomethingShow('JS-MR-PERSONALSIMPLEINFO-edit-form');
        CallSomethingHide('JS-MR-PERSONALSIMPLEINFO-view');
        CallSomethingShow('JS-MR-PERSONAVATAR-edit-form');
        CallSomethingHide('JS-MR-PERSONAVATAR-view');
        $('.person-avatar img').addClass('border-thin-blue');
    })

    // Show and Hide for Profesional Edit form
    $('#JS-MR-SKILLS-ProfesionalSkill-Cancel-Button').on('click', function () {
        CallSomethingHide('JS-MR-SKILLS-ProfesionalSkill-edit-form');
    })

    $('#JS-MR-SKILLS-ProfesionalSkill-Show-Edit').on('click', function () {
        CallSomethingShow('JS-MR-SKILLS-ProfesionalSkill-edit-form');
    })

    // Show and Hide for Technology Edit form
    $('#JS-MR-SKILLS-TechnologySkill-Cancel-Button').on('click', function () {
        CallSomethingHide('JS-MR-SKILLS-TechnologySkill-edit-form');
    })

    $('#JS-MR-SKILLS-TechnologySkill-Show-Edit').on('click', function () {
        CallSomethingShow('JS-MR-SKILLS-TechnologySkill-edit-form');
    })

    // Show and Hide for Domain Edit form
    $('#JS-MR-SKILLS-DomainSkill-Cancel-Button').on('click', function () {
        CallSomethingHide('JS-MR-SKILLS-DomainSkill-edit-form');
    })

    $('#JS-MR-SKILLS-DomainSkill-Show-Edit').on('click', function () {
        CallSomethingShow('JS-MR-SKILLS-DomainSkill-edit-form');
    })

    // Show and Hide for Language Edit form
    $('#JS-MR-SKILLS-LanguageSkill-Cancel-Button').on('click', function () {
        CallSomethingHide('JS-MR-SKILLS-LanguageSkill-edit-form');
    })

    $('#JS-MR-SKILLS-LanguageSkill-Show-Edit').on('click', function () {
        CallSomethingShow('JS-MR-SKILLS-LanguageSkill-edit-form');
    })

    // Show and Hide for CAREER OBJECTIVE Edit form
    $('#JS-MR-CAREEROBJECTIVE-Cancel-Button').on('click', function () {
        CallSomethingShow('JS-MR-CAREEROBJECTIVE-view');
        CallSomethingHide('JS-MR-CAREEROBJECTIVE-edit-form');
    })

    $('#JS-MR-CAREEROBJECTIVE-show-edit').on('click', function () {
        CallSomethingShow('JS-MR-CAREEROBJECTIVE-edit-form');
        CallSomethingHide('JS-MR-CAREEROBJECTIVE-view');
    })

    // Show and Hide for PERSONAL INFORMATION Edit form
    $('#JS-MR-PERSONALINFORMATION-Cancel-Button').on('click', function () {
        CallSomethingShow('JS-MR-PERSONALINFORMATION-view');
        CallSomethingHide('JS-MR-PERSONALINFORMATION-edit-form');
    })

    $('#JS-MR-PERSONALINFORMATION-show-edit').on('click', function () {
        CallSomethingShow('JS-MR-PERSONALINFORMATION-edit-form');
        CallSomethingHide('JS-MR-PERSONALINFORMATION-view');
    })

    // Show and Hide for PROJECT EXPERIENCE Edit form
    $('#JS-MR-PROJECTEXPERIENCE-Cancel-Button').on('click', function () {
        CallSomethingHide('JS-MR-PROJECTEXPERIENCE-edit-form');
    })

    $('#JS-MR-PROJECTEXPERIENCE-show-edit').on('click', function () {
        CallSomethingShow('JS-MR-PROJECTEXPERIENCE-edit-form');
    })

    // Show and Hide for EMPLOYMENT HISTORY Edit form
    $('#JS-MR-EMPLOYMENTHISTORY-Cancel-Button').on('click', function () {
        CallSomethingHide('JS-MR-EMPLOYMENTHISTORY-edit-form');
    })

    $('#JS-MR-EMPLOYMENTHISTORY-show-edit').on('click', function () {
        CallSomethingShow('JS-MR-EMPLOYMENTHISTORY-edit-form');
    })

    // Show and Hide for EDUCATIONAL BACKGROUND Edit form
    $('#JS-MR-EDUCATIONALBACKGROUND-Cancel-Button').on('click', function () {
        CallSomethingHide('JS-MR-EDUCATIONALBACKGROUND-edit-form');
    })

    $('#JS-MR-EDUCATIONALBACKGROUND-show-edit').on('click', function () {
        CallSomethingShow('JS-MR-EDUCATIONALBACKGROUND-edit-form');
    })

    // Show and Hide for CERTIFICATION Edit form
    $('#JS-MR-CERTIFICATION-Cancel-Button').on('click', function () {
        CallSomethingHide('JS-MR-CERTIFICATION-edit-form');
    })

    $('#JS-MR-CERTIFICATION-show-edit').on('click', function () {
        CallSomethingShow('JS-MR-CERTIFICATION-edit-form');
    })

    // Show and Hide for TRAINING & SEMINAR ATTENDED Edit form
    $('#JS-MR-TRAININGSEMINARATTENDED-Cancel-Button').on('click', function () {
        CallSomethingHide('JS-MR-TRAININGSEMINARATTENDED-edit-form');
    })

    $('#JS-MR-TRAININGSEMINARATTENDED-show-edit').on('click', function () {
        CallSomethingShow('JS-MR-TRAININGSEMINARATTENDED-edit-form');
    })

    // Show and Hide for QUALIFICATIONS Edit form
    $('#JS-MR-QUALIFICATIONS-Cancel-Button').on('click', function () {
        CallSomethingShow('JS-MR-QUALIFICATIONS-view');
        CallSomethingHide('JS-MR-QUALIFICATIONS-edit-form');
    })

    $('#JS-MR-QUALIFICATIONS-show-edit').on('click', function () {
        CallSomethingShow('JS-MR-QUALIFICATIONS-edit-form');
        CallSomethingHide('JS-MR-QUALIFICATIONS-view');
    })

    // Show and Hide for ACHIEVEMENT/ RESPONSIBILITY Edit form
    $('#JS-MR-ACHIEVEMENTRESPONSIBILITY-Cancel-Button').on('click', function () {
        CallSomethingShow('JS-MR-ACHIEVEMENTRESPONSIBILITY-view');
        CallSomethingHide('JS-MR-ACHIEVEMENTRESPONSIBILITY-edit-form');
    })

    $('#JS-MR-ACHIEVEMENTRESPONSIBILITY-show-edit').on('click', function () {
        CallSomethingShow('JS-MR-ACHIEVEMENTRESPONSIBILITY-edit-form');
        CallSomethingHide('JS-MR-ACHIEVEMENTRESPONSIBILITY-view');
    })

    // Show and Hide for REFERENCES Edit form
    $('#JS-MR-REFERENCES-Cancel-Button').on('click', function () {
        CallSomethingHide('JS-MR-REFERENCES-edit-form');
    })

    $('#JS-MR-REFERENCES-show-edit').on('click', function () {
        CallSomethingShow('JS-MR-REFERENCES-edit-form');
    })

    // Show and Hide for WORKINGPREFERENCES Edit form
    $('#JS-MR-WORKINGPREFERENCES-Cancel-Button').on('click', function () {
        CallSomethingShow('JS-MR-WORKINGPREFERENCES-view');
        CallSomethingHide('JS-MR-WORKINGPREFERENCES-edit-form');
    })

    $('#JS-MR-WORKINGPREFERENCES-show-edit').on('click', function () {
        CallSomethingShow('JS-MR-WORKINGPREFERENCES-edit-form');
        CallSomethingHide('JS-MR-WORKINGPREFERENCES-view');
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








    $('.apple-button').on('click', function () {
        let name = $(this).data('name');
        if ($('.apple-button[data-name="' + name + '"]').hasClass('apple-button-active')) {
            $('#' + name).prop('value', false);
            $('.apple-button[data-name="' + name + '"]').removeClass('apple-button-active');
        } else {
            $('.apple-button[data-name="' + name + '"]').addClass('apple-button-active');
            $('#' + name).prop('value', true);
        }
    })



    function setCurrency(currency) {
        if (!currency.id) { return currency.text; }
        var $currency = $('<span class="glyphicon glyphicon-' + currency.element.value + '">' + currency.text + '</span>');
        return $currency;
    };


    $(".hrbjvsfjkvfjnvkd").select2({
        placeholder: "What currency do you use?", //placeholder
        multiple: 'multiple'
    });


})