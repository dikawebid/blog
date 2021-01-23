---
layout: post
status: publish
disqus: y 
share: y 
publish: y
title: Cara Konfigurasi/Memasang CKEditor dan KCFinder di CodeIgniter
author: dika
author_login: ferdhika31
author_email: rpl4rt08@gmail.com
author_url: http://dika.web.id
wordpress_id: 182
wordpress_url: http://blog.dika.web.id/?p=182
date: '2015-01-08 18:49:58 +0700'
date_gmt: '2015-01-08 11:49:58 +0700'
categories:
- Tutorial
- Web Development
- PHP
- Code Igniter
tags: []
comments:
- id: 25
  author: ahmad leo
  author_email: ahmadleoyudanto@gmail.com
  author_url: ''
  date: '2015-03-13 13:32:19 +0700'
  date_gmt: '2015-03-13 06:32:19 +0700'
  content: "thx gan infonya, ane sudah mencoba dan hampir berhasil namun ketika ane
    meng-klik tombol browse server , ane mengakses url yang tidak valid, ane mengetahui
    kesalahan ane tp gk tau bagaimana mengganti url nya. ini url yg tidak valid :\r\n\r\nhttp://localhost/CI_kcfinder/index.php/asset/kcfinder/browse.php?type=images&amp;CKEditor=editor&amp;CKEditorFuncNum=2&amp;langCode=en\r\n\r\nmenurut
    ane untuk mengakses file asset kita tidak bisa menambahkan index.php karena letak
    file asset diluar folder application.\r\n\r\nmohon pencerahannya gan, thx"
- id: 26
  author: ahmad leo
  author_email: ahmadleoyudanto@gmail.com
  author_url: ''
  date: '2015-03-13 19:23:01 +0700'
  date_gmt: '2015-03-13 12:23:01 +0700'
  content: wah ternyata gampang saja, tinggal dimasukin url yg benar saja sudah beres
    haha.
- id: 27
  author: Ferdhika Yudira
  author_email: rpl4rt08@gmail.com
  author_url: http://dika.web.id
  date: '2015-03-14 18:24:00 +0700'
  date_gmt: '2015-03-14 11:24:00 +0700'
  content: "udah solved ya gan? \r\nkalo buat setting url itu nya bisa di ubah di
    file config.js :D"
- id: 28
  author: ahmad leo
  author_email: ahmadleoyudanto@gmail.com
  author_url: ''
  date: '2015-03-16 23:56:21 +0700'
  date_gmt: '2015-03-16 16:56:21 +0700'
  content: masalah baru gan, ane masih bingung setting up session kcfinder nya, itu
    agan kan session nya gk pake setting CI tapi setting php normal, session ane masih
    blm dikenali kcfinder, padahal login sudah berhasil, mohon pencerahan suhu :)
- id: 29
  author: ahmad leo
  author_email: ahmadleoyudanto@gmail.com
  author_url: ''
  date: '2015-03-17 00:03:54 +0700'
  date_gmt: '2015-03-16 17:03:54 +0700'
  content: session kcfinder ane ini =  '_sessionVar' => "ses_kcfinder",
- id: 30
  author: Ferdhika Yudira
  author_email: rpl4rt08@gmail.com
  author_url: http://dika.web.id
  date: '2015-03-18 14:38:07 +0700'
  date_gmt: '2015-03-18 07:38:07 +0700'
  content: "setingan kcfindernya ubah jadi ini gan\r\n\r\n'_sessionVar' => &$_SESSION['ses_kcfinder'],"
- id: 65
  author: Dito
  author_email: amaddito@gmail.com
  author_url: ''
  date: '2015-04-22 09:45:27 +0700'
  date_gmt: '2015-04-22 02:45:27 +0700'
  content: "eh...bisa gak di kcfinder itu yg bisa lihat dan upload file itu hanya
    user tertentu..\r\nmksutnya gini : User A hnya bisa mengakses apa2 yg diupload
    User A, User B juga begitu hanya bisa mengakses apa2 yg diupload User B..??"
- id: 76
  author: amin
  author_email: amincyber4rtcrew@gmail.com
  author_url: ''
  date: '2015-05-11 12:22:18 +0700'
  date_gmt: '2015-05-11 05:22:18 +0700'
  content: session tidak mau jalan di ci v 3
- id: 78
  author: hafizd
  author_email: hafizdarrohman@gmail.com
  author_url: ''
  date: '2015-05-18 14:27:09 +0700'
  date_gmt: '2015-05-18 07:27:09 +0700'
  content: masalhnya cuma di nama folder dong gan, antara asset sama assets
- id: 105
  author: danny
  author_email: dannycieplie@gmail.com
  author_url: ''
  date: '2015-07-08 15:30:58 +0700'
  date_gmt: '2015-07-08 08:30:58 +0700'
  content: "gan ketika ane mau upload gambar kok tidak diijinkan oleh web servernya
    ya ?\r\nmohon pencerahannya"
- id: 110
  author: Ferdhika Yudira
  author_email: rpl4rt08@gmail.com
  author_url: http://dika.web.id
  date: '2015-07-10 11:59:50 +0700'
  date_gmt: '2015-07-10 04:59:50 +0700'
  content: "bisa di setting di config.phpnya\r\n\r\n'disabled' => true,\r\nmenjadi
    \r\n'disabled' => false,"
- id: 114
  author: Agus Widyantaka
  author_email: agus.widyantaka@yahoo.com
  author_url: ''
  date: '2015-07-22 09:28:52 +0700'
  date_gmt: '2015-07-22 02:28:52 +0700'
  content: Keren vrohh :v
- id: 154
  author: ayu
  author_email: obygeg@yahoo.co.id
  author_url: ''
  date: '2015-10-15 13:45:20 +0700'
  date_gmt: '2015-10-15 06:45:20 +0700'
  content: "makasi buat tutorialnya, tp saya ada masalah ketika memasukkan gambar
    ke dalam teks yang diinput. setelah data disimpan, tag gamabar (img) dijadikan
    teks biasa (p)\r\nmohon pencerahan"
- id: 155
  author: Ferdhika Yudira
  author_email: rpl4rt08@gmail.com
  author_url: http://dika.web.id
  date: '2015-10-18 14:14:26 +0700'
  date_gmt: '2015-10-18 07:14:26 +0700'
  content: bisa di coba pake <a href="http://www.w3schools.com/php/func_string_html_entity_decode.asp"
    target="_blank" rel="nofollow">html_entity_decode()</a>
- id: 238
  author: minhaj
  author_email: barokminhaj@gmail.com
  author_url: ''
  date: '2015-12-15 12:40:44 +0700'
  date_gmt: '2015-12-15 05:40:44 +0700'
  content: "kalau cara upload dan simpan ke databasenya gimana gan kelanjutanya ?\r\nmohon
    bantuanya :D"
- id: 239
  author: Dwi
  author_email: xanxusviper@gmail.com
  author_url: ''
  date: '2015-12-19 09:35:36 +0700'
  date_gmt: '2015-12-19 02:35:36 +0700'
  content: "gan itu kan pake CKEditor,\r\npunya ane itu TinyMCE gan, gimana caranya
    TinyMCE sma KCFinder bisa jalan di CI\r\n\r\nsekian dari pertanyaan ane gan"
- id: 422
  author: aul
  author_email: aullhakim@gmail.com
  author_url: ''
  date: '2016-02-22 15:15:45 +0700'
  date_gmt: '2016-02-22 08:15:45 +0700'
  content: gan ane kan nampilin ckeditornya beda page, gimana untuk ngatur config.js
    nya? apakah ane bikin folder lagi?
- id: 433
  author: delaila
  author_email: delaila.rosa@gmail.com
  author_url: ''
  date: '2016-03-23 21:09:30 +0700'
  date_gmt: '2016-03-23 14:09:30 +0700'
  content: malam ka, mau nanya saya kan coba cara yang kaka bikin yah, tapi pas di
    browse page not found gitu ka, itu kenapa ya ka ?
- id: 500
  author: Ferdhika Yudira
  author_email: rpl4rt08@gmail.com
  author_url: http://dika.web.id
  date: '2016-05-07 21:35:43 +0700'
  date_gmt: '2016-05-07 14:35:43 +0700'
  content: oh itu url path nya, harus di sesuaikan path url nya di langkah 2
- id: 551
  author: Pixel
  author_email: pixel.new@gmail.com
  author_url: ''
  date: '2016-05-18 08:01:59 +0700'
  date_gmt: '2016-05-18 01:01:59 +0700'
  content: "gan ane punya permasalahan ketika edit data dan membuka browse images\r\n\r\nLink
    Edit = \"http://localhost/ab_1/produk/edit_produk/53\"\r\n\r\nnama controler \"produk\"
    ikut terbawa dan error\r\n\"404 Page Not Found\" \r\n\r\nLink browse images menjadi
    \ = \"http://localhost/ab_1/produk/assets/kcfinder/browse.php?type=images&amp;CKEditor=isi_konten&amp;CKEditorFuncNum=2&amp;langCode=en\"\r\n\r\nTapi
    kalau input baru \r\n\r\nLink Input = http://localhost/ab_1/produk/form_produk\r\n\r\nberjalan
    lancar\r\n\r\nLink browse images Lancar = \"http://localhost/ab_1/assets/kcfinder/browse.php?type=images&amp;CKEditor=isi_konten&amp;CKEditorFuncNum=2&amp;langCode=en\"\r\n\r\nmohon
    pencerahannya gan .."
- id: 822
  author: waone98
  author_email: wawan.saputramk@gmail.com
  author_url: ''
  date: '2016-08-25 00:34:27 +0700'
  date_gmt: '2016-08-24 17:34:27 +0700'
  content: makasih bang,,, atas postingannya, membantu tugas :D
---
<p><a href="http://blog.dika.web.id/wp-content/uploads/2014/12/codeigniter.png"><img class="wp-image-82 alignleft" src="http://blog.dika.web.id/wp-content/uploads/2014/12/codeigniter-300x300.png" alt="Codeigniter" width="201" height="201" /></a>Udah hampir seminggu sekolah nih, belajar masih belum formal.. dan besok hari jum'at yaw, arghhh remed belum selesai lagi.. kerjaan masih banyak, bentar lagi ujikom lagi.. tapi tenang, kalo ujikom sih kesukaan banget.. soalnya pelajaran di sekolah yang paling semangat ya pelajaran di lab :laughing:</p>
<p><!--more--></p>
<p>Oh iya, mumpung sekarang dapet project dari kejaksaan negeri cimahi saya buat dulu konsep sama login nya dulu. dan sekarang baru kepikiran buat page admin nya dulu.. dan dalem page admin pasti bisa nge manage apa aja, tapi kalo sekarang saya sih bikin buat berita dulu.. biar menarik kita di dalam form berita ini di kasih plugin <strong>CKEditor sama KCFinder </strong>ni plugin banyak berguna nya bro, kaya text editor wordpress.. tapi beda jauh haha :v</p>
<p>Nih tampilan nya kaya gini broh :</p>
<p><a href="http://blog.dika.web.id/wp-content/uploads/2015/01/RPL4rt-Studio-capture-200.png"><img class="aligncenter wp-image-183 size-full" src="http://blog.dika.web.id/wp-content/uploads/2015/01/RPL4rt-Studio-capture-200.png" alt="Tampilan CKEditor dan KCFinder" width="754" height="412" /></a></p>
<p>Nah, di postingan kali ini saya coba untuk memberikan trik sederhana untuk&nbsp;CKEditor dan KCFinder di CodeIgniter.<span id="more-2071"></span></p>
<p>1. Silahkan download terlebih dahulu file CKEditor dan KCFinder dari website resminya. Ekstrak dan copy file-file CKEditor dan KCFinder dengan susunan seperti di bawah ini. Oh iya, untuk link cari aja di google, mandiri ya bro.. B-)</p>
<p><a href="http://blog.dika.web.id/wp-content/uploads/2015/01/RPL4rt-Studio-capture-201.png"><img class="size-full wp-image-184 aligncenter" src="http://blog.dika.web.id/wp-content/uploads/2015/01/RPL4rt-Studio-capture-201.png" alt="RPL4rt Studio capture #201" width="208" height="189" /></a>2. Buka file <em>config.js</em> yang terdapat di dalam folder ckeditor dan ubah konfigurasinya dengan kode seperti di bawah ini :</p>

{% highlight js %}
CKEDITOR.editorConfig = function( config ){
	config.filebrowserBrowseUrl = '../asset/kcfinder/browse.php?type=files';
	config.filebrowserImageBrowseUrl = '../asset/kcfinder/browse.php?type=images';
	config.filebrowserFlashBrowseUrl = '../../asset/kcfinder/browse.php?type=flash';
	config.filebrowserUploadUrl = '../../asset/kcfinder/upload.php?type=files';
	config.filebrowserImageUploadUrl = '../../asset/kcfinder/upload.php?type=images';
	config.filebrowserFlashUploadUrl = '../../asset/kcfinder/upload.php?type=flash';
};
{% endhighlight %}

<p>3. Buat sebuah controller baru dengan nama file <em>kcfinder.php</em>. Ketikkan kode di bawah ini, ceritanya kita lagi ngebuat sebuah sistem login sederhana yang manfaatin session. Dimana ketika login kita akan menyisipkan session untuk mengubah konfigurasi security kcfinder menjadi <em>false</em>.</p>
{% highlight php %}
<?php
class Kcfinder extends CI_Controller {

	function __construct(){
		parent::__construct();
		session_start();
	}

	function index(){
		$this->load->view('kcfinder/login');
	}

	function login(){
		$usr = $this->input->post('username');
		$pass = $this->input->post('password');
		if($usr=="admin" || $pass=="admin"){
			$_SESSION['ses_admin']="admin";
			$_SESSION['ses_kcfinder']=array();
			$_SESSION['ses_kcfinder']['disabled'] = false;
			$_SESSION['ses_kcfinder']['uploadURL'] = "../content_upload";
			$this->admin();
		}
		else { $this->index(); }
	}

	function admin(){
		$session=isset($_SESSION['ses_admin']) ? $_SESSION['ses_admin']:'';
		if($session==""){
			$this->login();
		}else { $this->load->view('kcfinder/admin'); }
	}

	function logout(){
		session_destroy();
		$this->login();
	}
}
{% endhighlight %}

<p>4. Disini kita membutuhkan 2 buah view, untuk halaman login dan halaman admin yang berisikan sebuah tampilan text editor CKEditor.</p>

{% highlight html+php %}
<form method="post" action="<?php echo base_url(); ?>kcfinder/login">
	<label>Username</label>
	<input type="text" name="username" />
	<label>Password </label>
	<input type="password" name="password" />
	<input type="submit" value="Masuk" />
</form>
{% endhighlight %}

{% highlight html+php %}
<script type="text/javascript" src="<?php echo base_url(); ?>asset/ckeditor/ckeditor.js"></script>
<textarea class="ckeditor" name="editor"></textarea>
{% endhighlight %}
<p>5. Buka file <em>config.php</em> yang terdapat di dalam folder <strong>kcfinder</strong> dan ganti dengan konfigurasi di bawah ini. Di bawah ini saya ubah nama variabel session untuk keamanannya, serta pada variabel <strong>disabled </strong>saya berikan nilai <strong><em>true</em></strong>. Dimana ketika ada user yang mencoba mengakses file <em>browse.php</em> tanpa melalui login maka akan ditolak.</p>

{% highlight php %}
<?php
	$_CONFIG = array(
		'disabled' => true,
		'denyZipDownload' => false,
		'denyUpdateCheck' => false,
		'denyExtensionRename' => false,
		'theme' => "oxygen",
		'uploadURL' => "upload",
		'uploadDir' => "",
		'dirPerms' => 0755,
		'filePerms' => 0644,
		'access' => array(
			'files' => array(
					'upload' => true,
					'delete' => true,
					'copy' => true,
					'move' => true,
					'rename' => true
			),
			'dirs' => array(
					'create' => true,
					'delete' => true,
					'rename' => true
			)
		),
		'deniedExts' => "exe com msi bat php phps phtml php3 php4 cgi pl",
		'types' => array(
			// CKEditor &amp; FCKEditor types
			'files'   =>  "",
			'flash'   =>  "swf",
			'images'  =>  "*img",

			// TinyMCE types
			'file'    =>  "",
			'media'   =>  "swf flv avi mpg mpeg qt mov wmv asf rm",
			'image'   =>  "*img",
		),
		'filenameChangeChars' => array(/*
			' ' => "_",
			':' => "."
		*/),
		'dirnameChangeChars' => array(/*
			' ' => "_",
			':' => "."
		*/),
		'mime_magic' => "",
		'maxImageWidth' => 0,
		'maxImageHeight' => 0,
		'thumbWidth' => 100,
		'thumbHeight' => 100,
		'thumbsDir' => ".thumbs",

		'jpegQuality' => 90,
		'cookieDomain' => "",
		'cookiePath' => "",
		'cookiePrefix' => 'KCFINDER_',

		// THE FOLLOWING SETTINGS CANNOT BE OVERRIDED WITH SESSION CONFIGURATION
		'_check4htaccess' => true,
		//'_tinyMCEPath' => "/tiny_mce",
		'_sessionVar' => &amp;$_SESSION['ses_kcfinder'],
		//'_sessionLifetime' => 30,
		//'_sessionDir' => "/full/directory/path",

		//'_sessionDomain' => ".mysite.com",
		//'_sessionPath' => "/my/path",
);
{% endhighlight %}

<p>6. Jalan web via browser kesayangan ente bro, coba login dengan username dan password <strong>admin</strong>. Klik icon <strong>Image</strong> untuk mulai mencari atau meng-upload gambar.</p>
<p><a href="http://blog.dika.web.id/wp-content/uploads/2015/01/RPL4rt-Studio-capture-202.png"><img class="size-full wp-image-185 aligncenter" src="http://blog.dika.web.id/wp-content/uploads/2015/01/RPL4rt-Studio-capture-202.png" alt="RPL4rt Studio capture #202" width="754" height="531" /></a><a href="http://blog.dika.web.id/wp-content/uploads/2015/01/RPL4rt-Studio-capture-203.png"><img class="aligncenter wp-image-186 size-medium" src="http://blog.dika.web.id/wp-content/uploads/2015/01/RPL4rt-Studio-capture-203-300x169.png" alt="RPL4rt Studio capture #203" width="300" height="169" /></a>Satu hal yang perlu diperhatikan dari file manager seperti KCFinder adalah permasalahan security-nya. Seperti kasus blog blog yng pernah saya temui, mereka lupa mengubah konfigurasi dari <strong>false</strong> menjadi <strong>true</strong>, jadilah ada orang jahil yang bisa menerobos masuk ke file <strong>browse.php</strong> dan meng-upload file shell/atau menghapus data data yang ada di file <strong>browse.php</strong>. Akhirnya semua direktori dan file-file yang terdapat di dalam hostingan bisa ludes terhapus kasian kan :(.</p>
<p>Nih yng pengen file nya :D</p>
<p style="text-align: center;"><a href="http://adf.ly/w0GFy" target="_blank">Download</a></p>
<p>OK deh, sekian dulu postingan saya kali ini. Semoga bermanfaat buat ente ya bro. Kalo ada pertanyaan, jangan sungkan sungkan curat coret di komentar yaww.. B-) bay bay :*</p>
