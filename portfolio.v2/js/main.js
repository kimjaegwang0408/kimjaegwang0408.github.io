
window.addEventListener("wheel", function(e){
    e.preventDefault();
},{passive : false});

$(function () {
    var mHtml = $("html");
    var page = 1;
    $(".Anchor").on("click", function () {
        var headerHeight = $(".navbar").outerHeight();
        var href = $(this).attr("href");
        var target = $(href == "#" || href == "" ? "body" : href);
        var position = target.offset().top - headerHeight;
        var active = $(this).children();
        $("html, body").animate({ scrollTop: position }, 600, "swing");
        $('li').removeClass('active');
        $(active).addClass('active');
    });
    /// 페이지 스크롤, 클릭시 
    $('li').click(function(){
        var PageTarget = this.id;
        if (PageTarget == "A0"){
            page = 1;
        }
        else if (PageTarget == "A1"){
            page = 2;
        }
        else if (PageTarget == "A2"){
            page = 3;
        }
        else if (PageTarget == "A3"){
            page = 4;
        }
        else if (PageTarget == "A4"){
            page = 5;
        }

    });

    mHtml.animate({ scrollTop: 0 }, 10);
    $(window).on("wheel", function (e) {
        var scltop = $(window).scrollTop();
        if (mHtml.is(":animated")) return;
        if (e.originalEvent.deltaY > 0) {
            if (page == 5) return;
            page++;
        } else if (e.originalEvent.deltaY < 0) {
            if (page == 1) return;
            page--;
        }
        var posTop = (page - 1) * $(window).height();
        mHtml.animate({ scrollTop: posTop },450);
    });
    var $menu = $('.Anchor li'),
     $contents = $('.contents'),
     $doc = $('html, body');

// 섹션 위치 확인 후 메뉴 활성
    $(window).scroll(function () {
        var headerHeight = $(".navbar").outerHeight();
         var scltop = $(window).scrollTop(); 
         $.each($contents, function (idx, item) { 
             var $target = $contents.eq(idx), 
             i = $target.index(), 
             targetTop = $target.offset().top; 
             if (targetTop <= scltop+headerHeight) { 
                 $menu.removeClass('active'); 
                 $menu.eq(idx).addClass('active'); 
                } 

            }) ;
                
                });
                $("#toggle__button").click(function() {
                    $(this).toggleClass("on");
                    $("#menu").slideToggle();
                  });

const toggleBtn = document.querySelector('#toggle__button');
const menu2 = document.querySelector('.navbar__menu');
const icons = document.querySelector('.navbar__lcons');
const menu3 = document.querySelector('.navbar');
toggleBtn.addEventListener('click', () =>{
    menu2.classList.toggle('active');
    icons.classList.toggle('active');
    menu3.classList.toggle('active');
   
});



});

