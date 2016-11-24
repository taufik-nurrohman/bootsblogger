---
layout: docs
title: Retrieving JSON feeds
description: Mengambil data JSON feeds dari Blogger data API.
group: blogger-json-feeds
---

Blogger mempunyai data posting, halaman statis, dan komentar dalam bentuk JSON yang disediakan oleh Blogger Data API. Di bawah ini adalah cara mengambil data JSON feeds dari Blogger Data API.

## Contents

* Will be replaced with the ToC, excluding the "Contents" header
{:toc}

## Options

<div class="table-responsive">
  <table class="table table-bordered table-striped">
    <thead>
      <tr>
        <th></th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><code>{postId}</code></td>
        <td>Ganti dengan nomor unik posting.</td>
      </tr>
      <tr>
        <td><code>{label}</code></td>
        <td>Ganti dengan nama label posting.</td>
      </tr>
      <tr>
        <td><code>{type}</code></td>
        <td>
          <p>Ganti dengan <code>default</code> atau <code>summary</code>.</p>
          <ul>
            <li><code>default</code>: tubuh posting sesuai aslinya.</li>
            <li><code>summary</code>: tubuh posting yang sudah dipotong (ringkasan).</li>
          </ul>
        </td>
      </tr>
      <tr>
        <td><code>{order}</code></td>
        <td>
          <p>Ganti dengan <code>published</code> atau <code>updated</code>.</p>
          <ul>
            <li><code>published</code>: mengambil data JSON posting dan halaman statis berdasarkan pada waktu penerbitan.</li>
            <li><code>updated</code>: mengambil data JSON posting dan halaman statis berdasarkan data yang telah diperbarui.</li>
          </ul>
        </td>
      </tr>
      <tr>
        <td><code>{x}</code></td>
        <td>Ganti dengan nomor untuk mengambil data JSON mulai dari urutan ke-<code>{x}</code>. <code>{x}</code> &gt;= <code>1</code> dan tidak boleh lebih besar dari jumlah data yang ada.</td>
      </tr>
      <tr>
        <td><code>{n}</code></td>
        <td>Ganti dengan nomor untuk membatasi jumlah data JSON yang diambil sebanyak <code>{n}</code>.</td>
      </tr>
      <tr>
        <td><code>alt=json-in-script</code></td>
        <td>Untuk menandakan bahwa data yang diambil berupa JSON.</td>
      </tr>
      <tr>
        <td><code>{function}</code></td>
        <td>Ganti dengan nama fungsi (JavaScript) untuk mengubah data JSON menjadi markup HTML.</td>
      </tr>
    </tbody>
  </table>
</div>

## Posts

Mengambil data JSON posting:

{% highlight html %}
<script src="https://example.blogspot.com/feeds/posts/{type}?orderby={order}&amp;start-index={x}&amp;max-results={n}&amp;alt=json-in-script&amp;callback={function}"></script>
{% endhighlight %}

Mengambil data JSON posting berdasarkan label tertentu:

{% highlight html %}
<script src="https://example.blogspot.com/feeds/posts/{type}/-/{label}?orderby={order}&amp;start-index={x}&amp;max-results={n}&amp;alt=json-in-script&amp;callback={function}"></script>
{% endhighlight %}

## Static pages

Mengambil data JSON halaman statis:

{% highlight html %}
<script src="https://example.blogspot.com/feeds/pages/{type}?orderby={order}&amp;start-index={x}&amp;max-results={n}&amp;alt=json-in-script&amp;callback={function}"></script>
{% endhighlight %}

## Comments

Mengambil data JSON komentar:

{% highlight html %}
<script src="https://example.blogspot.com/feeds/comments/{type}?orderby={order}&amp;start-index={x}&amp;max-results={n}&amp;alt=json-in-script&amp;callback={function}"></script>
{% endhighlight %}

Mengambil data JSON komentar dari posting tertentu:

{% highlight html %}
<script src="https://example.blogspot.com/feeds/{postId}/comments/{type}?orderby={order}&amp;start-index={x}&amp;max-results={n}&amp;alt=json-in-script&amp;callback={function}"></script>
{% endhighlight %}
