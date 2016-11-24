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
| `grunt` | Perintah `grunt` akan menjalankan pengujian, kompilasi, dan kompresi; kompilasi dan kompresi CSS dan JavaScript Bootsblogger dan Bootstrap ke dalam `/template/includes/assets`; kompilasi template ke dalam`/dist`; kompilasi dan kompresi berkas-berkas dokumentasi. **Menggunakan [Sass](https://github.com/gruntjs/grunt-contrib-sass), [UglifyJS](https://github.com/gruntjs/grunt-contrib-uglify), [Bake](https://github.com/MathiasPaumgarten/grunt-bake), dan [Grunt Jekyll plugin](https://github.com/dannygarcia/grunt-jekyll).** |
| `grunt dist` | Kompilasi dan kompresi CSS dan JavaScript Bootsblogger dan Bootstrap ke dalam `/template/includes/assets`; dan kemudian kompilasi template ke dalam direktori `/dist`. |
| `grunt test` | Menguji CSS, HTML, dan JavaScript untuk disesuaikan dengan aturan yang telah ditentukan. **Menggunakan [scss-lint](https://github.com/ahmednuaman/grunt-scss-lint), [JSCS](https://github.com/jscs-dev/grunt-jscs), [HTML validation](https://github.com/jzaefferer/grunt-html), dan [HTMLHint](https://github.com/yaniswang/grunt-htmlhint)**. |
| `grunt docs` | Pengujian, kompilasi, dan kompresi CSS, JavaScript, dan asset lainnya yang digunakan dalam menjalankan dokumentasi secara lokal dengan `jekyll serve`. |
| `grunt watch` | Gunakan perintah ini untuk kenyamanan dalam bekerja pada kode sumber Bootsblogger. Dengan perintah ini, otomatis akan melakukan pengujian, kompilasi, dan kompresi CSS, JavaScript, template, dan Jekyll ketika Anda menyimpan perubahan yang Anda lakukan. |

Untuk lebih jelas, berikut adalah cara kerja yang paling nyaman pada kode sumber Bootsblogger:

1. Buka dua *command line*.
2. Dari *command line*, pindah ke direktori `/bootsblogger` dan jalankan perintah `grunt watch` dan `bundle exec jekyll serve` pada masing-masing *command line*.
3. Mulai bekerja dengan kode sumber.
4. Dan setelah semuanya selesai, keluarkan perintah nomor 2, dan jalankan perintah `grunt test` dan terakhir `grunt`.

## Local documentation

Menjalankan dokumentasi secara lokal membutuhkan Jekyll. Berikut adalah cara menjalankannya:

1. Kembali ke [tooling setup](#tooling-setup) [No. 4] di atas untuk instalasi Jekyll dan dependensi Ruby lainnya dengan `bundle install`. (jika belum)
2. Dari direktori `/bootsblogger`, jalankan perintah `bundle exec jekyll serve`.
3. Buka <http://localhost:9001> pada *browser* Anda, selesai.

Pelajari lebih lanjut tentang [Jekyll](https://jekyllrb.com/docs/home/).

## Troubleshooting

Jika Anda mendapat masalah ketika instalasi, hapus direktori `node_modules` dan jalankan kembali perintah `npm install`.
