---
layout: post
status: publish
disqus: y 
share: y 
publish: y
title: Mengenal Aksesbilitas Property & Method dengan Encapsulation
author: dika
author_login: ferdhika31
author_email: rpl4rt08@gmail.com
author_url: http://dika.web.id
wordpress_id: 247
wordpress_url: http://blog.dika.web.id/?p=247
date: '2015-02-02 19:11:37 +0700'
date_gmt: '2015-02-02 12:11:37 +0700'
categories:
- Tutorial
- PHP
tags:
- Object Oriented Programming PHP
comments: []
---
<p>Selamat sore bro, udah mau magrib nih.. sebelum ke air saya mau ngelanjutin postingan <strong><a href="/2015/01/belajar-oop-object-oriented-programming-menggunakan-php-untuk-pemula.html" target="_blank">Belajar OOP (Object Oriented Programming) Menggunakan PHP Untuk Pemula</a></strong> sebelumnya saya sudah memposting artikel <a href="/2015/02/mengenal-constructors-destructors.html" target="_blank">Mengenal Constructors &amp; Destructors </a>dan sekarang saya melanjutkan dengan postingan ke 3 di belajar oop ini.. Selamat menyimak.. :D</p>
<p>Ya pertama kita tanya dulu apa itu <strong>Encapsulation</strong>? <strong>Encapsulation</strong> adalah <em>istilah yang terkait dengan aksesbilitas property dan method dalam suatu class</em>. Dengan encapsulation ini kita bisa mengatur sebuah property dan method. Apakah sebuah property dan method ini hanya bisa diakses didalam class saja atau bisa diakses diluar class.</p>
<p><!--more--></p>
<p>Dalam encapsulation ini terbagi menjadi 3 bagian. yaitu :</p>
<ul>
<li><strong>Public</strong> => Property atau method bisa diakses dimanapun (Diluar Class)</li>
<li><strong>Private</strong> => Property atau method hanya bisa diakses didalam class saja.</li>
<li><strong>Protected</strong> => Property atau method hanya bisa diakses didalam class dan class turunannya saja.</li>
</ul>
<p>Masih bingung ? Coba praktekan dibawah ini :</p>

{% highlight php %}
<?php 
/*
* Contoh Aksesbilitas Property &amp; Method dengan Encapsulation
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
	private function StatusNilai(){
		if($this->nilai >= 70) {
		$status = "Lulus";
		}else{
		$status = "Remed";
		}
		return $status;
	}

	public function bacaStatus(){
		return $this->StatusNilai();
	}
}

$dika = new Siswa('Ferdhika',85,'XII RPL A');

echo "
	Nama  : ".$dika->nama."<br>
	Nilai   : ".$dika->nilai."<br>
	Kelas   : ".$dika->kelas."<br>
	Status  : ".$dika->bacaStatus()."
";
?>
{% endhighlight %}

<p>Terus coba jalanin di webserver nya, pasti bakal ada keterangan error seperti ini :</p>
<blockquote>Fatal error: Cannot access private property Siswa::$nilai in /../../ on line ..</blockquote>
<p>Keterangan tersebut dikarenakan kita tidak dapat memanggil property <code>$dika->nilai </code>yang sifatnya <strong>private</strong> dan <em>hanya bisa diakses didalam class saja</em>. Lalu bagaimana cara memanggilnya? Oke kita perbaiki error tersebut seperti dibawah ini.</p>
{% highlight php %}
<?php 
	/*
	* Contoh Aksesbilitas Property &amp; Method dengan Encapsulation
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

$dika = new Siswa('Ferdhika',85,'XII RPL A');

echo "
	Nama  : ".$dika->nama."<br>
	Nilai   : ".$dika->bacaNilai()."<br>
	Kelas   : ".$dika->bacaKelas()."<br>
	Status  : ".$dika->StatusNilai()."
";
?>
{% endhighlight %}

<p>Setelah itu kita jalankan dan property <code>$dika->nilai </code>bisa dibaca dengan method <code>public $dika->BacaNilai()</code>. Namun ternyata masih ada error seperti ini.</p>
<blockquote>Fatal error: Call to protected method Siswa::StatusNilai() from context '' in /.../.../ on line ..</blockquote>
<p>Itu menandakan method <strong><code>$dika->StatusNilai()</code> </strong>bersifat protected yang hanya bisa dibaca di dalam class dan class turunan classnya saja. Lalu bagaimana cara membaca method tadi di class turunan? mungkin ini belum di jelasin dalam artikel sebelumnya, tapi kita buat aja dulu sekilas tentang class turunan, untuk lebih lanjutnya pantengin aja artikel selanjutnya. Oke sekarang buatlah class turunan siswa seperti dibawah ini.</p>
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
class Nilai extends Siswa{
	public $status;

	public function bacaStatus(){
		$this->status = $this->StatusNilai();
		return $this->status;
	}
}

$turunan = new Nilai('Ferdhika',85,'XII RPL A');

echo "
	Nama  : ".$turunan->nama."<br>
	Nilai   : ".$turunan->bacaNilai()."<br>
	Kelas   : ".$turunan->bacaKelas()."<br>
	Status  : ".$turunan->bacaStatus()."
";

?>
{% endhighlight %}

<p>Gimana? udah ga ada error lagi kan? :D kalo masih error coba perhatikan errornya dimana :p semoga tutorial lanjutan ini bermanfaat yaw.. :D sampai jumpa di tutorial selanjutnya :D</p>
