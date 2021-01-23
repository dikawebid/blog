---
layout: post
status: publish
disqus: y 
share: y 
publish: y
title: Setting Timezone Indonesia Di CodeIgniter
author:
  display_name: Ferdhika Yudira
  login: ferdhika31
  email: rpl4rt08@gmail.com
  url: http://dika.web.id
author_login: ferdhika31
author_email: rpl4rt08@gmail.com
author_url: http://dika.web.id
wordpress_id: 114
wordpress_url: http://blog.dika.web.id/?p=114
date: '2014-12-19 18:43:33 +0700'
date_gmt: '2014-12-19 11:43:33 +0700'
categories:
- Code Igniter
tags:
- Zona Waktu CodeIgniter
- Ubah Pengaturan Waktu Indonesia CodeIgniter
- Waktu Indonesia di CodeIgniter
- Zona Waktu PHP 5.3
comments: []
---
<p>Hujan gini enaknya kayanya nyalain tv sambil buka selimut.. haha tapi sebelum itu saya mau berbagi sedikit ilmu yang saya dapat dari forum sebelah hehe oke, mungkin bagi yang udah tau ini ga aneh lagi script :D oh iya, script ini saya dapat saat membuat mini project buat bikin quote quote kecil dan saat menyimpan jam sekarang dan yang di simpan berbeda.</p>
<p><!--more-->saya berpikiran mungkin zona waktu nya belum di ubah :no_mouth: oke lah daripada banyak cerita, langsung tujuan saja..</p>
<p>kalian cuma menyisipkan code dalam <code>index.php</code></p>

{% highlight php %}
<?php
  /*
  ..
  ..
  ..
  */

  /*
  |---------------------------------------------------------------
  | TimeZone 
  |---------------------------------------------------------------
  |
  | default Time Zone
  |---------------------------------------------------------------
  */
  
  if ( function_exists( 'date_default_timezone_set' ) )
    date_default_timezone_set('Asia/Jakarta');
    
{% endhighlight %}
<p>Setelah itu silahkan cek di controller menggunakan code :</p>
{% highlight php %}
<?php
echo date("Y-m-d H:i:s");
{% endhighlight %}
<p>Jika sama dengan waktu indonesia / komputer anda.. berarti zona waktu sudah terubah..</p>
<p>Semoga bermanfaat :)</p>
