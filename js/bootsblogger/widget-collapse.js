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
