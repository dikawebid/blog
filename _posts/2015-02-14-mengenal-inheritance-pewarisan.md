---
layout: post
status: publish
disqus: y 
share: y 
publish: y
title: Mengenal Inheritance / Pewarisan
author: dika
author_login: ferdhika31
author_email: rpl4rt08@gmail.com
author_url: http://dika.web.id
wordpress_id: 305
wordpress_url: http://blog.dika.web.id/?p=305
date: '2015-02-14 18:56:10 +0700'
date_gmt: '2015-02-14 11:56:10 +0700'
categories:
- Tutorial
- PHP
tags:
- Object Oriented Programming PHP
comments: []
---
<p>Malam bro, udah lama ya ga ngelanjutin postingan <a href="/2015/01/belajar-oop-object-oriented-programming-menggunakan-php-untuk-pemula.html" target="_blank"><strong>Belajar OOP (Object Oriented Programming) Menggunakan PHP Untuk Pemula</strong></a> ini.. maklum lagi sibuk sama ujikom, tapi udah beres sih kalo sekarang.. hoho yo mari kita lanjut aja we ya ke tutorial selanjutnya.. Apa itu Inheritance ? Untuk apa Pewarisan ini dipakai ? Satu kasus kita sudah mempunyai <code>Class Siswa</code>, lalu kita ingin membuat objek baru yaitu <code>Mata Pelajaran</code>. Kita tidak perlu membuat properti yang ada pada <code>Class Siswa</code> kedalam <code>Class Mata Pelajaran</code>. Kita cukup membuat <code>Class Mata Pelajaran </code>yang merupakan turunan <code>Class Siswa</code>.</p>
<p><!--more--></p>
<p>Class Mata Pelajaran ini akan memiliki properti dan method yang sama dengan <code>Class Siswa</code>, namun ada property dan method khusus untuk <code>Class Mata Pelajaran </code>ini. Dalam hal ini sudah pernah diterapkan pada sesi sebelumnya <a title="Aksesbilitas Property &amp; Method dalam Encapsulation" href="/2015/02/mengenal-aksesbilitas-property-method-dengan-encapsulation.html" target="_blank">Encapsulation</a> yang mana kita membuat <code>class Nilai</code> yang menjadi turunan <code>class Siswa</code>. Bingung ? Coba kita langsung praktek pembuatan classnya dibawah ini.</p>

{% highlight php %}
<?php 

	/*
		* Perbaikan Protected
	*/

class Siswa{

	// Property
	public $nama;
	private $nilai;
	protected $kelas;

	// Constructor
	function __construct($nama,$nilai,$kelas){
		$this->nama = $nama;
		$this->nilai = $nilai;
		$this->kelas = $kelas;
	}

	// Method
	protected function StatusNilai(){
		if($this->nilai >= 70) {
			$status = "Lulus";
		}else{
			$status = "Remed";
		}
		return $status;
	}

	public function bacaNilai(){
		return $this->nilai;
	}

	public function bacaKelas(){
		return $this->kelas;
	}
}

// class turunan
class MataPelajaran extends Siswa{
	public $status;
	public $guru;
	public $matapelajaran;

	public function mapel($guru,$mapel){
		$this->guru = $guru;
		$this->matapelajaran = $mapel;
	}

	// Mengambil method dari class turunan
	public function StatusNilaiSiswa(){
		$this->status = $this->StatusNilai();
		return $this->status;
	}
}

$turunan = new MataPelajaran('Ferdhika',85,'XII RPL A');
$turunan->mapel('Bu Riza','Web Lanjut');

echo "
	Nama  : ".$turunan->nama."<br>
	Pelajaran : ".$turunan->matapelajaran."<br>
	Guru : ".$turunan->guru."<br>
	Nilai   : ".$turunan->bacaNilai()."<br>
	Kelas   : ".$turunan->bacaKelas()."<br>
	Status  : ".$turunan->StatusNilaiSiswa()."
";

?>
{% endhighlight %}

<p>Coba jalankan script PHP diatas, property dan method yang ada pada <code>class siswa </code>bisa kita baca di <code>class MataPelajaran</code>. Gampang kan ? Selanjutnya kita akan coba berlatih menggabungkan semua sesi pembelajaran ini untuk melatih kita membuat <strong>Operasi Bilangan Dengan PHP OOP</strong>.</p>
<p>Demikianlah sesi pembelajaran <strong>Inheritance / Pewarisan Dalam OOP</strong>. Terus pantengin yah <a title="Belajar PHP OOP (Object Oriented Programming) Pemula" href="/2015/01/belajar-oop-object-oriented-programming-menggunakan-php-untuk-pemula.html" target="_blank"><strong>Daftar Pembelajaran PHP OOP</strong></a> ini..</p>
<p>Semoga bermanfaat.. :D</p>