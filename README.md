# [Bootsblogger](https://bootsblogger.github.io)

[![Build Status](https://travis-ci.org/bootsblogger/bootsblogger.svg)](https://travis-ci.org/bootsblogger/bootsblogger)
[![devDependency Status](https://david-dm.org/bootsblogger/bootsblogger/dev-status.svg)](https://david-dm.org/bootsblogger/bootsblogger/?type=dev)

A Starter Template for Blogger using Bootstrap.

## Setup

1. [Unduh dan pasang Node](https://nodejs.org/download), yang digunakan untuk manajemen dependensi.
2. Pasang *Grunt command line tools*, `grunt-cli`, dengan menjalankan perintah `npm install -g grunt-cli` pada *command line*.
3. Dari *command line*, pindah ke direktori `/bootsblogger` dan jalankan perintah `npm install` untuk instalasi dependensi yang sudah terdaftar di dalam berkas `package.json`.
4. [Pasang Ruby](https://www.ruby-lang.org/en/documentation/installation/), kemudian pasang [Bundler](https://bundler.io/) dengan perintah `gem install bundler`, dan terakhir jalankan perintah `bundle install`, perintah ini akan memasang semua dependensi Ruby, seperti Jekyll dan *plugins*.
  - **Pengguna Windows:** Baca [panduan tidak resmi](http://jekyll-windows.juthilo.com/) agar Jekyll berjalan lancar tanpa masalah.

## Documentation

Dokumentasi Bootsblogger, tersedia di dalam repo ini, dibangun menggunakan [Jekyll](https://jekyllrb.com/), dan dipublikasikan di GitHub Pages di <https://bootsblogger.github.io>. Dokumentasi juga dapat dijalankan secara lokal.

### Menjalankan dokumentasi secara lokal

1. Kembali ke [setup](#setup) di atas untuk instalasi Jekyll dan dependensi Ruby lainnya dengan `bundle install`.
2. Dari direktori `/bootsblogger`, jalankan perintah `bundle exec jekyll serve`.
3. Buka <http://localhost:9001> di *browser* Anda, selesai.

## Contributing

Silakan baca [panduan berkontribusi](https://github.com/bootsblogger/bootsblogger/blob/master/CONTRIBUTING.md).

## Copyright and license

Code and documentation copyright 2016 Igoy Nawamreh and [Bootsblogger Authors](https://github.com/bootsblogger/bootsblogger/graphs/contributors). Code released under the [MIT License](https://github.com/bootsblogger/bootsblogger/blob/master/LICENSE). Docs released under [Creative Commons](https://github.com/bootsblogger/bootsblogger/blob/master/docs/LICENSE).
