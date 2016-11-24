---
layout: docs
title: Posts - default
description: Menampilkan data JSON posting dan halaman statis menggunakan komponen posting (posts).
group: blogger-json-feeds
---

Menampilkan data JSON posting dan halaman statis menggunakan komponen [posting (posts)]({{ site.baseurl }}/components/posts/).

## Config

{% highlight html %}
<script>
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
</script>
{% endhighlight %}

## Function name

Nama fungsi `postsDefault`.

## Example

`group`, `columns`, dan `grid` pilih salah satu yang bernilai `true` atau semua `false`.

{% example html %}
<div class="" id="example-result-container">
  <div class="text-xs-center">Loading...</div>
</div>
<script>
var config = {
  containerID: 'example-result-container',

  clickable: {
    active: false
  },
  content: {
    numchars: 100,
    title: {
      tag: 'h3',
      style: 'post-title-link'
    },
    more: {
      active: true,
      text: 'Read more',
      style: 'btn btn-primary'
    }
  },
  author: {
    active: false,
    placement: '',
    before: '',
    after: '',
    none: '',
    avatar: {
      active: false,
      size: ''
    }
  },
  date: {
    active: true,
    placement: 'meta',
    before: '<i class="fa fa-clock-o"></i> ',
    after: '',
    monthNames: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
  },
  numComments: {
    active: false,
    placement: '',
    before: '',
    after: ''
  },
  labels: {
    active: false,
    placement: '',
    before: '',
    after: '',
    none: ''
  },
  thumbnail: {
    active: true,
    placement: 'top',
    size: '512',
    none: 'https://placehold.it/512/eee/777?text=NO+IMAGE+AVAILABLE',
    cover: {
      active: true,
      minheight: '150'
    }
  },
  group: {
    active: false
  },
  columns: {
    active: false
  },
  grid: {
    active: true,
    column: 'col-sm-4'
  },
  classes: {
    post: '',
    image: '',
    content: ''
  }
}
</script>
<script src="https://blogger.googleblog.com/feeds/posts/default?orderby=published&amp;start-index=1&amp;max-results=3&amp;alt=json-in-script&amp;callback=postsDefault"></script>
{% endexample %}
