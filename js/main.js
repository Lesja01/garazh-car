window.onload = function() {
  new WOW().init();

  new Glide(".glide").mount();
  new Glide(".glide").mount({ Autoplay });
};
(function() {
  // Menu settings
  $(".etaps_main_header").on("click", function() {
    event.preventDefault();

    let cur = $(this)
      .parent()
      .find(".active")
      .hasClass("active");
    if (cur) {
      //$(".etaps-toggle").toggleClass("down");
      //if current is active
      $(this)
        .parent()
        .find(".etaps_item_hover")
        .animate(
          {
            height: "toggle"
          },
          1000
        );
      $(this)
        .children(".etaps-toggle")
        .toggleClass("down");

      $(".etaps_item_hover.active").removeClass("active");
    } else {
      $("#etaps-toggle").toggleClass("down");
      $(".etaps_item_hover.active").animate(
        {
          height: "toggle"
        },
        1000
      );
      $(".etaps_item_hover.active").removeClass("active");
      $(this)
        .parent()
        .find(".etaps_item_hover")
        .animate(
          {
            height: "toggle"
          },
          1000
        );
      $(this)
        .children(".etaps-toggle")
        .toggleClass("down");

      $(this)
        .parent()
        .find(".etaps_item_hover")
        .addClass("active");
    }
  });
})(jQuery);

//plus-minus animation

(function() {
  $(".plus-minus-toggle").on("click", function() {
    $(this).toggleClass("collapsed");
    $(this)
      .parent()
      .find(".questions_item-text")
      .toggleClass("active");
  });
})();

//form submit realization
(function() {
  function resetForm(formid) {
    $("#url").val("Адрес сайта");
    $("#email").val("E-mail");
    $("#name").val("Имя");
    $("#phone").val("Телефон");
  }
  var formElement = $("#footerForm");

  formElement.submit(function() {
    var dataString = formElement.serialize();
    $.ajax({
      type: "POST",
      url: "send.php",
      data: dataString,
      cache: false,
      success: function() {
        alert("Отправлено успешно");
        resetForm("footerForm");
      }
    });
    return false;
  });
})();
(function() {
  function isInViewport(node) {
    var rect = node.getBoundingClientRect();
    return (
      (rect.height > 0 || rect.width > 0) &&
      rect.bottom >= 0 &&
      rect.right >= 0 &&
      rect.top <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.left <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }
  $(window).scroll(function() {
    var scrolled = $(window).scrollTop();
    $(".getaudit").each(function(index, element) {
      var initY = $(this).offset().top;
      var height = $(this).height();
      var endY = initY + $(this).height();

      // Check if the element is in the viewport.
      var visible = isInViewport(this);
      if (visible) {
        var diff = scrolled - initY;
        var ratio = Math.round((diff / height) * 100);
        $(this).css(
          "background-position",
          "left " + parseInt(-(ratio * 5)) + "px"
        );
      }
    });
  });
})();
