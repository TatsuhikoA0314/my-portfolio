
$(function() {
    // 共有用
    const skillcard = (skillcard, time) => {
        ScrollReveal().reveal(skillcard, { 
            duration: 1500, 
            viewFactor: 0.2, 
            reset: true,
            origin: 'top', 
            delay: time
          });
    }

    const slide = (slideDown) => {

        $('#detail1').slideUp();
        $('#detail2').slideUp();
        $('#detail3').slideUp();
        $('#detail4').slideUp();
        $('#detail5').slideUp();

        if(slideDown=="detail1"){
            $('#detail1').slideDown();
        }else if(slideDown=="detail2"){
            $('#detail2').slideDown();
        }else if(slideDown=="detail3"){
            $('#detail3').slideDown();
        }else if(slideDown=="detail4"){
            $('#detail4').slideDown();
        }else if(slideDown=="detail5"){
            $('#detail5').slideDown();
        }
    }
    

    // 

    $('#title').fadeIn(1500);
    
    $('#show-work1').click(function() {slide("detail1");});
    $('#show-work2').click(function() {slide("detail2");});
    $('#show-work3').click(function() {slide("detail3");});
    $('#show-work4').click(function() {slide("detail4");});
    $('#show-work5').click(function() {slide("detail5");});

    skillcard(".skill-card1", 250);
    skillcard(".skill-card2", 500);
    skillcard(".skill-card3", 750);
    skillcard(".skill-card4", 1000);
    skillcard(".skill-card5", 750);
    skillcard(".skill-card6", 1000);
    

    $('a[href^=#]').click(function(){
        var adjust = -50;
        var speed = 400;
        var href= $(this).attr("href");
        var target = $(href == "#" || href == "" ? 'html' : href);
        var position = target.offset().top + adjust;
        $('body,html').animate({scrollTop:position}, speed, 'swing');
        return false;
      });
  });

  // 新規タブ
  function navigateTargetUrl() {
    window.open(this.event.target.href, null, "noopener");
  }

  