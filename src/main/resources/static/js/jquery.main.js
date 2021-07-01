function eventHeaderSlide() {
  let current = 0;
  let clearSet;
  const eleWidth = $("#event-bar .list span").width();
  // const size = $("#event-bar .list span").length;
  $("#event-bar .list").css({marginLeft: -eleWidth});
  const det = $("#event-bar .list span:last-child").detach();
  det.prependTo($("#event-bar .list"));
  function leftFn(){
    $("#event-bar .list").animate({left: + eleWidth}, 600, function(){
      const det = $("#event-bar .list span:last-child").detach();
      det.prependTo($("#event-bar .list"));
      $("#event-bar .list").css("left", '');
    });
  }
  function rightFn(){
    $("#event-bar .list").animate({left: - eleWidth}, 600, function(){
      const det = $("#event-bar .list span:first-child").detach();
      det.appendTo($("#event-bar .list"));
      $("#event-bar .list").css("left", '');
    });
  }

  function autoSlide(){
    clearSet = setInterval(function(){
      rightFn();
    }, 5000);
  }
  autoSlide();

  $("#event-bar .prev").on('click', function(){
    leftFn();
  });
  $("#event-bar .next").on('click', function(){
    rightFn();
  });
  
  $("#event-bar").on('mouseover', function(){
    clearInterval(clearSet);
  });
  $("#event-bar").on('mouseout', function(){
    autoSlide();
  });
}

function navigationSticky(){
  $(window).on("wheel", function(e){
    if(e.originalEvent.deltaY > 0){
      $("#header-menu").css("transform", "translateY(-100%)");
    }else{
      $("#header-menu").css("transform", "translateY(0px)");
    }
  });
}

function mobileMenuClick(){
  $(".mobile-menu").on('click', function(){
    if($(this).hasClass("active")){
      $(".mobile-menu-list").slideDown();
    }else{
      $(".mobile-menu-list").slideUp();
    }
  });

  $(".mobile-menu-list > ul > li").on('click', function(){
    if($(this).children().hasClass("on")){
      $(this).children().slideDown();
    }else{
      $(this).children().slideUp();
    }
  });
}

function detailViewNotesSlide(){
  $(".tasting-note p").on('click', function(){
    $(".tasting-note .notes").slideToggle(function(){
      const a = $(".tasting-note p i");
      if(a.hasClass("fa-chevron-up")){
        a.removeClass("fa-chevron-up");
        a.addClass("fa-chevron-down");
      }else{
        a.removeClass("fa-chevron-down");
        a.addClass("fa-chevron-up");
      }
    });
  });
}

function sumnailSlide(){
  $(".product .sumnail-btn").on('click', function(e){
    e.preventDefault();
    const winWidth = $(window).width();
    const a = $(this).parents('div.product');
    const idx = a.index();
    console.log(idx);
    const aOff = a.offset();
    $(".product-sumnail").eq(idx).slideDown({
      start: function(){
        // $(this).css("left", `-${a.left}px`);
        $(this).css({
          display: "flex",
          left: `-${aOff.left}px`,
          width: winWidth
        });
        $(".product .visible-content").css("height", "60%");
      }
    });
  });
}