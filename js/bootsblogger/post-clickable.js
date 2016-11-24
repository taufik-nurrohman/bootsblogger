(function ($) {
  'use strict';

  $(function () {

    $('.post-clickable').on('click', function () {
      window.location = $(this).attr('data-url')
    })

    $('.post-clickable a').on('click', function (e) {
      e.stopPropagation()
    })

  })

}(jQuery));
