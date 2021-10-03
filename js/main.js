$(document).ready(function(){
    
    //main interaction
    let random1 = Math.floor(Math.random() * 19);
    let random2 = Math.floor(Math.random() * 19);
    let random3 = Math.floor(Math.random() * 19);
    let random4 = Math.floor(Math.random() * 19);
    let random5 = Math.floor(Math.random() * 19);
    let random6 = Math.floor(Math.random() * 19);
    let random7 = Math.floor(Math.random() * 19);
    let random8 = Math.floor(Math.random() * 19);
    let random9 = Math.floor(Math.random() * 19);
    let random10 = Math.floor(Math.random() * 19);
    let random11 = Math.floor(Math.random() * 19);
    let random12 = Math.floor(Math.random() * 19);
    let random13 = Math.floor(Math.random() * 19);
    let random14 = Math.floor(Math.random() * 19);


    $("#vertical1").mouseenter(function() {
        $('#horizontal div:nth-child(' + random1 + ')').css("opacity", "1");$('#horizontal div:nth-child(' + random2 + ')').css("opacity", "1");
        $('#vertical1 img').attr("style", "display: block !important");
    }).mouseleave(function() {
        $('#horizontal div:nth-child(' + random1 + ')').css("opacity", "0");$('#horizontal div:nth-child(' + random2 + ')').css("opacity", "0");
        $('#vertical1 img').attr("style", "display: none");
    });
    $("#vertical2").mouseenter(function() {
        $('#horizontal div:nth-child(' + random3 + ')').css("opacity", "1");$('#horizontal div:nth-child(' + random4 + ')').css("opacity", "1");$('#horizontal div:nth-child(' + random5 + ')').css("opacity", "1");
        $('#vertical2 img').attr("style", "display: block !important");
    }).mouseleave(function() {
        $('#horizontal div:nth-child(' + random3 + ')').css("opacity", "0");$('#horizontal div:nth-child(' + random4 + ')').css("opacity", "0");$('#horizontal div:nth-child(' + random5 + ')').css("opacity", "0");
        $('#vertical2 img').attr("style", "display: none");
    });
    $("#vertical3").mouseenter(function() {
        $('#horizontal div:nth-child(' + random14 + ')').css("opacity", "1");$('#horizontal div:nth-child(' + random7 + ')').css("opacity", "1");$('#horizontal div:nth-child(' + random6 + ')').css("opacity", "1");
        $('#vertical3 img').attr("style", "display: block !important");
    }).mouseleave(function() {
        $('#horizontal div:nth-child(' + random14 + ')').css("opacity", "0");$('#horizontal div:nth-child(' + random7 + ')').css("opacity", "0");$('#horizontal div:nth-child(' + random6 + ')').css("opacity", "0");
        $('#vertical3 img').attr("style", "display: none");
    });
    $("#vertical4").mouseenter(function() {
        $('#horizontal div:nth-child(' + random10 + ')').css("opacity", "1");$('#horizontal div:nth-child(' + random2 + ')').css("opacity", "1");$('#horizontal div:nth-child(' + random4 + ')').css("opacity", "1");
        $('#vertical4 img').attr("style", "display: block !important");
    }).mouseleave(function() {
        $('#horizontal div:nth-child(' + random10 + ')').css("opacity", "0");$('#horizontal div:nth-child(' + random2 + ')').css("opacity", "0");$('#horizontal div:nth-child(' + random4 + ')').css("opacity", "0");
        $('#vertical4 img').attr("style", "display: none");
    });
    $("#vertical5").mouseenter(function() {
        $('#horizontal div:nth-child(' + random7 + ')').css("opacity", "1");$('#horizontal div:nth-child(' + random12 + ')').css("opacity", "1");
        $('#vertical5 img').attr("style", "display: block !important");
    }).mouseleave(function() {
        $('#horizontal div:nth-child(' + random7 + ')').css("opacity", "0");$('#horizontal div:nth-child(' + random12 + ')').css("opacity", "0");
        $('#vertical5 img').attr("style", "display: none");
    });
    $("#vertical6").mouseenter(function() {
        $('#horizontal div:nth-child(' + random11 + ')').css("opacity", "1");$('#horizontal div:nth-child(' + random2 + ')').css("opacity", "1");
        $('#vertical6 img').attr("style", "display: block !important");
    }).mouseleave(function() {
        $('#horizontal div:nth-child(' + random11 + ')').css("opacity", "0");$('#horizontal div:nth-child(' + random2 + ')').css("opacity", "0");
        $('#vertical6 img').attr("style", "display: none");
    });
    $("#vertical7").mouseenter(function() {
        $('#horizontal div:nth-child(' + random6 + ')').css("opacity", "1");$('#horizontal div:nth-child(' + random7 + ')').css("opacity", "1");$('#horizontal div:nth-child(' + random12 + ')').css("opacity", "1");
        $('#vertical7 img').attr("style", "display: block !important");
    }).mouseleave(function() {
        $('#horizontal div:nth-child(' + random6 + ')').css("opacity", "0");$('#horizontal div:nth-child(' + random7 + ')').css("opacity", "0");$('#horizontal div:nth-child(' + random12 + ')').css("opacity", "0");
        $('#vertical7 img').attr("style", "display: none");
    });
    $("#vertical8").mouseenter(function() {
        $('#horizontal div:nth-child(' + random13 + ')').css("opacity", "1");$('#horizontal div:nth-child(' + random14 + ')').css("opacity", "1");
        $('#vertical8 img').attr("style", "display: block !important");
    }).mouseleave(function() {
        $('#horizontal div:nth-child(' + random13 + ')').css("opacity", "0");$('#horizontal div:nth-child(' + random14 + ')').css("opacity", "0");
        $('#vertical8 img').attr("style", "display: none");
    });
    $("#vertical9").mouseenter(function() {
        $('#horizontal div:nth-child(' + random5 + ')').css("opacity", "1");$('#horizontal div:nth-child(' + random3 + ')').css("opacity", "1");$('#horizontal div:nth-child(' + random9 + ')').css("opacity", "1");
        $('#vertical9 img').attr("style", "display: block !important");
    }).mouseleave(function() {
        $('#horizontal div:nth-child(' + random5 + ')').css("opacity", "0");$('#horizontal div:nth-child(' + random3 + ')').css("opacity", "0");$('#horizontal div:nth-child(' + random9 + ')').css("opacity", "0");
        $('#vertical9 img').attr("style", "display: none");
    });
    $("#vertical10").mouseenter(function() {
        $('#horizontal div:nth-child(' + random14 + ')').css("opacity", "1");$('#horizontal div:nth-child(' + random8 + ')').css("opacity", "1");$('#horizontal div:nth-child(' + random1 + ')').css("opacity", "1");
        $('#vertical10 img').attr("style", "display: block !important");
    }).mouseleave(function() {
        $('#horizontal div:nth-child(' + random14 + ')').css("opacity", "0");$('#horizontal div:nth-child(' + random8 + ')').css("opacity", "0");$('#horizontal div:nth-child(' + random1 + ')').css("opacity", "0");
        $('#vertical10 img').attr("style", "display: none");
    });
    $("#vertical11").mouseenter(function() {
        $('#horizontal div:nth-child(' + random10 + ')').css("opacity", "1");$('#horizontal div:nth-child(' + random4 + ')').css("opacity", "1");
        $('#vertical11 img').attr("style", "display: block !important");
    }).mouseleave(function() {
        $('#horizontal div:nth-child(' + random10 + ')').css("opacity", "0");$('#horizontal div:nth-child(' + random4 + ')').css("opacity", "0");
        $('#vertical11 img').attr("style", "display: none");
    });
    $("#vertical12").mouseenter(function() {
        $('#horizontal div:nth-child(' + random9 + ')').css("opacity", "1");$('#horizontal div:nth-child(' + random12 + ')').css("opacity", "1");
        $('#vertical12 img').attr("style", "display: block !important");
    }).mouseleave(function() {
        $('#horizontal div:nth-child(' + random9 + ')').css("opacity", "0");$('#horizontal div:nth-child(' + random12 + ')').css("opacity", "0");
        $('#vertical12 img').attr("style", "display: none");
    });
    $("#vertical13").mouseenter(function() {
        $('#horizontal div:nth-child(' + random8 + ')').css("opacity", "1");$('#horizontal div:nth-child(' + random10 + ')').css("opacity", "1");$('#horizontal div:nth-child(' + random5 + ')').css("opacity", "1");
        $('#vertical13 img').attr("style", "display: block !important");
    }).mouseleave(function() {
        $('#horizontal div:nth-child(' + random8 + ')').css("opacity", "0");$('#horizontal div:nth-child(' + random10 + ')').css("opacity", "0");$('#horizontal div:nth-child(' + random5 + ')').css("opacity", "0");
        $('#vertical13 img').attr("style", "display: none");
    });
    $("#vertical14").mouseenter(function() {
        $('#horizontal div:nth-child(' + random3 + ')').css("opacity", "1");$('#horizontal div:nth-child(' + random14 + ')').css("opacity", "1");
        $('#vertical14 img').attr("style", "display: block !important");
    }).mouseleave(function() {
        $('#horizontal div:nth-child(' + random3 + ')').css("opacity", "0");$('#horizontal div:nth-child(' + random14 + ')').css("opacity", "0");
        $('#vertical14 img').attr("style", "display: none");
    });
    $("#vertical15").mouseenter(function() {
        $('#horizontal div:nth-child(' + random7 + ')').css("opacity", "1");$('#horizontal div:nth-child(' + random1 + ')').css("opacity", "1");$('#horizontal div:nth-child(' + random10 + ')').css("opacity", "1");
        $('#vertical15 img').attr("style", "display: block !important");
    }).mouseleave(function() {
        $('#horizontal div:nth-child(' + random7 + ')').css("opacity", "0");$('#horizontal div:nth-child(' + random1 + ')').css("opacity", "0");$('#horizontal div:nth-child(' + random10 + ')').css("opacity", "0");
        $('#vertical15 img').attr("style", "display: none");
    });
    $("#vertical16").mouseenter(function() {
        $('#horizontal div:nth-child(' + random13 + ')').css("opacity", "1");$('#horizontal div:nth-child(' + random12 + ')').css("opacity", "1");$('#horizontal div:nth-child(' + random11 + ')').css("opacity", "1");
        $('#vertical16 img').attr("style", "display: block !important");
    }).mouseleave(function() {
        $('#horizontal div:nth-child(' + random13 + ')').css("opacity", "0");$('#horizontal div:nth-child(' + random12 + ')').css("opacity", "0");$('#horizontal div:nth-child(' + random11 + ')').css("opacity", "0");
        $('#vertical16 img').attr("style", "display: none");
    });


    //Filling+Feeling
    let shareinterview = '.sharinginterview .btn';
    $('#interviewbook').hide();
    $(shareinterview).click(function(){
        $('#interviewbook').slideDown();
        $('#interviewbook').show();
    });

    //Moiza
    let moizavideo = '.website video';
    $(moizavideo).hide();
    $('.website a').on('click', function (){
        $(moizavideo).slideDown();
        $(moizavideo).show();
    });

    /*
    //webzine
    let ma1 = '#webzine .webzine_part #part1';
    let ma2 = '#webzine .webzine_part #part2';
    let ma3 = '#webzine .webzine_part #part3';
    let ma4 = '#webzine .webzine_part #part4';
    let ma5 = '#webzine .webzine_part #part5';
    $('#webzine .movement div:nth-child(1)').mouseover(function (){
        $(ma1).css('opacity', '1');
    });
    $('#webzine .movement div:nth-child(1)').mouseout(function (){
        $(ma1).css('opacity', '0');
    });
    $('#webzine .movement div:nth-child(2)').mouseover(function (){
        $(ma2).css('opacity', '1');
    });
    $('#webzine .movement div:nth-child(2)').mouseout(function (){
        $(ma2).css('opacity', '0');
    });
    $('#webzine .movement div:nth-child(3)').mouseover(function (){
        $(ma3).css('opacity', '1');
    });
    $('#webzine .movement div:nth-child(3)').mouseout(function (){
        $(ma3).css('opacity', '0');
    });
    $('#webzine .movement div:nth-child(4)').mouseover(function (){
        $(ma4).css('opacity', '1');
    });
    $('#webzine .movement div:nth-child(4)').mouseout(function (){
        $(ma4).css('opacity', '0');
    });
    $('#webzine .movement div:nth-child(5)').mouseover(function (){
        $(ma5).css('opacity', '1');
    });
    $('#webzine .movement div:nth-child(5)').mouseout(function (){
        $(ma5).css('opacity', '0');
    });*/

    //From Poster To Web
    let sidebara = "#real #right .sub a"
    let sidebarimg = "#real #right .sub img"
    $(sidebara).mouseover(function (){
        $(sidebarimg).css('opacity', '1');
    });
    $(sidebara).mouseout(function (){
        $(sidebarimg).css('opacity', '0');
    });

    //Works page
    //Work part1
    // year 1 : w2019
        $('.year1').on('click', function() {
        
        if ($('.year2, .year3, .year4').hasClass('active')) {
            $('.year2, .year3, .year4').removeClass(
                'active');
            $('.w2020, .w2021, .etc1').hide();
        
            $('.w2019').slideToggle();
            $(this).toggleClass('active');
        } else if
        ($('.all-button1').hasClass('active')) {
            $('.all-button1').removeClass('active');
            $('.w2020, .w2021, .etc1').slideToggle();
            $(this).toggleClass('active');
        } else {
            $(this).toggleClass('active');
            $('.w2020, .w2021, .etc1').slideToggle();
        };
    });

    // year 2 : w2020
        $('.year2').on('click', function() {
        
        if ($('.year1, .year3, .year4').hasClass('active')) {
            $('.year1, .year3, .year4').removeClass(
                'active');
            $('.w2019, .w2021, .etc1').hide();

            $('.w2020').slideToggle();
            $(this).toggleClass('active');
        } else if
        ($('.all-button1').hasClass('active')) {
            $('.all-button1').removeClass('active');
            $('.w2019, .w2021, .etc1').slideToggle();
            $(this).toggleClass('active');
        } else {
            $(this).toggleClass('active');
            $('.w2019, .w2021, .etc1').slideToggle();
        };
    });
    
    // year 3 : w2021
        $('.year3').on('click', function() {
        
        if ($('.year1, .year2, .year4').hasClass('active')) {
            $('.year1, .year2, .year4').removeClass('active');
            $('.w2019, .w2020, .etc1').hide();
        
            $('.w2021').slideToggle();
            $(this).toggleClass('active');
        } else if
        ($('.all-button1').hasClass('active')) {
            $('.all-button1').removeClass('active');
            $('.w2019, .w2020, .etc1').slideToggle();
            $(this).toggleClass('active');
        } else {
            $(this).toggleClass('active');
            $('.w2019, .w2020, .etc1').slideToggle();
        };
    });

    // year 4 : etc
    $('.year4').on('click', function() {
        
        if ($('.year1, .year2, .year3').hasClass('active')) {
            $('.year1, .year2, .year3').removeClass('active');
            $('.w2019, .w2020, .w2021').hide();
        
            $('.etc1').slideToggle();
            $(this).toggleClass('active');
        } else if
        ($('.all-button1').hasClass('active')) {
            $('.all-button1').removeClass('active');
            $('.w2019, .w2020, .w2021').slideToggle();
            $(this).toggleClass('active');
        } else {
            $(this).toggleClass('active');
            $('.w2019, .w2020, .w2021').slideToggle();
        };
    });
    
    //All button1
    $('.all-button1').on('click',function(){
        $('.year1, .year2, .year3, .year4').removeClass('active');
        $('.w2019, .w2020, .w2021, .etc1').show('slow');
        $(this).toggleClass('active');
    });


    //Work part2
    // cate1 : graphic
    $('.cate1').on('click', function() {
    
        if ($('.cate2, .cate3, .cate4').hasClass('active')) {
            $('.cate2, .cate3, .cate4').removeClass('active');
            $('.edit, .website, .etc2').hide();
        
            $('.graphic').slideToggle();
            $(this).toggleClass('active');
        } else if
        ($('.all-button2').hasClass('active')) {
            $('.all-button2').removeClass('active');
            $('.edit, .website, .etc2').slideToggle();
            $(this).toggleClass('active');
        } else {
            $(this).toggleClass('active');
            $('.edit, .website, .etc2').slideToggle();
        };
    });

    // cate2 : edit
    $('.cate2').on('click', function() {
    
        if ($('.cate1, .cate3, .cate4').hasClass('active')) {
            $('.cate1, .cate3, .cate4').removeClass('active');
            $('.graphic, .website, .etc2').hide();
            
            $('.edit').slideToggle();
            $(this).toggleClass('active');
        } else if
        ($('.all-button2').hasClass('active')) {
            $('.all-button2').removeClass('active');
            $('.graphic, .website, .etc2').slideToggle();
            $(this).toggleClass('active');
        } else {
            $(this).toggleClass('active');
            $('.graphic, .website, .etc2').slideToggle();
        };
    });

    // cate3 : website
    $('.cate3').on('click', function() {
        
        if ($('.cate1, .cate2, .cate4').hasClass('active')) {
            $('.cate1, .cate2, .cate4').removeClass('active');
            $('.graphic, .edit, .etc2').hide();

            $('.website').slideToggle();
            $(this).toggleClass('active');
        } else if
        ($('.all-button2').hasClass('active')) {
            $('.all-button2').removeClass('active');
            $('.graphic, .edit, .etc2').slideToggle();
            $(this).toggleClass('active');
        } else {
            $(this).toggleClass('active');
            $('.graphic, .edit, .etc2').slideToggle();
        };
    });

    // cate4 : etc2
    $('.cate4').on('click', function() {
        
        if ($('.cate1, .cate2, .cate3').hasClass('active')) {
            $('.cate1, .cate2, .cate3').removeClass('active');
            $('.graphic, .edit, .website').hide();

            $('.etc2').slideToggle();
            $(this).toggleClass('active');
        } else if
        ($('.all-button2').hasClass('active')) {
            $('.all-button2').removeClass('active');
            $('.graphic, .edit, .website').slideToggle();
            $(this).toggleClass('active');
        } else {
            $(this).toggleClass('active');
            $('.graphic, .edit, .website').slideToggle();
        };
    });

    //All button2
    $('.all-button2').on('click',function(){
        $('.cate1, .cate2, .cate3, .cate4').removeClass('active');
        $('.graphic, .edit, .website, .etc2').show('slow');
        $(this).toggleClass('active');
    });

    //info
    $('.colorbutton').on('click', function(){
        $('.colorful').css({"visibility": "visible"});
        $('.color1').css("animation-play-state","running");
        $('.color2').css("animation-play-state","running");
        $('.color3').css("animation-play-state","running");
        $('.color4').css("animation-play-state","running");
        $('.color5').css("animation-play-state","running");
        $('.color6').css("animation-play-state","running");
        $('.color7').css("animation-play-state","running");
        $('.color8').css("animation-play-state","running");
        $('.color9').css("animation-play-state","running");
        $('.color10').css("animation-play-state","running");
        $('.color11').css("animation-play-state","running");
        $('.color12').css("animation-play-state","running");
        $('.color13').css("animation-play-state","running");
        $('.color14').css("animation-play-state","running");
    });


});
