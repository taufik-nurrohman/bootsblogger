---
layout: docs
title: Contents
description: Bootsblogger tersedia dalam dua pilihan, yaitu kode distribusi atau kode sumber.
group: getting-started
---

Bootsblogger tersedia dalam dua pilihan, yaitu terkompilasi atau kode sumber.

## Bootsblogger yang terkompilasi

Bootsblogger yang terkompilasi hanya berisi template dasar Bootsblogger hasil kompilasi dari kode sumber.

{% highlight bash %}
bootsblogger/
└── dist/
    └── template.xml
{% endhighlight %}

Pilihan ini tersedia untuk Anda yang ingin membangun template dengan hanya menggunakan template editor Blogger, di dalam berkas ini sudah terdapat CSS dan JavaScript Bootstrap dan Bootsblogger, dan juga [Font Awesome](https://fontawesome.io). Jika Anda memilih metode ini, Anda tidak akan dapat mengubah CSS dan JavaScript Bootstrap maupun Bootsblogger, karena CSS dan JavaScript tersebut hasil kompilasi dan kompresi dari kode sumber. Walaupun demikian, Anda tetap dapat mengubah komponen tertentu—baik itu komponen Bootstrap maupun Bootsblogger, dengan cara membuat *custom styles*—disarankan untuk membuat *custom styles* pada bagian main CSS.

Pelajari bagaimana [membangun template menggunakan Bootsblogger yang terkompilasi](#).

## Kode sumber Bootsblogger

Kode sumber Bootsblogger berisi CSS, JavaScript, dan template yang terkompilasi. Dan juga kode sumber Sass, JavaScript, template, dan berkas-berkas dokumentasi. Untuk lebih jelas lihat struktur di bawah ini: 

{% highlight bash %}
bootsblogger/
├── dist/
│   └── template.xml
├── docs/
├── js/
│   ├── bootsblogger/
│   └── bootstrap/
├── scss/
│   ├── bootsblogger/
│   ├── bootstrap/
│   └── _custom.scss
└── template-src/
    ├── includes/
    ├── config.json
    ├── style.css
    └── template-src.xml
{% endhighlight %}

Di dalam direktori `scss/` dan `js/` terdapat kode sumber untuk CSS dan JavaScript Bootstrap dan Bootsblogger yang akan dikompilasi ke dalam `template-src/includes/assets/`.

Berkas `scss/_custom.scss` digunakan untuk membuat *custom variable* Bootstrap dan Bootsblogger tanpa mengubah variabel asli, dengan cara menyalin variabel bawaan dari `bootstrap/_variables.scss` dan `bootsblogger/_variables.scss` ke dalam berkas ini, jangan lupa untuk menghapus nilai `!default`.

Berkas `template-src/template-src.xml` adalah kode sumber untuk `dist/template.xml`—dan merupakan berkas utama yang digunakan untuk membangun template, ini menggunakan **[Bake](https://github.com/MathiasPaumgarten/grunt-bake)**—untuk mengurai template menjadi beberapa bagian, sehingga akan mempermudah proses pembuatan dan pengeditan template, juga memanfaatkan fitur-fitur Bake yang tersedia, seperti dengan adanya `config.json`.

Pelajari bagaimana [membangun template menggunakan kode sumber Bootsblogger](#).
