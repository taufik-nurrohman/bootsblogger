function labelsCustom(json) {
  'use strict';

  var feed = json.feed
  for (var a = 0, aen = feed.link.length; a < aen; ++a) {
    if (feed.link[a].rel == 'alternate') {
      var homepageURL = feed.link[a].href.split('/')
      homepageURL = homepageURL[0] + '//' + homepageURL[2]
    }
  }
  var category = feed.category
  var scriptTag = 'script'

  /* Config
  var config = {
    postsPerPage: 10,
    badge: true/false,
    classes: {
      base: 'Base class',
      item: 'Item class',
      badge: 'tag tag-default tag-pill'
    }
  }
  */

  document.write('<div class="' + config.classes.base + '">')
  if (config.badge === true) {
    for (var i = 0, ien = category.length; i < ien; ++i) {
      document.write('<a class="' + config.classes.item + '" href="' + homepageURL + '/search/label/' + encodeURIComponent(category[i].term) + '?max-results=' + config.postsPerPage + '">' + category[i].term + ' <span class="' + config.classes.badge + '"><' + scriptTag + ' src="' + homepageURL + '/feeds/posts/summary/-/' + encodeURIComponent(category[i].term) + '?max-results=0&amp;alt=json-in-script&amp;callback=count"></' + scriptTag + '></span></a>')
    }
  }
  if (config.badge === false) {
    for (var i = 0, ien = category.length; i < ien; ++i) {
      document.write('<a class="' + config.classes.item + '" href="' + homepageURL + '/search/label/' + encodeURIComponent(category[i].term) + '?max-results=' + config.postsPerPage + '">' + category[i].term + '</a>')
    }
  }
  document.write('</div>')
}
