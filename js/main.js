$(function(){

  //모바일 메뉴
  var $mo_nav = $(".mo_nav");
  var $mo_btn = $(".mo_nav_btn");
  var $nav_bg = $(".nav_bg");

  $mo_btn.click(function(){
      if(!$(this).hasClass("active")){
        monavOpen();                
      }else{
        monavClose();                
      }            
  });

  $nav_bg.click(function(){
    if(!$(this).hasClass("active")){
      monavOpen();                
    }else{
      monavClose();                
    }            
  });

  function monavOpen(){
    $mo_nav.addClass("active");
    $mo_btn.addClass("active");
    $nav_bg.addClass("active");
  }

  function monavClose(){
    $mo_nav.removeClass("active");
    $mo_btn.removeClass("active");
    $nav_bg.removeClass("active");
  }

  // 메뉴 스크롤시 활성화
  $(window).scroll(function(){
    if(document.body.scrollTop > 10 || document.documentElement.scrollTop > 10){
        document.querySelector('.header_bg').style.top = '0px';
    }else{
        document.querySelector('.header_bg').style.top = '-100px';
    }
  });

  //스크롤에 따른 메뉴 active
  var sections = $('.section')
  var nav = $('nav')

  $(window).on('scroll', function () {
    var cur_pos = $(this).scrollTop();
    
    sections.each(function() {
      var top = $(this).offset().top,
          bottom = top + $(this).outerHeight();
      
      if (cur_pos >= top && cur_pos <= bottom) {
        nav.find('a').removeClass('on');
        nav.find('a[href="#'+$(this).attr('id')+'"]').addClass('on');
      }
    });
  });


  //AOS 라이브러리 (스킬 부분)
  AOS.init({  
    disable:  function msieversion() {
        return !!(window.navigator.userAgent.indexOf("MSIE ") > 0 || navigator.userAgent.match(
            /Trident.*rv\:11\./))
    }});

  // work 카테고리 필터링
  const categoryBtn = document.querySelector(".work_categories"); //카테고리 컨테이너 가져옴
  const projects = document.querySelectorAll(".project"); ///work 리스트 전체 가져옴
  const projectContainer = document.querySelector('.work_projects');

  categoryBtn.addEventListener("click", function(e){
  const filter = e.target.dataset.filter || e.target.parentNode.dataset.filter;

  if (filter == null) {
    return;
  }

  // work 선택된 카테고리 버튼 색상 변경
  const active = document.querySelector('.category_btn.selected');
  active.classList.remove('selected');
  const target = e.target.nodeName === 'BUTTON' ? e.target :  e.target.parentNode;
  target.classList.add('selected');

  projectContainer.classList.add('anim-out');
    setTimeout( function(){
      projects.forEach( function(projcet){
        console.log(projcet.dataset.type);
        if(filter === "*" || filter === projcet.dataset.type) {
          projcet.classList.remove('invisible');
        } else {
          projcet.classList.add('invisible');
        }
      })
      projectContainer.classList.remove('anim-out');
    }, 300);
  });


  // 맨 위로 버튼
  $(window).scroll(function(){
    if($(this).scrollTop() > 800){
      $('.up_btn').fadeIn();
    } else{
      $('.up_btn').fadeOut();
    }
  });

  $('.up_btn').click(function(){
    $('html, body').animate({ scrollTop : 0}, 100);
  });
        
});
