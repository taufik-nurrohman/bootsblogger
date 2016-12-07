---
layout: docs
title: Best practices
description: Suatu teknik, metode, atau proses yang lebih efektif dalam bekerja dengan Bootsblogger.
group: getting-started
---

Suatu teknik, metode, atau proses yang lebih efektif dalam bekerja dengan Bootsblogger.

## Contents

* Will be replaced with the ToC, excluding the "Contents" header
{:toc}

## Membangun template langsung di template editor Blogger

Pasang template dasar Bootsblogger di blog Anda (`dist/template.xml`). Di bawah ini ada beberapa tips yang akan memudahkan Anda.

### Code folding

Gunakan fitur code folding yang ada pada template editor Blogger agar kode template tidak terlihat berantakan dan membingungkan, juga akan memudahkan untuk menemukan bagian kode tertentu, [lihat gambar]({{ site.baseurl }}/assets/img/blogger-code-folding.png).

### Code indentation

Selalu perhatikan indentasi kode agar kode lebih mudah dibaca dan dipahami. Atur indentasi menggunakan dua spasi.

## Membangun template di dalam kode sumber Bootsblogger

Untuk membangun template di dalam kode sumber Anda harus memahami dasar-dasar **[Bake](https://github.com/MathiasPaumgarten/grunt-bake)**, karena Bootsblogger menggunakan Bake untuk mengurai template menjadi beberapa bagian, sehingga akan mempermudah proses pembuatan dan pengeditan template, juga memanfaatkan fitur-fitur Bake lainnya.

### Struktur direktori

{% highlight plaintext %}
bootsblogger/
└── template-src/
    ├── includes/ # semua konten template disimpan di dalam `includes/`.
    │   ├── assets # CSS dan JavaScript Bootsblogger dan Bootstrap, dan assets Anda disimpan di sini.
    │   ├── blog-posts # widget blog posts.
    │   ├── foot-content # konten untuk footer disimpan di sini.
    │   └── head-content # konten yang ada di dalam `<head>` disimpan di sini.
    ├── config.json # konfigurasi template.
    ├── style.css # main CSS.
    └── template-src.xml # berkas utama yang akan dikompilasi ke dalam `dist/`.
{% endhighlight %}

**Catatan:** Anda dapat membuat direktori dan/atau berkas baru sesuai dengan kebutuhan Anda, disarankan disimpan di dalam `includes/`.

### Include

Memuat konten atau berkas-berkas yang ada di dalam `includes/`:

{% highlight html %}
<!--(bake /includes/path/file)-->
{% endhighlight %}

Untuk penggunaan Bake lebih lanjut, silakan baca dokumentasinya di [halaman projek Bake](https://github.com/MathiasPaumgarten/grunt-bake).

## Code guide

Untuk penulisan kode HTML dan CSS gunakan pedoman pengkodean [Code Guide by @mdo](http://codeguide.co).
