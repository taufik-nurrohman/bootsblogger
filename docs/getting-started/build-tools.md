---
layout: docs
title: Build tools
description: Bootsblogger menggunakan Grunt untuk membangun CSS, JavaScript, template, dan Jekyll untuk menulis dokumentasi.
group: getting-started
---

Bootsblogger menggunakan [Grunt](http://gruntjs.com) untuk membangun CSS, JavaScript, template, dan Jekyll untuk menulis dokumentasi. Di dalam Gruntfile terdapat kumpulan perintah Grunt untuk memberikan kemudahan dalam bekerja dengan Bootsblogger—untuk kompilasi kode, menjalankan pengujian, dan lainnya.

## Tooling setup

Untuk bekerja dengan Bootsblogger dan menjalankan dokumentasi secara lokal, Anda membutuhkan kode sumber Bootsblogger, Node, dan Grunt. Ikuti langkah-langkah di bawah ini untuk memenuhi itu semua:

1. [Unduh dan pasang Node](https://nodejs.org/download), yang digunakan untuk manajemen dependensi.
2. Pasang *Grunt command line tools*, `grunt-cli`, dengan menjalankan perintah `npm install -g grunt-cli` pada *command line*.
3. Dari *command line*, pindah ke direktori `/bootsblogger` dan jalankan perintah `npm install` untuk instalasi dependensi yang sudah terdaftar di dalam berkas `package.json`.
4. [Pasang Ruby](https://www.ruby-lang.org/en/documentation/installation/), kemudian pasang [Bundler](https://bundler.io/) dengan perintah `gem install bundler`, dan terakhir jalankan perintah `bundle install`, perintah ini akan memasang semua dependensi Ruby, seperti Jekyll dan *plugins*.
  - **Pengguna Windows:** Baca [panduan tidak resmi](http://jekyll-windows.juthilo.com/) agar Jekyll berjalan lancar tanpa masalah.

## Using Grunt

Perintah Grunt yang tersedia:

| Task | Description |
| --- | --- |
| `grunt` | Jalankan perintah `grunt` untuk menjalankan pengujian secara lokal dan kompilasi CSS dan JavaScript Bootsblogger dan Bootstrap ke dalam `/template-src/includes/assets`; kompilasi template ke dalam`/dist`; dan kompilasi CSS dan JavaScript dokumentasi. **Menggunakan [Sass (grunt-contrib-sass)](https://github.com/gruntjs/grunt-contrib-sass), [Autoprefixer](https://github.com/postcss/autoprefixer), [UglifyJS (grunt-contrib-uglify)](https://github.com/gruntjs/grunt-contrib-uglify), dan [Bake (grunt-bake)](https://github.com/MathiasPaumgarten/grunt-bake).** |
| `grunt dist` | Kompilasi CSS dan JavaScript Bootsblogger dan Bootstrap ke dalam `/template-src/includes/assets` dan kompilasi template ke dalam `/dist`. |
| `grunt test` | Menjalankan [scss-lint (grunt-scss-lint)](https://github.com/ahmednuaman/grunt-scss-lint), [JSCS (grunt-jscs)](https://github.com/jscs-dev/grunt-jscs), [HTML validation (grunt-html)](https://github.com/jzaefferer/grunt-html), dan [HTML validation (grunt-htmlhint)](https://github.com/yaniswang/grunt-htmlhint) (digunakan untuk CI). |
| `grunt docs` | Membangun dan menguji CSS, JavaScript, dan asset lainnya yang digunakan dalam menjalankan dokumentasi secara lokal dengan `jekyll serve`. |
| `grunt watch` | Gunakan perintah ini untuk kenyamanan dalam bekerja pada kode sumber Bootsblogger. Dengan perintah ini, otomatis akan melakukan pengujian dan kompilasi CSS, JavaScript, dan template ketika Anda menyimpan perubahan yang Anda lakukan. |

## Local documentation

Menjalankan dokumentasi secara lokal membutuhkan Jekyll. Berikut adalah cara menjalankannya:

1. Kembali ke [tooling setup](#tooling-setup) di atas untuk instalasi Jekyll dan dependensi Ruby lainnya dengan `bundle install`.
2. Dari direktori `/bootsblogger`, jalankan perintah `bundle exec jekyll serve`.
3. Buka <http://localhost:9001> di *browser* Anda, selesai.

Pelajari lebih lanjut tentang penggunaan Jekyll dengan membaca [dokumentasinya](https://jekyllrb.com/docs/home/).

## Troubleshooting

Jika Anda mendapat masalah ketika instalasi, hapus direktori `node_modules` dan jalankan kembali perintah `npm install`.
