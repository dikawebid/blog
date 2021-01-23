---
layout: post
status: publish
disqus: y 
share: y 
publish: y
title: Membuat Sistem Modular HMVC Pada CodeIgniter
author: dika
author_login: ferdhika31
author_email: rpl4rt08@gmail.com
author_url: http://dika.web.id
wordpress_id: 333
wordpress_url: http://blog.dika.web.id/?p=333
date: '2015-02-21 09:23:16 +0700'
date_gmt: '2015-02-21 02:23:16 +0700'
categories:
- Tutorial
- Web Development
- PHP
- Code Igniter
tags: []
comments:
- id: 102
  author: rikoy
  author_email: rikoy@live.com
  author_url: ''
  date: '2015-07-01 11:10:48 +0700'
  date_gmt: '2015-07-01 04:10:48 +0700'
  content: thanks gan, izin download...
- id: 118
  author: freddy
  author_email: sidaurukfreddy@gmail.com
  author_url: ''
  date: '2015-08-04 12:16:27 +0700'
  date_gmt: '2015-08-04 05:16:27 +0700'
  content: "hello, sebenarnya pada intinya sama saja toh pada penggunaan MVC biasa
    namun controller di bungkus dengan folder modules ya ? please reply lagi mau terapin
    HMV di project yang baru, thanks\r\n\r\n\r\nFreddy"
- id: 120
  author: Ferdhika Yudira
  author_email: rpl4rt08@gmail.com
  author_url: http://dika.web.id
  date: '2015-08-06 15:13:29 +0700'
  date_gmt: '2015-08-06 08:13:29 +0700'
  content: iyaa gan, tapi mungkin bisa lebih rapi strukturnya jika menggunakan module..
    :D
- id: 678
  author: adam dani
  author_email: aadamreareo@gmail.com
  author_url: ''
  date: '2016-07-18 11:15:53 +0700'
  date_gmt: '2016-07-18 04:15:53 +0700'
  content: HMVC kalo pake Harviacode, ditaruh difolder mana gan?
- id: 833
  author: Shah Rukh Khan
  author_email: plegmatis.bastard@gmail.com
  author_url: ''
  date: '2016-10-08 08:45:18 +0700'
  date_gmt: '2016-10-08 01:45:18 +0700'
  content: Kalo misalnya mau terapin tutorial multi level yang ada di web ini tetep
    sama aja kan tutorial nya seperti itu?
---
<p>Pagi kawan, hari ini saya akan memposting tutorial men setting modul HMVC pada code igniter.. Saya inget waktu dulu pas PKL pas pertama kalinya belajar nih framework, saat pertama menggunakan codeigniter, kita mau gak mau harus menerapkan MVC dalam menggunakannya. dimana controler di folder controllers, model di folder models, dan view di folder views.</p>
<p><!--more--></p>
<p><a href="http://blog.dika.web.id/wp-content/uploads/2014/12/codeigniter.png"><img class="aligncenter size-medium wp-image-82" src="http://blog.dika.web.id/wp-content/uploads/2014/12/codeigniter-300x300.png" alt="Codeigniter" width="300" height="300" /></a>
<br/>Waktu itu saya mengenal framework ini ketika lomba lcw 9 yang di selenggarakan di upi.. dan kaka kelas saya menggunakan framework ini, dan tertarik dengan framework yang satu ini.. dan akhirnya sampai sekarang saya menggunakan framework yang satu ini dalam membuat suatu website.. oh iya suatu ketika aku terpikir untuk membuat modular system menggunakan codeigniter. setelah beberapa waktu mencari di mesin pencari kesayangan si google, akhirnya aku menemukan juga &ldquo;<strong>HMVC</strong>&ldquo;, sebuah script untuk membuat codeigniter dapat melakukan sytem modular.</p>
<p>Disini saya menggunakan bahan untuk tutorial ini yaitu :</p>
<ul>
<li>XAMPP (<a href="http://download.dika.web.id/index.php/donlod/detail/2" target="_blank">Download Web Server</a>)</li>
<li>Code Igniter V.2.2.0 (<a href="http://download.dika.web.id/index.php/donlod/detail/3" target="_blank">Download Framework PHP</a>)</li>
<li>HMVC (<a href="http://download.dika.web.id/index.php/donlod/detail/4" target="_blank">Download Module CI</a>)</li>
</ul>
<p>Jika semua sudah ada dalam laptop/komputer anda, mari kita mulai menyetting modul HMVC ini..</p>
<p>Copy paste modul HMVC ke dalam folder <strong><em>application </em></strong>sehingga terdapat file</p>
<blockquote><p>application<br />
-core<br />
--MY_Loader.php<br />
--MY_Router.php<br />
-third_party<br />
--MX<br />
---Base.php<br />
---Ci.php<br />
---Config.php<br />
---Controller.php<br />
---Lang.php<br />
---Loader.php<br />
---Modules.php<br />
---Router.php</p></blockquote>
<p>Setelah itu, sisipkan code dibawah di file <em><strong>application/config/config.php</strong></em></p>
{% highlight php %}
	$config['modules_locations'] = array(
    	APPPATH.'modules/' => '../modules/',
	);
{% endhighlight %}

<p>dan jika sudah, buatlah folder <strong>modules</strong> dalam folder <strong>application </strong>sehingga seperti ini :</p>
<p><a href="http://blog.dika.web.id/wp-content/uploads/2015/02/RPL4rt-Studio-capture-243.png"><img class="aligncenter size-full wp-image-335" src="http://blog.dika.web.id/wp-content/uploads/2015/02/RPL4rt-Studio-capture-243.png" alt="RPL4rt Studio capture #243" width="173" height="361" /></a><br/>setelah itu buat file dalam folder<strong> application/modules/nama_module/controllers, </strong>untuk contoh saya buat seperti ini :</p>

{% highlight php %}
<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');
class Beranda extends MX_Controller {
	/**
	* @Author				: Localhost {Ferdhika Yudira}
	* @Email				: fer@dika.web.id
	* @Web					: http://dika.web.id
	* @Date					: 2015-02-21 08:31:25
	**/

	public function index(){
		echo "ini beranda";
	}
}
{% endhighlight %}

<p>nah setelah itu coba jalankan di web server anda dengan url <em><strong>http://localhost/folder_ci/nama_modul/nama_controller</strong></em></p>
<p>Selamat mencoba.. :D semoga berhasil.. :D</p>
<p style="text-align: center;"><a href="http://download.dika.web.id/index.php/donlod/detail/5" target="_blank">Download Hasil</a></p>
<p>Ada beberapa catatan penting yang harus ada perhatikan disini :</p>
<ol>
<li>Nama modul yang dibuat, harus sama dengan nama file controler didalamnya. jika tidak, penulis sendiri mengalami eror.</li>
</ol>
<p>&nbsp;</p>
<p>Source: http://code.tutsplus.com/tutorials/hmvc-an-introduction-and-application--net-11850</p>
