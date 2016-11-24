---
layout: docs
title: Widget basic
description: Tampilan widget yang sederhana, dengan sentuhan judul yang beragam warna.
group: components
---

Tampilan widget yang sederhana, dengan sentuhan judul yang beragam warna.

## Contents

* Will be replaced with the ToC, excluding the "Contents" header
{:toc}

## Examples

Gunakan `.wg-basic` diikuti dengan `.wg-basic-{color}`.

<div class="bd-example">
  <div class="wg-basic wg-basic-faded">
    <div class="widget">
      <h2>Widget title</h2>
      <div class="widget-content">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
      </div>
    </div><!-- /.widget -->
  </div>
  <div class="wg-basic wg-basic-blue">
    <div class="widget">
      <h2>Widget title</h2>
      <div class="widget-content">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
      </div>
    </div><!-- /.widget -->
  </div>
  <div class="wg-basic wg-basic-green">
    <div class="widget">
      <h2>Widget title</h2>
      <div class="widget-content">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
      </div>
    </div><!-- /.widget -->
  </div>
  <div class="wg-basic wg-basic-teal">
    <div class="widget">
      <h2>Widget title</h2>
      <div class="widget-content">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
      </div>
    </div><!-- /.widget -->
  </div>
  <div class="wg-basic wg-basic-red">
    <div class="widget">
      <h2>Widget title</h2>
      <div class="widget-content">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
      </div>
    </div><!-- /.widget -->
  </div>
  <div class="wg-basic wg-basic-orange">
    <div class="widget">
      <h2>Widget title</h2>
      <div class="widget-content">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
      </div>
    </div><!-- /.widget -->
  </div>
  <div class="wg-basic wg-basic-purple">
    <div class="widget">
      <h2>Widget title</h2>
      <div class="widget-content">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
      </div>
    </div><!-- /.widget -->
  </div>
  <div class="wg-basic wg-basic-yellow">
    <div class="widget">
      <h2>Widget title</h2>
      <div class="widget-content">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
      </div>
    </div><!-- /.widget -->
  </div>
  <div class="wg-basic wg-basic-pink">
    <div class="widget">
      <h2>Widget title</h2>
      <div class="widget-content">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
      </div>
    </div><!-- /.widget -->
  </div>
  <div class="wg-basic wg-basic-gray">
    <div class="widget">
      <h2>Widget title</h2>
      <div class="widget-content">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
      </div>
    </div><!-- /.widget -->
  </div>
  <div class="wg-basic wg-basic-brown">
    <div class="widget">
      <h2>Widget title</h2>
      <div class="widget-content">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
      </div>
    </div><!-- /.widget -->
  </div>
  <div class="wg-basic wg-basic-black">
    <div class="widget">
      <h2>Widget title</h2>
      <div class="widget-content">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
      </div>
    </div><!-- /.widget -->
  </div>
  <div class="wg-basic wg-basic-white">
    <div class="widget">
      <h2>Widget title</h2>
      <div class="widget-content">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
      </div>
    </div><!-- /.widget -->
  </div>
</div><!-- /.bd-example -->

{% highlight html %}
<b:section class='wg-basic wg-basic-faded' id='sectionId'></b:section>
<b:section class='wg-basic wg-basic-blue' id='sectionId'></b:section>
<b:section class='wg-basic wg-basic-green' id='sectionId'></b:section>
<b:section class='wg-basic wg-basic-teal' id='sectionId'></b:section>
<b:section class='wg-basic wg-basic-red' id='sectionId'></b:section>
<b:section class='wg-basic wg-basic-orange' id='sectionId'></b:section>
<b:section class='wg-basic wg-basic-purple' id='sectionId'></b:section>
<b:section class='wg-basic wg-basic-yellow' id='sectionId'></b:section>
<b:section class='wg-basic wg-basic-pink' id='sectionId'></b:section>
<b:section class='wg-basic wg-basic-gray' id='sectionId'></b:section>
<b:section class='wg-basic wg-basic-brown' id='sectionId'></b:section>
<b:section class='wg-basic wg-basic-black' id='sectionId'></b:section>
<b:section class='wg-basic wg-basic-white' id='sectionId'></b:section>
{% endhighlight %}

## Collapsible widget

Kelas opsional: `.open-all` dan `.open-first` untuk menentukan konten widget terlihat atau tersembunyi terlebih dahulu. `.open-all` hanya bekerja pada `.wg-collapse`.

### Basic example

Gunakan `.wg-collapse`.

<div class="bd-example">
  <div class="wg-basic wg-basic-purple wg-collapse">
    <div class="widget" id="wg-basic-1">
      <h2>Widget title</h2>
      <div class="widget-content">
        <p>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.</p>
      </div>
    </div><!-- /.widget -->
    <div class="widget" id="wg-basic-2">
      <h2>Widget title</h2>
      <div class="widget-content">
        <p>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.</p>
      </div>
    </div><!-- /.widget -->
    <div class="widget" id="wg-basic-3">
      <h2>Widget title</h2>
      <div class="widget-content">
        <p>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.</p>
      </div>
    </div><!-- /.widget -->
  </div>
</div><!-- /.bd-example -->

{% highlight html %}
<b:section class='wg-basic wg-basic-purple wg-collapse' id='sectionId'></b:section>
{% endhighlight %}

### Accordion example

Gunakan `.wg-accordion`.

<div class="bd-example">
  <div class="wg-basic wg-basic-orange wg-accordion" id="wg-basic-accordion-1">
    <div class="widget" id="wg-basic-4">
      <h2>Widget title</h2>
      <div class="widget-content">
        <p>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.</p>
      </div>
    </div><!-- /.widget -->
    <div class="widget" id="wg-basic-5">
      <h2>Widget title</h2>
      <div class="widget-content">
        <p>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.</p>
      </div>
    </div><!-- /.widget -->
    <div class="widget" id="wg-basic-6">
      <h2>Widget title</h2>
      <div class="widget-content">
        <p>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.</p>
      </div>
    </div><!-- /.widget -->
  </div>
</div><!-- /.bd-example -->

{% highlight html %}
<b:section class='wg-basic wg-basic-orange wg-accordion' id='sectionId'></b:section>
{% endhighlight %}
