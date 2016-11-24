/*!
 * Bootsblogger v1.0.0-alpha.1 (https://bootsblogger.github.io)
 * Copyright 2016 Igoy Nawamreh (@igoynawamreh)
 * Licensed under MIT (https://github.com/bootsblogger/bootsblogger/blob/master/LICENSE)
 */

function count(json) {
  'use strict';

  document.write(json.feed.openSearch$totalResults.$t)
}

function postsDefault(json) {
  'use strict';

  var html = ''
  var feed = json.feed
  var posts = feed.entry
  var container = document.getElementById(config.containerID)

  for (var a = 0, aen = feed.link.length; a < aen; ++a) {
    if (feed.link[a].rel == 'alternate') {
      var homepageURL = feed.link[a].href.split('/')
      homepageURL = homepageURL[0] + '//' + homepageURL[2]
    }
  }

  // No posts yet
  if (!feed.entry || feed.entry.length === 0) {
    container.innerHTML = '<p>No posts yet.</p>'
    return
  }

  // Post groups' start
  if (config.group.active === true) {
    html += '<div class="post-group">'
  }

  // Post columns' start
  if (config.columns.active === true) {
    html += '<div class="post-columns">'
  }

  // Post grid' start
  if (config.grid.active === true) {
    html += '<div class="row">'
  }

  for (var i = 0, ien = posts.length; i < ien; ++i) {

    var post = posts[i]
    var postID = post.id.$t
    var postPublish = post.published.$t
    var postUpdate = post.updated.$t
    var postDate = postPublish
    var postURL = false
    var postLabels = false
    var postNumComments = post.thr$total ? post.thr$total.$t : 0
    var postThumbnailURL = post.media$thumbnail ? post.media$thumbnail.url : config.thumbnail.none
    var postAuthorName = post.author[0].name ? post.author[0].name.$t : config.author.none
    var postAuthorURL = post.author[0].uri ? post.author[0].uri.$t : false
    var postAuthorAvatar = post.author[0].gd$image.src.replace(/\/s\d+(\-c)?\//, '/s' + config.author.avatar.size + '-c/')
    var postEditURL = false
    var postTitle = post.title.$t
    var postContent = post.content ? post.content.$t : post.summary.$t

    // Generate human-readable date format
    var date = postDate.split('T')[0].split('-')
    var postDate = date[2] + ' ' + config.date.monthNames[(+date[1]) - 1] + ' ' + date[0]

    for (var j = 0, jen = post.link.length; j < jen; ++j) {
      var item = post.link[j]
      if (item.rel == 'self') {
        // Getting the original post ID
        postID = item.href.split('/').pop()
        // Getting the post edit URL
        postEditURL = item.href.replace(/\/feeds\/(\d+)\/(post|page)s?\/(default|summary)\/(\d+)/, '/$2-edit.g?blogID=$1&$2ID=$4')
      }
      // Getting the post URL
      if (item.rel == 'alternate') {
        postURL = item.href
      }
    }

    // Set comment text and URL
    if (postNumComments === 0) {
      postNumComments = 'No Comments'
    }
    if (postNumComments === 1) {
      postNumComments = postNumComments + ' Comment'
    }
    if (postNumComments > 1) {
      postNumComments = postNumComments + ' Comments'
    }
    postNumComments = '<a href="' + postURL + '#comments">' + postNumComments + '</a>'

    // Resize thumbnail
    postThumbnailURL = postThumbnailURL.toString()
    postThumbnailURL = postThumbnailURL.replace(/s72-c/, 's' + config.thumbnail.size + '-c')

    // Getting the post labels
    if (post.category && post.category.length) {
      postLabels = []
      for (var k = 0, ken = post.category.length; k < ken; ++k) {
        postLabels.push('<a href="' + homepageURL + '/search/label/' + encodeURIComponent(post.category[k].term) + '">' + post.category[k].term + '</a>')
      }
      // Sort the post labels alphabetically
      postLabels = postLabels.sort()
    }
    postLabels = postLabels !== false ? postLabels.join(', ') : config.labels.none

    //  Homepage URL: homepageURL
    //            ID: postID
    //       Publish: postPublish
    //        Update: postUpdate
    //          Date: postDate
    //           URL: postURL
    //        Labels: postLabels
    //  Num Comments: postNumComments
    // Thumbnail URL: postThumbnailURL
    //   Author name: postAuthorName
    //    Author URL: postAuthorURL
    // Author Avatar: postAuthorAvatar
    //      Edit URL: postEditURL
    //         Title: postTitle
    //       Content: postContent

    /* Config
    var config = {
      containerID: 'id',

      clickable: {
        active: true/false
      },
      content: {
        numchars: 'full'/number/0 to disable,
        title: {
          tag: 'h1/h2/h3/h4/h5/h6',
          style: 'post-title-link'
        },
        more: {
          active: true/false,
          text: 'Read more',
          style: 'btn btn-primary'
        }
      },
      author: {
        active: true/false,
        placement: 'meta/header/footer',
        before: 'Posted by ',
        after: '',
        none: 'Anonymous',
        avatar: {
          active: true/false,
          size: '24'
        }
      },
      date: {
        active: true/false,
        placement: 'meta/header/footer',
        before: 'Posted on ',
        after: '',
        monthNames: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
      },
      numComments: {
        active: true/false,
        placement: 'meta/header/footer',
        before: 'Comment total: ',
        after: ''
      },
      labels: {
        active: true/false,
        placement: 'meta/header/footer',
        before: 'Labels: ',
        after: '',
        none: 'Unlabelled'
      },
      thumbnail: {
        active: true/false,
        placement: 'image-only/top/right/bottom/left/overlay',
        size: '512',
        none: 'https://placehold.it/512/eee/777?text=NO+IMAGE+AVAILABLE',
        cover: {
          active: true/false,
          minheight: '150'
        }
      },
      group: {
        active: true/false
      },
      columns: {
        active: true/false
      },
      grid: {
        active: true/false,
        column: 'col-*-*'
      },
      classes: {
        post: 'Add class to .post',
        image: 'Add class to .post-img-*',
        content: 'Add class to .post-content'
      }
    }
    */


    // Post header
    var headerHtml = ''
    headerHtml += '<div class="post-header">'
    headerHtml += '<ul class="post-header-list">'
    if (config.author.active === true && config.author.placement === 'header') {
      if (config.author.avatar.active === true) {
        headerHtml += '<li>' + config.author.before + '<a href="' + postAuthorURL + '" title="Author Avatar"><img src="' + postAuthorAvatar + '" alt="' + postAuthorName + '"></a> <a href="' + postAuthorURL + '" title="Author Profile">' + postAuthorName + '</a>' + config.author.after + '</li>'
      } else {
        headerHtml += '<li>' + config.author.before + '<a href="' + postAuthorURL + '" title="Author Profile">' + postAuthorName + '</a>' + config.author.after + '</li>'
      }
    }
    if (config.date.active === true && config.date.placement === 'header') {
      headerHtml += '<li>' + config.date.before + '<time datetime="' + postPublish + '" title="' + postPublish + '">' + postDate + '</time>' + config.date.after + '</li>'
    }
    if (config.numComments.active === true && config.numComments.placement === 'header') {
      headerHtml += '<li>' + config.numComments.before + postNumComments + config.numComments.after + '</li>'
    }
    if (config.labels.active === true && config.labels.placement === 'header') {
      headerHtml += '<li>' + config.labels.before + postLabels + config.labels.after + '</li>'
    }
    headerHtml += '</ul>'
    headerHtml += '</div>'
    var header = headerHtml

    // Post footer
    var footerHtml = ''
    footerHtml += '<div class="post-footer">'
    footerHtml += '<ul class="post-footer-list">'
    if (config.author.active === true && config.author.placement === 'footer') {
      if (config.author.avatar.active === true) {
        footerHtml += '<li>' + config.author.before + '<a href="' + postAuthorURL + '" title="Author Avatar"><img src="' + postAuthorAvatar + '" alt="' + postAuthorName + '"></a> <a href="' + postAuthorURL + '" title="Author Profile">' + postAuthorName + '</a>' + config.author.after + '</li>'
      } else {
        footerHtml += '<li>' + config.author.before + '<a href="' + postAuthorURL + '" title="Author Profile">' + postAuthorName + '</a>' + config.author.after + '</li>'
      }
    }
    if (config.date.active === true && config.date.placement === 'footer') {
      footerHtml += '<li>' + config.date.before + '<time datetime="' + postPublish + '" title="' + postPublish + '">' + postDate + '</time>' + config.date.after + '</li>'
    }
    if (config.numComments.active === true && config.numComments.placement === 'footer') {
      footerHtml += '<li>' + config.numComments.before + postNumComments + config.numComments.after + '</li>'
    }
    if (config.labels.active === true && config.labels.placement === 'footer') {
      footerHtml += '<li>' + config.labels.before + postLabels + config.labels.after + '</li>'
    }
    footerHtml += '</ul>'
    footerHtml += '</div>'
    var footer = footerHtml

    // Post meta
    var metaHtml = ''
    metaHtml += '<div class="post-meta">'
    metaHtml += '<ul class="post-meta-list">'
    if (config.author.active === true && config.author.placement === 'meta') {
      if (config.author.avatar.active === true) {
        metaHtml += '<li>' + config.author.before + '<a href="' + postAuthorURL + '" title="Author Avatar"><img src="' + postAuthorAvatar + '" alt="' + postAuthorName + '"></a> <a href="' + postAuthorURL + '" title="Author Profile">' + postAuthorName + '</a>' + config.author.after + '</li>'
      } else {
        metaHtml += '<li>' + config.author.before + '<a href="' + postAuthorURL + '" title="Author Profile">' + postAuthorName + '</a>' + config.author.after + '</li>'
      }
    }
    if (config.date.active === true && config.date.placement === 'meta') {
      metaHtml += '<li>' + config.date.before + '<time datetime="' + postPublish + '" title="' + postPublish + '">' + postDate + '</time>' + config.date.after + '</li>'
    }
    if (config.numComments.active === true && config.numComments.placement === 'meta') {
      metaHtml += '<li>' + config.numComments.before + postNumComments + config.numComments.after + '</li>'
    }
    if (config.labels.active === true && config.labels.placement === 'meta') {
      metaHtml += '<li>' + config.labels.before + postLabels + config.labels.after + '</li>'
    }
    metaHtml += '</ul>'
    metaHtml += '</div>'
    var meta = metaHtml

    // Post content
    var contentHtml = ''
    contentHtml += '<div class="post-content ' + config.classes.content + '">'
    contentHtml += '<' + config.content.title.tag + ' class="post-title">'
    contentHtml += '<a class="' + config.content.title.style + '" href="' + postURL + '">' + postTitle + '</a>'
    contentHtml += '</' + config.content.title.tag + '>'
    // Meta
    if (config.author.placement === 'meta' || config.date.placement === 'meta' || config.numComments.placement === 'meta' || config.labels.placement === 'meta') {
      contentHtml += meta
    }
    if (config.content.numchars !== 'full' && config.content.numchars !== 0) {
      var re = /<\S[^>]*>/g
      postContent = postContent.replace(re, '')
      if (postContent.length < config.content.numchars) {
        contentHtml += '<p>'
        contentHtml += postContent
        contentHtml += '</p>'
      } else {
        contentHtml += '<p>'
        postContent = postContent.substring(0, config.content.numchars)
        var quoteEnd = postContent.lastIndexOf(' ')
        postContent = postContent.substring(0, quoteEnd)
        contentHtml += postContent + '...'
        contentHtml += '</p>'
        if (config.content.more.active === true) {
          contentHtml += '<p><a class="' + config.content.more.style + '" href="' + postURL + '">' + config.content.more.text + '</a></p>'
        }
      }
    }
    if (config.content.numchars === 'full') {
      contentHtml += postContent
    }
    if (config.content.numchars === 0) {
      contentHtml += ''
    }
    contentHtml += '</div>'
    var content = contentHtml


    // Grid column' start
    if (config.grid.active === true) {
      html += '<div class="' + config.grid.column + '">'
    }

    // Base class' start
    if (config.clickable.active === true) {
      html += '<article class="post post-clickable ' + config.classes.post + '" id="' + postID + '" data-url="' + postURL + '">'
    } else {
      html += '<article class="post ' + config.classes.post + '" id="' + postID + '">'
    }

    // Header
    if (config.author.placement === 'header' || config.date.placement === 'header' || config.numComments.placement === 'header' || config.labels.placement === 'header') {
      html += header
    }

    // Without thumbnail
    if (config.thumbnail.active === false) {
      html += content
    }

    // Image only
    if (config.thumbnail.active === true && config.thumbnail.placement === 'image-only') {
      if (config.thumbnail.cover.active === true) {
        html += '<div class="post-img-only post-img-cover ' + config.classes.image + '" style="min-height: ' + config.thumbnail.cover.minheight + 'px; background-image: url(' + postThumbnailURL + ');"></div>'
      } else {
        html += '<div class="post-img-only ' + config.classes.image + '">'
        html += '<a href="' + postURL + '"><img src="' + postThumbnailURL + '" alt="' + postTitle + '"></a>'
        html += '</div>'
      }
    }

    // Top image
    if (config.thumbnail.active === true && config.thumbnail.placement === 'top') {
      if (config.thumbnail.cover.active === true) {
        html += '<div class="post-img-top post-img-cover ' + config.classes.image + '" style="min-height: ' + config.thumbnail.cover.minheight + 'px; background-image: url(' + postThumbnailURL + ');"></div>'
      } else {
        html += '<div class="post-img-top ' + config.classes.image + '">'
        html += '<a href="' + postURL + '"><img src="' + postThumbnailURL + '" alt="' + postTitle + '"></a>'
        html += '</div>'
      }
      html += content
    }

    // Bottom image
    if (config.thumbnail.active === true && config.thumbnail.placement === 'bottom') {
      html += content
      if (config.thumbnail.cover.active === true) {
        html += '<div class="post-img-bottom post-img-cover ' + config.classes.image + '" style="min-height: ' + config.thumbnail.cover.minheight + 'px; background-image: url(' + postThumbnailURL + ');"></div>'
      } else {
        html += '<div class="post-img-bottom ' + config.classes.image + '">'
        html += '<a href="' + postURL + '"><img src="' + postThumbnailURL + '" alt="' + postTitle + '"></a>'
        html += '</div>'
      }
    }

    // Left image
    if (config.thumbnail.active === true && config.thumbnail.placement === 'left') {
      html += '<div class="post-horizontal">'
      if (config.thumbnail.cover.active === true) {
        html += '<div class="post-img-left post-img-cover ' + config.classes.image + '" style="min-height: ' + config.thumbnail.cover.minheight + 'px; background-image: url(' + postThumbnailURL + ');"></div>'
      } else {
        html += '<div class="post-img-left ' + config.classes.image + '">'
        html += '<a href="' + postURL + '"><img src="' + postThumbnailURL + '" alt="' + postTitle + '"></a>'
        html += '</div>'
      }
      html += content
      html += '</div>'
    }

    // Right image
    if (config.thumbnail.active === true && config.thumbnail.placement === 'right') {
      html += '<div class="post-horizontal">'
      html += content
      if (config.thumbnail.cover.active === true) {
        html += '<div class="post-img-right post-img-cover ' + config.classes.image + '" style="min-height: ' + config.thumbnail.cover.minheight + 'px; background-image: url(' + postThumbnailURL + ');"></div>'
      } else {
        html += '<div class="post-img-right ' + config.classes.image + '">'
        html += '<a href="' + postURL + '"><img src="' + postThumbnailURL + '" alt="' + postTitle + '"></a>'
        html += '</div>'
      }
      html += '</div>'
    }

    // Image overlays
    if (config.thumbnail.active === true && config.thumbnail.placement === 'overlay') {
      html += '<div class="post-overlay">'
      if (config.thumbnail.cover.active === true) {
        html += '<div class="post-img-overlay post-img-cover ' + config.classes.image + '" style="min-height: ' + config.thumbnail.cover.minheight + 'px; background-image: url(' + postThumbnailURL + ');"></div>'
      } else {
        html += '<div class="post-img-overlay ' + config.classes.image + '">'
        html += '<a href="' + postURL + '"><img src="' + postThumbnailURL + '" alt="' + postTitle + '"></a>'
        html += '</div>'
      }
      html += content
      html += '</div>'
    }

    // Footer
    if (config.author.placement === 'footer' || config.date.placement === 'footer' || config.numComments.placement === 'footer' || config.labels.placement === 'footer') {
      html += footer
    }

    // Base class' end
    html += '</article>'

    // Grid column' end
    if (config.grid.active === true) {
      html += '</div>'
    }

  }

  // Post grid' end
  if (config.columns.active === true) {
    html += '</div>'
  }

  // Post columns' end
  if (config.grid.active === true) {
    html += '</div>'
  }

  // Post groups' end
  if (config.group.active === true) {
    html += '</div>'
  }

  // Show the generated data to the container ...
  container.innerHTML = html

}

function postsCard(json) {
  'use strict';

  var html = ''
  var feed = json.feed
  var posts = feed.entry
  var container = document.getElementById(config.containerID)

  for (var a = 0, aen = feed.link.length; a < aen; ++a) {
    if (feed.link[a].rel == 'alternate') {
      var homepageURL = feed.link[a].href.split('/')
      homepageURL = homepageURL[0] + '//' + homepageURL[2]
    }
  }

  // No posts yet
  if (!feed.entry || feed.entry.length === 0) {
    container.innerHTML = '<p>No posts yet.</p>'
    return
  }

  // Card groups' start
  if (config.group.active === true) {
    html += '<div class="card-group">'
  }

  // Card decks' start
  if (config.deck.active === true) {
    html += '<div class="card-deck-wrapper">'
    html += '<div class="card-deck">'
  }

  // Card columns' start
  if (config.columns.active === true) {
    html += '<div class="card-columns">'
  }

  // Card grid' start
  if (config.grid.active === true) {
    html += '<div class="row">'
  }

  for (var i = 0, ien = posts.length; i < ien; ++i) {

    var post = posts[i]
    var postID = post.id.$t
    var postPublish = post.published.$t
    var postUpdate = post.updated.$t
    var postDate = postPublish
    var postURL = false
    var postLabels = false
    var postNumComments = post.thr$total ? post.thr$total.$t : 0
    var postThumbnailURL = post.media$thumbnail ? post.media$thumbnail.url : config.thumbnail.none
    var postAuthorName = post.author[0].name ? post.author[0].name.$t : config.author.none
    var postAuthorURL = post.author[0].uri ? post.author[0].uri.$t : false
    var postAuthorAvatar = post.author[0].gd$image.src.replace(/\/s\d+(\-c)?\//, '/s' + config.author.avatar.size + '-c/')
    var postEditURL = false
    var postTitle = post.title.$t
    var postContent = post.content ? post.content.$t : post.summary.$t

    // Generate human-readable date format
    var date = postDate.split('T')[0].split('-')
    var postDate = date[2] + ' ' + config.date.monthNames[(+date[1]) - 1] + ' ' + date[0]

    for (var j = 0, jen = post.link.length; j < jen; ++j) {
      var item = post.link[j]
      if (item.rel == 'self') {
        // Getting the original post ID
        postID = item.href.split('/').pop()
        // Getting the post edit URL
        postEditURL = item.href.replace(/\/feeds\/(\d+)\/(post|page)s?\/(default|summary)\/(\d+)/, '/$2-edit.g?blogID=$1&$2ID=$4')
      }
      // Getting the post URL
      if (item.rel == 'alternate') {
        postURL = item.href
      }
    }

    // Set comment text and URL
    if (postNumComments === 0) {
      postNumComments = 'No Comments'
    }
    if (postNumComments === 1) {
      postNumComments = postNumComments + ' Comment'
    }
    if (postNumComments > 1) {
      postNumComments = postNumComments + ' Comments'
    }
    postNumComments = '<a class="nav-link" href="' + postURL + '#comments">' + postNumComments + '</a>'

    // Resize thumbnail
    postThumbnailURL = postThumbnailURL.toString()
    postThumbnailURL = postThumbnailURL.replace(/s72-c/, 's' + config.thumbnail.size + '-c')

    // Getting the post labels
    if (post.category && post.category.length) {
      postLabels = []
      for (var k = 0, ken = post.category.length; k < ken; ++k) {
        postLabels.push('<a class="nav-link" href="' + homepageURL + '/search/label/' + encodeURIComponent(post.category[k].term) + '">' + post.category[k].term + '</a>')
      }
      // Sort the post labels alphabetically
      postLabels = postLabels.sort()
    }
    postLabels = postLabels !== false ? postLabels.join(', ') : config.labels.none

    //  Homepage URL: homepageURL
    //            ID: postID
    //       Publish: postPublish
    //        Update: postUpdate
    //          Date: postDate
    //           URL: postURL
    //        Labels: postLabels
    //  Num Comments: postNumComments
    // Thumbnail URL: postThumbnailURL
    //   Author name: postAuthorName
    //    Author URL: postAuthorURL
    // Author Avatar: postAuthorAvatar
    //      Edit URL: postEditURL
    //         Title: postTitle
    //       Content: postContent

    /* Config
    var config = {
      containerID: 'id',

      content: {
        numchars: 'full'/number/0 to disable,
        title: {
          tag: 'h1/h2/h3/h4/h5/h6'
        },
        more: {
          active: true/false,
          text: 'Read more',
          style: 'btn btn-primary'
        }
      },
      author: {
        active: true/false,
        placement: 'header/footer',
        before: 'Posted by ',
        after: '',
        none: 'Anonymous',
        avatar: {
          active: true/false,
          size: '24'
        }
      },
      date: {
        active: true/false,
        placement: 'header/footer',
        before: 'Posted on ',
        after: '',
        monthNames: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
      },
      numComments: {
        active: true/false,
        placement: 'header/footer',
        before: 'Comment total: ',
        after: ''
      },
      labels: {
        active: true/false,
        placement: 'header/footer',
        before: 'Labels: ',
        after: '',
        none: 'Unlabelled'
      },
      thumbnail: {
        active: true/false,
        placement: 'top/bottom',
        size: '512',
        none: 'https://placehold.it/512/eee/777?text=NO+IMAGE+AVAILABLE'
      },
      group: {
        active: true/false
      },
      deck: {
        active: true/false
      },
      columns: {
        active: true/false
      },
      grid: {
        active: true/false,
        column: 'col-*-*'
      },
      classes: {
        card: 'Add class to .card',
        image: 'Add class to .card-img-*',
        content: 'Add class to .card-block'
      }
    }
    */


    // Card header
    var headerHtml = ''
    headerHtml += '<div class="card-header">'
    headerHtml += '<ul class="nav nav-inline">'
    if (config.author.active === true && config.author.placement === 'header') {
      if (config.author.avatar.active === true) {
        headerHtml += '<li class="nav-item">' + config.author.before + '<a class="nav-link" href="' + postAuthorURL + '" title="Author Avatar"><img src="' + postAuthorAvatar + '" alt="' + postAuthorName + '"></a> <a href="' + postAuthorURL + '" title="Author Profile">' + postAuthorName + '</a>' + config.author.after + '</li>'
      } else {
        headerHtml += '<li class="nav-item">' + config.author.before + '<a class="nav-link" href="' + postAuthorURL + '" title="Author Profile">' + postAuthorName + '</a>' + config.author.after + '</li>'
      }
    }
    if (config.date.active === true && config.date.placement === 'header') {
      headerHtml += '<li class="nav-item">' + config.date.before + '<time datetime="' + postPublish + '" title="' + postPublish + '">' + postDate + '</time>' + config.date.after + '</li>'
    }
    if (config.numComments.active === true && config.numComments.placement === 'header') {
      headerHtml += '<li class="nav-item">' + config.numComments.before + postNumComments + config.numComments.after + '</li>'
    }
    if (config.labels.active === true && config.labels.placement === 'header') {
      headerHtml += '<li class="nav-item">' + config.labels.before + postLabels + config.labels.after + '</li>'
    }
    headerHtml += '</ul>'
    headerHtml += '</div>'
    var header = headerHtml

    // Card footer
    var footerHtml = ''
    footerHtml += '<div class="card-footer">'
    footerHtml += '<ul class="nav nav-inline">'
    if (config.author.active === true && config.author.placement === 'footer') {
      if (config.author.avatar.active === true) {
        footerHtml += '<li class="nav-item">' + config.author.before + '<a class="nav-link" href="' + postAuthorURL + '" title="Author Avatar"><img src="' + postAuthorAvatar + '" alt="' + postAuthorName + '"></a> <a href="' + postAuthorURL + '" title="Author Profile">' + postAuthorName + '</a>' + config.author.after + '</li>'
      } else {
        footerHtml += '<li class="nav-item">' + config.author.before + '<a class="nav-link" href="' + postAuthorURL + '" title="Author Profile">' + postAuthorName + '</a>' + config.author.after + '</li>'
      }
    }
    if (config.date.active === true && config.date.placement === 'footer') {
      footerHtml += '<li class="nav-item">' + config.date.before + '<time datetime="' + postPublish + '" title="' + postPublish + '">' + postDate + '</time>' + config.date.after + '</li>'
    }
    if (config.numComments.active === true && config.numComments.placement === 'footer') {
      footerHtml += '<li class="nav-item">' + config.numComments.before + postNumComments + config.numComments.after + '</li>'
    }
    if (config.labels.active === true && config.labels.placement === 'footer') {
      footerHtml += '<li class="nav-item">' + config.labels.before + postLabels + config.labels.after + '</li>'
    }
    footerHtml += '</ul>'
    footerHtml += '</div>'
    var footer = footerHtml

    // Card content
    var contentHtml = ''
    contentHtml += '<div class="card-block ' + config.classes.content + '">'
    contentHtml += '<' + config.content.title.tag + ' class="card-title">'
    contentHtml += postTitle
    contentHtml += '</' + config.content.title.tag + '>'
    if (config.content.numchars !== 'full' && config.content.numchars !== 0) {
      var re = /<\S[^>]*>/g
      postContent = postContent.replace(re, '')
      if (postContent.length < config.content.numchars) {
        contentHtml += '<p class="card-text">'
        contentHtml += postContent
        contentHtml += '</p>'
      } else {
        contentHtml += '<p class="card-text">'
        postContent = postContent.substring(0, config.content.numchars)
        var quoteEnd = postContent.lastIndexOf(' ')
        postContent = postContent.substring(0, quoteEnd)
        contentHtml += postContent + '...'
        contentHtml += '</p>'
        if (config.content.more.active === true) {
          contentHtml += '<a class="' + config.content.more.style + '" href="' + postURL + '">' + config.content.more.text + '</a>'
        }
      }
    }
    if (config.content.numchars === 'full') {
      contentHtml += postContent
    }
    if (config.content.numchars === 0) {
      contentHtml += ''
    }
    contentHtml += '</div>'
    var content = contentHtml


    // Grid column' start
    if (config.grid.active === true) {
      html += '<div class="' + config.grid.column + '">'
    }

    // Base class' start
    html += '<article class="card ' + config.classes.card + '" id="' + postID + '">'

    // Header
    if (config.author.placement === 'header' || config.date.placement === 'header' || config.numComments.placement === 'header' || config.labels.placement === 'header') {
      html += header
    }

    // Without thumbnail
    if (config.thumbnail.active === false) {
      html += content
    }

    // Top image
    if (config.thumbnail.active === true && config.thumbnail.placement === 'top') {
      html += '<a href="' + postURL + '"><img class="card-img-top ' + config.classes.image + '" src="' + postThumbnailURL + '" alt="' + postTitle + '"></a>'
      html += content
    }

    // Bottom image
    if (config.thumbnail.active === true && config.thumbnail.placement === 'bottom') {
      html += content
      html += '<a href="' + postURL + '"><img class="card-img-bottom ' + config.classes.image + '" src="' + postThumbnailURL + '" alt="' + postTitle + '"></a>'
    }

    // Footer
    if (config.author.placement === 'footer' || config.date.placement === 'footer' || config.numComments.placement === 'footer' || config.labels.placement === 'footer') {
      html += footer
    }

    // Base class' end
    html += '</article>'

    // Grid column' end
    if (config.grid.active === true) {
      html += '</div>'
    }

  }

  // Card grid' end
  if (config.columns.active === true) {
    html += '</div>'
  }

  // Card columns' end
  if (config.grid.active === true) {
    html += '</div>'
  }

  // Card decks' end
  if (config.deck.active === true) {
    html += '</div>'
    html += '</div>'
  }

  // Card groups' end
  if (config.group.active === true) {
    html += '</div>'
  }

  // Show the generated data to the container ...
  container.innerHTML = html

}

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
