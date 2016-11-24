function labelsLists(json) {
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
      ul: 'Add class to ul',
      li: 'Add class to li',
      a: 'Add class to a',
      badge: 'tag tag-default tag-pill'
    }
  }
  */

  document.write('<ul class="' + config.classes.ul + '">')
  if (config.badge === true) {
    for (var i = 0, ien = category.length; i < ien; ++i) {
      document.write('<li class="' + config.classes.li + '"><a class="' + config.classes.a + '" href="' + homepageURL + '/search/label/' + encodeURIComponent(category[i].term) + '?max-results=' + config.postsPerPage + '">' + category[i].term + ' <span class="' + config.classes.badge + '"><' + scriptTag + ' src="' + homepageURL + '/feeds/posts/summary/-/' + encodeURIComponent(category[i].term) + '?max-results=0&amp;alt=json-in-script&amp;callback=count"></' + scriptTag + '></span></a></li>')
    }
  }
  if (config.badge === false) {
    for (var i = 0, ien = category.length; i < ien; ++i) {
      document.write('<li class="' + config.classes.li + '"><a class="' + config.classes.a + '" href="' + homepageURL + '/search/label/' + encodeURIComponent(category[i].term) + '?max-results=' + config.postsPerPage + '">' + category[i].term + '</a></li>')
    }
  }
  document.write('</ul>')
}
