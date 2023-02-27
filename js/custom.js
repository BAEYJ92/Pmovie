// 마우스 호버
$('article').mouseenter(function(){
  // video 경로
  let vid = $(this).find('video').get(0);
  // 재생 위치 처음에서
  vid.currentTime = 0;
  // 재생
  vid.play();

  $(this).stop().animate({width : '35%'}, 1000, function(){
    $(this).find('h3').animate({right : '10px'}, 400);
    $(this).find('p').animate({right : '10px'}, 800);
  });
  $(this).find('video').stop().animate({opacity : 0.9}, 1200);
});

// 마우스 아웃
$('article').mouseleave(function(){
    // video 경로
    let vid = $(this).find('video').get(0);
    // 정지
    vid.pause();

  $(this).stop().animate({width : '12%'}, 700);
  $(this).find('video').stop().animate({opacity : 0}, 2000);
  $(this).find('h3').animate({right : '-310px'}, 200);
  $(this).find('p').animate({right : '-310px'}, 500);
});