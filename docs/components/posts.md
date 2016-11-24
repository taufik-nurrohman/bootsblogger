---
layout: docs
title: Posts
description: Bootsblogger menyediakan komponen untuk tampilan posting, dengan beragam tampilan, warna, dan fitur.
group: components
---

Bootsblogger menyediakan komponen untuk tampilan posting, dengan beragam tampilan, warna, dan fitur.

Sebelum Anda membaca dokumentasi ini, pastikan Anda sudah membaca dokumentasi [widget blog posts]({{ site.baseurl }}/core-template/blog-posts/) karena untuk menampilkan data posting menggunakan fungsi-fungsi yang ada dalam widget tersebut. 

## Contents

* Will be replaced with the ToC, excluding the "Contents" header
{:toc}

## Basic example

Gunakan `.post` sebagai kelas utama, dan di dalamnya bungkus konten seperti judul, isi posting, atau konten lainnya dengan `.post-content`.

<div class="bd-example">
  <div class="post">
    <div class="post-content">
      <h2 class="post-title">
        <a href="#">Post title</a>
      </h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...</p>
    </div>
  </div>
  <div class="post">
    <div class="post-content">
      <h2 class="post-title">
        <a href="#">Post title</a>
      </h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...</p>
    </div>
  </div>
</div><!-- /.bd-example -->

{% highlight html %}
<b:loop values='data:posts' var='post'>
  <article class='post' expr:id='"post-" + data:post.id' itemscope='itemscope' itemtype='http://schema.org/BlogPosting' role='article'>
    <!-- Content -->
    <div class='post-content'>
      <!-- Post title -->
      <b:if cond='data:post.title'>
        <h2 class='post-title' itemprop='name headline'>
          <a expr:href='data:post.url' expr:title='data:post.title' itemprop='url'><data:post.title/></a>
        </h2>
      </b:if>
      <!-- Post snippet -->
      <p itemprop='articleBody description'><data:post.snippet/></p>
    </div><!-- /.post-content -->
  </article><!-- /.post -->
</b:loop>
{% endhighlight %}

Dengan `.post-title-link`.

<div class="bd-example">
  <div class="post">
    <div class="post-content">
      <h2 class="post-title">
        <a class="post-title-link" href="#">Post title</a>
      </h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...</p>
    </div>
  </div>
  <div class="post">
    <div class="post-content">
      <h2 class="post-title">
        <a class="post-title-link" href="#">Post title</a>
      </h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...</p>
    </div>
  </div>
</div><!-- /.bd-example -->

{% highlight html %}
<b:loop values='data:posts' var='post'>
  <article class='post' expr:id='"post-" + data:post.id' itemscope='itemscope' itemtype='http://schema.org/BlogPosting' role='article'>
    <!-- Content -->
    <div class='post-content'>
      <!-- Post title -->
      <b:if cond='data:post.title'>
        <h2 class='post-title' itemprop='name headline'>
          <a class='post-title-link' expr:href='data:post.url' expr:title='data:post.title' itemprop='url'><data:post.title/></a>
        </h2>
      </b:if>
      <!-- Post snippet -->
      <p itemprop='articleBody description'><data:post.snippet/></p>
    </div><!-- /.post-content -->
  </article><!-- /.post -->
</b:loop>
{% endhighlight %}

## Metadata

Gunakan `.post-meta` dan tempatkan di dalam `.post-content`, untuk membuat list (daftar) gunakan `.post-meta-list`.

<div class="bd-example">
  <div class="post">
    <div class="post-content">
      <h2 class="post-title"><a class="post-title-link" href="#">Post title</a></h2>
      <div class="post-meta">
        <ul class="post-meta-list">
          <li><i class="fa fa-user"></i> <a href="#">Bootsblogger</a></li>
          <li><i class="fa fa-clock-o"></i> <time datetime="2016-04-21T13:42:00+07:00">Sep 9, 2015 7:00 PM</time></li>
          <li><i class="fa fa-comments"></i> <a href="#">5 Comments</a></li>
        </ul>
      </div>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...</p>
    </div><!-- /.post-content -->
  </div><!-- /.post -->
</div><!-- /.bd-example -->

{% highlight html %}
<b:loop values='data:posts' var='post'>
  <article class='post' expr:id='"post-" + data:post.id' itemscope='itemscope' itemtype='http://schema.org/BlogPosting' role='article'>
    <!-- Content -->
    <div class='post-content'>
      <!-- Post title -->
      <b:if cond='data:post.title'>
        <h2 class='post-title' itemprop='name headline'>
          <a class='post-title-link' expr:href='data:post.url' itemprop='url'><data:post.title/></a>
        </h2>
      </b:if>
      <!-- Metadata -->
      <b:if cond='data:top.showAuthor or data:top.showTimestamp or data:post.allowComments'>
        <div class='post-meta'>
          <ul class='post-meta-list'>
            <!-- Author -->
            <b:if cond='data:top.showAuthor'>
              <li>
                <b:include name='include-author'/>
              </li>
            </b:if>
            <!-- Timestamp -->
            <b:if cond='data:top.showTimestamp'>
              <li>
                <b:include name='include-timestamp'/>
              </li>
            </b:if>
            <!-- Num comments -->
            <b:if cond='data:post.allowComments'>
              <li>
                <b:include name='include-num-comments'/>
              </li>
            </b:if>
          </ul>
        </div><!-- /.post-meta -->
      </b:if>
      <!-- Post snippet -->
      <p itemprop='articleBody description'><data:post.snippet/></p>
    </div><!-- /.post-content -->
  </article><!-- /.post -->
</b:loop>
{% endhighlight %}

## Thumbnails

Anda dapat membuat posting dengan thumbnail dalam enam variasi, yaitu:

- `.post-img-only` : hanya thumbnail.
- `.post-img-top` : thumbnail berada di atas tubuh posting.
- `.post-img-bottom` : thumbnail berada di bawah tubuh posting.
- `.post-img-left` : thumbnail berada di sebelah kiri dan tubuh posting berada di sebelah kanan.
- `.post-img-right` : thumbnail berada di sebelah kanan dan tubuh posting berada di sebelah kiri.
- `.post-img-overlay` : thumbnail berada di belakang tubuh posting dengan efek transparan.

Thumbnail horizontal hanya bekerja pada perangkat kecil ke atas (&ge;576px).

**Catatan:** perhatikan penempatan antara thumbnail dan konten (`.post-img-*` dan `.post-content`).

### Image only

Gunakan `.post-img-only`.

<div class="bd-example">
  <div class="post">
    <div class="post-img-only">
      <a href="#"><img data-src="holder.js/100px350/?auto=yes&text=Image" alt="Image"></a>
    </div>
  </div>
</div><!-- /.bd-example -->

{% highlight html %}
<b:loop values='data:posts' var='post'>
  <article class='post' expr:id='"post-" + data:post.id' itemscope='itemscope' itemtype='http://schema.org/BlogPosting' role='article'>
    <!-- Image -->
    <div class='post-img-only' itemprop='thumbnail'>
      <b:include name='include-thumbnail'/>
    </div><!-- /.post-img-only -->
  </article><!-- /.post -->
</b:loop>
{% endhighlight %}

### Top image

Gunakan `.post-img-top`.

<div class="bd-example">
  <div class="post">
    <div class="post-img-top">
      <a href="#"><img data-src="holder.js/100px350/?auto=yes&text=Image" alt="Image"/></a>
    </div>
    <div class="post-content">
      <h2 class="post-title"><a class="post-title-link" href="#">Post title</a></h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...</p>
      <p><a class="btn btn-primary" href="#">Read more</a></p>
    </div>
  </div>
</div><!-- /.bd-example -->

{% highlight html %}
<b:loop values='data:posts' var='post'>
  <article class='post' expr:id='"post-" + data:post.id' itemscope='itemscope' itemtype='http://schema.org/BlogPosting' role='article'>
    <!-- Image -->
    <div class='post-img-top' itemprop='thumbnail'>
      <b:include name='include-thumbnail'/>
    </div><!-- /.post-img-top -->
    <!-- Content -->
    <div class='post-content'>
      <!-- Post title -->
      <b:if cond='data:post.title'>
        <h2 class='post-title' itemprop='name headline'>
          <a class='post-title-link' expr:href='data:post.url' itemprop='url'><data:post.title/></a>
        </h2>
      </b:if>
      <!-- Post snippet -->
      <p itemprop='articleBody description'><data:post.snippet/></p>
      <p><a class='btn btn-primary' expr:href='data:post.url' itemprop='url' role='button'>Read more</a></p>
    </div><!-- /.post-content -->
  </article><!-- /.post -->
</b:loop>
{% endhighlight %}

### Bottom image

Gunakan `.post-img-bottom`.

<div class="bd-example">
  <div class="post">
    <div class="post-content">
      <h2 class="post-title"><a class="post-title-link" href="#">Post title</a></h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...</p>
      <p><a class="btn btn-primary" href="#">Read more</a></p>
    </div>
    <div class="post-img-bottom">
      <a href="#"><img data-src="holder.js/100px350/?auto=yes&text=Image" alt="Image"/></a>
    </div>
  </div>
</div><!-- /.bd-example -->

{% highlight html %}
<b:loop values='data:posts' var='post'>
  <article class='post' expr:id='"post-" + data:post.id' itemscope='itemscope' itemtype='http://schema.org/BlogPosting' role='article'>
    <!-- Content -->
    <div class='post-content'>
      <!-- Post title -->
      <b:if cond='data:post.title'>
        <h2 class='post-title' itemprop='name headline'>
          <a class='post-title-link' expr:href='data:post.url' itemprop='url'><data:post.title/></a>
        </h2>
      </b:if>
      <!-- Post snippet -->
      <p itemprop='articleBody description'><data:post.snippet/></p>
      <p><a class='btn btn-primary' expr:href='data:post.url' itemprop='url' role='button'>Read more</a></p>
    </div><!-- /.post-content -->
    <!-- Image -->
    <div class='post-img-bottom' itemprop='thumbnail'>
      <b:include name='include-thumbnail'/>
    </div><!-- /.post-img-bottom -->
  </article><!-- /.post -->
</b:loop>
{% endhighlight %}

### Left image

Gunakan `.post-img-left` dan bungkus thumbnail dan konten dengan `.post-horizontal`.

<div class="bd-example">
  <div class="post">
    <div class="post-horizontal">
      <div class="post-img-left">
        <a href="#"><img data-src="holder.js/100px180/?auto=yes&text=Image" alt="Image"/></a>
      </div>
      <div class="post-content">
        <h2 class="post-title"><a class="post-title-link" href="#">Post title</a></h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...</p>
        <p><a class="btn btn-primary" href="#">Read more</a></p>
      </div>
    </div>
  </div>
</div><!-- /.bd-example -->

{% highlight html %}
<b:loop values='data:posts' var='post'>
  <article class='post' expr:id='"post-" + data:post.id' itemscope='itemscope' itemtype='http://schema.org/BlogPosting' role='article'>
    <div class='post-horizontal'>
      <!-- Image -->
      <div class='post-img-left' itemprop='thumbnail'>
        <b:include name='include-thumbnail'/>
      </div><!-- /.post-img-left -->
      <!-- Content -->
      <div class='post-content'>
        <!-- Post title -->
        <b:if cond='data:post.title'>
          <h2 class='post-title' itemprop='name headline'>
            <a class='post-title-link' expr:href='data:post.url' itemprop='url'><data:post.title/></a>
          </h2>
        </b:if>
        <!-- Post snippet -->
        <p itemprop='articleBody description'><data:post.snippet/></p>
        <p><a class='btn btn-primary' expr:href='data:post.url' itemprop='url' role='button'>Read more</a></p>
      </div><!-- /.post-content -->
    </div><!-- /.post-horizontal -->
  </article><!-- /.post -->
</b:loop>
{% endhighlight %}

### Right image

Gunakan `.post-img-right` dan bungkus thumbnail dan konten dengan `.post-horizontal`.

<div class="bd-example">
  <div class="post">
    <div class="post-horizontal">
      <div class="post-content">
        <h2 class="post-title"><a class="post-title-link" href="#">Post title</a></h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...</p>
        <p><a class="btn btn-primary" href="#">Read more</a></p>
      </div>
      <div class="post-img-right">
        <a href="#"><img data-src="holder.js/100px180/?auto=yes&text=Image" alt="Image"/></a>
      </div>
    </div>
  </div>
</div><!-- /.bd-example -->

{% highlight html %}
<b:loop values='data:posts' var='post'>
  <article class='post' expr:id='"post-" + data:post.id' itemscope='itemscope' itemtype='http://schema.org/BlogPosting' role='article'>
    <div class='post-horizontal'>
      <!-- Content -->
      <div class='post-content'>
        <!-- Post title -->
        <b:if cond='data:post.title'>
          <h2 class='post-title' itemprop='name headline'>
            <a class='post-title-link' expr:href='data:post.url' itemprop='url'><data:post.title/></a>
          </h2>
        </b:if>
        <!-- Post snippet -->
        <p itemprop='articleBody description'><data:post.snippet/></p>
        <p><a class='btn btn-primary' expr:href='data:post.url' itemprop='url' role='button'>Read more</a></p>
      </div><!-- /.post-content -->
      <!-- Image -->
      <div class='post-img-right' itemprop='thumbnail'>
        <b:include name='include-thumbnail'/>
      </div><!-- /.post-img-right -->
    </div><!-- /.post-horizontal -->
  </article><!-- /.post -->
</b:loop>
{% endhighlight %}

### Image overlays

Gunakan `.post-img-overlay` dan bungkus thumbnail dan konten dengan `.post-overlay`. Membutuhkan penggunaan `.post-inverse` untuk mengubah teks menjadi berwarna putih.

<div class="bd-example">
  <div class="post post-inverse">
    <div class="post-overlay">
      <div class="post-img-overlay">
        <a href="#"><img data-src="holder.js/100px350/?auto=yes&text=Image" alt="Image"/></a>
      </div>
      <div class="post-content">
        <h2 class="post-title"><a class="post-title-link" href="#">Post title</a></h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...</p>
        <p><a class="btn btn-primary" href="#">Read more</a></p>
      </div>
    </div>
  </div>
</div><!-- /.bd-example -->

{% highlight html %}
<b:loop values='data:posts' var='post'>
  <article class='post post-inverse' expr:id='"post-" + data:post.id' itemscope='itemscope' itemtype='http://schema.org/BlogPosting' role='article'>
    <div class='post-overlay'>
      <!-- Image -->
      <div class='post-img-overlay' itemprop='thumbnail'>
        <b:include name='include-thumbnail'/>
      </div><!-- /.post-img-overlay -->
      <!-- Content -->
      <div class='post-content'>
        <!-- Post title -->
        <b:if cond='data:post.title'>
          <h2 class='post-title' itemprop='name headline'>
            <a class='post-title-link' expr:href='data:post.url' itemprop='url'><data:post.title/></a>
          </h2>
        </b:if>
        <!-- Post snippet -->
        <p itemprop='articleBody description'><data:post.snippet/></p>
        <p><a class='btn btn-primary' expr:href='data:post.url' itemprop='url' role='button'>Read more</a></p>
      </div><!-- /.post-content -->
    </div><!-- /.post-overlay -->
  </article><!-- /.post -->
</b:loop>
{% endhighlight %}

## Header and footer

Gunakan `.post-header` dan `.post-footer`. Tempatkan header pada posisi pertama di dalam `.post` dan footer pada posisi terakhir. Untuk membuat list (daftar) gunakan `.post-header-list` dan `.post-footer-list`.

### Header and footer: basic example

<div class="bd-example">            
  <div class="post">
    <div class="post-header">
      <ul class="post-header-list">
        <li><i class="fa fa-user"></i> <a href="#">Bootsblogger</a></li>
        <li><i class="fa fa-clock-o"></i> <time datetime="2016-04-21T13:42:00+07:00">Sep 9, 2015 7:00 PM</time></li>
        <li><i class="fa fa-comments"></i> <a href="#">5 Comments</a></li>
      </ul>
    </div>
    <div class="post-content">
      <h2 class="post-title">
        <a class="post-title-link" href="#">Post title</a>
      </h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...</p>
    </div>
    <div class="post-footer"><i class="fa fa-tags"></i> <a href="#">Label1</a>, <a href="#">Label2</a></div>
  </div>
</div><!-- /.bd-example -->

{% highlight html %}
<b:loop values='data:posts' var='post'>
  <article class='post' expr:id='"post-" + data:post.id' itemscope='itemscope' itemtype='http://schema.org/BlogPosting' role='article'>
    <!-- Header -->
    <b:if cond='data:top.showAuthor or data:top.showTimestamp or data:post.allowComments'>
      <header class='post-header'>
        <ul class='post-header-list'>
          <!-- Author -->
          <b:if cond='data:top.showAuthor'>
            <li>
              <b:include name='include-author'/>
            </li>
          </b:if>
          <!-- Timestamp -->
          <b:if cond='data:top.showTimestamp'>
            <li>
              <b:include name='include-timestamp'/>
            </li>
          </b:if>
          <!-- Num comments -->
          <b:if cond='data:post.allowComments'>
            <li>
              <b:include name='include-num-comments'/>
            </li>
          </b:if>
        </ul>
      </header><!-- /.post-header -->
    </b:if>
    <!-- Content -->
    <div class='post-content'>
      <!-- Post title -->
      <b:if cond='data:post.title'>
        <h2 class='post-title' itemprop='name headline'>
          <a class='post-title-link' expr:href='data:post.url' expr:title='data:post.title' itemprop='url'><data:post.title/></a>
        </h2>
      </b:if>
      <!-- Post snippet -->
      <p itemprop='articleBody description'><data:post.snippet/></p>
    </div><!-- /.post-content -->
    <!-- Footer -->
    <b:if cond='data:top.showPostLabels'>
      <footer class='post-footer'>
        <b:include name='include-labels'/>
      </footer><!-- /.post-footer -->
    </b:if>
  </article><!-- /.post -->
</b:loop>
{% endhighlight %}

### Header and footer: image only

<div class="bd-example">
  <div class="post">
    <div class="post-header">
      <ul class="post-header-list">
        <li><i class="fa fa-user"></i> <a href="#">Bootsblogger</a></li>
        <li><i class="fa fa-clock-o"></i> <time datetime="2016-04-21T13:42:00+07:00">Sep 9, 2015 7:00 PM</time></li>
        <li><i class="fa fa-comments"></i> <a href="#">5 Comments</a></li>
      </ul>
    </div>
    <div class="post-img-only">
      <a href="#"><img data-src="holder.js/100px350/?auto=yes&text=Image" alt="Image"></a>
    </div>
    <div class="post-footer"><i class="fa fa-tags"></i> <a href="#">Label1</a>, <a href="#">Label2</a></div>
  </div>
</div><!-- /.bd-example -->

{% highlight html %}
<b:loop values='data:posts' var='post'>
  <article class='post' expr:id='"post-" + data:post.id' itemscope='itemscope' itemtype='http://schema.org/BlogPosting' role='article'>
    <!-- Header -->
    <b:if cond='data:top.showAuthor or data:top.showTimestamp or data:post.allowComments'>
      <header class='post-header'>
        <ul class='post-header-list'>
          <!-- Author -->
          <b:if cond='data:top.showAuthor'>
            <li>
              <b:include name='include-author'/>
            </li>
          </b:if>
          <!-- Timestamp -->
          <b:if cond='data:top.showTimestamp'>
            <li>
              <b:include name='include-timestamp'/>
            </li>
          </b:if>
          <!-- Num comments -->
          <b:if cond='data:post.allowComments'>
            <li>
              <b:include name='include-num-comments'/>
            </li>
          </b:if>
        </ul>
      </header><!-- /.post-header -->
    </b:if>
    <!-- Image -->
    <div class='post-img-only' itemprop='thumbnail'>
      <b:include name='include-thumbnail'/>
    </div><!-- /.post-img-only -->
    <!-- Footer -->
    <b:if cond='data:top.showPostLabels'>
      <footer class='post-footer'>
        <b:include name='include-labels'/>
      </footer><!-- /.post-footer -->
    </b:if>
  </article><!-- /.post -->
</b:loop>
{% endhighlight %}

### Header and footer: top image

<div class="bd-example">
  <div class="post">
    <div class="post-header">
      <ul class="post-header-list">
        <li><i class="fa fa-user"></i> <a href="#">Bootsblogger</a></li>
        <li><i class="fa fa-clock-o"></i> <time datetime="2016-04-21T13:42:00+07:00">Sep 9, 2015 7:00 PM</time></li>
        <li><i class="fa fa-comments"></i> <a href="#">5 Comments</a></li>
      </ul>
    </div>
    <div class="post-img-top">
      <a href="#"><img data-src="holder.js/100px350/?auto=yes&text=Image" alt="Image"/></a>
    </div>
    <div class="post-content">
      <h2 class="post-title"><a class="post-title-link" href="#">Post title</a></h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...</p>
      <p><a class="btn btn-primary" href="#">Read more</a></p>
    </div>
    <div class="post-footer"><i class="fa fa-tags"></i> <a href="#">Label1</a>, <a href="#">Label2</a></div>
  </div>
</div><!-- /.bd-example -->

{% highlight html %}
<b:loop values='data:posts' var='post'>
  <article class='post' expr:id='"post-" + data:post.id' itemscope='itemscope' itemtype='http://schema.org/BlogPosting' role='article'>
    <!-- Header -->
    <b:if cond='data:top.showAuthor or data:top.showTimestamp or data:post.allowComments'>
      <header class='post-header'>
        <ul class='post-header-list'>
          <!-- Author -->
          <b:if cond='data:top.showAuthor'>
            <li>
              <b:include name='include-author'/>
            </li>
          </b:if>
          <!-- Timestamp -->
          <b:if cond='data:top.showTimestamp'>
            <li>
              <b:include name='include-timestamp'/>
            </li>
          </b:if>
          <!-- Num comments -->
          <b:if cond='data:post.allowComments'>
            <li>
              <b:include name='include-num-comments'/>
            </li>
          </b:if>
        </ul>
      </header><!-- /.post-header -->
    </b:if>
    <!-- Image -->
    <div class='post-img-top' itemprop='thumbnail'>
      <b:include name='include-thumbnail'/>
    </div><!-- /.post-img-top -->
    <!-- Content -->
    <div class='post-content'>
      <!-- Post title -->
      <b:if cond='data:post.title'>
        <h2 class='post-title' itemprop='name headline'>
          <a class='post-title-link' expr:href='data:post.url' itemprop='url'><data:post.title/></a>
        </h2>
      </b:if>
      <!-- Post snippet -->
      <p itemprop='articleBody description'><data:post.snippet/></p>
      <p><a class='btn btn-primary' expr:href='data:post.url' itemprop='url' role='button'>Read more</a></p>
    </div><!-- /.post-content -->
    <!-- Footer -->
    <b:if cond='data:top.showPostLabels'>
      <footer class='post-footer'>
        <b:include name='include-labels'/>
      </footer><!-- /.post-footer -->
    </b:if>
  </article><!-- /.post -->
</b:loop>
{% endhighlight %}

### Header and footer: bottom image

<div class="bd-example">
  <div class="post">
    <div class="post-header">
      <ul class="post-header-list">
        <li><i class="fa fa-user"></i> <a href="#">Bootsblogger</a></li>
        <li><i class="fa fa-clock-o"></i> <time datetime="2016-04-21T13:42:00+07:00">Sep 9, 2015 7:00 PM</time></li>
        <li><i class="fa fa-comments"></i> <a href="#">5 Comments</a></li>
      </ul>
    </div>
    <div class="post-content">
      <h2 class="post-title"><a class="post-title-link" href="#">Post title</a></h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...</p>
      <p><a class="btn btn-primary" href="#">Read more</a></p>
    </div>
    <div class="post-img-bottom">
      <a href="#"><img data-src="holder.js/100px350/?auto=yes&text=Image" alt="Image"/></a>
    </div>
    <div class="post-footer"><i class="fa fa-tags"></i> <a href="#">Label1</a>, <a href="#">Label2</a></div>
  </div>
</div><!-- /.bd-example -->

{% highlight html %}
<b:loop values='data:posts' var='post'>
  <article class='post' expr:id='"post-" + data:post.id' itemscope='itemscope' itemtype='http://schema.org/BlogPosting' role='article'>
    <!-- Header -->
    <b:if cond='data:top.showAuthor or data:top.showTimestamp or data:post.allowComments'>
      <header class='post-header'>
        <ul class='post-header-list'>
          <!-- Author -->
          <b:if cond='data:top.showAuthor'>
            <li>
              <b:include name='include-author'/>
            </li>
          </b:if>
          <!-- Timestamp -->
          <b:if cond='data:top.showTimestamp'>
            <li>
              <b:include name='include-timestamp'/>
            </li>
          </b:if>
          <!-- Num comments -->
          <b:if cond='data:post.allowComments'>
            <li>
              <b:include name='include-num-comments'/>
            </li>
          </b:if>
        </ul>
      </header><!-- /.post-header -->
    </b:if>
    <!-- Content -->
    <div class='post-content'>
      <!-- Post title -->
      <b:if cond='data:post.title'>
        <h2 class='post-title' itemprop='name headline'>
          <a class='post-title-link' expr:href='data:post.url' itemprop='url'><data:post.title/></a>
        </h2>
      </b:if>
      <!-- Post snippet -->
      <p itemprop='articleBody description'><data:post.snippet/></p>
      <p><a class='btn btn-primary' expr:href='data:post.url' itemprop='url' role='button'>Read more</a></p>
    </div><!-- /.post-content -->
    <!-- Image -->
    <div class='post-img-bottom' itemprop='thumbnail'>
      <b:include name='include-thumbnail'/>
    </div><!-- /.post-img-bottom -->
    <!-- Footer -->
    <b:if cond='data:top.showPostLabels'>
      <footer class='post-footer'>
        <b:include name='include-labels'/>
      </footer><!-- /.post-footer -->
    </b:if>
  </article><!-- /.post -->
</b:loop>
{% endhighlight %}

### Header and footer: left image

<div class="bd-example">
  <div class="post">
    <div class="post-header">
      <ul class="post-header-list">
        <li><i class="fa fa-user"></i> <a href="#">Bootsblogger</a></li>
        <li><i class="fa fa-clock-o"></i> <time datetime="2016-04-21T13:42:00+07:00">Sep 9, 2015 7:00 PM</time></li>
        <li><i class="fa fa-comments"></i> <a href="#">5 Comments</a></li>
      </ul>
    </div>
    <div class="post-horizontal">
      <div class="post-img-left">
        <a href="#"><img data-src="holder.js/100px180/?auto=yes&text=Image" alt="Image"/></a>
      </div>
      <div class="post-content">
        <h2 class="post-title"><a class="post-title-link" href="#">Post title</a></h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...</p>
        <p><a class="btn btn-primary" href="#">Read more</a></p>
      </div>
    </div>
    <div class="post-footer"><i class="fa fa-tags"></i> <a href="#">Label1</a>, <a href="#">Label2</a></div>
  </div>
</div><!-- /.bd-example -->

{% highlight html %}
<b:loop values='data:posts' var='post'>
  <article class='post' expr:id='"post-" + data:post.id' itemscope='itemscope' itemtype='http://schema.org/BlogPosting' role='article'>
    <!-- Header -->
    <b:if cond='data:top.showAuthor or data:top.showTimestamp or data:post.allowComments'>
      <header class='post-header'>
        <ul class='post-header-list'>
          <!-- Author -->
          <b:if cond='data:top.showAuthor'>
            <li>
              <b:include name='include-author'/>
            </li>
          </b:if>
          <!-- Timestamp -->
          <b:if cond='data:top.showTimestamp'>
            <li>
              <b:include name='include-timestamp'/>
            </li>
          </b:if>
          <!-- Num comments -->
          <b:if cond='data:post.allowComments'>
            <li>
              <b:include name='include-num-comments'/>
            </li>
          </b:if>
        </ul>
      </header><!-- /.post-header -->
    </b:if>
    <div class='post-horizontal'>
      <!-- Image -->
      <div class='post-img-left' itemprop='thumbnail'>
        <b:include name='include-thumbnail'/>
      </div><!-- /.post-img-left -->
      <!-- Content -->
      <div class='post-content'>
        <!-- Post title -->
        <b:if cond='data:post.title'>
          <h2 class='post-title' itemprop='name headline'>
            <a class='post-title-link' expr:href='data:post.url' itemprop='url'><data:post.title/></a>
          </h2>
        </b:if>
        <!-- Post snippet -->
        <p itemprop='articleBody description'><data:post.snippet/></p>
        <p><a class='btn btn-primary' expr:href='data:post.url' itemprop='url' role='button'>Read more</a></p>
      </div><!-- /.post-content -->
    </div><!-- /.post-horizontal -->
    <!-- Footer -->
    <b:if cond='data:top.showPostLabels'>
      <footer class='post-footer'>
        <b:include name='include-labels'/>
      </footer><!-- /.post-footer -->
    </b:if>
  </article><!-- /.post -->
</b:loop>
{% endhighlight %}

### Header and footer: right image

<div class="bd-example">
  <div class="post">
    <div class="post-header">
      <ul class="post-header-list">
        <li><i class="fa fa-user"></i> <a href="#">Bootsblogger</a></li>
        <li><i class="fa fa-clock-o"></i> <time datetime="2016-04-21T13:42:00+07:00">Sep 9, 2015 7:00 PM</time></li>
        <li><i class="fa fa-comments"></i> <a href="#">5 Comments</a></li>
      </ul>
    </div>
    <div class="post-horizontal">
      <div class="post-content">
        <h2 class="post-title"><a class="post-title-link" href="#">Post title</a></h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...</p>
        <p><a class="btn btn-primary" href="#">Read more</a></p>
      </div>
      <div class="post-img-right">
        <a href="#"><img data-src="holder.js/100px180/?auto=yes&text=Image" alt="Image"/></a>
      </div>
    </div>
    <div class="post-footer"><i class="fa fa-tags"></i> <a href="#">Label1</a>, <a href="#">Label2</a></div>
  </div>
</div><!-- /.bd-example -->

{% highlight html %}
<b:loop values='data:posts' var='post'>
  <article class='post' expr:id='"post-" + data:post.id' itemscope='itemscope' itemtype='http://schema.org/BlogPosting' role='article'>
    <!-- Header -->
    <b:if cond='data:top.showAuthor or data:top.showTimestamp or data:post.allowComments'>
      <header class='post-header'>
        <ul class='post-header-list'>
          <!-- Author -->
          <b:if cond='data:top.showAuthor'>
            <li>
              <b:include name='include-author'/>
            </li>
          </b:if>
          <!-- Timestamp -->
          <b:if cond='data:top.showTimestamp'>
            <li>
              <b:include name='include-timestamp'/>
            </li>
          </b:if>
          <!-- Num comments -->
          <b:if cond='data:post.allowComments'>
            <li>
              <b:include name='include-num-comments'/>
            </li>
          </b:if>
        </ul>
      </header><!-- /.post-header -->
    </b:if>
    <div class='post-horizontal'>
      <!-- Content -->
      <div class='post-content'>
        <!-- Post title -->
        <b:if cond='data:post.title'>
          <h2 class='post-title' itemprop='name headline'>
            <a class='post-title-link' expr:href='data:post.url' itemprop='url'><data:post.title/></a>
          </h2>
        </b:if>
        <!-- Post snippet -->
        <p itemprop='articleBody description'><data:post.snippet/></p>
        <p><a class='btn btn-primary' expr:href='data:post.url' itemprop='url' role='button'>Read more</a></p>
      </div><!-- /.post-content -->
      <!-- Image -->
      <div class='post-img-right' itemprop='thumbnail'>
        <b:include name='include-thumbnail'/>
      </div><!-- /.post-img-right -->
    </div><!-- /.post-horizontal -->
    <!-- Footer -->
    <b:if cond='data:top.showPostLabels'>
      <footer class='post-footer'>
        <b:include name='include-labels'/>
      </footer><!-- /.post-footer -->
    </b:if>
  </article><!-- /.post -->
</b:loop>
{% endhighlight %}

### Header and footer: image overlays

<div class="bd-example">
  <div class="post post-inverse">
    <div class="post-header">
      <ul class="post-header-list">
        <li><i class="fa fa-user"></i> <a href="#">Bootsblogger</a></li>
        <li><i class="fa fa-clock-o"></i> <time datetime="2016-04-21T13:42:00+07:00">Sep 9, 2015 7:00 PM</time></li>
        <li><i class="fa fa-comments"></i> <a href="#">5 Comments</a></li>
      </ul>
    </div>
    <div class="post-overlay">
      <div class="post-img-overlay">
        <a href="#"><img data-src="holder.js/100px350/?auto=yes&text=Image" alt="Image"/></a>
      </div>
      <div class="post-content">
        <h2 class="post-title"><a class="post-title-link" href="#">Post title</a></h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...</p>
        <p><a class="btn btn-primary" href="#">Read more</a></p>
      </div>
    </div>
    <div class="post-footer"><i class="fa fa-tags"></i> <a href="#">Label1</a>, <a href="#">Label2</a></div>
  </div>
</div><!-- /.bd-example -->

{% highlight html %}
<b:loop values='data:posts' var='post'>
  <article class='post' expr:id='"post-" + data:post.id' itemscope='itemscope' itemtype='http://schema.org/BlogPosting' role='article'>
    <!-- Header -->
    <b:if cond='data:top.showAuthor or data:top.showTimestamp or data:post.allowComments'>
      <header class='post-header'>
        <ul class='post-header-list'>
          <!-- Author -->
          <b:if cond='data:top.showAuthor'>
            <li>
              <b:include name='include-author'/>
            </li>
          </b:if>
          <!-- Timestamp -->
          <b:if cond='data:top.showTimestamp'>
            <li>
              <b:include name='include-timestamp'/>
            </li>
          </b:if>
          <!-- Num comments -->
          <b:if cond='data:post.allowComments'>
            <li>
              <b:include name='include-num-comments'/>
            </li>
          </b:if>
        </ul>
      </header><!-- /.post-header -->
    </b:if>
    <div class='post-overlay'>
      <!-- Image -->
      <div class='post-img-overlay' itemprop='thumbnail'>
        <b:include name='include-thumbnail'/>
      </div><!-- /.post-img-overlay -->
      <!-- Content -->
      <div class='post-content'>
        <!-- Post title -->
        <b:if cond='data:post.title'>
          <h2 class='post-title' itemprop='name headline'>
            <a class='post-title-link' expr:href='data:post.url' itemprop='url'><data:post.title/></a>
          </h2>
        </b:if>
        <!-- Post snippet -->
        <p itemprop='articleBody description'><data:post.snippet/></p>
        <p><a class='btn btn-primary' expr:href='data:post.url' itemprop='url' role='button'>Read more</a></p>
      </div><!-- /.post-content -->
    </div><!-- /.post-overlay -->
    <!-- Footer -->
    <b:if cond='data:top.showPostLabels'>
      <footer class='post-footer'>
        <b:include name='include-labels'/>
      </footer><!-- /.post-footer -->
    </b:if>
  </article><!-- /.post -->
</b:loop>
{% endhighlight %}

## Cover image

Tambahkan `.post-img-cover` ke `.post-img-{only, top, bottom, left, right, overlay}` untuk menampilkan gambar dengan `background-image` dan `background-size: cover;`.

### Cover image: image only

<div class="bd-example">
  <div class="post">
    <div class="post-img-only post-img-cover holderjs" style="min-height: 350px;" data-background-src="?holder.js/500x250/?text=Image"></div>
  </div>
</div><!-- /.bd-example -->

{% highlight html %}
<b:loop values='data:posts' var='post'>
  <article class='post' expr:id='"post-" + data:post.id' itemscope='itemscope' itemtype='http://schema.org/BlogPosting' role='article'>
    <!-- Image -->
    <b:if cond='data:post.firstImageUrl'>
      <div class='post-img-only post-img-cover' expr:style='&quot;min-height: 350px; background-image: url(&quot; + data:post.firstImageUrl + &quot;);&quot;'></div><!-- /.post-img-only -->
    <b:else/>
      <!-- Default no image -->
      <div class='post-img-only post-img-cover' style='min-height: 350px; background-image: url(https://placehold.it/600x400/eee/777?text=NO+IMAGE+AVAILABLE);'></div><!-- /.post-img-only -->
    </b:if>
  </article><!-- /.post -->
</b:loop>
{% endhighlight %}

### Cover image: top image

<div class="bd-example">
  <div class="post">
    <div class="post-img-top post-img-cover holderjs" style="min-height: 350px;" data-background-src="?holder.js/500x250/?text=Image"></div>
    <div class="post-content">
      <h2 class="post-title"><a class="post-title-link" href="#">Post title</a></h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...</p>
      <p><a class="btn btn-primary" href="#">Read more</a></p>
    </div>
  </div>
</div><!-- /.bd-example -->

{% highlight html %}
<b:loop values='data:posts' var='post'>
  <article class='post' expr:id='"post-" + data:post.id' itemscope='itemscope' itemtype='http://schema.org/BlogPosting' role='article'>
    <!-- Image -->
    <b:if cond='data:post.firstImageUrl'>
      <div class='post-img-top post-img-cover' expr:style='&quot;min-height: 350px; background-image: url(&quot; + data:post.firstImageUrl + &quot;);&quot;'></div><!-- /.post-img-top -->
    <b:else/>
      <!-- Default no image -->
      <div class='post-img-top post-img-cover' style='min-height: 350px; background-image: url(https://placehold.it/600x400/eee/777?text=NO+IMAGE+AVAILABLE);'></div><!-- /.post-img-top -->
    </b:if>
    <!-- Content -->
    <div class='post-content'>
      <!-- Post title -->
      <b:if cond='data:post.title'>
        <h2 class='post-title' itemprop='name headline'>
          <a class='post-title-link' expr:href='data:post.url' itemprop='url'><data:post.title/></a>
        </h2>
      </b:if>
      <!-- Post snippet -->
      <p itemprop='articleBody description'><data:post.snippet/></p>
      <p><a class='btn btn-primary' expr:href='data:post.url' itemprop='url' role='button'>Read more</a></p>
    </div><!-- /.post-content -->
  </article><!-- /.post -->
</b:loop>
{% endhighlight %}

### Cover image: bottom image

<div class="bd-example">
  <div class="post">
    <div class="post-content">
      <h2 class="post-title"><a class="post-title-link" href="#">Post title</a></h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...</p>
      <p><a class="btn btn-primary" href="#">Read more</a></p>
    </div>
    <div class="post-img-bottom post-img-cover holderjs" style="min-height: 350px;" data-background-src="?holder.js/500x250/?text=Image"></div>
  </div>
</div><!-- /.bd-example -->

{% highlight html %}
<b:loop values='data:posts' var='post'>
  <article class='post' expr:id='"post-" + data:post.id' itemscope='itemscope' itemtype='http://schema.org/BlogPosting' role='article'>
    <!-- Content -->
    <div class='post-content'>
      <!-- Post title -->
      <b:if cond='data:post.title'>
        <h2 class='post-title' itemprop='name headline'>
          <a class='post-title-link' expr:href='data:post.url' itemprop='url'><data:post.title/></a>
        </h2>
      </b:if>
      <!-- Post snippet -->
      <p itemprop='articleBody description'><data:post.snippet/></p>
      <p><a class='btn btn-primary' expr:href='data:post.url' itemprop='url' role='button'>Read more</a></p>
    </div><!-- /.post-content -->
    <!-- Image -->
    <b:if cond='data:post.firstImageUrl'>
      <div class='post-img-bottom post-img-cover' expr:style='&quot;min-height: 350px; background-image: url(&quot; + data:post.firstImageUrl + &quot;);&quot;'></div><!-- /.post-img-bottom -->
    <b:else/>
      <!-- Default no image -->
      <div class='post-img-bottom post-img-cover' style='min-height: 350px; background-image: url(https://placehold.it/600x400/eee/777?text=NO+IMAGE+AVAILABLE);'></div><!-- /.post-img-bottom -->
    </b:if>
  </article><!-- /.post -->
</b:loop>
{% endhighlight %}

### Cover image: left image

<div class="bd-example">
  <div class="post">
    <div class="post-horizontal">
      <div class="post-img-left post-img-cover holderjs" style="min-height: 150px;" data-background-src="?holder.js/500x250/?text=Image"></div>
      <div class="post-content">
        <h2 class="post-title"><a class="post-title-link" href="#">Post title</a></h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...</p>
        <p><a class="btn btn-primary" href="#">Read more</a></p>
      </div>
    </div>
  </div>
</div><!-- /.bd-example -->

{% highlight html %}
<b:loop values='data:posts' var='post'>
  <article class='post' expr:id='"post-" + data:post.id' itemscope='itemscope' itemtype='http://schema.org/BlogPosting' role='article'>
    <div class='post-horizontal'>
      <!-- Image -->
      <b:if cond='data:post.firstImageUrl'>
        <div class='post-img-left post-img-cover' expr:style='&quot;min-height: 150px; background-image: url(&quot; + data:post.firstImageUrl + &quot;);&quot;'></div><!-- /.post-img-left -->
      <b:else/>
        <!-- Default no image -->
        <div class='post-img-left post-img-cover' style='min-height: 150px; background-image: url(https://placehold.it/600x400/eee/777?text=NO+IMAGE+AVAILABLE);'></div><!-- /.post-img-left -->
      </b:if>
      <!-- Content -->
      <div class='post-content'>
        <!-- Post title -->
        <b:if cond='data:post.title'>
          <h2 class='post-title' itemprop='name headline'>
            <a class='post-title-link' expr:href='data:post.url' itemprop='url'><data:post.title/></a>
          </h2>
        </b:if>
        <!-- Post snippet -->
        <p itemprop='articleBody description'><data:post.snippet/></p>
        <p><a class='btn btn-primary' expr:href='data:post.url' itemprop='url' role='button'>Read more</a></p>
      </div><!-- /.post-content -->
    </div><!-- /.post-horizontal -->
  </article><!-- /.post -->
</b:loop>
{% endhighlight %}

### Cover image: right image

<div class="bd-example">
  <div class="post">
    <div class="post-horizontal">
      <div class="post-content">
        <h2 class="post-title"><a class="post-title-link" href="#">Post title</a></h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...</p>
        <p><a class="btn btn-primary" href="#">Read more</a></p>
      </div>
      <div class="post-img-right post-img-cover holderjs" style="min-height: 150px;" data-background-src="?holder.js/500x250/?text=Image"></div>
    </div>
  </div>
</div><!-- /.bd-example -->

{% highlight html %}
<b:loop values='data:posts' var='post'>
  <article class='post' expr:id='"post-" + data:post.id' itemscope='itemscope' itemtype='http://schema.org/BlogPosting' role='article'>
    <div class='post-horizontal'>
      <!-- Content -->
      <div class='post-content'>
        <!-- Post title -->
        <b:if cond='data:post.title'>
          <h2 class='post-title' itemprop='name headline'>
            <a class='post-title-link' expr:href='data:post.url' itemprop='url'><data:post.title/></a>
          </h2>
        </b:if>
        <!-- Post snippet -->
        <p itemprop='articleBody description'><data:post.snippet/></p>
        <p><a class='btn btn-primary' expr:href='data:post.url' itemprop='url' role='button'>Read more</a></p>
      </div><!-- /.post-content -->
      <!-- Image -->
      <b:if cond='data:post.firstImageUrl'>
        <div class='post-img-right post-img-cover' expr:style='&quot;min-height: 150px; background-image: url(&quot; + data:post.firstImageUrl + &quot;);&quot;'></div><!-- /.post-img-right -->
      <b:else/>
        <!-- Default no image -->
        <div class='post-img-right post-img-cover' style='min-height: 150px; background-image: url(https://placehold.it/600x400/eee/777?text=NO+IMAGE+AVAILABLE);'></div><!-- /.post-img-right -->
      </b:if>
    </div><!-- /.post-horizontal -->
  </article><!-- /.post -->
</b:loop>
{% endhighlight %}

### Cover image: image overlays

<div class="bd-example">
  <div class="post post-inverse">
    <div class="post-overlay">
      <div class="post-img-overlay post-img-cover holderjs" style="min-height: 350px;" data-background-src="?holder.js/500x250/?text=Image"></div>
      <div class="post-content">
        <h2 class="post-title"><a class="post-title-link" href="#">Post title</a></h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...</p>
        <p><a class="btn btn-primary" href="#">Read more</a></p>
      </div>
    </div>
  </div>
</div><!-- /.bd-example -->

{% highlight html %}
<b:loop values='data:posts' var='post'>
  <article class='post' expr:id='"post-" + data:post.id' itemscope='itemscope' itemtype='http://schema.org/BlogPosting' role='article'>
    <div class='post-overlay'>
      <!-- Image -->
      <b:if cond='data:post.firstImageUrl'>
        <div class='post-img-overlay post-img-cover' expr:style='&quot;min-height: 350px; background-image: url(&quot; + data:post.firstImageUrl + &quot;);&quot;'></div><!-- /.post-img-overlay -->
      <b:else/>
        <!-- Default no image -->
        <div class='post-img-overlay post-img-cover' style='min-height: 350px; background-image: url(https://placehold.it/600x400/eee/777?text=NO+IMAGE+AVAILABLE);'></div><!-- /.post-img-overlay -->
      </b:if>
      <!-- Content -->
      <div class='post-content'>
        <!-- Post title -->
        <b:if cond='data:post.title'>
          <h2 class='post-title' itemprop='name headline'>
            <a class='post-title-link' expr:href='data:post.url' itemprop='url'><data:post.title/></a>
          </h2>
        </b:if>
        <!-- Post snippet -->
        <p itemprop='articleBody description'><data:post.snippet/></p>
        <p><a class='btn btn-primary' expr:href='data:post.url' itemprop='url' role='button'>Read more</a></p>
      </div><!-- /.post-content -->
    </div><!-- /.post-overlay -->
  </article><!-- /.post -->
</b:loop>
{% endhighlight %}

## Padding image

Tambahkan `.post-img-padding` ke `.post-img-{only, top, bottom, left, right, overlay}`.

### Padding image: image only

<div class="bd-example">
  <div class="post">
    <div class="post-img-only post-img-padding">
      <a href="#"><img data-src="holder.js/100px350/?auto=yes&text=Image" alt="Image"></a>
    </div>
  </div>
</div><!-- /.bd-example -->

{% highlight html %}
<b:loop values='data:posts' var='post'>
  <article class='post' expr:id='"post-" + data:post.id' itemscope='itemscope' itemtype='http://schema.org/BlogPosting' role='article'>
    <!-- Image -->
    <div class='post-img-only post-img-padding' itemprop='thumbnail'>
      <b:include name='include-thumbnail'/>
    </div><!-- /.post-img-only -->
  </article><!-- /.post -->
</b:loop>
{% endhighlight %}

### Padding image: top image

<div class="bd-example">
  <div class="post">
    <div class="post-img-top post-img-padding">
      <a href="#"><img data-src="holder.js/100px350/?auto=yes&text=Image" alt="Image"/></a>
    </div>
    <div class="post-content">
      <h2 class="post-title"><a class="post-title-link" href="#">Post title</a></h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...</p>
      <p><a class="btn btn-primary" href="#">Read more</a></p>
    </div>
  </div>
</div><!-- /.bd-example -->

{% highlight html %}
<b:loop values='data:posts' var='post'>
  <article class='post' expr:id='"post-" + data:post.id' itemscope='itemscope' itemtype='http://schema.org/BlogPosting' role='article'>
    <!-- Image -->
    <div class='post-img-top post-img-padding' itemprop='thumbnail'>
      <b:include name='include-thumbnail'/>
    </div><!-- /.post-img-top -->
    <!-- Content -->
    <div class='post-content'>
      <!-- Post title -->
      <b:if cond='data:post.title'>
        <h2 class='post-title' itemprop='name headline'>
          <a class='post-title-link' expr:href='data:post.url' itemprop='url'><data:post.title/></a>
        </h2>
      </b:if>
      <!-- Post snippet -->
      <p itemprop='articleBody description'><data:post.snippet/></p>
      <p><a class='btn btn-primary' expr:href='data:post.url' itemprop='url' role='button'>Read more</a></p>
    </div><!-- /.post-content -->
  </article><!-- /.post -->
</b:loop>
{% endhighlight %}

### Padding image: bottom image

<div class="bd-example">
  <div class="post">
    <div class="post-content">
      <h2 class="post-title"><a class="post-title-link" href="#">Post title</a></h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...</p>
      <p><a class="btn btn-primary" href="#">Read more</a></p>
    </div>
    <div class="post-img-bottom post-img-padding">
      <a href="#"><img data-src="holder.js/100px350/?auto=yes&text=Image" alt="Image"/></a>
    </div>
  </div>
</div><!-- /.bd-example -->

{% highlight html %}
<b:loop values='data:posts' var='post'>
  <article class='post' expr:id='"post-" + data:post.id' itemscope='itemscope' itemtype='http://schema.org/BlogPosting' role='article'>
    <!-- Content -->
    <div class='post-content'>
      <!-- Post title -->
      <b:if cond='data:post.title'>
        <h2 class='post-title' itemprop='name headline'>
          <a class='post-title-link' expr:href='data:post.url' itemprop='url'><data:post.title/></a>
        </h2>
      </b:if>
      <!-- Post snippet -->
      <p itemprop='articleBody description'><data:post.snippet/></p>
      <p><a class='btn btn-primary' expr:href='data:post.url' itemprop='url' role='button'>Read more</a></p>
    </div><!-- /.post-content -->
    <!-- Image -->
    <div class='post-img-bottom post-img-padding' itemprop='thumbnail'>
      <b:include name='include-thumbnail'/>
    </div><!-- /.post-img-bottom -->
  </article><!-- /.post -->
</b:loop>
{% endhighlight %}

### Padding image: left image

<div class="bd-example">
  <div class="post">
    <div class="post-horizontal">
      <div class="post-img-left post-img-padding">
        <a href="#"><img data-src="holder.js/100px180/?auto=yes&text=Image" alt="Image"/></a>
      </div>
      <div class="post-content">
        <h2 class="post-title"><a class="post-title-link" href="#">Post title</a></h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...</p>
        <p><a class="btn btn-primary" href="#">Read more</a></p>
      </div>
    </div>
  </div>
</div><!-- /.bd-example -->

{% highlight html %}
<b:loop values='data:posts' var='post'>
  <article class='post' expr:id='"post-" + data:post.id' itemscope='itemscope' itemtype='http://schema.org/BlogPosting' role='article'>
    <div class='post-horizontal'>
      <!-- Image -->
      <div class='post-img-left post-img-padding' itemprop='thumbnail'>
        <b:include name='include-thumbnail'/>
      </div><!-- /.post-img-left -->
      <!-- Content -->
      <div class='post-content'>
        <!-- Post title -->
        <b:if cond='data:post.title'>
          <h2 class='post-title' itemprop='name headline'>
            <a class='post-title-link' expr:href='data:post.url' itemprop='url'><data:post.title/></a>
          </h2>
        </b:if>
        <!-- Post snippet -->
        <p itemprop='articleBody description'><data:post.snippet/></p>
        <p><a class='btn btn-primary' expr:href='data:post.url' itemprop='url' role='button'>Read more</a></p>
      </div><!-- /.post-content -->
    </div><!-- /.post-horizontal -->
  </article><!-- /.post -->
</b:loop>
{% endhighlight %}

### Padding image: right image

<div class="bd-example">
  <div class="post">
    <div class="post-horizontal">
      <div class="post-content">
        <h2 class="post-title"><a class="post-title-link" href="#">Post title</a></h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...</p>
        <p><a class="btn btn-primary" href="#">Read more</a></p>
      </div>
      <div class="post-img-right post-img-padding">
        <a href="#"><img data-src="holder.js/100px180/?auto=yes&text=Image" alt="Image"/></a>
      </div>
    </div>
  </div>
</div><!-- /.bd-example -->

{% highlight html %}
<b:loop values='data:posts' var='post'>
  <article class='post' expr:id='"post-" + data:post.id' itemscope='itemscope' itemtype='http://schema.org/BlogPosting' role='article'>
    <div class='post-horizontal'>
      <!-- Content -->
      <div class='post-content'>
        <!-- Post title -->
        <b:if cond='data:post.title'>
          <h2 class='post-title' itemprop='name headline'>
            <a class='post-title-link' expr:href='data:post.url' itemprop='url'><data:post.title/></a>
          </h2>
        </b:if>
        <!-- Post snippet -->
        <p itemprop='articleBody description'><data:post.snippet/></p>
        <p><a class='btn btn-primary' expr:href='data:post.url' itemprop='url' role='button'>Read more</a></p>
      </div><!-- /.post-content -->
      <!-- Image -->
      <div class='post-img-right post-img-padding' itemprop='thumbnail'>
        <b:include name='include-thumbnail'/>
      </div><!-- /.post-img-right -->
    </div><!-- /.post-horizontal -->
  </article><!-- /.post -->
</b:loop>
{% endhighlight %}

### Padding image: image overlays

<div class="bd-example">
  <div class="post post-inverse">
    <div class="post-overlay">
      <div class="post-img-overlay post-img-padding">
        <a href="#"><img data-src="holder.js/100px350/?auto=yes&text=Image" alt="Image"/></a>
      </div>
      <div class="post-content">
        <h2 class="post-title"><a class="post-title-link" href="#">Post title</a></h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...</p>
        <p><a class="btn btn-primary" href="#">Read more</a></p>
      </div>
    </div>
  </div>
</div><!-- /.bd-example -->

{% highlight html %}
<b:loop values='data:posts' var='post'>
  <article class='post post-inverse' expr:id='"post-" + data:post.id' itemscope='itemscope' itemtype='http://schema.org/BlogPosting' role='article'>
    <div class='post-overlay'>
      <!-- Image -->
      <div class='post-img-overlay post-img-padding' itemprop='thumbnail'>
        <b:include name='include-thumbnail'/>
      </div><!-- /.post-img-overlay -->
      <!-- Content -->
      <div class='post-content'>
        <!-- Post title -->
        <b:if cond='data:post.title'>
          <h2 class='post-title' itemprop='name headline'>
            <a class='post-title-link' expr:href='data:post.url' itemprop='url'><data:post.title/></a>
          </h2>
        </b:if>
        <!-- Post snippet -->
        <p itemprop='articleBody description'><data:post.snippet/></p>
        <p><a class='btn btn-primary' expr:href='data:post.url' itemprop='url' role='button'>Read more</a></p>
      </div><!-- /.post-content -->
    </div><!-- /.post-overlay -->
  </article><!-- /.post -->
</b:loop>
{% endhighlight %}

## Groups

Bungkus semua `.post` dengan `.post-group`.

### Group: basic example

<div class="bd-example">
  <div class="post-group">
    <div class="post">
      <div class="post-content">
        <h2 class="post-title">
          <a class="post-title-link" href="#">Post title</a>
        </h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...</p>
      </div>
    </div>
    <div class="post">
      <div class="post-content">
        <h2 class="post-title">
          <a class="post-title-link" href="#">Post title</a>
        </h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...</p>
      </div>
    </div>
  </div>
</div><!-- /.bd-example -->

{% highlight html %}
<div class='post-group'>
  <b:loop values='data:posts' var='post'>
    <article class='post' expr:id='"post-" + data:post.id' itemscope='itemscope' itemtype='http://schema.org/BlogPosting' role='article'>
      <!-- Content -->
      <div class='post-content'>
        <!-- Post title -->
        <b:if cond='data:post.title'>
          <h2 class='post-title' itemprop='name headline'>
            <a class='post-title-link' expr:href='data:post.url' expr:title='data:post.title' itemprop='url'><data:post.title/></a>
          </h2>
        </b:if>
        <!-- Post snippet -->
        <p itemprop='articleBody description'><data:post.snippet/></p>
      </div><!-- /.post-content -->
    </article><!-- /.post -->
  </b:loop>
</div>
{% endhighlight %}

### Group: image only

<div class="bd-example">
  <div class="post-group">
    <div class="post">
      <div class="post-img-only">
        <a href="#"><img data-src="holder.js/100px350/?auto=yes&text=Image" alt="Image"></a>
      </div>
    </div>
    <div class="post">
      <div class="post-img-only">
        <a href="#"><img data-src="holder.js/100px350/?auto=yes&text=Image" alt="Image"></a>
      </div>
    </div>
  </div>
</div><!-- /.bd-example -->

{% highlight html %}
<div class='post-group'>
  <b:loop values='data:posts' var='post'>
    <article class='post' expr:id='"post-" + data:post.id' itemscope='itemscope' itemtype='http://schema.org/BlogPosting' role='article'>
      <!-- Image -->
      <div class='post-img-only' itemprop='thumbnail'>
        <b:include name='include-thumbnail'/>
      </div><!-- /.post-img-only -->
    </article><!-- /.post -->
  </b:loop>
</div>
{% endhighlight %}

### Group: top image

<div class="bd-example">
  <div class="post-group">
    <div class="post">
      <div class="post-img-top">
        <a href="#"><img data-src="holder.js/100px350/?auto=yes&text=Image" alt="Image"/></a>
      </div>
      <div class="post-content">
        <h2 class="post-title"><a class="post-title-link" href="#">Post title</a></h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...</p>
        <p><a class="btn btn-primary" href="#">Read more</a></p>
      </div>
    </div>
    <div class="post">
      <div class="post-img-top">
        <a href="#"><img data-src="holder.js/100px350/?auto=yes&text=Image" alt="Image"/></a>
      </div>
      <div class="post-content">
        <h2 class="post-title"><a class="post-title-link" href="#">Post title</a></h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...</p>
        <p><a class="btn btn-primary" href="#">Read more</a></p>
      </div>
    </div>
  </div>
</div><!-- /.bd-example -->

{% highlight html %}
<div class='post-group'>
  <b:loop values='data:posts' var='post'>
    <article class='post' expr:id='"post-" + data:post.id' itemscope='itemscope' itemtype='http://schema.org/BlogPosting' role='article'>
      <!-- Image -->
      <div class='post-img-top' itemprop='thumbnail'>
        <b:include name='include-thumbnail'/>
      </div><!-- /.post-img-top -->
      <!-- Content -->
      <div class='post-content'>
        <!-- Post title -->
        <b:if cond='data:post.title'>
          <h2 class='post-title' itemprop='name headline'>
            <a class='post-title-link' expr:href='data:post.url' itemprop='url'><data:post.title/></a>
          </h2>
        </b:if>
        <!-- Post snippet -->
        <p itemprop='articleBody description'><data:post.snippet/></p>
        <p><a class='btn btn-primary' expr:href='data:post.url' itemprop='url' role='button'>Read more</a></p>
      </div><!-- /.post-content -->
    </article><!-- /.post -->
  </b:loop>
</div>
{% endhighlight %}

### Group: bottom image

<div class="bd-example">
  <div class="post-group">
    <div class="post">
      <div class="post-content">
        <h2 class="post-title"><a class="post-title-link" href="#">Post title</a></h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...</p>
        <p><a class="btn btn-primary" href="#">Read more</a></p>
      </div>
      <div class="post-img-bottom">
        <a href="#"><img data-src="holder.js/100px350/?auto=yes&text=Image" alt="Image"/></a>
      </div>
    </div>
    <div class="post">
      <div class="post-content">
        <h2 class="post-title"><a class="post-title-link" href="#">Post title</a></h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...</p>
        <p><a class="btn btn-primary" href="#">Read more</a></p>
      </div>
      <div class="post-img-bottom">
        <a href="#"><img data-src="holder.js/100px350/?auto=yes&text=Image" alt="Image"/></a>
      </div>
    </div>
  </div>
</div><!-- /.bd-example -->

{% highlight html %}
<div class='post-group'>
  <b:loop values='data:posts' var='post'>
    <article class='post' expr:id='"post-" + data:post.id' itemscope='itemscope' itemtype='http://schema.org/BlogPosting' role='article'>
      <!-- Content -->
      <div class='post-content'>
        <!-- Post title -->
        <b:if cond='data:post.title'>
          <h2 class='post-title' itemprop='name headline'>
            <a class='post-title-link' expr:href='data:post.url' itemprop='url'><data:post.title/></a>
          </h2>
        </b:if>
        <!-- Post snippet -->
        <p itemprop='articleBody description'><data:post.snippet/></p>
        <p><a class='btn btn-primary' expr:href='data:post.url' itemprop='url' role='button'>Read more</a></p>
      </div><!-- /.post-content -->
      <!-- Image -->
      <div class='post-img-bottom' itemprop='thumbnail'>
        <b:include name='include-thumbnail'/>
      </div><!-- /.post-img-bottom -->
    </article><!-- /.post -->
  </b:loop>
</div>
{% endhighlight %}

### Group: left image

<div class="bd-example">
  <div class="post-group">
    <div class="post">
      <div class="post-horizontal">
        <div class="post-img-left">
          <a href="#"><img data-src="holder.js/100px180/?auto=yes&text=Image" alt="Image"/></a>
        </div>
        <div class="post-content">
          <h2 class="post-title"><a class="post-title-link" href="#">Post title</a></h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...</p>
          <p><a class="btn btn-primary" href="#">Read more</a></p>
        </div>
      </div>
    </div>
    <div class="post">
      <div class="post-horizontal">
        <div class="post-img-left">
          <a href="#"><img data-src="holder.js/100px180/?auto=yes&text=Image" alt="Image"/></a>
        </div>
        <div class="post-content">
          <h2 class="post-title"><a class="post-title-link" href="#">Post title</a></h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...</p>
          <p><a class="btn btn-primary" href="#">Read more</a></p>
        </div>
      </div>
    </div>
  </div>
</div><!-- /.bd-example -->

{% highlight html %}
<div class='post-group'>
  <b:loop values='data:posts' var='post'>
    <article class='post' expr:id='"post-" + data:post.id' itemscope='itemscope' itemtype='http://schema.org/BlogPosting' role='article'>
      <div class='post-horizontal'>
        <!-- Image -->
        <div class='post-img-left' itemprop='thumbnail'>
          <b:include name='include-thumbnail'/>
        </div><!-- /.post-img-left -->
        <!-- Content -->
        <div class='post-content'>
          <!-- Post title -->
          <b:if cond='data:post.title'>
            <h2 class='post-title' itemprop='name headline'>
              <a class='post-title-link' expr:href='data:post.url' itemprop='url'><data:post.title/></a>
            </h2>
          </b:if>
          <!-- Post snippet -->
          <p itemprop='articleBody description'><data:post.snippet/></p>
          <p><a class='btn btn-primary' expr:href='data:post.url' itemprop='url' role='button'>Read more</a></p>
        </div><!-- /.post-content -->
      </div><!-- /.post-horizontal -->
    </article><!-- /.post -->
  </b:loop>
</div>
{% endhighlight %}

### Group: right image

<div class="bd-example">
  <div class="post-group">
    <div class="post">
      <div class="post-horizontal">
        <div class="post-content">
          <h2 class="post-title"><a class="post-title-link" href="#">Post title</a></h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...</p>
          <p><a class="btn btn-primary" href="#">Read more</a></p>
        </div>
        <div class="post-img-right">
          <a href="#"><img data-src="holder.js/100px180/?auto=yes&text=Image" alt="Image"/></a>
        </div>
      </div>
    </div>
    <div class="post">
      <div class="post-horizontal">
        <div class="post-content">
          <h2 class="post-title"><a class="post-title-link" href="#">Post title</a></h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...</p>
          <p><a class="btn btn-primary" href="#">Read more</a></p>
        </div>
        <div class="post-img-right">
          <a href="#"><img data-src="holder.js/100px180/?auto=yes&text=Image" alt="Image"/></a>
        </div>
      </div>
    </div>
  </div>
</div><!-- /.bd-example -->

{% highlight html %}
<div class='post-group'>
  <b:loop values='data:posts' var='post'>
    <article class='post' expr:id='"post-" + data:post.id' itemscope='itemscope' itemtype='http://schema.org/BlogPosting' role='article'>
      <div class='post-horizontal'>
        <!-- Content -->
        <div class='post-content'>
          <!-- Post title -->
          <b:if cond='data:post.title'>
            <h2 class='post-title' itemprop='name headline'>
              <a class='post-title-link' expr:href='data:post.url' itemprop='url'><data:post.title/></a>
            </h2>
          </b:if>
          <!-- Post snippet -->
          <p itemprop='articleBody description'><data:post.snippet/></p>
          <p><a class='btn btn-primary' expr:href='data:post.url' itemprop='url' role='button'>Read more</a></p>
        </div><!-- /.post-content -->
        <!-- Image -->
        <div class='post-img-right' itemprop='thumbnail'>
          <b:include name='include-thumbnail'/>
        </div><!-- /.post-img-right -->
      </div><!-- /.post-horizontal -->
    </article><!-- /.post -->
  </b:loop>
</div>
{% endhighlight %}

### Group: image overlays

<div class="bd-example">
  <div class="post-group">
    <div class="post post-inverse">
      <div class="post-overlay">
        <div class="post-img-overlay">
          <a href="#"><img data-src="holder.js/100px350/?auto=yes&text=Image" alt="Image"/></a>
        </div>
        <div class="post-content">
          <h2 class="post-title"><a class="post-title-link" href="#">Post title</a></h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...</p>
          <p><a class="btn btn-primary" href="#">Read more</a></p>
        </div>
      </div>
    </div>
    <div class="post post-inverse">
      <div class="post-overlay">
        <div class="post-img-overlay">
          <a href="#"><img data-src="holder.js/100px350/?auto=yes&text=Image" alt="Image"/></a>
        </div>
        <div class="post-content">
          <h2 class="post-title"><a class="post-title-link" href="#">Post title</a></h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...</p>
          <p><a class="btn btn-primary" href="#">Read more</a></p>
        </div>
      </div>
    </div>
  </div>
</div><!-- /.bd-example -->

{% highlight html %}
<div class='post-group'>
  <b:loop values='data:posts' var='post'>
    <article class='post post-inverse' expr:id='"post-" + data:post.id' itemscope='itemscope' itemtype='http://schema.org/BlogPosting' role='article'>
      <div class='post-overlay'>
        <!-- Image -->
        <div class='post-img-overlay' itemprop='thumbnail'>
          <b:include name='include-thumbnail'/>
        </div><!-- /.post-img-overlay -->
        <!-- Content -->
        <div class='post-content'>
          <!-- Post title -->
          <b:if cond='data:post.title'>
            <h2 class='post-title' itemprop='name headline'>
              <a class='post-title-link' expr:href='data:post.url' itemprop='url'><data:post.title/></a>
            </h2>
          </b:if>
          <!-- Post snippet -->
          <p itemprop='articleBody description'><data:post.snippet/></p>
          <p><a class='btn btn-primary' expr:href='data:post.url' itemprop='url' role='button'>Read more</a></p>
        </div><!-- /.post-content -->
      </div><!-- /.post-overlay -->
    </article><!-- /.post -->
  </b:loop>
</div>
{% endhighlight %}

## Background variants

Komponen posting tersedia dengan beragam varian warna, dengan mengubah `background-color` dan `border-color` menggunakan kelas-kelas yang tersedia, atau Anda dapat menentukan warna sesuai dengan yang Anda inginkan dengan mudah menggunakan *custom styles*. Latar belakang yang berwarna gelap membutuhkan penggunaan `.post-inverse` untuk mengubah teks menjadi berwarna putih.

<div class="bd-example">
  <div class="post post-faded">
    <div class="post-content">
      <h2 class="post-title"><a class="post-title-link" href="#">Faded</a></h2>
      <div class="post-meta">
        <ul class="post-meta-list">
          <li><i class="fa fa-user"></i> <a href="#">Bootsblogger</a></li>
          <li><i class="fa fa-clock-o"></i> <time datetime="2016-04-21T13:42:00+07:00">Sep 9, 2015 7:00 PM</time></li>
          <li><i class="fa fa-comments"></i> <a href="#">5 Comments</a></li>
        </ul>
      </div>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...</p>
    </div><!-- /.post-content -->
  </div><!-- /.post -->
  <div class="post post-inverse post-blue">
    <div class="post-content">
      <h2 class="post-title"><a class="post-title-link" href="#">Blue</a></h2>
      <div class="post-meta">
        <ul class="post-meta-list">
          <li><i class="fa fa-user"></i> <a href="#">Bootsblogger</a></li>
          <li><i class="fa fa-clock-o"></i> <time datetime="2016-04-21T13:42:00+07:00">Sep 9, 2015 7:00 PM</time></li>
          <li><i class="fa fa-comments"></i> <a href="#">5 Comments</a></li>
        </ul>
      </div>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...</p>
    </div><!-- /.post-content -->
  </div><!-- /.post -->
  <div class="post post-inverse post-green">
    <div class="post-content">
      <h2 class="post-title"><a class="post-title-link" href="#">Green</a></h2>
      <div class="post-meta">
        <ul class="post-meta-list">
          <li><i class="fa fa-user"></i> <a href="#">Bootsblogger</a></li>
          <li><i class="fa fa-clock-o"></i> <time datetime="2016-04-21T13:42:00+07:00">Sep 9, 2015 7:00 PM</time></li>
          <li><i class="fa fa-comments"></i> <a href="#">5 Comments</a></li>
        </ul>
      </div>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...</p>
    </div><!-- /.post-content -->
  </div><!-- /.post -->
  <div class="post post-inverse post-teal">
    <div class="post-content">
      <h2 class="post-title"><a class="post-title-link" href="#">Teal</a></h2>
      <div class="post-meta">
        <ul class="post-meta-list">
          <li><i class="fa fa-user"></i> <a href="#">Bootsblogger</a></li>
          <li><i class="fa fa-clock-o"></i> <time datetime="2016-04-21T13:42:00+07:00">Sep 9, 2015 7:00 PM</time></li>
          <li><i class="fa fa-comments"></i> <a href="#">5 Comments</a></li>
        </ul>
      </div>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...</p>
    </div><!-- /.post-content -->
  </div><!-- /.post -->
  <div class="post post-inverse post-red">
    <div class="post-content">
      <h2 class="post-title"><a class="post-title-link" href="#">Red</a></h2>
      <div class="post-meta">
        <ul class="post-meta-list">
          <li><i class="fa fa-user"></i> <a href="#">Bootsblogger</a></li>
          <li><i class="fa fa-clock-o"></i> <time datetime="2016-04-21T13:42:00+07:00">Sep 9, 2015 7:00 PM</time></li>
          <li><i class="fa fa-comments"></i> <a href="#">5 Comments</a></li>
        </ul>
      </div>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...</p>
    </div><!-- /.post-content -->
  </div><!-- /.post -->
  <div class="post post-inverse post-orange">
    <div class="post-content">
      <h2 class="post-title"><a class="post-title-link" href="#">Orange</a></h2>
      <div class="post-meta">
        <ul class="post-meta-list">
          <li><i class="fa fa-user"></i> <a href="#">Bootsblogger</a></li>
          <li><i class="fa fa-clock-o"></i> <time datetime="2016-04-21T13:42:00+07:00">Sep 9, 2015 7:00 PM</time></li>
          <li><i class="fa fa-comments"></i> <a href="#">5 Comments</a></li>
        </ul>
      </div>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...</p>
    </div><!-- /.post-content -->
  </div><!-- /.post -->
  <div class="post post-inverse post-purple">
    <div class="post-content">
      <h2 class="post-title"><a class="post-title-link" href="#">Purple</a></h2>
      <div class="post-meta">
        <ul class="post-meta-list">
          <li><i class="fa fa-user"></i> <a href="#">Bootsblogger</a></li>
          <li><i class="fa fa-clock-o"></i> <time datetime="2016-04-21T13:42:00+07:00">Sep 9, 2015 7:00 PM</time></li>
          <li><i class="fa fa-comments"></i> <a href="#">5 Comments</a></li>
        </ul>
      </div>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...</p>
    </div><!-- /.post-content -->
  </div><!-- /.post -->
  <div class="post post-inverse post-yellow">
    <div class="post-content">
      <h2 class="post-title"><a class="post-title-link" href="#">Yellow</a></h2>
      <div class="post-meta">
        <ul class="post-meta-list">
          <li><i class="fa fa-user"></i> <a href="#">Bootsblogger</a></li>
          <li><i class="fa fa-clock-o"></i> <time datetime="2016-04-21T13:42:00+07:00">Sep 9, 2015 7:00 PM</time></li>
          <li><i class="fa fa-comments"></i> <a href="#">5 Comments</a></li>
        </ul>
      </div>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...</p>
    </div><!-- /.post-content -->
  </div><!-- /.post -->
  <div class="post post-inverse post-pink">
    <div class="post-content">
      <h2 class="post-title"><a class="post-title-link" href="#">Pink</a></h2>
      <div class="post-meta">
        <ul class="post-meta-list">
          <li><i class="fa fa-user"></i> <a href="#">Bootsblogger</a></li>
          <li><i class="fa fa-clock-o"></i> <time datetime="2016-04-21T13:42:00+07:00">Sep 9, 2015 7:00 PM</time></li>
          <li><i class="fa fa-comments"></i> <a href="#">5 Comments</a></li>
        </ul>
      </div>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...</p>
    </div><!-- /.post-content -->
  </div><!-- /.post -->
  <div class="post post-inverse post-gray">
    <div class="post-content">
      <h2 class="post-title"><a class="post-title-link" href="#">Gray</a></h2>
      <div class="post-meta">
        <ul class="post-meta-list">
          <li><i class="fa fa-user"></i> <a href="#">Bootsblogger</a></li>
          <li><i class="fa fa-clock-o"></i> <time datetime="2016-04-21T13:42:00+07:00">Sep 9, 2015 7:00 PM</time></li>
          <li><i class="fa fa-comments"></i> <a href="#">5 Comments</a></li>
        </ul>
      </div>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...</p>
    </div><!-- /.post-content -->
  </div><!-- /.post -->
  <div class="post post-inverse post-brown">
    <div class="post-content">
      <h2 class="post-title"><a class="post-title-link" href="#">Brown</a></h2>
      <div class="post-meta">
        <ul class="post-meta-list">
          <li><i class="fa fa-user"></i> <a href="#">Bootsblogger</a></li>
          <li><i class="fa fa-clock-o"></i> <time datetime="2016-04-21T13:42:00+07:00">Sep 9, 2015 7:00 PM</time></li>
          <li><i class="fa fa-comments"></i> <a href="#">5 Comments</a></li>
        </ul>
      </div>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...</p>
    </div><!-- /.post-content -->
  </div><!-- /.post -->
  <div class="post post-inverse post-black">
    <div class="post-content">
      <h2 class="post-title"><a class="post-title-link" href="#">Black</a></h2>
      <div class="post-meta">
        <ul class="post-meta-list">
          <li><i class="fa fa-user"></i> <a href="#">Bootsblogger</a></li>
          <li><i class="fa fa-clock-o"></i> <time datetime="2016-04-21T13:42:00+07:00">Sep 9, 2015 7:00 PM</time></li>
          <li><i class="fa fa-comments"></i> <a href="#">5 Comments</a></li>
        </ul>
      </div>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...</p>
    </div><!-- /.post-content -->
  </div><!-- /.post -->
  <div class="post post-inverse" style="background-color: #607d8b; border-color: #263238;">
    <div class="post-content">
      <h2 class="post-title"><a class="post-title-link" href="#">Custom</a></h2>
      <div class="post-meta">
        <ul class="post-meta-list">
          <li><i class="fa fa-user"></i> <a href="#">Bootsblogger</a></li>
          <li><i class="fa fa-clock-o"></i> <time datetime="2016-04-21T13:42:00+07:00">Sep 9, 2015 7:00 PM</time></li>
          <li><i class="fa fa-comments"></i> <a href="#">5 Comments</a></li>
        </ul>
      </div>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...</p>
    </div><!-- /.post-content -->
  </div><!-- /.post -->
</div><!-- /.bd-example -->

{% highlight html %}
<div class="post post-faded">...</div>
<div class="post post-inverse post-blue">...</div>
<div class="post post-inverse post-green">...</div>
<div class="post post-inverse post-teal">...</div>
<div class="post post-inverse post-red">...</div>
<div class="post post-inverse post-orange">...</div>
<div class="post post-inverse post-purple">...</div>
<div class="post post-inverse post-yellow">...</div>
<div class="post post-inverse post-pink">...</div>
<div class="post post-inverse post-gray">...</div>
<div class="post post-inverse post-brown">...</div>
<div class="post post-inverse post-black">...</div>
<div class="post post-inverse" style="background-color: #607d8b; border-color: #263238;">...</div>
{% endhighlight %}

## Outline variants

Posting berwarna, tetapi bukan pada latar belakang, hanya mengubah `border-color`. Gunakan `.post-outline-{color}`.

<div class="bd-example">
  <div class="post post-outline-faded">
    <div class="post-content">
      <h2 class="post-title"><a class="post-title-link" href="#">Faded</a></h2>
      <div class="post-meta">
        <ul class="post-meta-list">
          <li><i class="fa fa-user"></i> <a href="#">Bootsblogger</a></li>
          <li><i class="fa fa-clock-o"></i> <time datetime="2016-04-21T13:42:00+07:00">Sep 9, 2015 7:00 PM</time></li>
          <li><i class="fa fa-comments"></i> <a href="#">5 Comments</a></li>
        </ul>
      </div>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...</p>
    </div><!-- /.post-content -->
  </div><!-- /.post -->
  <div class="post post-outline-blue">
    <div class="post-content">
      <h2 class="post-title"><a class="post-title-link" href="#">Blue</a></h2>
      <div class="post-meta">
        <ul class="post-meta-list">
          <li><i class="fa fa-user"></i> <a href="#">Bootsblogger</a></li>
          <li><i class="fa fa-clock-o"></i> <time datetime="2016-04-21T13:42:00+07:00">Sep 9, 2015 7:00 PM</time></li>
          <li><i class="fa fa-comments"></i> <a href="#">5 Comments</a></li>
        </ul>
      </div>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...</p>
    </div><!-- /.post-content -->
  </div><!-- /.post -->
  <div class="post post-outline-green">
    <div class="post-content">
      <h2 class="post-title"><a class="post-title-link" href="#">Green</a></h2>
      <div class="post-meta">
        <ul class="post-meta-list">
          <li><i class="fa fa-user"></i> <a href="#">Bootsblogger</a></li>
          <li><i class="fa fa-clock-o"></i> <time datetime="2016-04-21T13:42:00+07:00">Sep 9, 2015 7:00 PM</time></li>
          <li><i class="fa fa-comments"></i> <a href="#">5 Comments</a></li>
        </ul>
      </div>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...</p>
    </div><!-- /.post-content -->
  </div><!-- /.post -->
  <div class="post post-outline-teal">
    <div class="post-content">
      <h2 class="post-title"><a class="post-title-link" href="#">Teal</a></h2>
      <div class="post-meta">
        <ul class="post-meta-list">
          <li><i class="fa fa-user"></i> <a href="#">Bootsblogger</a></li>
          <li><i class="fa fa-clock-o"></i> <time datetime="2016-04-21T13:42:00+07:00">Sep 9, 2015 7:00 PM</time></li>
          <li><i class="fa fa-comments"></i> <a href="#">5 Comments</a></li>
        </ul>
      </div>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...</p>
    </div><!-- /.post-content -->
  </div><!-- /.post -->
  <div class="post post-outline-red">
    <div class="post-content">
      <h2 class="post-title"><a class="post-title-link" href="#">Red</a></h2>
      <div class="post-meta">
        <ul class="post-meta-list">
          <li><i class="fa fa-user"></i> <a href="#">Bootsblogger</a></li>
          <li><i class="fa fa-clock-o"></i> <time datetime="2016-04-21T13:42:00+07:00">Sep 9, 2015 7:00 PM</time></li>
          <li><i class="fa fa-comments"></i> <a href="#">5 Comments</a></li>
        </ul>
      </div>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...</p>
    </div><!-- /.post-content -->
  </div><!-- /.post -->
  <div class="post post-outline-orange">
    <div class="post-content">
      <h2 class="post-title"><a class="post-title-link" href="#">Orange</a></h2>
      <div class="post-meta">
        <ul class="post-meta-list">
          <li><i class="fa fa-user"></i> <a href="#">Bootsblogger</a></li>
          <li><i class="fa fa-clock-o"></i> <time datetime="2016-04-21T13:42:00+07:00">Sep 9, 2015 7:00 PM</time></li>
          <li><i class="fa fa-comments"></i> <a href="#">5 Comments</a></li>
        </ul>
      </div>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...</p>
    </div><!-- /.post-content -->
  </div><!-- /.post -->
  <div class="post post-outline-purple">
    <div class="post-content">
      <h2 class="post-title"><a class="post-title-link" href="#">Purple</a></h2>
      <div class="post-meta">
        <ul class="post-meta-list">
          <li><i class="fa fa-user"></i> <a href="#">Bootsblogger</a></li>
          <li><i class="fa fa-clock-o"></i> <time datetime="2016-04-21T13:42:00+07:00">Sep 9, 2015 7:00 PM</time></li>
          <li><i class="fa fa-comments"></i> <a href="#">5 Comments</a></li>
        </ul>
      </div>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...</p>
    </div><!-- /.post-content -->
  </div><!-- /.post -->
  <div class="post post-outline-yellow">
    <div class="post-content">
      <h2 class="post-title"><a class="post-title-link" href="#">Yellow</a></h2>
      <div class="post-meta">
        <ul class="post-meta-list">
          <li><i class="fa fa-user"></i> <a href="#">Bootsblogger</a></li>
          <li><i class="fa fa-clock-o"></i> <time datetime="2016-04-21T13:42:00+07:00">Sep 9, 2015 7:00 PM</time></li>
          <li><i class="fa fa-comments"></i> <a href="#">5 Comments</a></li>
        </ul>
      </div>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...</p>
    </div><!-- /.post-content -->
  </div><!-- /.post -->
  <div class="post post-outline-pink">
    <div class="post-content">
      <h2 class="post-title"><a class="post-title-link" href="#">Pink</a></h2>
      <div class="post-meta">
        <ul class="post-meta-list">
          <li><i class="fa fa-user"></i> <a href="#">Bootsblogger</a></li>
          <li><i class="fa fa-clock-o"></i> <time datetime="2016-04-21T13:42:00+07:00">Sep 9, 2015 7:00 PM</time></li>
          <li><i class="fa fa-comments"></i> <a href="#">5 Comments</a></li>
        </ul>
      </div>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...</p>
    </div><!-- /.post-content -->
  </div><!-- /.post -->
  <div class="post post-outline-gray">
    <div class="post-content">
      <h2 class="post-title"><a class="post-title-link" href="#">Gray</a></h2>
      <div class="post-meta">
        <ul class="post-meta-list">
          <li><i class="fa fa-user"></i> <a href="#">Bootsblogger</a></li>
          <li><i class="fa fa-clock-o"></i> <time datetime="2016-04-21T13:42:00+07:00">Sep 9, 2015 7:00 PM</time></li>
          <li><i class="fa fa-comments"></i> <a href="#">5 Comments</a></li>
        </ul>
      </div>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...</p>
    </div><!-- /.post-content -->
  </div><!-- /.post -->
  <div class="post post-outline-brown">
    <div class="post-content">
      <h2 class="post-title"><a class="post-title-link" href="#">Brown</a></h2>
      <div class="post-meta">
        <ul class="post-meta-list">
          <li><i class="fa fa-user"></i> <a href="#">Bootsblogger</a></li>
          <li><i class="fa fa-clock-o"></i> <time datetime="2016-04-21T13:42:00+07:00">Sep 9, 2015 7:00 PM</time></li>
          <li><i class="fa fa-comments"></i> <a href="#">5 Comments</a></li>
        </ul>
      </div>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...</p>
    </div><!-- /.post-content -->
  </div><!-- /.post -->
  <div class="post post-outline-black">
    <div class="post-content">
      <h2 class="post-title"><a class="post-title-link" href="#">Black</a></h2>
      <div class="post-meta">
        <ul class="post-meta-list">
          <li><i class="fa fa-user"></i> <a href="#">Bootsblogger</a></li>
          <li><i class="fa fa-clock-o"></i> <time datetime="2016-04-21T13:42:00+07:00">Sep 9, 2015 7:00 PM</time></li>
          <li><i class="fa fa-comments"></i> <a href="#">5 Comments</a></li>
        </ul>
      </div>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...</p>
    </div><!-- /.post-content -->
  </div><!-- /.post -->
  <div class="post" style="background-color: transparent; border-color: #263238;">
    <div class="post-content">
      <h2 class="post-title"><a class="post-title-link" href="#">Custom</a></h2>
      <div class="post-meta">
        <ul class="post-meta-list">
          <li><i class="fa fa-user"></i> <a href="#">Bootsblogger</a></li>
          <li><i class="fa fa-clock-o"></i> <time datetime="2016-04-21T13:42:00+07:00">Sep 9, 2015 7:00 PM</time></li>
          <li><i class="fa fa-comments"></i> <a href="#">5 Comments</a></li>
        </ul>
      </div>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...</p>
    </div><!-- /.post-content -->
  </div><!-- /.post -->
</div><!-- /.bd-example -->

{% highlight html %}
<div class="post post-outline-faded">...</div>
<div class="post post-outline-blue">...</div>
<div class="post post-outline-green">...</div>
<div class="post post-outline-teal">...</div>
<div class="post post-outline-red">...</div>
<div class="post post-outline-orange">...</div>
<div class="post post-outline-purple">...</div>
<div class="post post-outline-yellow">...</div>
<div class="post post-outline-pink">...</div>
<div class="post post-outline-gray">...</div>
<div class="post post-outline-brown">...</div>
<div class="post post-outline-black">...</div>
<div class="post" style="background-color: transparent; border-color: #263238;">...</div>
{% endhighlight %}

## Columns

Bungkus semua `.post` dengan `.post-columns`. **Perhatian!** Ini **tidak bekerja di IE9 ke bawah**, karena mereka tidak mendukung properti CSS `column-*`.

Hanya diterapkan pada perangkat kecil ke atas. Pada perangkat kecil ke atas (&ge;576px) akan tampil dua kolom dan pada perangkat sedang ke atas (&ge;768px) akan tampil tiga kolom, pada perangkat sangat kecil (&lt;576px) hanya tampil satu kolom.

Urutan widget dimulai dari atas ke bawah dan dari kiri ke kanan.

<div class="bd-example">
  <div class="post-columns">
    <div class="post">
      <div class="post-content">
        <h2 class="post-title">
          <a class="post-title-link" href="#">Post title</a>
        </h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante...</p>
      </div>
    </div>
    <div class="post">
      <div class="post-content">
        <h2 class="post-title">
          <a class="post-title-link" href="#">Post title</a>
        </h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante...</p>
      </div>
    </div>
    <div class="post">
      <div class="post-content">
        <h2 class="post-title">
          <a class="post-title-link" href="#">Post title</a>
        </h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante. Integer posuere erat a ante. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante...</p>
      </div>
    </div>
    <div class="post">
      <div class="post-content">
        <h2 class="post-title">
          <a class="post-title-link" href="#">Post title</a>
        </h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante...</p>
      </div>
    </div>
    <div class="post">
      <div class="post-content">
        <h2 class="post-title">
          <a class="post-title-link" href="#">Post title</a>
        </h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante...</p>
      </div>
    </div>
    <div class="post">
      <div class="post-content">
        <h2 class="post-title">
          <a class="post-title-link" href="#">Post title</a>
        </h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante...</p>
      </div>
    </div>
  </div>
</div><!-- /.bd-example -->

{% highlight html %}
<div class='post-columns'>
  <b:loop values='data:posts' var='post'>
    <article class='post' expr:id='"post-" + data:post.id' itemscope='itemscope' itemtype='http://schema.org/BlogPosting' role='article'>
      <!-- Content -->
      <div class='post-content'>
        <!-- Post title -->
        <b:if cond='data:post.title'>
          <h2 class='post-title' itemprop='name headline'>
            <a class='post-title-link' expr:href='data:post.url' expr:title='data:post.title' itemprop='url'><data:post.title/></a>
          </h2>
        </b:if>
        <!-- Post snippet -->
        <p itemprop='articleBody description'><data:post.snippet/></p>
      </div><!-- /.post-content -->
    </article><!-- /.post -->
  </b:loop>
</div>
{% endhighlight %}

## Using grid system

Menggunakan [Bootstrap grid system](https://v4-alpha.getbootstrap.com/layout/grid/).

<div class="bd-example">
  <div class="row">
    <div class="col-sm-6 col-md-4">
      <div class="post">
        <div class="post-content">
          <h2 class="post-title">
            <a class="post-title-link" href="#">Post title</a>
          </h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...</p>
        </div>
      </div>
    </div>
    <div class="col-sm-6 col-md-4">
      <div class="post">
        <div class="post-content">
          <h2 class="post-title">
            <a class="post-title-link" href="#">Post title</a>
          </h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...</p>
        </div>
      </div>
    </div>
    <div class="col-sm-6 col-md-4">
      <div class="post">
        <div class="post-content">
          <h2 class="post-title">
            <a class="post-title-link" href="#">Post title</a>
          </h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...</p>
        </div>
      </div>
    </div>
  </div>
</div><!-- /.bd-example -->

{% highlight html %}
<div class='row'>
  <b:loop values='data:posts' var='post'>
    <div class='col-sm-6 col-md-4'>
      <article class='post' expr:id='"post-" + data:post.id' itemscope='itemscope' itemtype='http://schema.org/BlogPosting' role='article'>
        <!-- Content -->
        <div class='post-content'>
          <!-- Post title -->
          <b:if cond='data:post.title'>
            <h2 class='post-title' itemprop='name headline'>
              <a class='post-title-link' expr:href='data:post.url' expr:title='data:post.title' itemprop='url'><data:post.title/></a>
            </h2>
          </b:if>
          <!-- Post snippet -->
          <p itemprop='articleBody description'><data:post.snippet/></p>
        </div><!-- /.post-content -->
      </article><!-- /.post -->
    </div>
  </b:loop>
</div>
{% endhighlight %}

## Content block

Gunakan `.post-content` lebih dari satu untuk membungkus setiap konten. Di bawah ini hanya contoh, silahkan sesuaikan konten dengan kebutuhan Anda.

### Basic example

<div class="bd-example">
  <div class="post">
    <div class="post-content">
      <h2 class="post-title">
        <a class="post-title-link" href="#">Post title</a>
      </h2>
    </div>
    <div class="post-content">
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...</p>
    </div>
    <div class="post-content">
      <p class="text-xs-right"><a class="btn btn-primary" href="#">Read more</a></p>
    </div>
  </div>
</div><!-- /.bd-example -->

{% highlight html %}
<b:loop values='data:posts' var='post'>
  <article class='post' expr:id='"post-" + data:post.id' itemscope='itemscope' itemtype='http://schema.org/BlogPosting' role='article'>
    <!-- Content title -->
    <div class='post-content'>
      <b:if cond='data:post.title'>
        <h2 class='post-title' itemprop='name headline'>
          <a class='post-title-link' expr:href='data:post.url' expr:title='data:post.title' itemprop='url'><data:post.title/></a>
        </h2>
      </b:if>
    </div>
    <!-- Content snippet -->
    <div class='post-content'>
      <p itemprop='articleBody description'><data:post.snippet/></p>
    </div>
    <!-- Content button -->
    <div class='post-content'>
      <p class='text-xs-right'><a class='btn btn-primary' expr:href='data:post.url' itemprop='url' role='button'>Read more</a></p>
    </div>
  </article><!-- /.post -->
</b:loop>
{% endhighlight %}

### With `.post-img-only`

<div class="bd-example">
  <div class="post">
    <div class="post-content">
      <div class="post-img-only">
        <a href="#"><img data-src="holder.js/100px350/?auto=yes&text=Image" alt="Image"/></a>
      </div>
    </div>
    <div class="post-content">
      <h2 class="post-title"><a class="post-title-link" href="#">Post title</a></h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...</p>
    </div>
    <div class="post-content">
      <p class="text-xs-right"><a class="btn btn-primary" href="#">Read more</a></p>
    </div>
  </div>
</div><!-- /.bd-example -->

{% highlight html %}
<b:loop values='data:posts' var='post'>
  <article class='post' expr:id='"post-" + data:post.id' itemscope='itemscope' itemtype='http://schema.org/BlogPosting' role='article'>
    <!-- Content image -->
    <div class='post-content'>
      <div class='post-img-only' itemprop='thumbnail'>
        <b:include name='include-thumbnail'/>
      </div><!-- /.post-img-only -->
    </div>
    <!-- Content title and snippet -->
    <div class='post-content'>
      <!-- Post title -->
      <b:if cond='data:post.title'>
        <h2 class='post-title' itemprop='name headline'>
          <a class='post-title-link' expr:href='data:post.url' itemprop='url'><data:post.title/></a>
        </h2>
      </b:if>
      <!-- Post snippet -->
      <p itemprop='articleBody description'><data:post.snippet/></p>
    </div>
    <!-- Content button -->
    <div class='post-content'>
      <p class='text-xs-right'><a class='btn btn-primary' expr:href='data:post.url' itemprop='url' role='button'>Read more</a></p>
    </div>
  </article><!-- /.post -->
</b:loop>
{% endhighlight %}

<div class="bd-example">
  <div class="post">
    <div class="post-content">
      <h2 class="post-title"><a class="post-title-link" href="#">Post title</a></h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...</p>
    </div>
    <div class="post-content">
      <div class="post-img-only">
        <a href="#"><img data-src="holder.js/100px350/?auto=yes&text=Image" alt="Image"/></a>
      </div>
    </div>
    <div class="post-content">
      <p class='text-xs-center'><a class="btn btn-primary" href="#">Read more</a></p>
    </div>
  </div>
</div><!-- /.bd-example -->

{% highlight html %}
<b:loop values='data:posts' var='post'>
  <article class='post' expr:id='"post-" + data:post.id' itemscope='itemscope' itemtype='http://schema.org/BlogPosting' role='article'>
    <!-- Content title and snippet -->
    <div class='post-content'>
      <!-- Post title -->
      <b:if cond='data:post.title'>
        <h2 class='post-title' itemprop='name headline'>
          <a class='post-title-link' expr:href='data:post.url' itemprop='url'><data:post.title/></a>
        </h2>
      </b:if>
      <!-- Post snippet -->
      <p itemprop='articleBody description'><data:post.snippet/></p>
    </div>
    <!-- Content image -->
    <div class='post-content'>
      <div class='post-img-only' itemprop='thumbnail'>
        <b:include name='include-thumbnail'/>
      </div><!-- /.post-img-only -->
    </div>
    <!-- Content button -->
    <div class='post-content'>
      <p class='text-xs-center'><a class='btn btn-primary' expr:href='data:post.url' itemprop='url' role='button'>Read more</a></p>
    </div>
  </article><!-- /.post -->
</b:loop>
{% endhighlight %}

<div class="bd-example">
  <div class="post">
    <div class="post-content">
      <h2 class="post-title text-xs-center"><a class="post-title-link" href="#">Post title</a></h2>
    </div>
    <div class="post-content">
      <div class="post-img-only">
        <a href="#"><img data-src="holder.js/100px350/?auto=yes&text=Image" alt="Image"/></a>
      </div>
    </div>
  </div>
</div><!-- /.bd-example -->

{% highlight html %}
<b:loop values='data:posts' var='post'>
  <article class='post' expr:id='"post-" + data:post.id' itemscope='itemscope' itemtype='http://schema.org/BlogPosting' role='article'>
    <!-- Content title -->
    <div class='post-content'>
      <b:if cond='data:post.title'>
        <h2 class='post-title text-xs-center' itemprop='name headline'>
          <a class='post-title-link' expr:href='data:post.url' itemprop='url'><data:post.title/></a>
        </h2>
      </b:if>
    </div>
    <!-- Content image -->
    <div class='post-content'>
      <div class='post-img-only' itemprop='thumbnail'>
        <b:include name='include-thumbnail'/>
      </div><!-- /.post-img-only -->
    </div>
  </article><!-- /.post -->
</b:loop>
{% endhighlight %}

<div class="bd-example">
  <div class="post">
    <div class="post-content">
      <div class="post-img-only">
        <a href="#"><img data-src="holder.js/100px350/?auto=yes&text=Image" alt="Image"/></a>
      </div>
    </div>
    <div class="post-content">
      <h2 class="post-title text-xs-center"><a class="post-title-link" href="#">Post title</a></h2>
    </div>
  </div>
</div><!-- /.bd-example -->

{% highlight html %}
<b:loop values='data:posts' var='post'>
  <article class='post' expr:id='"post-" + data:post.id' itemscope='itemscope' itemtype='http://schema.org/BlogPosting' role='article'>
    <!-- Content image -->
    <div class='post-content'>
      <div class='post-img-only' itemprop='thumbnail'>
        <b:include name='include-thumbnail'/>
      </div><!-- /.post-img-only -->
    </div>
    <!-- Content title -->
    <div class='post-content'>
      <b:if cond='data:post.title'>
        <h2 class='post-title text-xs-center' itemprop='name headline'>
          <a class='post-title-link' expr:href='data:post.url' itemprop='url'><data:post.title/></a>
        </h2>
      </b:if>
    </div>
  </article><!-- /.post -->
</b:loop>
{% endhighlight %}

### With `.post-img-top` and `.post-img-bottom`

<div class="bd-example">
  <div class="post">
    <div class="post-img-top">
      <a href="#"><img data-src="holder.js/100px350/?auto=yes&text=Image" alt="Image"/></a>
    </div>
    <div class="post-content">
      <h2 class="post-title"><a class="post-title-link" href="#">Post title</a></h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...</p>
    </div>
    <div class="post-content">
      <p class="text-xs-right"><a class="btn btn-primary" href="#">Read more</a></p>
    </div>
  </div>
</div><!-- /.bd-example -->

{% highlight html %}
<b:loop values='data:posts' var='post'>
  <article class='post' expr:id='"post-" + data:post.id' itemscope='itemscope' itemtype='http://schema.org/BlogPosting' role='article'>
    <!-- Image -->
    <div class='post-img-top' itemprop='thumbnail'>
      <b:include name='include-thumbnail'/>
    </div><!-- /.post-img-top -->
    <!-- Content title and snippet -->
    <div class='post-content'>
      <!-- Post title -->
      <b:if cond='data:post.title'>
        <h2 class='post-title' itemprop='name headline'>
          <a class='post-title-link' expr:href='data:post.url' itemprop='url'><data:post.title/></a>
        </h2>
      </b:if>
      <!-- Post snippet -->
      <p itemprop='articleBody description'><data:post.snippet/></p>
    </div>
    <!-- Content button -->
    <div class='post-content'>
      <p class='text-xs-right'><a class='btn btn-primary' expr:href='data:post.url' itemprop='url' role='button'>Read more</a></p>
    </div>
  </article><!-- /.post -->
</b:loop>
{% endhighlight %}

<div class="bd-example">
  <div class="post">
    <div class="post-content">
      <h2 class="post-title"><a class="post-title-link" href="#">Post title</a></h2>
    </div>
    <div class="post-img-top">
      <a href="#"><img data-src="holder.js/100px350/?auto=yes&text=Image" alt="Image"/></a>
    </div>
    <div class="post-content">
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...</p>
    </div>
    <div class="post-content">
      <p class="text-xs-right"><a class="btn btn-primary" href="#">Read more</a></p>
    </div>
  </div>
</div><!-- /.bd-example -->

{% highlight html %}
<b:loop values='data:posts' var='post'>
  <article class='post' expr:id='"post-" + data:post.id' itemscope='itemscope' itemtype='http://schema.org/BlogPosting' role='article'>
    <!-- Content title -->
    <div class='post-content'>
      <b:if cond='data:post.title'>
        <h2 class='post-title' itemprop='name headline'>
          <a class='post-title-link' expr:href='data:post.url' itemprop='url'><data:post.title/></a>
        </h2>
      </b:if>
    </div>
    <!-- Image -->
    <div class='post-img-top' itemprop='thumbnail'>
      <b:include name='include-thumbnail'/>
    </div><!-- /.post-img-top -->
    <!-- Content snippet -->
    <div class='post-content'>
      <p itemprop='articleBody description'><data:post.snippet/></p>
    </div>
    <!-- Content button -->
    <div class='post-content'>
      <p class='text-xs-right'><a class='btn btn-primary' expr:href='data:post.url' itemprop='url' role='button'>Read more</a></p>
    </div>
  </article><!-- /.post -->
</b:loop>
{% endhighlight %}

<div class="bd-example">
  <div class="post">
    <div class="post-content">
      <h2 class="post-title"><a class="post-title-link" href="#">Post title</a></h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...</p>
    </div>
    <div class="post-content">
      <p class="text-xs-center"><a class="btn btn-primary" href="#">Read more</a></p>
    </div>
    <div class="post-img-bottom">
      <a href="#"><img data-src="holder.js/100px350/?auto=yes&text=Image" alt="Image"/></a>
    </div>
  </div>
</div><!-- /.bd-example -->

{% highlight html %}
<b:loop values='data:posts' var='post'>
  <article class='post' expr:id='"post-" + data:post.id' itemscope='itemscope' itemtype='http://schema.org/BlogPosting' role='article'>
    <!-- Content title and snippet -->
    <div class='post-content'>
      <!-- Post title -->
      <b:if cond='data:post.title'>
        <h2 class='post-title' itemprop='name headline'>
          <a class='post-title-link' expr:href='data:post.url' itemprop='url'><data:post.title/></a>
        </h2>
      </b:if>
      <!-- Post snippet -->
      <p itemprop='articleBody description'><data:post.snippet/></p>
    </div>
    <!-- Content button -->
    <div class='post-content'>
      <p class='text-xs-center'><a class='btn btn-primary' expr:href='data:post.url' itemprop='url' role='button'>Read more</a></p>
    </div>
    <!-- Image -->
    <div class='post-img-bottom' itemprop='thumbnail'>
      <b:include name='include-thumbnail'/>
    </div><!-- /.post-img-bottom -->
  </article><!-- /.post -->
</b:loop>
{% endhighlight %}

<div class="bd-example">
  <div class="post">
    <div class="post-content">
      <h2 class="post-title"><a class="post-title-link" href="#">Post title</a></h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...</p>
    </div>
    <div class="post-img-bottom">
      <a href="#"><img data-src="holder.js/100px350/?auto=yes&text=Image" alt="Image"/></a>
    </div>
    <div class="post-content">
      <p class="text-xs-center"><a class="btn btn-primary" href="#">Read more</a></p>
    </div>
  </div>
</div><!-- /.bd-example -->

{% highlight html %}
<b:loop values='data:posts' var='post'>
  <article class='post' expr:id='"post-" + data:post.id' itemscope='itemscope' itemtype='http://schema.org/BlogPosting' role='article'>
    <!-- Content title and snippet -->
    <div class='post-content'>
      <!-- Post title -->
      <b:if cond='data:post.title'>
        <h2 class='post-title' itemprop='name headline'>
          <a class='post-title-link' expr:href='data:post.url' itemprop='url'><data:post.title/></a>
        </h2>
      </b:if>
      <!-- Post snippet -->
      <p itemprop='articleBody description'><data:post.snippet/></p>
    </div>
    <!-- Image -->
    <div class='post-img-bottom' itemprop='thumbnail'>
      <b:include name='include-thumbnail'/>
    </div><!-- /.post-img-bottom -->
    <!-- Content button -->
    <div class='post-content'>
      <p class='text-xs-center'><a class='btn btn-primary' expr:href='data:post.url' itemprop='url' role='button'>Read more</a></p>
    </div>
  </article><!-- /.post -->
</b:loop>
{% endhighlight %}

### With `.post-img-left` and `.post-img-right`

<div class="bd-example">
  <div class="post">
    <div class="post-content">
      <h2 class="post-title"><a class="post-title-link" href="#">Post title</a></h2>
    </div>
    <div class="post-content">
      <div class="post-horizontal">
        <div class="post-img-left">
          <a href="#"><img data-src="holder.js/100px180/?auto=yes&text=Image" alt="Image"/></a>
        </div>
        <div class="post-content">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...</p>
        </div>
      </div>
    </div>
    <div class="post-content">
      <p class="text-xs-right"><a class="btn btn-primary" href="#">Read more</a></p>
    </div>
  </div>
</div><!-- /.bd-example -->

{% highlight html %}
<b:loop values='data:posts' var='post'>
  <article class='post' expr:id='"post-" + data:post.id' itemscope='itemscope' itemtype='http://schema.org/BlogPosting' role='article'>
    <!-- Content title -->
    <div class='post-content'>
      <b:if cond='data:post.title'>
        <h2 class='post-title' itemprop='name headline'>
          <a class='post-title-link' expr:href='data:post.url' itemprop='url'><data:post.title/></a>
        </h2>
      </b:if>
    </div>
    <!-- Content horizontal -->
    <div class='post-content'>
      <div class='post-horizontal'>
        <!-- Image -->
        <div class='post-img-left' itemprop='thumbnail'>
          <b:include name='include-thumbnail'/>
        </div><!-- /.post-img-left -->
        <!-- Content -->
        <div class='post-content'>
          <!-- Post snippet -->
          <p itemprop='articleBody description'><data:post.snippet/></p>
        </div><!-- /.post-content -->
      </div><!-- /.post-horizontal -->
    </div>
    <!-- Content button -->
    <div class='post-content'>
      <p class='text-xs-right'><a class='btn btn-primary' expr:href='data:post.url' itemprop='url' role='button'>Read more</a></p>
    </div>
  </article><!-- /.post -->
</b:loop>
{% endhighlight %}

<div class="bd-example">
  <div class="post">
    <div class="post-content">
      <h2 class="post-title"><a class="post-title-link" href="#">Post title</a></h2>
    </div>
    <div class="post-content">
      <div class="post-horizontal">
        <div class="post-content">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...</p>
        </div>
        <div class="post-img-right">
          <a href="#"><img data-src="holder.js/100px180/?auto=yes&text=Image" alt="Image"/></a>
        </div>
      </div>
    </div>
    <div class="post-content">
      <p class="text-xs-right"><a class="btn btn-primary" href="#">Read more</a></p>
    </div>
  </div>
</div><!-- /.bd-example -->

{% highlight html %}
<b:loop values='data:posts' var='post'>
  <article class='post' expr:id='"post-" + data:post.id' itemscope='itemscope' itemtype='http://schema.org/BlogPosting' role='article'>
    <!-- Content title -->
    <div class='post-content'>
      <b:if cond='data:post.title'>
        <h2 class='post-title' itemprop='name headline'>
          <a class='post-title-link' expr:href='data:post.url' itemprop='url'><data:post.title/></a>
        </h2>
      </b:if>
    </div>
    <!-- Content horizontal -->
    <div class='post-content'>
      <div class='post-horizontal'>
        <!-- Content -->
        <div class='post-content'>
          <!-- Post snippet -->
          <p itemprop='articleBody description'><data:post.snippet/></p>
        </div><!-- /.post-content -->
        <!-- Image -->
        <div class='post-img-right' itemprop='thumbnail'>
          <b:include name='include-thumbnail'/>
        </div><!-- /.post-img-right -->
      </div><!-- /.post-horizontal -->
    </div>
    <!-- Content button -->
    <div class='post-content'>
      <p class='text-xs-right'><a class='btn btn-primary' expr:href='data:post.url' itemprop='url' role='button'>Read more</a></p>
    </div>
  </article><!-- /.post -->
</b:loop>
{% endhighlight %}

## Post clickable

Tambahkan `.post-clickable` ke `.post` dan tambahkan atribut `data-url`.

<div class="bd-example">
  <div class="post post-clickable" data-url="#post-clickable">
    <div class="post-content">
      <h2 class="post-title"><a class="post-title-link" href="#">Post title</a></h2>
      <div class="post-meta">
        <ul class="post-meta-list">
          <li><i class="fa fa-user"></i> <a href="#">Bootsblogger</a></li>
          <li><i class="fa fa-clock-o"></i> <time datetime="2016-04-21T13:42:00+07:00">Sep 9, 2015 7:00 PM</time></li>
          <li><i class="fa fa-comments"></i> <a href="#">5 Comments</a></li>
        </ul>
      </div>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...</p>
    </div><!-- /.post-content -->
  </div><!-- /.post -->
</div><!-- /.bd-example -->

{% highlight html %}
<b:loop values='data:posts' var='post'>
  <article class='post post-clickable' expr:data-url='data:post.url' expr:id='"post-" + data:post.id' itemscope='itemscope' itemtype='http://schema.org/BlogPosting'>
    <!-- Content -->
    <div class='post-content'>
      <!-- Post title -->
      <b:if cond='data:post.title'>
        <h2 class='post-title' itemprop='name headline'>
          <a class='post-title-link' expr:href='data:post.url' itemprop='url'><data:post.title/></a>
        </h2>
      </b:if>
      <!-- Metadata -->
      <b:if cond='data:top.showAuthor or data:top.showTimestamp or data:post.allowComments'>
        <div class='post-meta'>
          <ul class='post-meta-list'>
            <!-- Author -->
            <b:if cond='data:top.showAuthor'>
              <li>
                <b:include name='include-author'/>
              </li>
            </b:if>
            <!-- Timestamp -->
            <b:if cond='data:top.showTimestamp'>
              <li>
                <b:include name='include-timestamp'/>
              </li>
            </b:if>
            <!-- Num comments -->
            <b:if cond='data:post.allowComments'>
              <li>
                <b:include name='include-num-comments'/>
              </li>
            </b:if>
          </ul>
        </div><!-- /.post-meta -->
      </b:if>
      <!-- Post snippet -->
      <p itemprop='articleBody description'><data:post.snippet/></p>
    </div><!-- /.post-content -->
  </article><!-- /.post -->
</b:loop>
{% endhighlight %}

Hanya pada gambar:

<div class="bd-example">
  <div class="post">
    <div class="post-horizontal">
      <div class="post-img-left post-img-cover post-clickable holderjs" style="min-height: 150px;" data-background-src="?holder.js/500x250/?text=Image" data-url="#post-clickable"></div>
      <div class="post-content">
        <h2 class="post-title"><a class="post-title-link" href="#">Post title</a></h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...</p>
        <p><a class="btn btn-primary" href="#">Read more</a></p>
      </div>
    </div>
  </div>
</div><!-- /.bd-example -->

{% highlight html %}
<b:loop values='data:posts' var='post'>
  <article class='post' expr:id='"post-" + data:post.id' itemscope='itemscope' itemtype='http://schema.org/BlogPosting' role='article'>
    <div class='post-horizontal'>
      <!-- Image -->
      <b:if cond='data:post.firstImageUrl'>
        <div class='post-img-left post-img-cover post-clickable' expr:data-url='data:post.url' expr:style='&quot;min-height: 150px; background-image: url(&quot; + data:post.firstImageUrl + &quot;);&quot;'></div><!-- /.post-img-left -->
      <b:else/>
        <!-- Default no image -->
        <div class='post-img-left post-img-cover post-clickable' expr:data-url='data:post.url' style='min-height: 150px; background-image: url(https://placehold.it/600x400/eee/777?text=NO+IMAGE+AVAILABLE);'></div><!-- /.post-img-left -->
      </b:if>
      <!-- Content -->
      <div class='post-content'>
        <!-- Post title -->
        <b:if cond='data:post.title'>
          <h2 class='post-title' itemprop='name headline'>
            <a class='post-title-link' expr:href='data:post.url' itemprop='url'><data:post.title/></a>
          </h2>
        </b:if>
        <!-- Post snippet -->
        <p itemprop='articleBody description'><data:post.snippet/></p>
        <p><a class='btn btn-primary' expr:href='data:post.url' itemprop='url' role='button'>Read more</a></p>
      </div><!-- /.post-content -->
    </div><!-- /.post-horizontal -->
  </article><!-- /.post -->
</b:loop>
{% endhighlight %}
