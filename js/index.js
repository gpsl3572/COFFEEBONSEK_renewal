$(document).ready(function(){

    $('.menu1').click(function(){

        $('html,body').animate({
            scrollTop : 1080
        });

    });

    $('.menu2').click(function(){

        $('html,body').animate({
            scrollTop : 3680
        });

    });

    $('.menu3').click(function(){

        $('html,body').animate({
            scrollTop : 5380
        });

    });
// .............................. pc.........................

$('.m_menu1').click(function(){

    $('html,body').animate({
        scrollTop : 980
    });

});

$('.m_menu2').click(function(){

    $('html,body').animate({
        scrollTop : 4450
    });

});

$('.m_menu3').click(function(){

    $('html,body').animate({
        scrollTop : 5530
    });

});


// ..................................mo...........................


    $(window).scroll(function(){
        
        

        sct = $(window).scrollTop();

        sec1_top = $('.section_1').offset().top;
        sec2_top = $('.section_2').offset().top;
        sec3_top = $('.section_3').offset().top;
        sec4_top = $('.section_4').offset().top;
        foo_top = $('footer').offset().top;

        msec1_top = $('.msection_1').offset().top;
        msec2_top = $('.msection_2').offset().top;
        msec3_top = $('.msection_3').offset().top;
        msec4_top = $('.msection_4').offset().top;
        mfoo_top = $('.mfooter').offset().top;
      

    if(sct >= sec1_top && sct < sec2_top){  
        $('header').removeClass('active2');
        $('header').removeClass('active1');
    }else if( sct >= sec2_top && sct < sec3_top){
        $('header').addClass('active2');
        $('.menu1').addClass('on_colr');
        $('.menu2').removeClass('on_colr');
        $('.menu3').removeClass('on_colr');
    }else if( sct >= sec3_top && sct < sec4_top){
        $('header').removeClass('active2');
        $('header').addClass('active1');
        $('.menu2').addClass('on_colr');
        $('.menu1').removeClass('on_colr');
        $('.menu3').removeClass('on_colr');
    }else if( sct >= sec4_top && sct < foo_top ){
        $('header').removeClass('active1');
        $('header').addClass('active2');
        $('.menu3').addClass('on_colr');
        $('.menu2').removeClass('on_colr');
        $('.menu1').removeClass('on_colr');
    }
    //  pc header handler end

    if(sct >= msec1_top && sct < msec2_top){
        $('.mheader').css({opacity : 0});
    }else if(sct >= msec2_top && sct < msec3_top){
        $('.mheader').css({backgroundColor: '#fff',opacity : 0.9});
        $('.m_logo').css({color : '#000'});
        $('label span').css({backgroundColor : '#000'});
        $('.m_menu1').css({ color : '#eccd41'});
        $('.m_menu2').css({ color : '#fff'});
        $('.m_menu3').css({ color : '#fff'});
    }else if(sct >= msec3_top && sct < msec4_top){
        $('.mheader').css({backgroundColor: '#000',opacity : 0.85});
        $('.m_logo').css({color : '#fff'});
        $('label span').css({backgroundColor : '#fff'});
        $('.m_menu2').css({ color : '#eccd41'});
        $('.m_menu1').css({ color : '#fff'});
        $('.m_menu3').css({ color : '#fff'});
    }else if(sct >= msec4_top && sct < mfoo_top){
        $('.mheader').css({backgroundColor: '#fff',opacity : 0.9});
        $('.m_logo').css({color : '#000'});
        $('label span').css({backgroundColor : '#000'});
        $('.m_menu3').css({ color : '#eccd41'});
        $('.m_menu2').css({ color : '#fff'});
        $('.m_menu1').css({ color : '#fff'});
      
    }


    // mo header handler end
    
    if(sct >= sec3_top - 500 && sct < sec3_top + 160){
        $('.upBg').addClass('up');
        $('.upBg').removeClass('down');
    }else if(sct >= sec3_top + 170 && sct < sec4_top){
        $('.upBg').removeClass('up');
        $('.upBg').addClass('down')
    }else if(sct >= sec1_top && sct < sec3_top - 510){
        $('.upBg').removeClass('up');
        $('.upBg').addClass('down');
    }

    // section3 #fff bg event 



    console.log();





    });
    // window scroll function end


    function mov(){

        $('.con4').stop().animate({
            left : -380
        }, function(){
            $('.con4>div:first-child').appendTo('.con4');
            $('.con4').css('left', 0);

            // $('.con4>div').find().first().appendTo('.con4');
            // $('.con4').css('left',0);
            // $('.con4').css('left',0).find('.inner:first').appendTo('.con4');
        });
    }
    
    setInterval(mov,2300);


    // $('.section_4').click(function(){

    //     $('.con4').stop().animate({
    //         left: -380
    //     },function(){
    
    //         $('.con4').css('left',0).find('.inner:last').prependTo('.con4');
    
    //     });

    // });




});
// ready end 