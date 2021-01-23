---
layout: post
status: publish
disqus: y 
share: y 
publish: y
title: Mengenal Constructors & Destructors
author: dika
author_login: ferdhika31
author_email: rpl4rt08@gmail.com
author_url: http://dika.web.id
wordpress_id: 226
wordpress_url: http://blog.dika.web.id/?p=226
date: '2015-02-01 16:05:46 +0700'
date_gmt: '2015-02-01 09:05:46 +0700'
categories:
- Tutorial
- PHP
tags:
- Object Oriented Programming PHP
comments: []
---
<p>Mumpung hari ini hari weekend, dan project ujikom ketinggalan di flashdisk temen jadi aja ga ada kerjaan selain main PTC dan akhirnya koneksi pun ngajak ribut.. yaudah deh ngeposting aja biar ada kerjaan.. kali ini kita lanjut lagi ke tutorial ke 2 dari postingan <strong><a href="/2015/01/belajar-oop-object-oriented-programming-menggunakan-php-untuk-pemula.html" target="_blank">Belajar OOP (Object Oriented Programming) Menggunakan PHP Untuk Pemula</a></strong>. Disini saya akan membahas mengenai <strong>Constructors &amp; Destructors.</strong> Lalu apa itu constructor terus apa itu destructor? mari kita bahas satu per satu.. :D</p>
<p><!--more--></p>
<p><strong>Constructor</strong> (bahasa indonesia: konstruktor) adalah method khusus yang akan dijalankan secara otomatis pada saat sebuah objek dibuat (instansiasi), yakni ketika perintah &ldquo;new&rdquo; dijalankan.</p>
<blockquote>Dalam PHP, <strong><em>constructor</em> </strong>dibuat menggunakan <em>method</em> : <strong>__construct()</strong>.</blockquote>
<p><strong>Destructor</strong> (bahasa indonesia: destruktor) adalah method khusus yang dijalankan secara otomatis pada saat sebuah objek dihapus. Di dalam PHP, seluruh objek secara otomatis dihapus ketika halaman PHP dimana objek itu berada selesai diproses. Tetapi kita juga dapat menghapus objek secara manual. <em>Destructor</em> biasanya digunakan untuk &lsquo;<em>membersihkan</em>&rsquo; beberapa <em>variabel</em>, atau menjalankan proses tertentu sebelum objek dihapus.</p>
<blockquote>Dalam PHP, destructor dibuat menggunakan method : <strong>__destruct()</strong>.</blockquote>
<p>Constructor biasa digunakan untuk membuat proses awal dalam mempersiapkan objek, seperti memberi nilai awal kepada property, memanggil method internal dan beberapa proses lain yang digunakan untuk &lsquo;mempersiapkan&rsquo; objek.</p>
<p>Constructor ini akan langsung dijalankan otomatis ketika Class di instantisasi ke dalam objek. Jika sebelumnya kita mengisikan nilai pada property satu persatu, kini kita bisa mengisi sekaligus dengan menggunakan Constructor. Untuk membuat constructor, silahkan buat kode seperti dibawah ini.</p>

{% highlight php %}
<?php 
	/*
	* Contoh Constructor
	*/

class Siswa{

	// Property
  	public $nama;
  	public $nilai;
  	public $kelas;

  	// Constructor
  	function __construct($nama,$nilai,$kelas){
  		$this->nama = $nama;
  		$this->nilai = $nilai;
  		$this->kelas = $kelas;
  	}

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

$dika = new Siswa('Ferdhika',85,'XII RPL A');

echo "
	Nama 	: ".$dika->nama."<br>
	Nilai 	: ".$dika->nilai."<br>
	Kelas 	: ".$dika->kelas."<br>
	Status 	: ".$dika->StatusNilai()."
";

?>
{% endhighlight %}

<p>Setelah <em>Constructor</em>, sekarang <em>Destructor</em>, namun destructor ini jarang sekali digunakan. Untuk penulisannya bisa anda lihat dibawah ini.</p>
{% highlight php %}
<?php 

	/*
	* Contoh Destructor
	*/

class Siswa{
  	// Constructor
  	function __construct(){
  		//code here
  	}

  	// Destructor
  	function __destruct(){
  		//code here
  	}
}
?>
{% endhighlight %}
<p>Selesai.. semoga bermanfaat :D untuk tutorial selanjutnya, saya akan membuat tutorial <strong>Aksesbilitas Property dengan Encapsulation. </strong>Pantengin aja terus tutorial postingan <strong><a href="/2015/01/belajar-oop-object-oriented-programming-menggunakan-php-untuk-pemula.html" target="_blank">Belajar OOP (Object Oriented Programming) Menggunakan PHP Untuk Pemula</a></strong>. Sampai jumpa.. :D</p>