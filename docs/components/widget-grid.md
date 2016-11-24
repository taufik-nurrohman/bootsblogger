---
layout: docs
title: Widget grid
description: Sistem grid untuk widget.
group: components
---

Sistem grid untuk widget.

## Contents

* Will be replaced with the ToC, excluding the "Contents" header
{:toc}

## Grid options

<div class="table-responsive">
  <table class="table table-bordered table-striped">
    <thead>
      <tr>
        <th></th>
        <th class="text-xs-center">
          Extra small<br>
          <small>&lt;576px</small>
        </th>
        <th class="text-xs-center">
          Small<br>
          <small>&ge;576px</small>
        </th>
        <th class="text-xs-center">
          Medium<br>
          <small>&ge;768px</small>
        </th>
        <th class="text-xs-center">
          Large<br>
          <small>&ge;992px</small>
        </th>
        <th class="text-xs-center">
          Extra large<br>
          <small>&ge;1200px</small>
        </th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th class="text-nowrap" scope="row">Grid behavior</th>
        <td>Horizontal at all times</td>
        <td colspan="4">Collapsed to start, horizontal above breakpoints</td>
      </tr>
      <tr>
        <th class="text-nowrap" scope="row">Class prefix</th>
        <td><code>.wg-xs-</code></td>
        <td><code>.wg-sm-</code></td>
        <td><code>.wg-md-</code></td>
        <td><code>.wg-lg-</code></td>
        <td><code>.wg-xl-</code></td>
      </tr>
      <tr>
        <th class="text-nowrap" scope="row"># of columns</th>
        <td colspan="5">12</td>
      </tr>
      <tr>
        <th class="text-nowrap" scope="row">Gutter width</th>
        <td colspan="5">30px (15px on each side of a column)</td>
      </tr>
      <tr>
        <th class="text-nowrap" scope="row">Offsets</th>
        <td colspan="5">No</td>
      </tr>
      <tr>
        <th class="text-nowrap" scope="row">Column ordering</th>
        <td colspan="5">No</td>
      </tr>
    </tbody>
  </table>
</div>

## Examples

<div class="bd-example">
  <div class="wg-panel wg-panel-orange wg-sm-6 wg-md-4 wg-lg-3 wg-grid-example">
    <div class="widget">
      <h2>Widget title</h2>
      <div class="widget-content">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
      </div>
    </div><!-- /.widget -->
    <div class="widget">
      <h2>Widget title</h2>
      <div class="widget-content">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
      </div>
    </div><!-- /.widget -->
    <div class="widget">
      <h2>Widget title</h2>
      <div class="widget-content">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
      </div>
    </div><!-- /.widget -->
    <div class="widget">
      <h2>Widget title</h2>
      <div class="widget-content">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
      </div>
    </div><!-- /.widget -->
  </div>
</div><!-- /.bd-example -->

{% highlight html %}
<b:section class='wg-panel wg-panel-orange wg-sm-6 wg-md-4 wg-lg-3' id='sectionId'></b:section>
{% endhighlight %}

<div class="bd-example">
  <div class="wg-box wg-box-faded wg-sm-6 wg-md-4 wg-grid-example">
    <div class="widget">
      <h2>Widget title</h2>
      <div class="widget-content">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
      </div>
    </div><!-- /.widget -->
    <div class="widget">
      <h2>Widget title</h2>
      <div class="widget-content">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
      </div>
    </div><!-- /.widget -->
    <div class="widget">
      <h2>Widget title</h2>
      <div class="widget-content">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
      </div>
    </div><!-- /.widget -->
  </div>
</div><!-- /.bd-example -->

{% highlight html %}
<b:section class='wg-box wg-box-faded wg-sm-6 wg-md-4' id='sectionId'></b:section>
{% endhighlight %}

<div class="bd-example">
  <div class="wg-basic wg-basic-teal wg-sm-6 wg-grid-example">
    <div class="widget">
      <h2>Widget title</h2>
      <div class="widget-content">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
      </div>
    </div><!-- /.widget -->
    <div class="widget">
      <h2>Widget title</h2>
      <div class="widget-content">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
      </div>
    </div><!-- /.widget -->
  </div>
</div><!-- /.bd-example -->

{% highlight html %}
<b:section class='wg-basic wg-basic-teal wg-sm-6' id='sectionId'></b:section>
{% endhighlight %}

## Notes

Grid widget menggunakan `calc()` untuk mengkalkulasi lebar dan jarak widget, lihat dukungan *browser* untuk [calc()](http://caniuse.com/#feat=calc). Menggunakan `calc()` adalah untuk menghindari penggunaan `padding` pada `.widget`, agar tidak merusak tampilan komponen widget lainnya, dikarenakan komponen widget lainnya seperti [widget panel]({{ site.baseurl }}/components/widget-panel/), [widget box]({{ site.baseurl }}/components/widget-box/) menerapkan CSS pada `.widget`, juga agar tidak mengganggu ketika Anda membuat komponen baru untuk widget. 
