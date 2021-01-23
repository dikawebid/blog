---
layout: post
status: publish
disqus: y 
share: y 
publish: y
title: 'PHP Snippet : Redirect URL with Send POST data'
author: dika
author_login: ferdhika31
author_email: rpl4rt08@gmail.com
author_url: http://dika.web.id
wordpress_id: 327
wordpress_url: http://blog.dika.web.id/?p=327
date: '2015-02-18 13:24:09 +0700'
date_gmt: '2015-02-18 06:24:09 +0700'
categories:
- Slice of Code
- PHP
tags: []
comments: []
---
<p>Selamat siang bro, kali ini saya akan memposting code snippet buat redirect url bersamaan dengan post data ke url yang akan di direck.. oke coba lihat code di bawah :</p>

{% highlight php %}
<?php
$data_array =array('name'=>'Ferdhika Yudira','domain'=>'www.dika.web.id');
$data = http_build_query($data_array);

echo redirectPost('http://localhost/latihan/dika/redirect-post-data/baca.php', $data); //lokasi si file baca.php (link tujuan redirect)

function redirectPost($url, $data, $optional_headers = null){
	$params = array('http' => array(
		'method' => 'POST',
		'content' => $data
	));

	if ($optional_headers !== null) {
		$params['http']['header'] = $optional_headers;
	}
	$ctx = stream_context_create($params);
	$fp = @fopen($url, 'rb', false, $ctx);
	if (!$fp) {
		throw new Exception("Problem with $url, $php_errormsg");
	}
	$response = @stream_get_contents($fp);
	if ($response === false) {
		throw new Exception("Problem reading data from $url, $php_errormsg");
	}
	return $response;
}
?>
{% endhighlight %}

<p>dan buat satu file lagi untuk tujuan redirect tadi.. beri nama baca.php</p>

{% highlight php %}
<?php 
	/**
		* @Author				: Localhost {Ferdhika Yudira}
		* @Email				: fer@dika.web.id
		* @Web					: http://dika.web.id
		* @Date					: 2015-02-18 13:07:25
	**/
	echo $_POST['name'];
	echo $_POST['domain'];
?>
{% endhighlight %}

<p>Semoga bermanfaat.. :D</p>
