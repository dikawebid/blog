---
layout: post
status: publish
disqus: y 
share: y 
publish: y
title: Mengenal PDO &ndash; PHP Data Object
author: dika
author_login: ferdhika31
author_email: rpl4rt08@gmail.com
author_url: http://dika.web.id
wordpress_id: 363
wordpress_url: http://blog.dika.web.id/?p=363
date: '2015-03-02 17:58:37 +0700'
date_gmt: '2015-03-02 10:58:37 +0700'
categories:
- Tutorial
- PHP
tags:
- Object Oriented Programming PHP
comments: []
---
<p>Selamat malam bro, udah lama nih ga ngelanjutin artikel <strong><a href="/2015/01/belajar-oop-object-oriented-programming-menggunakan-php-untuk-pemula.html" target="_blank">Belajar OOP (Object Oriented Programming) Menggunakan PHP Untuk Pemula</a></strong> nah sebelumnya saya pernah memposting <a href="/2015/02/latihan-membuat-kalkulator-sederhana-dengan-oop.html" target="_blank">Latihan : Membuat Kalkulator Sederhana Dengan OOP</a> sekarang selanjutnya saya akan memposting tentang PDO.</p>
<p><!--more--></p>
<p>Apa sih PDO?<b> PDO </b>adalah singkatan dari PHP Data Object&nbsp; adalah suatu ekstensi dari PHP yang sangat disarankan dan di support oleh PHP untuk melakukan koneksi dengan database. Kelebihan PDO ini adalah dapat&nbsp; menghubungkan dengan <b>berbagai database </b>tanpa&nbsp; harus merubah kodingan (kecuali query databasenya). PDO sudah mulai banyak digunakan di karenakan fiturnya yang dapat mensupport php prosedural atau php objek. Dan framework yii menggunakan PDO secara penuh dalam segala querynya.</p>
<p>Berikut adalah contoh skrip sederhana PDO :</p>

{% highlight php %}
<?php
$db_host = "localhost";
$db_user = "root";
$db_pass = "";
$db_name = "db_dika"; //nama database

$dsn = "mysql:host=$db_host;dbname=$db_name";
try{
	$pdo = new PDO($dsn, $db_user, $db_pass);
}catch(PDOException $exc){
	echo "Tidak ada koneksi PDO";
}
var_dump($pdo);
?>
{% endhighlight %}

<p>Nah segitu dulu aja, kalo dijelasin nanti aja yaw.. lagi galau nih :v</p>
<p>Sampai jumpa di postingan berikutnya.. :D semoga bermanfaat :)</p>
