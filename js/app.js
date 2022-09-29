$('.hover-title').hover(function(){
    $(this).css('color', '#fff');
},function(){
    $(this).css('color', '#000');
});
$('.hover-title').hover(function(){
    $('.line', this).css('border-color', '#fff');
},function(){
    $('.line', this).css('border-color', '#000');
});

$('.se-title').hover(function(){
    $('.arrow>img', this).css('right', '0');
},function(){
    $('.arrow>img', this).css('right', '25px');
});
$('.se-title-2').hover(function(){
    $('.arrow>img', this).css('right', '0');
},function(){
    $('.arrow>img', this).css('right', '25px');
});

$('.fi-title').click(function(){
    $('.plus').toggleClass('plus-to-close');
    $('.se-title').slideToggle();
    $('.se-title').css('display', 'grid');
    $('.se-title-2').slideToggle();
    $('.se-title-2').css('display', 'grid');
});
$('.theme-date a').hover(function(){
    $(this).css('color', '#fff');
},function(){
    $(this).css('color', '#000');
});
$('.theme-date').hover(function(){
    $(this).find('.dire-img').slideDown();
}, function(){
    $(this).find('.dire-img').slideUp('fast');
}
);

// $(document).ready(function() {
//     $("#onsite-arrow").click(function(){
//         $("body,html").animate(
//             {scrollTop: 518}, 200);
//         });
//     $("#online-arrow").click(function(){
//         $("body,html").animate(
//             {scrollTop: 1260}, 400);
//         });
// });

$('.enquire-btn').click(function(){
    window.location.href='enquire-form.html';
});

$('.enquire-open').click(function(){
    window.location.href='enquire-form.html';
});

$('input[type="checkbox"]').on('change', function() {
    $('input[type="checkbox"]').not(this).prop('checked', false);
 });

 $('.hambur-menu').click(function(){
    $(this).toggleClass('ham-to-close');
    $('.ham-menu-page').slideToggle('fast');
    $('html').toggleClass('no-scroll');
    $('body').toggleClass('no-scroll');
});

$('.pic-menu:not(#menu-1)').hover(function(){
    $(this).find('a').css('color', '#fff');
},function(){
    $(this).find('a').css('color', '#000');
});

$('.summary ul a').hover(function(){
    $(this).find('img').css('transform', 'scaleY(1)');
},function(){
    $(this).find('img').css('transform', 'scaleY(0)');
});

$('.sec4-con').hover(function(){
    $(this).find('h2').slideDown();
    $(this).addClass('overlay');
},function(){
    $(this).find('h2').slideUp();
    $(this).removeClass('overlay');
});

