---
layout: docs
title: Labels - select
description: Menampilkan daftar label dari data JSON menggunakan `<select>`.
group: blogger-json-feeds
---

Menampilkan daftar label dari data JSON menggunakan `<select>`.

## Config

{% highlight html %}
<script>
var config = {
  postsPerPage: 10,
  badge: true/false,
  text: '-- Select category --',
  classes: {
    select: 'custom-select'
  }
}
</script>
{% endhighlight %}

## Function name

Nama fungsi `labelsSelect`.

## Example

**Catatan:** jika `badge: true` dan Anda mempunyai banyak label, kecepatan memuat halaman mungkin akan berkurang.

{% example html %}
<script>
var config = {
  postsPerPage: 10,
  badge: true,
  text: '-- Labels --',
  classes: {
    select: 'custom-select'
  }
}
</script>
<script src="https://blogger.googleblog.com/feeds/posts/summary?max-results=0&amp;alt=json-in-script&amp;callback=labelsSelect"></script>
{% endexample %}
