---
layout: docs
title: Blog posts
description: Widget blog posts dirancang untuk memudahkan dalam mengelola data posting, seperti untuk menampilkan tanggal, penulis, tentang penulis, jumlah komentar, dan masih banyak lagi. Dan juga dirancang untuk membuat tampilan posting yang unik/berbeda-beda di setiap tipe halaman.
group: core-template
---

Widget *blog posts* dirancang untuk memudahkan dalam mengelola data posting, seperti untuk menampilkan tanggal, penulis, tentang penulis, jumlah komentar, dan masih banyak lagi. Dan juga dirancang untuk membuat tampilan posting yang unik/berbeda-beda di setiap tipe halaman.

## Contents

* Will be replaced with the ToC, excluding the "Contents" header
{:toc}

## Quick start example

Contoh dasar untuk menampilkan posting.

- Selalu tempatkan kode posting di dalam `b:loop`.
- Selalu gunakan tag kondisional, seperti `b:if cond='data:post.title'` dan lainya.
- Selalu gunakan [includes](#includes) yang tersedia.
- Gunakan [Schema](https://schema.org).

{% highlight html %}
<b:loop values='data:posts' var='post'>
  <article class='post-example' expr:id='"post-" + data:post.id' itemscope='itemscope' itemtype='http://schema.org/BlogPosting'>
    <!-- Post title -->
    <b:if cond='data:post.title'>
      <h2 class='post-title' itemprop='name headline'>
        <a expr:href='data:post.url' expr:title='data:post.title' itemprop='url'><data:post.title/></a>
      </h2>
    </b:if>
    <!-- Post author -->
    <b:if cond='data:top.showAuthor'>
      <b:include name='include-author'/>
    </b:if>
  </article>
</b:loop>
{% endhighlight %}

## Data tags

Tag data yang tersedia untuk blog posting. Untuk tag data lainya Anda dapat menggunakan [includes](#includes).

| Kode | Deskripsi |
| ---- | --------- |
| `data:post.id` | Nomor unik posting. |
| `data:post.title` | Judul posting. |
| `data:post.url` | URL posting. |
| `data:post.body` | Tubuh posting. |
| `data:post.snippet` | Tubuh posting yang sudah dipotong (ringkasan). |

## Unique posts

Buat tampilan posting yang unik/berbeda-beda di setiap tipe halaman. Untuk membuatnya sangat mudah, cukup tempatkan kode posting yang berbeda pada masing-masing bagian berikut:

#### Homepage

Tampilan posting untuk halaman beranda.

{% highlight html %}
<b:includable id='post-home' var='post'>...</b:includable>
{% endhighlight %}

#### Item/single page

Tampilan posting untuk halaman posting (item).

{% highlight html %}
<b:includable id='post-item' var='post'>...</b:includable>
{% endhighlight %}

#### Static page

Tampilan posting untuk halaman statis.

{% highlight html %}
<b:includable id='post-static' var='post'>...</b:includable>
{% endhighlight %}

#### Label/category page

Tampilan posting untuk halaman kategori.

{% highlight html %}
<b:includable id='post-label' var='post'>...</b:includable>
{% endhighlight %}

#### Search results page

Tampilan posting untuk halaman hasil pencarian.

{% highlight html %}
<b:includable id='post-search' var='post'>...</b:includable>
{% endhighlight %}

#### Archive page

Tampilan posting untuk halaman arsip.

{% highlight html %}
<b:includable id='post-archive' var='post'>...</b:includable>
{% endhighlight %}

## Includes

[Includes](https://support.google.com/blogger/answer/46995?hl=en&ref_topic=6321969) sangat berguna ketika kita ingin menggunakan kode yang sama, tanpa harus menulis ulang kode tersebut, cukup dengan:

{% highlight html %}
<b:include name='includable-id'/>
{% endhighlight %}

*Includes* di bawah ini adalah untuk memudahkan dalam menampilkan data dan informasi posting seperti penulis, tanggal, jumlah komentar, label, dan yang lainnya. Nama *includes* selalu dimulai dengan `include-*`.

Untuk **#1** sampai dengan **#12** harus menggunakan tag kondisional, karena ini berhubungan dengan opsi posting [ <a href="javascript:;" data-toggle="modal" data-target=".image-post-options">lihat gambar</a> ]. Untuk mengetahui bagian opsinya samakan nomor pada tabel dengan nomor pada gambar.

<div class="table-responsive">
  <table class="table table-bordered table-includes">
    <tbody>
      <tr>
        <th class="text-nowrap text-xs-right" scope="row">#1</th>
        <td><strong>Tanggal / date header</strong> <br>Pengelompokan posting berdasarkan tanggal diterbitkannya posting.</td>
      </tr>
      <tr>
        <th class="text-nowrap text-xs-right" scope="row">Includable</th>
        <td>None</td>
      </tr>
      <tr>
        <th class="text-nowrap text-xs-right" scope="row">Penggunaan</th>
        <td>None</td>
      </tr>
      <tr>
        <th class="text-nowrap text-xs-right" scope="row">Catatan</th>
        <td>
{% highlight html %}
<!-- Gunakan kode di bawah ini -->
<b:if cond='data:post.dateHeader'>
  <h2 class='date-header'><data:post.dateHeader/></h2>
</b:if>
{% endhighlight %}
        </td>
      </tr>
    </tbody>

    <tbody>
      <tr class="bg-faded">
        <th class="text-nowrap text-xs-right" scope="row">#2</th>
        <td><strong>Penulis</strong> <br>Untuk menambahkan nama penulis.</td>
      </tr>
      <tr class="bg-faded">
        <th class="text-nowrap text-xs-right" scope="row">Includable</th>
        <td>{% highlight html %}<b:includable id='include-author'>...</b:includable>{% endhighlight %}</td>
      </tr>
      <tr class="bg-faded">
        <th class="text-nowrap text-xs-right" scope="row">Penggunaan</th>
        <td>
{% highlight html %}
<b:if cond='data:top.showAuthor'>
  <b:include name='include-author'/>
</b:if>
{% endhighlight %}
        </td>
      </tr>
      <tr class="bg-faded">
        <th class="text-nowrap text-xs-right" scope="row">Catatan</th>
        <td>None</td>
      </tr>
    </tbody>

    <tbody>
      <tr>
        <th class="text-nowrap text-xs-right" scope="row">#3</th>
        <td><strong>Tanggal dan waktu</strong> <br>Untuk menambahkan tanggal dan/atau waktu diterbitkannya posting.</td>
      </tr>
      <tr>
        <th class="text-nowrap text-xs-right" scope="row">Includable</th>
        <td>{% highlight html %}<b:includable id='include-timestamp'>...</b:includable>{% endhighlight %}</td>
      </tr>
      <tr>
        <th class="text-nowrap text-xs-right" scope="row">Penggunaan</th>
        <td>
{% highlight html %}
<b:if cond='data:top.showTimestamp'>
  <b:include name='include-timestamp'/>
</b:if>
{% endhighlight %}
        </td>
      </tr>
      <tr>
        <th class="text-nowrap text-xs-right" scope="row">Catatan</th>
        <td>None</td>
      </tr>
    </tbody>

    <tbody>
      <tr class="bg-faded">
        <th class="text-nowrap text-xs-right" scope="row">#4</th>
        <td><strong>Jumlah komentar</strong> <br>Untuk menambahkan jumlah komentar.</td>
      </tr>
      <tr class="bg-faded">
        <th class="text-nowrap text-xs-right" scope="row">Includable</th>
        <td>{% highlight html %}<b:includable id='include-num-comments'>...</b:includable>{% endhighlight %}</td>
      </tr>
      <tr class="bg-faded">
        <th class="text-nowrap text-xs-right" scope="row">Penggunaan</th>
        <td>
{% highlight html %}
<b:if cond='data:post.allowComments'>
  <b:include name='include-num-comments'/>
</b:if>
{% endhighlight %}
        </td>
      </tr>
      <tr class="bg-faded">
        <th class="text-nowrap text-xs-right" scope="row">Catatan</th>
        <td>None</td>
      </tr>
    </tbody>

    <tbody>
      <tr>
        <th class="text-nowrap text-xs-right" scope="row">#5</th>
        <td><strong>Link</strong> <br>Buat tautan ke posting ini.</td>
      </tr>
      <tr>
        <th class="text-nowrap text-xs-right" scope="row">Includable</th>
        <td>{% highlight html %}<b:includable id='include-link-post'>...</b:includable>{% endhighlight %}</td>
      </tr>
      <tr>
        <th class="text-nowrap text-xs-right" scope="row">Penggunaan</th>
        <td>
{% highlight html %}
<b:if cond='data:post.showBacklinks'>
  <b:include name='include-link-post'/>
</b:if>
{% endhighlight %}
        </td>
      </tr>
      <tr>
        <th class="text-nowrap text-xs-right" scope="row">Catatan</th>
        <td>Ini adalah pengganti <em>backlinks</em>. Selain pada halaman item, kode ini hanya menampilkan <em>popover</em> yang berisi URL.</td>
      </tr>
    </tbody>

    <tbody>
      <tr class="bg-faded">
        <th class="text-nowrap text-xs-right" scope="row">#6</th>
        <td><strong>Daftar label</strong> <br>Untuk menambahkan daftar label.</td>
      </tr>
      <tr class="bg-faded">
        <th class="text-nowrap text-xs-right" scope="row">Includable</th>
        <td>{% highlight html %}<b:includable id='include-labels'>...</b:includable>{% endhighlight %}</td>
      </tr>
      <tr class="bg-faded">
        <th class="text-nowrap text-xs-right" scope="row">Penggunaan</th>
        <td>
{% highlight html %}
<b:if cond='data:top.showPostLabels'>
  <b:include name='include-labels'/>
</b:if>
{% endhighlight %}
        </td>
      </tr>
      <tr class="bg-faded">
        <th class="text-nowrap text-xs-right" scope="row">Catatan</th>
        <td>None</td>
      </tr>
    </tbody>

    <tbody>
      <tr>
        <th class="text-nowrap text-xs-right" scope="row">#7</th>
        <td><strong>Reaksi</strong> <br>Untuk menambahkan daftar reaksi terhadap posting.</td>
      </tr>
      <tr>
        <th class="text-nowrap text-xs-right" scope="row">Includable</th>
        <td>{% highlight html %}<b:includable id='include-reactions'>...</b:includable>{% endhighlight %}</td>
      </tr>
      <tr>
        <th class="text-nowrap text-xs-right" scope="row">Penggunaan</th>
        <td>
{% highlight html %}
<b:if cond='data:top.showReactions'>
  <b:include name='include-reactions'/>
</b:if>
{% endhighlight %}
        </td>
      </tr>
      <tr>
        <th class="text-nowrap text-xs-right" scope="row">Catatan</th>
        <td>None</td>
      </tr>
    </tbody>

    <tbody>
      <tr class="bg-faded">
        <th class="text-nowrap text-xs-right" scope="row">#8</th>
        <td><strong>Edit</strong> <br>Tautan untuk edit posting.</td>
      </tr>
      <tr class="bg-faded">
        <th class="text-nowrap text-xs-right" scope="row">Includable</th>
        <td>{% highlight html %}<b:includable id='include-edit-post'>...</b:includable>{% endhighlight %}</td>
      </tr>
      <tr class="bg-faded">
        <th class="text-nowrap text-xs-right" scope="row">Penggunaan</th>
        <td>
{% highlight html %}
<b:if cond='data:post.editUrl'>
  <b:include name='include-edit-post'/>
</b:if>
{% endhighlight %}
        </td>
      </tr>
      <tr class="bg-faded">
        <th class="text-nowrap text-xs-right" scope="row">Catatan</th>
        <td>None</td>
      </tr>
    </tbody>

    <tbody>
      <tr>
        <th class="text-nowrap text-xs-right" scope="row">#9</th>
        <td><strong>Email</strong> <br>Tautan untuk email posting.</td>
      </tr>
      <tr>
        <th class="text-nowrap text-xs-right" scope="row">Includable</th>
        <td>{% highlight html %}<b:includable id='include-email-post'>...</b:includable>{% endhighlight %}</td>
      </tr>
      <tr>
        <th class="text-nowrap text-xs-right" scope="row">Penggunaan</th>
        <td>
{% highlight html %}
<b:if cond='data:post.emailPostUrl'>
  <b:include name='include-email-post'/>
</b:if>
{% endhighlight %}
        </td>
      </tr>
      <tr>
        <th class="text-nowrap text-xs-right" scope="row">Catatan</th>
        <td>None</td>
      </tr>
    </tbody>

    <tbody>
      <tr class="bg-faded">
        <th class="text-nowrap text-xs-right" scope="row">#10</th>
        <td><strong>Tombol berbagi</strong> <br>Untuk menambahkan tombol berbagi.</td>
      </tr>
      <tr class="bg-faded">
        <th class="text-nowrap text-xs-right" scope="row">Includable</th>
        <td>{% highlight html %}<b:includable id='include-share-buttons'>...</b:includable>{% endhighlight %}</td>
      </tr>
      <tr class="bg-faded">
        <th class="text-nowrap text-xs-right" scope="row">Penggunaan</th>
        <td>
{% highlight html %}
<b:if cond='data:post.sharePostUrl'>
  <b:include name='include-share-buttons'/>
</b:if>
{% endhighlight %}
        </td>
      </tr>
      <tr class="bg-faded">
        <th class="text-nowrap text-xs-right" scope="row">Catatan</th>
        <td>None</td>
      </tr>
    </tbody>

    <tbody>
      <tr>
        <th class="text-nowrap text-xs-right" scope="row">#11</th>
        <td><strong>Lokasi</strong> <br>Untuk menambahkan informasi lokasi diterbitkannya posting.</td>
      </tr>
      <tr>
        <th class="text-nowrap text-xs-right" scope="row">Includable</th>
        <td>{% highlight html %}<b:includable id='include-location'>...</b:includable>{% endhighlight %}</td>
      </tr>
      <tr>
        <th class="text-nowrap text-xs-right" scope="row">Penggunaan</th>
        <td>
{% highlight html %}
<b:if cond='data:top.showLocation'>
  <b:include name='include-location'/>
</b:if>
{% endhighlight %}
        </td>
      </tr>
      <tr>
        <th class="text-nowrap text-xs-right" scope="row">Catatan</th>
        <td>None</td>
      </tr>
    </tbody>

    <tbody>
      <tr class="bg-faded">
        <th class="text-nowrap text-xs-right" scope="row">#12</th>
        <td><strong>Tentang penulis</strong> <br>Untuk menambahkan kolom tentang penulis.</td>
      </tr>
      <tr class="bg-faded">
        <th class="text-nowrap text-xs-right" scope="row">Includable</th>
        <td>{% highlight html %}<b:includable id='include-about-author'>...</b:includable>{% endhighlight %}</td>
      </tr>
      <tr class="bg-faded">
        <th class="text-nowrap text-xs-right" scope="row">Penggunaan</th>
        <td>
{% highlight html %}
<b:if cond='data:post.authorAboutMe'>
  <b:include name='include-about-author'/>
</b:if>
{% endhighlight %}
        </td>
      </tr>
      <tr class="bg-faded">
        <th class="text-nowrap text-xs-right" scope="row">Catatan</th>
        <td>None</td>
      </tr>
    </tbody>

    <tbody>
      <tr>
        <th class="text-nowrap text-xs-right" scope="row">#13</th>
        <td><strong>Thumbnail</strong> <br>Untuk menambahkan gambar posting.</td>
      </tr>
      <tr>
        <th class="text-nowrap text-xs-right" scope="row">Includable</th>
        <td>{% highlight html %}<b:includable id='include-thumbnail'>...</b:includable>{% endhighlight %}</td>
      </tr>
      <tr>
        <th class="text-nowrap text-xs-right" scope="row">Penggunaan</th>
        <td>
{% highlight html %}
<b:include name='include-thumbnail'/>
{% endhighlight %}
        </td>
      </tr>
      <tr>
        <th class="text-nowrap text-xs-right" scope="row">Catatan</th>
        <td>Akan mengambil gambar pertama. Jika tidak tersedia akan menampilkan gambar keterangan bahwa gambar tidak tersedia, lihat di bagian <em>includable</em>.</td>
      </tr>
    </tbody>

    <tbody>
      <tr class="bg-faded">
        <th class="text-nowrap text-xs-right" scope="row">#14</th>
        <td><strong>Ringkasan posting</strong> <br>Untuk menambahkan ringkasan posting.</td>
      </tr>
      <tr class="bg-faded">
        <th class="text-nowrap text-xs-right" scope="row">Includable</th>
        <td>{% highlight html %}<b:includable id='include-summary'>...</b:includable>{% endhighlight %}</td>
      </tr>
      <tr class="bg-faded">
        <th class="text-nowrap text-xs-right" scope="row">Penggunaan</th>
        <td>
{% highlight html %}
<p><b:include name='include-summary'/></p>
{% endhighlight %}
        </td>
      </tr>
      <tr class="bg-faded">
        <th class="text-nowrap text-xs-right" scope="row">Catatan</th>
        <td>Alternatif untuk membuat ringkasan posting menggunakan JavaScript. Kode ini tetap menampilkan posting sesuai aslinya, hanya saja dipotong menggunakan JavaScript. Panjang ringkasan posting dapat berbeda-beda di setiap tipe halaman, atur dengan cara mengubah nilai variabel <code>summary</code> (lihat di bagian <em>includable</em>).</td>
      </tr>
    </tbody>

    <tbody>
      <tr>
        <th class="text-nowrap text-xs-right" scope="row">#15</th>
        <td><strong>Breadcrumb</strong> <br>Untuk menambahkan breadcrumb.</td>
      </tr>
      <tr>
        <th class="text-nowrap text-xs-right" scope="row">Includable</th>
        <td>{% highlight html %}<b:includable id='include-breadcrumb'>...</b:includable>{% endhighlight %}</td>
      </tr>
      <tr>
        <th class="text-nowrap text-xs-right" scope="row">Penggunaan</th>
        <td>
{% highlight html %}
<b:include name='include-breadcrumb'/>
{% endhighlight %}
        </td>
      </tr>
      <tr>
        <th class="text-nowrap text-xs-right" scope="row">Catatan</th>
        <td>
{% highlight html %}
<!-- Gunakan di dalam includable main -->
<b:includable id='main' var='top'>...</b:includable>
{% endhighlight %}
        </td>
      </tr>
    </tbody>
  </table>
</div>

### Conditional example

Perhatikan ketika menggunakan *includes* yang berhubungan dengan <a href="javascript:;" data-toggle="modal" data-target=".image-post-options">opsi posting</a>.

{% highlight html %}
<!-- ========== Contoh 1 ========== -->

<!-- Salah -->
<ul><!-- `ul` akan tetap ada ketika opsi penulis tidak dicentang -->
  <b:if cond='data:top.showAuthor'>
    <li>
      <b:include name='include-author'/>
    </li>
  </b:if>
</ul>

<!-- Benar -->
<b:if cond='data:top.showAuthor'>
  <ul>
    <li>
      <b:include name='include-author'/>
    </li>
  </ul>
</b:if>

<!-- ========== Contoh 2 ========== -->

<!-- Salah -->
<b:if cond='data:top.showAuthor'>
  <ul>
    <li>
      <b:include name='include-author'/>
    </li>
    <li>Item ini tidak ada hubungan dengan opsi penulis.</li>
    <li>Tetapi akan ikut menghilang ketika opsi penulis tidak dicentang.</li>
  </ul>
</b:if>

<!-- Benar -->
<ul>
  <b:if cond='data:top.showAuthor'>
    <li>
      <b:include name='include-author'/>
    </li>
  </b:if>
  <li>Item ini tidak ada hubungan dengan opsi penulis.</li>
  <li>Dan akan selalu ada walaupun opsi penulis tidak dicentang.</li>
</ul>

<!-- ========== Contoh 3 ========== -->

<!-- Salah -->
<ul><!-- `ul` akan tetap ada ketika opsi penulis dan tanggal tidak dicentang -->
  <b:if cond='data:top.showAuthor'>
    <li>
      <b:include name='include-author'/>
    </li>
  </b:if>

  <b:if cond='data:top.showTimestamp'>
    <li>
      <b:include name='include-timestamp'/>
    </li>
  </b:if>
</ul>

<!-- Benar (gunakan operator logika `or`) -->
<b:if cond='data:top.showAuthor or data:top.showTimestamp'>
  <ul>
    <b:if cond='data:top.showAuthor'>
      <li>
        <b:include name='include-author'/>
      </li>
    </b:if>

    <b:if cond='data:top.showTimestamp'>
      <li>
        <b:include name='include-timestamp'/>
      </li>
    </b:if>
  </ul>
</b:if>
{% endhighlight %}
