$(function () {
  /*=================================================
  ハンバーガーメニュー
  ===================================================*/
  $(".menu-btn").on("click", function () {
    // headerにopenクラスがあるか判定する
    if ($("header").hasClass("open")) {
      // headerにopenクラスが存在する場合、openクラスを削除する
      $("header").removeClass("open");
    } else {
      // headerにopenクラスが存在しない場合、openクラスを加える
      $("header").addClass("open");
    }
  });

  // メニューが表示されている時に画面をクリックした場合
  $('#mask').on('click', function () {
    // openクラスを削除して、メニューを閉じる
    $('header').removeClass('open');
  });


  $(window).scroll(function () {
    // .containerクラスに対して順に処理を行う
    $(".container").each(function () {
      // スクロールした距離
      let scroll = $(window).scrollTop();
      // containerクラスの要素までの距離
      let target = $(this).offset().top;
      // 画面の高さ
      let windowHeight = $(window).height();
      // containerクラスの要素が画面下にきてから200px通過した
      // したタイミングで要素を表示
      if (scroll > target - windowHeight + 100) {
        $(this).css("opacity", "1");
        $(this).css("transform", "translateY(0)");
      }
    });

    // .titleクラスに対して順に処理を行う
    $(".title").each(function () {
      // スクロールした距離
      let scroll = $(window).scrollTop();
      // titleクラスの要素までの距離
      let target = $(this).offset().top;
      // 画面の高さ
      let windowHeight = $(window).height();
      // titleクラスの要素が画面下にきてから200px通過した
      // したタイミングで要素を表示
      if (scroll > target - windowHeight + 100) {
        $(this).css("opacity", "1");
        $(this).css("transform", "translateY(0)");
      }
    });

    $(".sub-title").each(function () {
      // スクロールした距離
      let scroll = $(window).scrollTop();
      // sub-titleクラスの要素までの距離
      let target = $(this).offset().top;
      // 画面の高さ
      let windowHeight = $(window).height();
      // sub-titleクラスの要素が画面下にきてから200px通過した
      // したタイミングで要素を表示
      if (scroll > target - windowHeight + 100) {
        $(this).css("opacity", "1");
        $(this).css("transform", "translateY(0)");
      }
    });

    $(".item").each(function () {
      // スクロールした距離
      let scroll = $(window).scrollTop();
      // itemクラスの要素までの距離
      let target = $(this).offset().top;
      // 画面の高さ
      let windowHeight = $(window).height();
      // itemクラスの要素が画面下にきてから200px通過した
      // したタイミングで要素を表示
      if (scroll > target - windowHeight + 200) {
        $(this).css("opacity", "1");
        $(this).css("transform", "translateY(0)");
      }
    });

    $(".maru").each(function () {
      // スクロールした距離
      let scroll = $(window).scrollTop();
      // itemクラスの要素までの距離
      let target = $(this).offset().top;
      // 画面の高さ
      let windowHeight = $(window).height();
      // itemクラスの要素が画面下にきてから200px通過した
      // したタイミングで要素を表示
      if (scroll > target - windowHeight + 200) {
        $(this).css("opacity", "1");
      }
    });

   

    
  

    $(".content-img").each(function () {
      // スクロールした距離
      let scroll = $(window).scrollTop();
      // itemクラスの要素までの距離
      let target = $(this).offset().top;
      // 画面の高さ
      let windowHeight = $(window).height();
      // itemクラスの要素が画面下にきてから200px通過した
      // したタイミングで要素を表示
      if (scroll > target - windowHeight + 200) {
        $(this).css("opacity", "1");
        $(this).css("transform", "translateY(0)");
      }
    });

  });

});