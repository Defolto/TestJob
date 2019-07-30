var height = $(window).width();
if (height < 810) {
    $('#elements img').eq(0).detach();
    $('#elements img').eq(0).detach();
}
if (height < 1500) {
    $('#row1 > .col-md-3').eq(3).detach();
    $('#row1 > .col-md-3').eq(2).detach();
    $('#row1 > .col-md-3').eq(1).addClass('.col-md-4').removeClass('col-md-3');
    $('#row1 > .col-md-3').eq(0).addClass('.col-md-4').removeClass('col-md-3');
    $('#row1').eq(0).addClass('d-flex justify-content-between');
    $('#row2 > .col-md-3').eq(3).detach();
    $('#row2 > .col-md-3').eq(2).detach();
    $('#row2 > .col-md-3').eq(1).addClass('.col-md-4').removeClass('col-md-3');
    $('#row2 > .col-md-3').eq(0).addClass('.col-md-4').removeClass('col-md-3');
    $('#row2').eq(0).addClass('d-flex justify-content-between');
    $('#row3 > .col-md-3').eq(3).detach();
    $('#row3 > .col-md-3').eq(2).detach();
    $('#row3 > .col-md-3').eq(1).addClass('.col-md-4').removeClass('col-md-3');
    $('#row3 > .col-md-3').eq(0).addClass('.col-md-4').removeClass('col-md-3');
    $('#row3').eq(0).addClass('d-flex justify-content-between');
}
if (height < 769) {
    $('#row2').detach();
    $('#row3').detach();
    $('#footer').detach();
}
if (height < 450) {
    $(".linkHesh").after("<br>");
}
