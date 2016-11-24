---
layout: docs
title: Widget columns
description: Tampilan kolom widget seperti Masonry dengan hanya menggunakan CSS. 
group: components
---

Tampilan kolom widget seperti [Masonry](http://masonry.desandro.com/) dengan hanya menggunakan CSS. 

## Contents

* Will be replaced with the ToC, excluding the "Contents" header
{:toc}

## Examples

Gunakan `.wg-columns`. **Perhatian!** Ini **tidak bekerja di IE9 ke bawah**, karena mereka tidak mendukung properti CSS `column-*`.

Hanya diterapkan pada perangkat kecil ke atas. Pada perangkat kecil ke atas (&ge;576px) akan tampil dua kolom dan pada perangkat sedang ke atas (&ge;768px) akan tampil tiga kolom, pada perangkat sangat kecil (&lt;576px) hanya tampil satu kolom.

Urutan widget dimulai dari atas ke bawah dan dari kiri ke kanan.

<div class="bd-example">
  <div class="wg-columns wg-panel wg-panel-teal">
    <div class="widget">
      <h2>Widget title 1</h2>
      <div class="widget-content">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
      </div>
    </div><!-- /.widget -->
    <div class="widget">
      <h2>Widget title 2</h2>
      <div class="widget-content">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
      </div>
    </div><!-- /.widget -->
    <div class="widget">
      <h2>Widget title 3</h2>
      <div class="widget-content">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
      </div>
    </div><!-- /.widget -->
    <div class="widget">
      <h2>Widget title 4</h2>
      <div class="widget-content">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
      </div>
    </div><!-- /.widget -->
    <div class="widget">
      <h2>Widget title 5</h2>
      <div class="widget-content">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
      </div>
    </div><!-- /.widget -->
    <div class="widget">
      <h2>Widget title 6</h2>
      <div class="widget-content">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
      </div>
    </div><!-- /.widget -->
  </div>
</div><!-- /.bd-example -->

{% highlight html %}
<b:section class='wg-panel wg-panel-teal wg-columns' id='sectionId'></b:section>
{% endhighlight %}

<div class="bd-example">
  <div class="wg-columns wg-box wg-box-faded">
    <div class="widget">
      <h2>Widget title 1</h2>
      <div class="widget-content">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
      </div>
    </div><!-- /.widget -->
    <div class="widget">
      <h2>Widget title 2</h2>
      <div class="widget-content">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
      </div>
    </div><!-- /.widget -->
    <div class="widget">
      <h2>Widget title 3</h2>
      <div class="widget-content">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
      </div>
    </div><!-- /.widget -->
    <div class="widget">
      <h2>Widget title 4</h2>
      <div class="widget-content">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
      </div>
    </div><!-- /.widget -->
    <div class="widget">
      <h2>Widget title 5</h2>
      <div class="widget-content">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
      </div>
    </div><!-- /.widget -->
    <div class="widget">
      <h2>Widget title 6</h2>
      <div class="widget-content">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
      </div>
    </div><!-- /.widget -->
  </div>
</div><!-- /.bd-example -->

{% highlight html %}
<b:section class='wg-box wg-box-faded wg-columns' id='sectionId'></b:section>
{% endhighlight %}

<div class="bd-example">
  <div class="wg-columns wg-basic wg-basic-blue">
    <div class="widget">
      <h2>Widget title 1</h2>
      <div class="widget-content">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
      </div>
    </div><!-- /.widget -->
    <div class="widget">
      <h2>Widget title 2</h2>
      <div class="widget-content">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
      </div>
    </div><!-- /.widget -->
    <div class="widget">
      <h2>Widget title 3</h2>
      <div class="widget-content">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
      </div>
    </div><!-- /.widget -->
    <div class="widget">
      <h2>Widget title 4</h2>
      <div class="widget-content">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
      </div>
    </div><!-- /.widget -->
    <div class="widget">
      <h2>Widget title 5</h2>
      <div class="widget-content">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
      </div>
    </div><!-- /.widget -->
    <div class="widget">
      <h2>Widget title 6</h2>
      <div class="widget-content">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
      </div>
    </div><!-- /.widget -->
  </div>
</div><!-- /.bd-example -->

{% highlight html %}
<b:section class='wg-basic wg-basic-blue wg-columns' id='sectionId'></b:section>
{% endhighlight %}
