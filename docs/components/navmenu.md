---
layout: docs
title: Navmenu
description: Navmenu sederhana dengan dukungan `fixed to left` dan `fixed to right`, kemudahan mengatur warna, dan dukungan konten lainnya.
group: components
---

Navmenu sederhana dengan dukungan *fixed to left* dan *fixed to right*, kemudahan mengatur warna, dan dukungan konten lainnya.

## Contents

* Will be replaced with the ToC, excluding the "Contents" header
{:toc}

## Basic example

Gunakan `.navmenu` untuk membungkus konten dan tambahkan kelas [skema warna](#color-schemes).

{% example html %}
<nav class="navmenu navmenu-light bg-faded">
  <a class="navmenu-brand" href="#">Bootsblogger</a>
  <div class="nav navmenu-nav">
    <a class="nav-item nav-link" href="#">Nav item</a>
    <a class="nav-item nav-link" href="#">Nav item again</a>
    <a class="nav-item nav-link" href="#">Another nav item</a>
  </div>
  <div class="nav navmenu-nav">
    <a class="nav-item nav-link active" href="#">Active</a>
    <a class="nav-item nav-link disabled" href="#">Disabled</a>
  </div>
</nav>
{% endexample %}

## Supported content

{% example html %}
<nav class="navmenu navmenu-light bg-faded">
  <!-- Brand -->
  <a class="navmenu-brand" href="#">Bootsblogger</a>

  <!-- Nav -->
  <div class="nav navmenu-nav">
    <a class="nav-item nav-link" href="#">Nav item</a>
    <a class="nav-item nav-link" href="#">Nav item again</a>
    <a class="nav-item nav-link" href="#">Another nav item</a>
  </div>

  <!-- Form -->
  <div class="navmenu-form">
    <form>
      <input class="form-control" type="text" placeholder="Search">
    </form>
  </div>

  <!-- Button -->
  <div class="navmenu-btn">
    <button type="button" class="btn btn-block btn-primary">Button</button>
  </div>

  <!-- Text -->
  <div class="navmenu-text">
    <p class="text-green">Bootsblogger is awesome.</p>
  </div>
</nav>
{% endexample %}

## Color schemes

Untuk mengubah warna navmenu sangatlah mudah, gunakan `.navmenu-light` atau `.navmenu-dark` untuk menyesuaikan warna teks dengan latar belakang yang terang atau gelap. Untuk warna latar belakang dapat menggunakan kelas utilitas atau dengan menambahkan `background-color`.

{% example html %}
<nav class="navmenu navmenu-light bg-faded">
  <a class="navmenu-brand" href="#">Bootsblogger</a>
  <div class="nav navmenu-nav">
    <a class="nav-item nav-link" href="#">Nav item</a>
    <a class="nav-item nav-link" href="#">Nav item again</a>
    <a class="nav-item nav-link" href="#">Another nav item</a>
  </div>
</nav>
{% endexample %}

{% example html %}
<nav class="navmenu navmenu-light" style="background-color: #e3f2fd;">
  <a class="navmenu-brand" href="#">Bootsblogger</a>
  <div class="nav navmenu-nav">
    <a class="nav-item nav-link" href="#">Nav item</a>
    <a class="nav-item nav-link" href="#">Nav item again</a>
    <a class="nav-item nav-link" href="#">Another nav item</a>
  </div>
</nav>
{% endexample %}

{% example html %}
<nav class="navmenu navmenu-dark bg-blue">
  <a class="navmenu-brand" href="#">Bootsblogger</a>
  <div class="nav navmenu-nav">
    <a class="nav-item nav-link" href="#">Nav item</a>
    <a class="nav-item nav-link" href="#">Nav item again</a>
    <a class="nav-item nav-link" href="#">Another nav item</a>
  </div>
</nav>
{% endexample %}

{% example html %}
<nav class="navmenu navmenu-dark" style="background-color: #ef6c00;">
  <a class="navmenu-brand" href="#">Bootsblogger</a>
  <div class="nav navmenu-nav">
    <a class="nav-item nav-link" href="#">Nav item</a>
    <a class="nav-item nav-link" href="#">Nav item again</a>
    <a class="nav-item nav-link" href="#">Another nav item</a>
  </div>
</nav>
{% endexample %}

## Dropdowns

{% example html %}
<nav class="navmenu navmenu-light bg-faded">
  <a class="navmenu-brand" href="#">Bootsblogger</a>
  <ul class="nav navmenu-nav">
    <li class="nav-item"><a class="nav-link" href="#">Nav item</a></li>
    <li class="nav-item"><a class="nav-link" href="#">Nav item again</a></li>
    <li class="nav-item dropdown">
      <a class="nav-link dropdown-toggle" href="javascript:;" id="navmenuDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        Dropdown link
      </a>
      <div class="dropdown-menu" aria-labelledby="navmenuDropdownMenuLink">
        <a class="dropdown-item" href="#">Action</a>
        <a class="dropdown-item" href="#">Another action</a>
        <a class="dropdown-item" href="#">Something else here</a>
      </div>
    </li>
    <li class="nav-item dropup">
      <a class="nav-link dropdown-toggle" href="javascript:;" id="navmenuDropupMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        Dropup
      </a>
      <div class="dropdown-menu" aria-labelledby="navmenuDropupMenuLink">
        <a class="dropdown-item" href="#">Action</a>
        <a class="dropdown-item" href="#">Another action</a>
        <a class="dropdown-item" href="#">Something else here</a>
      </div>
    </li>
  </ul>
</nav>
{% endexample %}

## Placement

{% example html %}
<nav class="navmenu navmenu-fixed-left navmenu-dark bg-orange">
  <a class="navmenu-brand" href="#">Fixed left</a>
  <div class="nav navmenu-nav">
    <a class="nav-item nav-link" href="#">Nav item</a>
    <a class="nav-item nav-link" href="#">Nav item again</a>
    <a class="nav-item nav-link" href="#">Another nav item</a>
  </div>
</nav>
{% endexample %}

{% example html %}
<nav class="navmenu navmenu-fixed-right navmenu-dark bg-orange">
  <a class="navmenu-brand" href="#">Fixed right</a>
  <div class="nav navmenu-nav">
    <a class="nav-item nav-link" href="#">Nav item</a>
    <a class="nav-item nav-link" href="#">Nav item again</a>
    <a class="nav-item nav-link" href="#">Another nav item</a>
  </div>
</nav>
{% endexample %}
