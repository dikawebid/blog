---
layout: post
status: publish
disqus: y 
share: y 
publish: y
title: 'Latihan : Membuat Kalkulator Sederhana Dengan OOP'
author: dika
author_login: ferdhika31
author_email: rpl4rt08@gmail.com
author_url: http://dika.web.id
wordpress_id: 324
wordpress_url: http://blog.dika.web.id/?p=324
date: '2015-02-16 16:28:05 +0700'
date_gmt: '2015-02-16 09:28:05 +0700'
categories:
- Tutorial
- PHP
tags:
- Object Oriented Programming PHP
comments: []
---
<p>Sore ini saya akan melanjutkan postingan tentang tutorial <a href="/?p=205" target="_blank">Belajar OOP (Object Oriented Programming) Menggunakan PHP Untuk Pemula</a> nah sebelumnya saya memposting artikel&nbsp;<a href="/?p=305" target="_blank">Mengenal Inheritance / Pewarisan</a> dan sekarang saya akan membuat latihan yang sebelumnya pernah kita pelajari di OOP ini.. disini saya akan mencoba membuat kalkulator sederhana dengan operator bilangan tambah, kurang, bagi, dan kali.. Nah langsung aja kali ya buat tutorialnya aja biar cepet.. :D</p>

{% highlight php %}
<?php
	/*
	* Kalkulator Sederhana Dengan PHP OOP
	*/

class Kalkulator{
	// Property
  	private $x;
  	private $y;

	function __construct($bil1,$bil2){
		$this->x = $bil1;
		$this->y = $bil2;
	}

	public function tambah(){
		$hasil = $this->x + $this->y;
    	return $hasil;
	}

	public function kurang(){
		$hasil = $this->x - $this->y;
    	return $hasil;
	}

	public function bagi(){
		$hasil = $this->x / $this->y;
    	return $hasil;
	}

	public function kali(){
		$hasil = $this->x * $this->y;
    	return $hasil;
	}
}

echo "<form action='' method='post'>
Bilangan 1 : <input type='text' name='bil1' />
<select name='operator'>
	<option value='tambah'>+</option>
	<option value='kurang'>-</option>
	<option value='bagi'>:</option>
	<option value='kali'>x</option>
</select>
Bilangan 2 : <input type'text' name='bil2' />
<input type='submit' name='hitung' value='Hitung'/>
</form>";

if(isset($_POST['hitung'])){
	$bil1 = $_POST['bil1'];
	$bil2 = $_POST['bil2'];
	$operator = $_POST['operator'];
	$kalkulator = new Kalkulator($bil1,$bil2);
	switch($operator) {
		case 'tambah':
			echo "Hasil dari ".$bil1." + ".$bil2." = ".$kalkulator->tambah();
			break;
		case 'kurang':
			echo "Hasil dari ".$bil1." - ".$bil2." = ".$kalkulator->kurang();
			break;
		case 'kali':
			echo "Hasil dari ".$bil1." x ".$bil2." = ".$kalkulator->kali();
			break;
		case 'bagi':
			echo "Hasil dari ".$bil1." : ".$bil2." = ".$kalkulator->bagi();
			break;
		default:
			break;
	}
}
{% endhighlight %}

<p>coba jalankan script di atas dan coba.. :D selamat mencoba.. :)</p>
<p>Sekian dulu yaw tutorial dari saya, sampai jumpa.. :D</p>
