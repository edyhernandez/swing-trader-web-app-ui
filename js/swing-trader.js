// This is the active navigation jQuery code

$(document).ready(function () {
    $('#main-nav ul li a').click(function (e) {
        e.preventDefault();
        // console.log("hello",$(this));
        $('#main-nav ul li a').removeClass('active-link');
        $(this).addClass('active-link');
        window.location.href = $(this).attr('href');

    });

    $('#trade-details-chart-nav ul li a').click(function (e) {
        e.preventDefault();
        // console.log("hello",$(this));
        $('#trade-details-chart-nav ul li a').removeClass('chart-active-link');
        $(this).addClass('chart-active-link');
        window.location.href = $(this).attr('href');

    });
    
    $('#trade-details-chart-nav-mobile ul li a').click(function (e) {
        e.preventDefault();
        // console.log("hello",$(this));
        $('#trade-details-chart-nav-mobile ul li a').removeClass('chart-active-link');
        $(this).addClass('chart-active-link');
        window.location.href = $(this).attr('href');

    });
    
    $('#trade-details-chart-nav-mobile a.chart-mobile-daily').click(function (e) {
        e.preventDefault();
        // console.log("hello",$(this));
        $('#trade-details-chart-nav-mobile a.chart-mobile-weekly').removeClass('chart-mobile-weekly-active');
        $('#trade-details-chart-nav-mobile a.chart-mobile-intraday').removeClass('chart-mobile-intraday-active');
        $(this).addClass('chart-mobile-daily-active');
        window.location.href = $(this).attr('href');

    });
    
    $('#trade-details-chart-nav-mobile a.chart-mobile-weekly').click(function (e) {
        e.preventDefault();
        // console.log("hello",$(this));
        $('#trade-details-chart-nav-mobile a.chart-mobile-daily').removeClass('chart-mobile-daily-active');
        $('#trade-details-chart-nav-mobile a.chart-mobile-intraday').removeClass('chart-mobile-intraday-active');
        $(this).addClass('chart-mobile-weekly-active');
        window.location.href = $(this).attr('href');

    });
    
    $('#trade-details-chart-nav-mobile a.chart-mobile-intraday').click(function (e) {
        e.preventDefault();
        // console.log("hello",$(this));
        $('#trade-details-chart-nav-mobile a.chart-mobile-daily').removeClass('chart-mobile-daily-active');
        $('#trade-details-chart-nav-mobile a.chart-mobile-weekly').removeClass('chart-mobile-weekly-active');
        $(this).addClass('chart-mobile-intraday-active');
        window.location.href = $(this).attr('href');

    });
    
        $('#trade-details-chart-nav a.chart-daily').click(function (e) {
        e.preventDefault();
        // console.log("hello",$(this));
        $('#trade-details-chart-nav a.chart-weekly').removeClass('chart-weekly-active');
        $('#trade-details-chart-nav a.chart-intraday').removeClass('chart-intraday-active');
        $(this).addClass('chart-daily-active');
        window.location.href = $(this).attr('href');

    });
    
    $('#trade-details-chart-nav a.chart-weekly').click(function (e) {
        e.preventDefault();
        // console.log("hello",$(this));
        $('#trade-details-chart-nav a.chart-daily').removeClass('chart-daily-active');
        $('#trade-details-chart-nav a.chart-intraday').removeClass('chart-intraday-active');
        $(this).addClass('chart-weekly-active');
        window.location.href = $(this).attr('href');

    });
    
    $('#trade-details-chart-nav a.chart-intraday').click(function (e) {
        e.preventDefault();
        // console.log("hello",$(this));
        $('#trade-details-chart-nav a.chart-daily').removeClass('chart-daily-active');
        $('#trade-details-chart-nav a.chart-weekly').removeClass('chart-weekly-active');
        $(this).addClass('chart-intraday-active');
        window.location.href = $(this).attr('href');

    });
});