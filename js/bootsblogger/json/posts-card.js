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
