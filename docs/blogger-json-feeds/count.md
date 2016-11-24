---
layout: docs
title: Count
description: Untuk menghitung jumlah posting dan komentar.
group: blogger-json-feeds
---

Untuk menghitung jumlah posting dan komentar.

## Function name

Nama fungsi `count`.

## Examples

### Jumlah semua posting

{% example html %}
<p>Jumlah semua posting = <script src="https://blogger.googleblog.com/feeds/posts/summary?max-results=0&amp;alt=json-in-script&amp;callback=count"></script></p>
{% endexample %}

### Jumlah posting berdasarkan label

{% example html %}
<p>Jumlah posting dengan label <strong>Blogger</strong> = <script src="https://blogger.googleblog.com/feeds/posts/summary/-/Blogger?max-results=0&amp;alt=json-in-script&amp;callback=count"></script></p>
{% endexample %}

### Jumlah semua komentar

{% example html %}
<p>Jumlah semua komentar = <script src="https://blogger.googleblog.com/feeds/comments/summary?max-results=0&amp;alt=json-in-script&amp;callback=count"></script></p>
{% endexample %}

### Jumlah komentar dari posting tertentu

{% example html %}
<p>Jumlah komentar dari posting dengan judul "More custom template flexibility" ID "6241485945632143555" = <script src="https://blogger.googleblog.com/feeds/6241485945632143555/comments/summary?max-results=0&amp;alt=json-in-script&amp;callback=count"></script></p>
{% endexample %}

**Catatan:** sekarang blog resmi Blogger menggunakan sistem komentar Google+, jadi ini hanya berfungsi jika komentar ditulis dalam sistem komentar bawaan Blogger.
