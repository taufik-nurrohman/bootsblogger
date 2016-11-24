---
layout: docs
title: Body class
description: Terdapat kelas pada `<body>` yang akan berubah-ubah di setiap tipe halaman.
group: core-template
---

Terdapat kelas pada `<body>` yang akan berubah-ubah di setiap tipe halaman.

{% highlight html %}
<!-- Menggunakan `ternary selector` -->
<body expr:class='data:blog.pageType == &quot;item&quot; ? &quot;blog-page-item&quot; : data:blog.pageType == &quot;static_page&quot; ? &quot;blog-page-static&quot; : data:blog.searchLabel ? &quot;blog-page-label&quot; : data:blog.searchQuery ? &quot;blog-page-search&quot; : data:blog.pageType == &quot;archive&quot; ? &quot;blog-page-archive&quot; : data:blog.pageType == &quot;error_page&quot; ? &quot;blog-page-error&quot; : &quot;blog-page-home&quot;'>
{% endhighlight %}

{% highlight html %}
<!-- Item/single page -->
<body class="blog-page-item">...</body>

<!-- Static page -->
<body class="blog-page-static">...</body>

<!-- Label/category page -->
<body class="blog-page-label">...</body>

<!-- Search results page -->
<body class="blog-page-search">...</body>

<!-- Archive page -->
<body class="blog-page-archive">...</body>

<!-- Error page -->
<body class="blog-page-error">...</body>

<!-- Homepage -->
<body class="blog-page-home">...</body>
{% endhighlight %}

Contoh pemanfaatan:

{% highlight css %}
.blog-page-item .element {
  background-color: #e07b53;
}

.blog-page-label .element {
  display: none;
}
{% endhighlight %}
