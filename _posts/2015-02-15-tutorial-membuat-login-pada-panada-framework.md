---
layout: post
status: publish
disqus: y 
share: y 
publish: y
title: 'Tutorial PHP : Membuat Login Pada Panada Framework'
author: dika
author_login: ferdhika31
author_email: rpl4rt08@gmail.com
author_url: http://dika.web.id
wordpress_id: 315
wordpress_url: http://blog.dika.web.id/?p=315
date: '2015-02-15 21:23:57 +0700'
date_gmt: '2015-02-15 14:23:57 +0700'
categories:
- Tutorial
- Web Development
- PHP
- Panada Framework
tags: []
comments: []
---
<p>Selamat malam bro, barusan saya udah nyicipin nih framework dan alhasil dapet juga ilmunya.. saya nyoba buat login logout dengan panada framework.. kayanya asik juga nih framework, Panada Framework memiliki kemiripan dengan Framework Codeigniter serta memiliki fleksibilitas yang baik, sehingga bagi programmer prosedural tidak akan terlalu kesulitan dalam menggunakannya karena tidak ada batasan dalam penamaan MVC atau penamaan Databasenya.</p>
<p><a href="http://blog.dika.web.id/wp-content/uploads/2015/02/panada_logo.png"><img class="aligncenter size-full wp-image-312" src="http://blog.dika.web.id/wp-content/uploads/2015/02/panada_logo.png" alt="panada_logo" width="293" height="53" /></a></p>
<p><!--more-->Alat Tempur yang saya gunakan :</p>
<ul>
<li><a title="XAMPP" href="https://www.apachefriends.org/download.html" target="_blank">XAMPP</a> (WebServer)</li>
<li><a href="http://www.sublimetext.com/3" target="_blank">Sublime Text 3</a> (TextEditor)</li>
<li><a href="http://panadaframework.com/" target="_blank">Panada 1.0.0 </a>(Framework PHP)</li>
</ul>
<p>Disini saya menggunakan 2 Library dalam Panada Framework tersebut yaitu :</p>
<ol>
<li><a href="http://panadaframework.com/documentation/id/classes/database/index.html" target="_blank">Database</a></li>
<li><a href="http://panadaframework.com/documentation/id/classes/session.html" target="_blank">Session</a></li>
</ol>
<p>Untuk database ini saya menggunakan MySQL yng sudah terinstall sepaket dengan XAMPP.. untuk tutorial mari kita mulai ya, oh iya yang mau file jadinya bisa di download di akhir postingan.. :)</p>
<p>Pertama kita buat dulu databasenya dan beri nama <em><strong>lat_login</strong>.</em></p>

{% highlight sql %}
create database lat_login;
{% endhighlight %}

<p>Nah setelah itu buat tabel dalam database <em><strong>lat_login</strong></em> dan beri nama <strong><em>tb_pengguna</em></strong> <em>dan isi datanya.</em></p>

{% highlight sql %}
CREATE TABLE IF NOT EXISTS `tb_pengguna` (
	`username` varchar(50) NOT NULL,
	`password` varchar(32) NOT NULL,
	`nama` varchar(100) DEFAULT NULL,
	`level` int(1) NOT NULL,
	`status` int(1) NOT NULL,
	PRIMARY KEY (`username`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

INSERT INTO `tb_pengguna` (`username`, `password`, `nama`, `level`, `status`) VALUES

('ferdhika31', md5('tamvan'), 'Ferdhika Ganteng', 1, 1),
('nurjaman', md5('tamvan'), 'Si Tamvan', 2, 1);
{% endhighlight %}

<p>Nah mari kita mulai ngoding(); with panada frameworknya.. :D</p>
<p>oh iya Pertama mari kita setting dulu koneksi databasenya di folder <code>ROOT/App/Config/database.php</code></p>

{% highlight php %}
<?php
'default' => array(
        'driver' => 'mysql',
        'host' => 'localhost',
        'port' => 3306,
        'user' => 'root',
        'password' => '',
        'database' => 'lat_login',
        'tablePrefix' => '',
        'charset' => 'utf8',
        'collate' => 'utf8_general_ci',
        'persistent' => false,
    ),
	..
	..
{% endhighlight %}

<p>Kedua kita buat <strong>model</strong>nya dulu dalam folder <code>ROOT/App/Models</code> dengan nama <code>M_masuk.php</code></p>

{% highlight php %}
<?php 
	/**
		* @Author				: Localhost {Ferdhika Yudira}
		* @Email				: fer@dika.web.id
		* @Web					: http://dika.web.id
		* @Date					: 2015-02-15 18:40:55
	**/
namespace Models;

use Resources;

class M_masuk {
    public function __construct(){
		// DB koneksi default
		$this->db = new Resources\Database;
		$this->tb = "tb_pengguna"; //nama tabel database
    }

    public function query_masuk($user="",$pw=""){
    	$query = $this->db->results("select * from ".$this->tb." where username='".$user."' and password='".$pw."'"); //query
    	return $query[0];
    }
}
{% endhighlight %}

<p>Ketiga kita buat <strong>controller</strong>nya terlebih dahulu dalam folder <code>ROOT/App/Controllers</code> dengan nama <code>Dashboard.php</code></p>

{% highlight php %}
<?php
	/**
		* @Author				: Localhost {Ferdhika Yudira}
		* @Email				: fer@dika.web.id
		* @Web					: http://dika.web.id
		* @Date					: 2015-02-15 18:19:31
	**/
namespace Controllers;

use Resources, Models, Library;

class Dashboard extends Resources\Controller{    

	public function __construct(){
		parent::__construct();
		// Load model masuk dan library session
		$this->masuk = new Models\M_masuk; //M_masuk adalah nama file di folder Models
		$this->session = new Resources\Session();
	}

    public function index(){    
    	//jika session belum di set maka di direk ke halaman masuk
    	if(!$this->session->getValue('isLogin')){ 
    		$this->redirect('dashboard/masuk');	
    	}

        $data = array(
        	'judul' => 'Test Login',
        	'nama' => $this->session->getValue('nama'),
        	'url'	=> $this->uri->baseUri
        );

        $this->output('dashboard', $data); //load view
    }

    public function masuk(){
    	//jika session login sudah di set maka di direk ke halaman dashboard
    	if($this->session->getValue('isLogin')){
    		$this->redirect('dashboard');	
    	}

    	//variabel error pada halaman form login
    	$views['error'] = '';

    	//buat tombol masuk di tekan
		if (isset($_POST['A_masuk'])){
			$username = $_POST['A_user'];
			$password = md5($_POST['A_pass']);

			$user = $this->masuk->query_masuk($username,$password);
			if($user){
				// Username dan password sudah benar, simpan nilai ke dalam session
				$data = array(
					'isLogin' => true,
					'nama'	=> $user->nama,
					'username' => $user->username
					);
				$this->session->setValue($data);

				// Redirect ke halaman utama.
				$this->redirect('dashboard');
			}else{
				$views['error'] = 'Username atau password yang Anda input salah.';
			}
		}
    	$views['judul'] = 'Test Login';
        
        $this->output('masuk', $views); //load view
    }

    public function keluar(){
    	// Hapus session dan redirect ke halaman login.
		$this->session->destroy();
		$this->redirect('dashboard/masuk');
    }
}
{% endhighlight %}

<p>Nah setelah itu kita buat view nya disini kita buat dua file yaitu buat halaman <strong>dashboard</strong> dan <strong>form loginnya</strong> dengan nama <code>dashboard.php</code></p>

{% highlight html+php %}
Selamat datang <?php echo $nama; ?>, Mau keluar? klik <a href="<?php echo $url;?>index.php/dashboard/keluar">disini</a>
{% endhighlight %}

<p>dan satunya lagi file <code>masuk.php</code></p>

{% highlight html+php %}
<title><?php echo $judul ?></title>
<form action="" method="POST">
	Username : <input type="text" name="A_user" />
	Password : <input type="password" name="A_pass" />
	<input type="submit" name="A_masuk" value="Masuk"/>
</form>
<hr>
<?php echo $error;?>
{% endhighlight %}

<p>Nah selesai deh, mari kita akses <strong>http://localhost/folder_panada/app/index.php/dashboard </strong>jika anda belum melakukan login maka anda akan di redirect ke halaman login.. jika sudah maka akan tampil seperti berikut :</p>
<p><a href="http://blog.dika.web.id/wp-content/uploads/2015/02/RPL4rt-Studio-capture-239.png"><img class="aligncenter size-full wp-image-320" src="http://blog.dika.web.id/wp-content/uploads/2015/02/RPL4rt-Studio-capture-239.png" alt="RPL4rt Studio capture #239" width="390" height="116" /></a>Nah selesai dah tutorial kali ini.. semoga bermanfaat yaw, oh iya.. seperti yang saya janjikan, dalam tutorial ini saya akan mencantumkan file hasil dari tutroial ini, yang kepengen monggo di download aja yaw.. :D</p>
<p style="text-align: center;"><a href="http://adf.ly/12LLbY" target="_blank">Download</a></p>
<p>Selamat belajar yaww.. :) untuk tutorial berikutnya saya akan mencoba membuat <strong>CRUD menggunakan Framework Panada</strong> ini.. pantengin aja ya.. :D</p>
