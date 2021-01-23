---
layout: post
status: publish
publish: y
disqus: y
share: y
title: Memilih Tipe Engine Penyimpanan pada MySQL
author:
  display_name: Ferdhika Yudira
  login: ferdhika31
  email: rpl4rt08@gmail.com
  url: http://dika.web.id
author_login: ferdhika31
author_email: rpl4rt08@gmail.com
author_url: http://dika.web.id
wordpress_id: 699
wordpress_url: http://blog.dika.web.id/?p=699
date: '2016-06-19 20:01:52 +0700'
date_gmt: '2016-06-19 13:01:52 +0700'
categories:
- Artikel
- Database
tags:
- Perbedaan Engine MySQL
- Apa itu MyISAM dan InnoDB pada MySQL
- Perbedaan MyISAM dan InnoDB pada MySQL
comments: []
---
<p>Mungkin kita sudah familiar dengan DBMS yang satu ini. Jika kita memutuskan untuk menggunakan database MySQL untuk aplikasi kita, maka kita harus secara bijak memilih tipe engine penyimpanan (<em>storage engine</em>) MySQL yang sesuai dengan&nbsp; kasus yang ditangani.Tergantung situasinya, beberapa tipe engine penyimpanan mungkin menjadi pilihan terbaik tapi bisa jadi pula menjadi yang terburuk pada situasi yang lain.</p>
<p><!--more--></p>
<p>Dengan pemilihan yang benar terhadap tipe engine penyimpanan MySQL yang sesuai dengan lingkungan pemrograman aplikasi yang sedang dibuat, kita akan mendapatkan performasi aplikasi yang terbaik dan dapat mengoptimalkan penggunaan database MySQL secara efektif.</p>
<p>Nah apa aja sih perbedaan dari engine-engine yang ada pada MySQL?</p>
<h4>Kelebihan</h4>
<ul>
<li><strong>MyISAM</strong> sangat baik dan cocok untuk query yang banyak menggunakan operasi SELECT (untuk pencarian dan mengambil/menampilkan data dari database) serta operasi <em>non transactional</em>.</li>
<li><strong>innoDB</strong> cocok untuk operasi INSERT/UPDATE/DELETE secara paralel (karena menggunakan <em>row level locking</em> -- penguncian pada level baris) dan pada proses <em>transactional</em>(dengan adanya fitur <em>rollback</em>)</li>
<li><em>memory</em> (HEAP) sangat cocok untuk akses data secara cepat '<em>on the fly</em>', karena semua disimpan di memory (RAM)</li>
</ul>
<h4>Kekurangan</h4>
<ul>
<li><strong>MyISAM</strong> kurang cocok untuk operasi yang banyak menggunakan query INSERT/UPDATE (karena memakai <em>table level locking</em> -- level penguncian pada table)</li>
<li><strong>innoDB</strong> tidak cocok untuk operasi yang merupakan kombinasi dari operasi <em>non-transactional</em> dan operasi <em>read only</em> (banyak memakai query SELECT)</li>
<li><b>Memory (HEAP)</b> tidak cocok untuk penggunaan dengan waktu yang lama <em>long term usage</em> (karena adanya masalah integritas data) dan kurang cocok untuk operasi transactional</li>
</ul>
<h4>Perbedaan</h4>
<p>Tabel berikut merupakan ringkasan daftar perbedaan diantara ketiga tipe engine tersebut. Hanya fitur-fitur yg berbeda diantara ketiganya yang ditampilkan dalam daftar ini, sedangkan fitur-fitur yang sama tidak ditampilkan.</p>
<table width="100%" border="1">
<tbody>
<tr>
<th>Feature</th>
<th>MyISAM</th>
<th>InnoDB</th>
<th>Memory</th>
</tr>
<tr>
<td>ACID Transaction</td>
<td>No</td>
<td>Yes</td>
<td>No</td>
</tr>
<tr>
<td>Configurable ACID Properties</td>
<td>No</td>
<td>Yes</td>
<td>No</td>
</tr>
<tr>
<td>Crash Safe</td>
<td>No</td>
<td>Yes</td>
<td>No (RAM)</td>
</tr>
<tr>
<td>Foreign Key Support</td>
<td>No</td>
<td>Yes</td>
<td>No</td>
</tr>
<tr>
<td>Multi Version Concurrency Control (MVCC)</td>
<td>No</td>
<td>Yes</td>
<td>No</td>
</tr>
<tr>
<td>Geospatial datatype</td>
<td>Yes</td>
<td>Yes</td>
<td>No</td>
</tr>
<tr>
<td>Geospatial indexing</td>
<td>Yes</td>
<td>No</td>
<td>No</td>
</tr>
<tr>
<td>Full-text Search Index</td>
<td>Yes</td>
<td>No</td>
<td>No</td>
</tr>
<tr>
<td>Data Cache</td>
<td>No</td>
<td>Yes</td>
<td>N/A</td>
</tr>
<tr>
<td>Compressed Data</td>
<td>Yes</td>
<td>Yes</td>
<td>No</td>
</tr>
<tr>
<td>Storage Limits</td>
<td>256TB</td>
<td>64TB</td>
<td>RAM</td>
</tr>
<tr>
<td>Storage Cost</td>
<td>Low</td>
<td>High</td>
<td>N/A</td>
</tr>
<tr>
<td>Memory Cost</td>
<td>Low</td>
<td>High</td>
<td>Medium</td>
</tr>
<tr>
<td>Locking Granularity</td>
<td>Table</td>
<td>Row</td>
<td>Table</td>
</tr>
</tbody>
</table>
<p>Semoga artikel kali ini bermanfaat :)</p>
<p>Source : http://cahyadsn.dev.php.or.id/detail_article.php?id=1</p>
