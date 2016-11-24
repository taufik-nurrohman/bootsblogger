/*!
 * Bootsblogger v1.0.0-alpha.1 (https://bootsblogger.github.io)
 * Copyright 2016 Igoy Nawamreh (@igoynawamreh)
 * Licensed under MIT (https://github.com/bootsblogger/bootsblogger/blob/master/LICENSE)
 */

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

(function ($) {
  'use strict';

  $(function () {

    // COLLAPSABLE WIDGET
    // ==================

    $('.wg-collapse .widget:not(.PlusOne):not(.PlusBadge):not(.Translate)').each(function () {
      var wgId = $(this).attr('id')

      $(this).find('.widget-content').wrap('<div class="widget-collapse"></div>')
      $(this).find('.widget-collapse').attr('id', 'wg-collapse-' + wgId).addClass('collapse')

      $(this).find('h2').attr({
        'data-toggle' : 'collapse',
        'data-target' : '#wg-collapse-' + wgId
      })
      .addClass('collapsed').append('<i class="indicator fa fa-plus-circle pull-right" aria-hidden="true"></i>')
      .css('cursor', 'pointer')

      // On hide
      $(this).on('hide.bs.collapse', function () {
        $(this).find('h2').addClass('wg-title-hide-collapsing')
      })

      // On hidden
      $(this).on('hidden.bs.collapse', function () {
        $(this).find('.indicator').addClass('fa-plus-circle').removeClass('fa-minus-circle')
        $(this).find('h2').removeClass('wg-title-hide-collapsing')
      })

      // On show
      $(this).on('show.bs.collapse', function () {
        $(this).find('h2').addClass('wg-title-show-collapsing')
      })

      // On shown
      $(this).on('shown.bs.collapse', function () {
        $(this).find('.indicator').addClass('fa-minus-circle').removeClass('fa-plus-circle')
        $(this).find('h2').removeClass('wg-title-show-collapsing')
      })
    })

    $('.wg-collapse.open-all > .widget > .widget-collapse').addClass('in')
    $('.wg-collapse.open-all > .widget > h2').removeClass('collapsed')
    $('.wg-collapse.open-all > .widget > h2 .indicator').removeClass('fa-plus-circle').addClass('fa-minus-circle')

    $('.wg-collapse.open-first > .widget:first-child > .widget-collapse').addClass('in')
    $('.wg-collapse.open-first > .widget:first-child > h2').removeClass('collapsed')
    $('.wg-collapse.open-first > .widget:first-child > h2 .indicator').removeClass('fa-plus-circle').addClass('fa-minus-circle')


    // ACCORDION WIDGET
    // ================

    $('.wg-accordion .widget:not(.PlusOne):not(.PlusBadge):not(.Translate)').each(function () {
      var wgId = $(this).attr('id')
      var wgParentId = $(this).parent('.wg-accordion').attr('id')

      $(this).addClass('card')
      $(this).find('.widget-content').wrap('<div class="widget-collapse"></div>')
      $(this).find('.widget-collapse').attr('id', 'wg-collapse-' + wgId).addClass('collapse')

      $(this).find('h2').attr({
        'data-toggle' : 'collapse',
        'data-target' : '#wg-collapse-' + wgId,
        'data-parent' : '#' + wgParentId
      })
      .addClass('collapsed').append('<i class="indicator fa fa-chevron-right pull-right" aria-hidden="true"></i>')
      .css('cursor', 'pointer')

      // On hide
      $(this).on('hide.bs.collapse', function () {
        $(this).find('.indicator').addClass('fa-chevron-right').removeClass('fa-chevron-down')
        $(this).find('h2').addClass('wg-title-hide-collapsing')
      })

      // On hidden
      $(this).on('hidden.bs.collapse', function () {
        $(this).find('h2').removeClass('wg-title-hide-collapsing')
      })

      // On show
      $(this).on('show.bs.collapse', function () {
        $(this).find('.indicator').addClass('fa-chevron-down').removeClass('fa-chevron-right')
        $(this).find('h2').addClass('wg-title-show-collapsing')
      })

      // On shown
      $(this).on('shown.bs.collapse', function () {
        $(this).find('h2').removeClass('wg-title-show-collapsing')
      })
    })

    $('.wg-accordion.open-first > .widget:first-child > .widget-collapse').addClass('in')
    $('.wg-accordion.open-first > .widget:first-child > h2').removeClass('collapsed')
    $('.wg-accordion.open-first > .widget:first-child > h2 .indicator').removeClass('fa-chevron-right').addClass('fa-chevron-down')

  })

}(jQuery));

(function ($) {
  'use strict';

  $(function () {

    // Add More Features to the Blogger Comments
    //
    // Original by Taufik Nurrohman <https://plus.google.com/108949996304093815163/about>

    function commentRepText(id) {
      var a = document.getElementById(id)
      if (!a) return
      var b = a.innerHTML
      var c = '//cdn.rawgit.com/tovic/dte-project/0ef9de902cf286a77272f9b3c6f8168c17ab61c6/emoticon/'
      // Link
      b = b.replace(/\[url=(.*?)\](.*?)\[\/url\]/ig, '<a href="$1">$2</a>')
      // Images
      b = b.replace(/\[img\](.*?)\[\/img\]/ig, '<img class="img-fluid" src="$1" alt="Image">')
      // YouTube video
      b = b.replace(/\[youtube\]https?:\/\/www\.youtube\.com\/embed\/(.*?)\[\/youtube\]/ig, '<div class="embed-responsive embed-responsive-16by9" style="margin-top: 0; margin-bottom: 0;"><iframe class="embed-responsive-item" src="https://www.youtube.com/embed/$1"><\/iframe><\/div>')
      b = b.replace(/\[youtube\](https?:\/\/youtu\.be\/|https?:\/\/www\.youtube\.com\/watch\?v\=)(.*?)\[\/youtube\]/ig, '<div class="embed-responsive embed-responsive-16by9" style="margin-top: 0; margin-bottom: 0;"><iframe class="embed-responsive-item" src="https://www.youtube.com/embed/$2"><\/iframe><\/div>')
      // Code & text block
      b = b.replace(/\[code\](.*?)\[\/code\]/ig, '<code>$1<\/code>')
      b = b.replace(/\[pre\](.*?)\[\/pre\]/ig, '<pre style="margin-top: 0; margin-bottom: 0;"><code>$1<\/code><\/pre>')
      b = b.replace(/\[blockquote\](.*?)\[\/blockquote\]/ig, '<blockquote class="blockquote" style="margin-top: 0; margin-bottom: 0;">$1<\/blockquote>')
      // Lists
      b = b.replace(/\[ul\](<br>)/ig, '<ul style="margin-top: 0; margin-bottom: 0;">')
      b = b.replace(/\[ol\](<br>)/ig, '<ol style="margin-top: 0; margin-bottom: 0;">')
      b = b.replace(/\[ul\]/ig, '<ul style="margin-top: 0; margin-bottom: 0;">')
      b = b.replace(/\[ol\]/ig, '<ol style="margin-top: 0; margin-bottom: 0;">')
      b = b.replace(/\[\/ul\]/ig, '<\/ul>')
      b = b.replace(/\[\/ol\]/ig, '<\/ol>')
      b = b.replace(/\[li\](.*?)\[\/li\]/ig, '<li>$1<\/li>')
      b = b.replace(/<\/li\>(<br>)/ig, '<\/li>')
      // Finishing YouTube and Reduce filesize from images that uploaded by Blogger
      b = b.replace(/&feature=[\w-]*/ig, '')
      b = b.replace(/\/s(640|1600)/g, '/s400')
      a.innerHTML = b;
    }
    commentRepText('comments')


    // HTML converter

    $('#js-comment-btn-convert').on('click', function () {
      $('#js-comment-textarea-convert').val(
        $('#js-comment-textarea-convert').val()
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&apos;')
      ).focus().select().prop('readonly', true)
      $(this).hide()
      $('#js-comment-btn-convert-clear').show()
    })

    $('#js-comment-btn-convert-clear').on('click', function () {
      $('#js-comment-textarea-convert').val('').focus().select().prop('readonly', false)
      $(this).hide()
      $('#js-comment-btn-convert').show()
    })


    // Add/remove `.active` for form container

    $('.comment-form-container-original').addClass('active')

    $('.comment-reply, .comment-add, .comment-cancel').on('click', function () {
      $('.comment-form-container-original, .comment-form-container-reply').each(function () {
        if ($(this).find('.comment-form').length) {
          $(this).addClass('active')
        } else {
          $(this).removeClass('active')
        }
      })
    })


    // Add/remove `.open` for `add comment` and `cancel reply` wrapper

    $('.comment-reply, .comment-add, .comment-cancel').on('click', function () {
      $('.comment-form-container-original').each(function () {
        if ($(this).find('.comment-form').length) {
          $('body').find('.comment-add').removeClass('open')
        } else {
          $('body').find('.comment-add').addClass('open')
        }
      })
      $('.comment-form-container-reply').each(function () {
        if ($(this).find('.comment-form').length) {
          $('body').find('.comment-cancel').addClass('open')
        } else {
          $('body').find('.comment-cancel:not(.open)').removeClass('open')
        }
      })
    })


    // Loading animation

    $('.comment-form').addClass('comment-form-loading')

    $('#comment-editor').on('load', function () {
      $('.comment-form').removeClass('comment-form-loading')
    })

    $('.comment-reply, .comment-add, .comment-cancel').on('click', function () {
      $('.comment-form').addClass('comment-form-loading')

      $('#comment-editor').on('load', function () {
        $('.comment-form').removeClass('comment-form-loading')
      })
    })


    // Avatar

    // Resize
    var commentResizeAvatar = document.getElementById('comments')
    var commentAvatar = commentResizeAvatar.getElementsByTagName('span')
    if (commentAvatar) {
      for (var i = 0; i < commentAvatar.length; i++) {
        var s = commentAvatar.item(i).innerHTML
        if (s.indexOf('style="') != -1) {
          s = s.replace(/src="https:\/\/img1.blogblog.com\/img\/blank.gif"/, '')
          s = s.replace(/src="http:\/\/img1.blogblog.com\/img\/blank.gif"/, '')
          s = s.replace(/display: none/i, '')
          s = s.replace(/longdesc=/i, 'src=')
          s = s.replace(/\/s[0-9]+\//, '/s50/')
          commentAvatar.item(i).innerHTML = s
        }
      }
    }

    // Replace blank image
    $('#comments img[src="//img1.blogblog.com/img/blank.gif"]').attr('src', 'https://placehold.it/50/777/eee?text=?')

  })

}(jQuery));


// Comment editor iframe for reply form
//
// Original <http://www.dte.web.id/2013/01/membuat-fitur-komentar-berbalas.html>

var commentEditorIframeOriginal = document.getElementById('comment-editor').src.split('#')
function reply(id) {
  var form = document.getElementById('comment-form')
  var frame = document.getElementById('comment-editor')
  var container = (id != 'cancel') ? document.getElementById('comment-form-container-reply-' + id) : document.getElementById('comment-form-container-original')
  var part = commentEditorIframeOriginal

  container.insertBefore(form, null)
  frame.src = (id != 'cancel') ? part[0] + '&parentID=' + id + '#' + part[1] : part[0] + '#' + part[1]
}
