function labelsSelect(json) {
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
    text: '-- Select category --',
    classes: {
      select: 'custom-select'
    }
  }
  */

  document.write('<select class="' + config.classes.select + '" onchange="if (this.value) window.location.href=this.value">')
  document.write('<option value="" selected>' + config.text + '</option>')
  if (config.badge === true) {
    for (var i = 0, ien = category.length; i < ien; ++i) {
      document.write('<option value="' + homepageURL + '/search/label/' + encodeURIComponent(category[i].term) + '?max-results=' + config.postsPerPage + '">' + category[i].term + ' (<' + scriptTag + ' src="' + homepageURL + '/feeds/posts/summary/-/' + encodeURIComponent(category[i].term) + '?max-results=0&amp;alt=json-in-script&amp;callback=count"></' + scriptTag + '>)</option>')
    }
  }
  if (config.badge === false) {
    for (var i = 0, ien = category.length; i < ien; ++i) {
      document.write('<option value="' + homepageURL + '/search/label/' + encodeURIComponent(category[i].term) + '?max-results=' + config.postsPerPage + '">' + category[i].term + '</option>')
    }
  }
  document.write('</select>')
}
