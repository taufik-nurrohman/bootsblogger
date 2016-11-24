---
layout: docs
title: Overview
description: Template dasar Bootsblogger yang dirancang untuk memberikan kemudahan dan fitur-fitur yang luar biasa.
group: core-template
---

Template dasar Bootsblogger yang dirancang untuk memberikan kemudahan dan fitur-fitur yang luar biasa.

Sebelum Anda melanjutkan ke bagian berikutnya, di bawah ini ada beberapa hal dasar yang harus dipahami.

## Contents

* Will be replaced with the ToC, excluding the "Contents" header
{:toc}

## Page types

Blogger mempunyai 7 tipe halaman, yaitu:

1. Homepage (halaman beranda).
2. Item/single page (halaman posting).
3. Static page (halaman statis).
4. Label/category page (halaman kategori).
5. Search results page (halaman hasil pencarian).
6. Archive page (halaman arsip posting).
7. Error page (halaman galat).

## Conditional tags

Berikut adalah tag kondisional **luar biasa** untuk ke tujuh tipe halaman di atas, Anda akan banyak menemukan bentuk kondisional seperti ini pada template dasar Bootsblogger.

{% highlight html %}
<!-- Item/single page -->
<b:if cond='data:blog.pageType == &quot;item&quot;'>
  <p>Teks ini akan tampil di halaman posting.</p>

<!-- Static page -->
<b:elseif cond='data:blog.pageType == &quot;static_page&quot;'/>
  <p>Teks ini akan tampil di halaman statis.</p>

  <!-- Label/category page -->
<b:elseif cond='data:blog.searchLabel'/>
  <p>Teks ini akan tampil di halaman kategori.</p>

<!-- Search results page -->
<b:elseif cond='data:blog.searchQuery'/>
  <p>Teks ini akan tampil di halaman hasil pencarian.</p>

<!-- Archive page -->
<b:elseif cond='data:blog.pageType == &quot;archive&quot;'/>
  <p>Teks ini akan tampil di halaman arsip.</p>

<!-- Error page -->
<b:elseif cond='data:blog.pageType == &quot;error_page&quot;'/>
  <p>Teks ini akan tampil di halaman galat.</p>

<!-- Homepage -->
<b:else/>
  <p>Teks ini akan tampil di halaman beranda.</p>
</b:if>
{% endhighlight %}
