---
layout: post
status: publish
disqus: y 
share: y 
publish: y
title: Mengenal Class, Property, dan Method
author: dika
author_login: ferdhika31
author_email: rpl4rt08@gmail.com
author_url: http://dika.web.id
wordpress_id: 212
wordpress_url: http://blog.dika.web.id/?p=212
date: '2015-01-29 15:12:00 +0700'
date_gmt: '2015-01-29 08:12:00 +0700'
categories:
- Tutorial
- PHP
tags:
- Object Oriented Programming PHP
comments: []
---
<p>Hari ini saya akan membuat tutorial dari postingan <strong><a href="/2015/01/belajar-oop-object-oriented-programming-menggunakan-php-untuk-pemula.html" target="_blank">Belajar OOP (Object Oriented Programming) Menggunakan PHP Untuk Pemula</a></strong> berhubung saya lagi sibuk jadi nulis 1 tutorial dulu hehe :D mari kita mulai :)</p>
<p>Apa itu class ? Apa itu property ? Apa itu method ? Mungkin anda bertanya-tanya seperti itu. Oke, mari kita pelajari satu-satu. Dalam <em>Object Oriented Programming</em>, sebuah class merupakan blueprint dari suatu object. Lalu apa bedanya class dengan function ? Sebuah class bisa berisi variable dan function. Variable yang berada didalam class disebut dengan property dan function yang berada didalam class disebut method.</p>
<p><!--more--></p>
<p>Oke kita langsung praktek pembuatan class, property beriku methodnya seperti dibawah ini.</p>

{% highlight php %}
<?php
	/*
	* Contoh Pembuatan Class, Property dan Method
	*/

	class NamaClass{
		public $variabel; // Property

		// Method
		function NamaFungsi(){
			// Isi Fungsi / Method 
		}
	}
?>
{% endhighlight %}
<p>Diatas sudah dituliskan, yang pertama <em>NamaClass</em> itu merupakan nama dari class itu sendiri, lalu <em>$variabel</em> adalah property dari class tersebut dan <em>NamaFungsi()</em> merupakan method dari class diatas. Oke sudah paham strukturnya ? Mari kita praktekan untuk kasus object siswa.</p>
{% highlight php %}
<?php 
/*
* Contoh Pembuatan Class Siswa
*/

class Siswa{
	// Property
  	public $nama;
  	public $nilai;
  	public $kelas;

  	// Method
  	function StatusNilai(){
  		if($this->nilai >= 70) {
			$status = "Lulus";
    	}else{
    		$status = "Remed";
    	}
    	return $status;
	}
}

$dika = new Siswa();
$dika->nama = "Ferdhika";
$dika->nilai = 85;
$dika->kelas = "XII RPL A";

echo "
	Nama 	: ".$dika->nama."<br>
	Nilai 	: ".$dika->nilai."<br>
	Kelas 	: ".$dika->kelas."<br>
	Status 	: ".$dika->StatusNilai()."
";

?>
{% endhighlight %}

<p>Oh iya, selain cara diatas, ada cara yang lebih di rekomendasikan dalam OOP untuk memberikan nilai property dengan menggunakan method. Untuk lebih jelasnya, silahkan buat seperti dibawah ini.</p>
{% highlight php %}
<?php 

/*
* Contoh Pembuatan Class Siswa
*/

class Siswa{
	// Property
  	public $nama;
  	public $nilai;
  	public $kelas;

  	// Method
  	function StatusNilai(){
  		if($this->nilai >= 70) {
    		$status = "Lulus";
    	}else{
    		$status = "Remed";
    	}
   		return $status;
	}

	function setNama($nama){
		$this->nama = $nama;
	}

	function setNilai($nilai){
		$this->nilai = $nilai;
	}

	function setKelas($kelas){
		$this->kelas = $kelas;
	}

	function bacaNama(){
		return $this->nama;
	}

	function bacaNilai(){
		return $this->nilai;
	}	

	function bacaKelas(){
		return $this->kelas;
	}
}

$dika = new Siswa();
$dika->setNama("Ferdhika");
$dika->setNilai(85);
$dika->setKelas("XII RPL A");

echo "
	Nama 	: ".$dika->bacaNama()."<br>
	Nilai 	: ".$dika->bacaNilai()."<br>
	Kelas 	: ".$dika->bacaKelas()."<br>
	Status 	: ".$dika->StatusNilai()."
";
?>
{% endhighlight %}

<p>Sekian tahapan pertama dari tutorial <strong><a href="/2015/01/belajar-oop-object-oriented-programming-menggunakan-php-untuk-pemula.html" target="_blank">Belajar OOP (Object Oriented Programming) Menggunakan PHP Untuk Pemula&nbsp; </a></strong>semoga bermanfaat.. :D Pantengin terus ya tutorialnya :)</p>
