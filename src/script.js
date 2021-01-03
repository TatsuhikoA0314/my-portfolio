
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

        if(slideDown=="detail1"){
            $('#detail1').slideDown();
        }else if(slideDown=="detail2"){
            $('#detail2').slideDown();
        }else if(slideDown=="detail3"){
            $('#detail3').slideDown();
        }else if(slideDown=="detail4"){
            $('#detail4').slideDown();
        }
    }
    

    // 

    $('#title').fadeIn(2000);
    
    $('#show-work1').click(function() {slide("detail1");});
    $('#show-work2').click(function() {slide("detail2");});
    $('#show-work3').click(function() {slide("detail3");});
    $('#show-work4').click(function() {slide("detail4");});

    skillcard(".skill-card1", 500);
    skillcard(".skill-card2", 1000);
    skillcard(".skill-card3", 1500);
    skillcard(".skill-card4", 2000);
    skillcard(".skill-card5", 1000);
    skillcard(".skill-card6", 1500);
    

    // #で始まるa要素をクリックした場合に処理
    $('a[href^=#]').click(function(){
        // 移動先を0px調整する。0を30にすると30px下にずらすことができる。
        var adjust = -50;
        // スクロールの速度（ミリ秒）
        var speed = 400;
        // アンカーの値取得 リンク先（href）を取得して、hrefという変数に代入
        var href= $(this).attr("href");
        // 移動先を取得 リンク先(href）のidがある要素を探して、targetに代入
        var target = $(href == "#" || href == "" ? 'html' : href);
        // 移動先を調整 idの要素の位置をoffset()で取得して、positionに代入
        var position = target.offset().top + adjust;
        // スムーススクロール linear（等速） or swing（変速）
        $('body,html').animate({scrollTop:position}, speed, 'swing');
        return false;
      });
  });

  
