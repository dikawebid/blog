---
layout: post
status: publish
disqus: y 
share: y 
publish: y
title: Membuat User Multi Login dengan CodeIgniter
author: dika
author_login: ferdhika31
author_email: rpl4rt08@gmail.com
author_url: http://dika.web.id
wordpress_id: 139
wordpress_url: http://blog.dika.web.id/?p=139
date: '2015-01-04 17:46:46 +0700'
date_gmt: '2015-01-04 10:46:46 +0700'
categories:
- Tutorial
- Web Development
- PHP
- Code Igniter
tags: []
comments:
- id: 12
  author: Dadang Galau
  author_email: Hackersakithati@ferdika.web.id
  author_url: ''
  date: '2015-02-03 11:49:48 +0700'
  date_gmt: '2015-02-03 04:49:48 +0700'
  content: Kang naha basa di loginkeun malah error :v do login na eweuhan :v
- id: 13
  author: Ferdhika Yudira
  author_email: rpl4rt08@gmail.com
  author_url: http://dika.web.id
  date: '2015-02-03 12:05:26 +0700'
  date_gmt: '2015-02-03 05:05:26 +0700'
  content: Kurang tamvan :v
- id: 18
  author: budi
  author_email: budisaufy@gmail.com
  author_url: ''
  date: '2015-02-19 20:56:30 +0700'
  date_gmt: '2015-02-19 13:56:30 +0700'
  content: "mas ini kenapa ya mas..?\r\nkok bisa ada kayak gini \"No direct script
    access allowed\".\r\nsaya ikuti step bystep nya.."
- id: 19
  author: Ferdhika Yudira
  author_email: rpl4rt08@gmail.com
  author_url: http://dika.web.id
  date: '2015-02-21 08:13:05 +0700'
  date_gmt: '2015-02-21 01:13:05 +0700'
  content: itu basepathnya mas
- id: 20
  author: Asep
  author_email: asep.hasan@yahoo.com
  author_url: ''
  date: '2015-02-26 06:20:15 +0700'
  date_gmt: '2015-02-25 23:20:15 +0700'
  content: Keren mas.. makasih banget :D
- id: 22
  author: Akasaka R. Pratama
  author_email: pratama.gilang96@gmail.com
  author_url: ''
  date: '2015-03-06 18:26:32 +0700'
  date_gmt: '2015-03-06 11:26:32 +0700'
  content: "Keren design web ini :) minimalis dan ringan. Isi yang padat dan pembahasan
    yang ringan jadi gampang masuk ke otak...\r\nkalau boleh tau, agan design sendiri
    blognya?"
- id: 24
  author: Ferdhika Yudira
  author_email: rpl4rt08@gmail.com
  author_url: http://dika.web.id
  date: '2015-03-10 16:52:46 +0700'
  date_gmt: '2015-03-10 09:52:46 +0700'
  content: saya redesign lagi dikit gan :D
- id: 33
  author: Anggi
  author_email: bogoshipda_pupha@yahoo.com
  author_url: ''
  date: '2015-03-27 17:43:59 +0700'
  date_gmt: '2015-03-27 10:43:59 +0700'
  content: Gan, link donlotnya kgk bisa ya? ane donlot gk bisa gan.. uda nyoba ada
    yg sesuai ptunjuk ada yg eror.
- id: 34
  author: Anggi
  author_email: bogoshipda_pupha@yahoo.com
  author_url: ''
  date: '2015-03-28 09:41:19 +0700'
  date_gmt: '2015-03-28 02:41:19 +0700'
  content: Gan, yang hak_akses($kecuali="") itu dipanggil dmna ya? masi bisa lgsg
    masuk di hlm admin&amp;user tanpa login jadinya.. Tolong perbarui link donlotnya
    dong?
- id: 36
  author: Ferdhika Yudira
  author_email: rpl4rt08@gmail.com
  author_url: http://dika.web.id
  date: '2015-03-29 09:26:56 +0700'
  date_gmt: '2015-03-29 02:26:56 +0700'
  content: "di panggil di controller gan :D \r\nudah di perbarui :D"
- id: 38
  author: Rendhi
  author_email: liliphutz_pupha@yahoo.com
  author_url: ''
  date: '2015-04-03 21:02:25 +0700'
  date_gmt: '2015-04-03 14:02:25 +0700'
  content: "gan, ane mbuat sndri yg Hai <b></b> ada error A PHP Error was encountered\r\nSeverity:
    Notice\r\nMessage: Undefined variable: user\r\ngmn ngatasinnya ya gan?\r\ntapi
    punya agan bisa dijalankan.., punyaku kgak bsa"
- id: 39
  author: Ferdhika Yudira
  author_email: rpl4rt08@gmail.com
  author_url: http://dika.web.id
  date: '2015-04-03 21:23:24 +0700'
  date_gmt: '2015-04-03 14:23:24 +0700'
  content: "cek di controller dashboard gan, \r\n\r\n<pre class=\"toolbar:1 lang:php
    decode:true\">$data = array(\r\n     'user'\t=> 'nama saya',\r\n);</pre>"
- id: 40
  author: Dhea
  author_email: dhea.anggi@yahoo.com
  author_url: ''
  date: '2015-04-03 21:49:05 +0700'
  date_gmt: '2015-04-03 14:49:05 +0700'
  content: Izin nyoba ya.. :)
- id: 73
  author: dinda
  author_email: dyndperwary@ymail.com
  author_url: ''
  date: '2015-05-06 08:19:10 +0700'
  date_gmt: '2015-05-06 01:19:10 +0700'
  content: "mas, ini penggantinya yg biasanya set_rules pengisian username dimana?\r\nspt
    set_rules('uname', 'Username', 'required') nya.."
- id: 81
  author: Ahmad Bahroini
  author_email: abahroini8@gmail.com
  author_url: ''
  date: '2015-05-30 09:48:16 +0700'
  date_gmt: '2015-05-30 02:48:16 +0700'
  content: Passwordnya apa mas dika kalo mau login?
- id: 96
  author: Haris
  author_email: harisluxi@gmail.com
  author_url: ''
  date: '2015-06-22 14:23:07 +0700'
  date_gmt: '2015-06-22 07:23:07 +0700'
  content: mas maksutnya status yang di database itu apa ya.. hihihi :D
- id: 97
  author: Ferdhika Yudira
  author_email: rpl4rt08@gmail.com
  author_url: http://dika.web.id
  date: '2015-06-24 16:33:40 +0700'
  date_gmt: '2015-06-24 09:33:40 +0700'
  content: itu status hak aksesnya mas :D
- id: 106
  author: adi
  author_email: adirp@adirp.com
  author_url: ''
  date: '2015-07-09 09:09:35 +0700'
  date_gmt: '2015-07-09 02:09:35 +0700'
  content: hatur nuhun pisan kang :*. :D hahah
- id: 107
  author: john
  author_email: irawan.keith@gmail.com
  author_url: ''
  date: '2015-07-09 13:09:34 +0700'
  date_gmt: '2015-07-09 06:09:34 +0700'
  content: gan saya mau nanya kalo contohnya mau buat login 2 tingkatan gmna? cnth
    login sebagai guru dengan pelajaran biologi
- id: 109
  author: Ferdhika Yudira
  author_email: rpl4rt08@gmail.com
  author_url: http://dika.web.id
  date: '2015-07-10 11:58:24 +0700'
  date_gmt: '2015-07-10 04:58:24 +0700'
  content: bisa menggunakan if bercabang.. :D
- id: 115
  author: Taufik Mulyana
  author_email: admin@taufik24.com
  author_url: ''
  date: '2015-07-23 21:15:21 +0700'
  date_gmt: '2015-07-23 14:15:21 +0700'
  content: "gan ini kenapa\r\nMessage: Undefined property: Dashboard::$auth\r\nFilename:
    controllers/dashboard.php\r\n\r\nCall to a member function cek_auth() on null
    in C:\\xampp\\htdocs\\latlogin\\application\\controllers\\dashboard.php on line
    9"
- id: 135
  author: Eko Prasty
  author_email: ekoprasty@icloud.com
  author_url: ''
  date: '2015-08-16 10:11:08 +0700'
  date_gmt: '2015-08-16 03:11:08 +0700'
  content: saya login kok "gagal login" salahnya dimana gan? udah ngikutin step by
    step berkali kali
- id: 136
  author: mizu
  author_email: putra@gmail.com
  author_url: ''
  date: '2015-08-20 15:02:23 +0700'
  date_gmt: '2015-08-20 08:02:23 +0700'
  content: maaf mas saya coba abis login ko object not found y ? apa  ada yg kurang
    filenya ??
- id: 139
  author: Ferdhika Yudira
  author_email: rpl4rt08@gmail.com
  author_url: http://dika.web.id
  date: '2015-08-28 22:40:13 +0700'
  date_gmt: '2015-08-28 15:40:13 +0700'
  content: mungkin salah redirect mas, boleh lihat cuplikan koding nya?
- id: 140
  author: Ferdhika Yudira
  author_email: rpl4rt08@gmail.com
  author_url: http://dika.web.id
  date: '2015-08-28 22:40:49 +0700'
  date_gmt: '2015-08-28 15:40:49 +0700'
  content: mungkin salah pada record data di database nya gan.. coba cek kembali gan
    :D
- id: 141
  author: faizal
  author_email: faizaladi58@yahoo.com
  author_url: ''
  date: '2015-09-11 23:26:39 +0700'
  date_gmt: '2015-09-11 16:26:39 +0700'
  content: ijin download ya gan ,
- id: 142
  author: faizal
  author_email: faizaladi58@yahoo.com
  author_url: ''
  date: '2015-09-12 10:46:22 +0700'
  date_gmt: '2015-09-12 03:46:22 +0700'
  content: saya kok gak bisa login , apa ada yang salah ?
- id: 143
  author: faizal
  author_email: faizaladi58@yahoo.com
  author_url: ''
  date: '2015-09-12 12:45:42 +0700'
  date_gmt: '2015-09-12 05:45:42 +0700'
  content: thanks gan , ternyata udah bisa . thanks ya
- id: 144
  author: arta
  author_email: arta.sitinjak@gmail.com
  author_url: ''
  date: '2015-09-15 04:24:22 +0700'
  date_gmt: '2015-09-14 21:24:22 +0700'
  content: maaf mas saya udah coba, habis login dengan kedua user(ferdhika31 dan nurjaman)
    hasilnya tetap sama dia bacanya mereka berdua user, padahal salah satu dari mereka
    itu admin. salahnya dimana yaa mas?
- id: 145
  author: Ferdhika Yudira
  author_email: rpl4rt08@gmail.com
  author_url: http://dika.web.id
  date: '2015-09-20 12:53:17 +0700'
  date_gmt: '2015-09-20 05:53:17 +0700'
  content: mungkin salah dalam record lvl dalam databasenya mba..
- id: 146
  author: Fauzan
  author_email: fauzan.arrasyid@icloud.com
  author_url: ''
  date: '2015-09-23 09:03:00 +0700'
  date_gmt: '2015-09-23 02:03:00 +0700'
  content: Cuy cara ngebatasan hak akses kumaha?,urang lamun login user,pass diubah
    di adressbar na jadi admin bisa keneh asup:3
- id: 147
  author: Ferdhika Yudira
  author_email: rpl4rt08@gmail.com
  author_url: http://dika.web.id
  date: '2015-09-23 23:29:05 +0700'
  date_gmt: '2015-09-23 16:29:05 +0700'
  content: "make ieu zan mun script nu posting ieu mh :\r\n\r\n<pre class=\"toolbar:1
    lang:php decode:true\">\r\n// page admin\r\n$hak_akses = $this->session->userdata('lvl');\r\nif($hak_akses!=1){\r\necho
    \"Anda bukan admin!\";exit;\r\n}\r\n</pre>\r\n\r\ncek lvl na.."
- id: 153
  author: rayton
  author_email: ngantuktidur10@gmail.com
  author_url: ''
  date: '2015-09-30 04:44:21 +0700'
  date_gmt: '2015-09-29 21:44:21 +0700'
  content: "linknya jd begini >> http://localhost/ci/multi_login/login/do_login\r\n\r\ntampilannya
    begini\r\n\r\n404 Page Not Found\r\n\r\nThe page you requested was not found.\r\n\r\npliiis
    jelasin secara detai dan apa yang harus diperbaiki...\r\n\r\nbalas melalui email
    tolong kak"
- id: 233
  author: Ery Cp
  author_email: andreskill@ymail.com
  author_url: ''
  date: '2015-11-16 10:24:51 +0700'
  date_gmt: '2015-11-16 03:24:51 +0700'
  content: data record di database udah bener gan, tp ttp gagal login itu gmn,?
- id: 243
  author: prim
  author_email: farmin1508@yahoo.com
  author_url: ''
  date: '2016-01-08 15:03:23 +0700'
  date_gmt: '2016-01-08 08:03:23 +0700'
  content: "saya udah berhasil membuat multi user mas. untuk menampilkan postingan
    per user id gimana mas.. saya menggunakan 2 tabel. tabel admin berisi nama-nama
    user, tabel posting berisi daftar postingan...\r\n\r\nJika berkenan kirim ke email
    aku yams..thanks banget..."
- id: 245
  author: Hasan
  author_email: dipo_utomo@ymail.com
  author_url: ''
  date: '2016-01-14 11:06:36 +0700'
  date_gmt: '2016-01-14 04:06:36 +0700'
  content: bos , itu tempat library seasonnya dimana yak? mohon bantuannya
- id: 430
  author: Muhammad Yusuf Ramadhan
  author_email: yusufrc7@gmail.com
  author_url: ''
  date: '2016-03-07 13:44:11 +0700'
  date_gmt: '2016-03-07 06:44:11 +0700'
  content: "Kang, saya sudah coba dan allhamdulillah pada saat login berjalan\r\ncuma
    pas pindah ke Controller Dashboard itu malah Object not Found"
- id: 450
  author: taher
  author_email: taheraeng@gmail.com
  author_url: ''
  date: '2016-04-17 03:30:46 +0700'
  date_gmt: '2016-04-16 20:30:46 +0700'
  content: mas, status hak akses bukannya di field level ya?
- id: 453
  author: scahyo
  author_email: m.riefky.s@gmail.com
  author_url: ''
  date: '2016-04-18 02:00:30 +0700'
  date_gmt: '2016-04-17 19:00:30 +0700'
  content: 'kenapa selain dashboard muncul "Unable to locate the specified class:
    Session.php"'
- id: 462
  author: yanti
  author_email: admin@gmail.com
  author_url: ''
  date: '2016-04-20 17:24:46 +0700'
  date_gmt: '2016-04-20 10:24:46 +0700'
  content: not found akang saat login ? gimana ? itu gimana kang?
- id: 463
  author: yanti
  author_email: admin@gmail.com
  author_url: ''
  date: '2016-04-20 17:25:11 +0700'
  date_gmt: '2016-04-20 10:25:11 +0700'
  content: pencerahan atuh akang ?
- id: 477
  author: cendikia
  author_email: cisnatinnov@rocketmail.com
  author_url: ''
  date: '2016-04-24 14:19:34 +0700'
  date_gmt: '2016-04-24 07:19:34 +0700'
  content: kang redirectnya ke user aja, padahal loginya admin
- id: 493
  author: ibnu
  author_email: ibnoekc@gmail.com
  author_url: ''
  date: '2016-05-07 18:29:26 +0700'
  date_gmt: '2016-05-07 11:29:26 +0700'
  content: maksud dari hak akses $ Kecuali sama hak akses='''' makaudnya gimana dan
    bagaimana cara penerapannya pada page
- id: 495
  author: Ferdhika Yudira
  author_email: rpl4rt08@gmail.com
  author_url: http://dika.web.id
  date: '2016-05-07 21:23:44 +0700'
  date_gmt: '2016-05-07 14:23:44 +0700'
  content: method hak_akses paramter $kecuali="" gan?
- id: 496
  author: Ferdhika Yudira
  author_email: rpl4rt08@gmail.com
  author_url: http://dika.web.id
  date: '2016-05-07 21:24:22 +0700'
  date_gmt: '2016-05-07 14:24:22 +0700'
  content: bisa di sesuaikan kang hehe
- id: 497
  author: Ferdhika Yudira
  author_email: rpl4rt08@gmail.com
  author_url: http://dika.web.id
  date: '2016-05-07 21:24:51 +0700'
  date_gmt: '2016-05-07 14:24:51 +0700'
  content: boleh lihat url path nya?
- id: 498
  author: Ferdhika Yudira
  author_email: rpl4rt08@gmail.com
  author_url: http://dika.web.id
  date: '2016-05-07 21:29:35 +0700'
  date_gmt: '2016-05-07 14:29:35 +0700'
  content: "library Session nya belum di load gan.. bisa di setting di file <strong>/application/config/autoload.php</strong>
    \n\nrubah bagian \n<code>\n$autoload['libraries'] = array('session');\n..\n..\n$config['encryption_key']
    = 'anykey';\n</code>"
- id: 499
  author: Ferdhika Yudira
  author_email: rpl4rt08@gmail.com
  author_url: http://dika.web.id
  date: '2016-05-07 21:34:32 +0700'
  date_gmt: '2016-05-07 14:34:32 +0700'
  content: ngambil dari field nya mas, cuma buat di page pagenya masih dalam coding..
    bisa di sesuaikan di buat dinamis juga :)
- id: 501
  author: Ferdhika Yudira
  author_email: rpl4rt08@gmail.com
  author_url: http://dika.web.id
  date: '2016-05-07 21:36:02 +0700'
  date_gmt: '2016-05-07 14:36:02 +0700'
  content: bisa lihat path url nya kang?
- id: 512
  author: lutfir
  author_email: rahmanlutfir406@gmail.com
  author_url: ''
  date: '2016-05-12 08:24:10 +0700'
  date_gmt: '2016-05-12 01:24:10 +0700'
  content: Kang nuhun, kalau mau dibikin cuma satu view dashboard bisa ga kang?
- id: 538
  author: ihsan
  author_email: ihsananshory@gmail.com
  author_url: ''
  date: '2016-05-14 15:12:13 +0700'
  date_gmt: '2016-05-14 08:12:13 +0700'
  content: "gan saya udh ikuti step by step tp mlh nampil gini ya gan... tolong solusinya
    dong\r\nAn Error Was Encountered\r\n\r\nUnable to load the requested file: login_form.php"
- id: 539
  author: ihsan
  author_email: ihsananshory@gmail.com
  author_url: ''
  date: '2016-05-14 15:27:56 +0700'
  date_gmt: '2016-05-14 08:27:56 +0700'
  content: udah bisa deng gan :D
- id: 540
  author: ihsan
  author_email: ihsananshory@gmail.com
  author_url: ''
  date: '2016-05-14 15:40:08 +0700'
  date_gmt: '2016-05-14 08:40:08 +0700'
  content: "nah gan pas udh ngisi user dan pass nya dan masuk link ini >> http://localhost/ci/multi_login/login/do_login\r\n\r\ntampilannya
    begini\r\n\r\n404 Page Not Found\r\n\r\nitu apa nya gan yang salah?"
- id: 541
  author: ihsan
  author_email: ihsananshory@gmail.com
  author_url: ''
  date: '2016-05-14 19:41:59 +0700'
  date_gmt: '2016-05-14 12:41:59 +0700'
  content: "satu lg gan klo gini knp ya gan tolong bantu\r\n\r\nhttp://localhost/inventory/index.php/login/localhost/index.php/login"
- id: 542
  author: Ferdhika Yudira
  author_email: rpl4rt08@gmail.com
  author_url: http://dika.web.id
  date: '2016-05-15 18:45:26 +0700'
  date_gmt: '2016-05-15 11:45:26 +0700'
  content: bisa lihat pemanggilan url, redirect sama config base_url nya?
- id: 544
  author: Ferdhika Yudira
  author_email: rpl4rt08@gmail.com
  author_url: http://dika.web.id
  date: '2016-05-15 18:46:38 +0700'
  date_gmt: '2016-05-15 11:46:38 +0700'
  content: Bisa gan :D
- id: 549
  author: lutfir
  author_email: rahmanlutfir406@gmail.com
  author_url: ''
  date: '2016-05-17 16:14:15 +0700'
  date_gmt: '2016-05-17 09:14:15 +0700'
  content: Kira2 yang dimodifikasi dibagian mana dan bagaimana caranya ya kang? nuhun
- id: 572
  author: sofwan
  author_email: sofwan360@gmail.com
  author_url: ''
  date: '2016-05-22 15:42:12 +0700'
  date_gmt: '2016-05-22 08:42:12 +0700'
  content: Ini di bagian controler yangmana gan
- id: 573
  author: sofwan
  author_email: sofwan360@gmail.com
  author_url: ''
  date: '2016-05-22 15:56:08 +0700'
  date_gmt: '2016-05-22 08:56:08 +0700'
  content: Gan mau tanya lagi,,knp klo saya bikin dua user yang passwordnya sama,
    gak bisa log in yah
- id: 576
  author: wahyu
  author_email: wahrief@gmail.com
  author_url: ''
  date: '2016-05-23 17:52:02 +0700'
  date_gmt: '2016-05-23 10:52:02 +0700'
  content: kang, bagaimana dengan registrasi user biasa (bukan admin)? lewat luar
    login.
- id: 597
  author: ghani
  author_email: ghaniavi8@gmail.com
  author_url: ''
  date: '2016-05-31 21:11:46 +0700'
  date_gmt: '2016-05-31 14:11:46 +0700'
  content: ini kang not found saat login http://localhost/ci/multi_login/login/do_login
- id: 663
  author: AsepSaeulRahman
  author_email: asepsaepulrahman37@yahoo.com
  author_url: ''
  date: '2016-06-23 10:02:37 +0700'
  date_gmt: '2016-06-23 03:02:37 +0700'
  content: Mantaf Bro
- id: 670
  author: Al
  author_email: malexspemujarahasia@yahoo.co.id
  author_url: ''
  date: '2016-06-26 21:52:52 +0700'
  date_gmt: '2016-06-26 14:52:52 +0700'
  content: "linknya jd begini >> http://localhost/ci/multi_login/login/do_login\r\n\r\ntampilannya
    begini\r\n\r\nObject not found!\r\n\r\nError 404\r\n\r\nYang salah yang mananya
    gan?"
- id: 672
  author: priska
  author_email: priskaapriliana50@yahoo.com
  author_url: ''
  date: '2016-07-07 12:34:30 +0700'
  date_gmt: '2016-07-07 05:34:30 +0700'
  content: terimakasih untuk script loginnya..membantu..
- id: 673
  author: angga
  author_email: angga@angga.com
  author_url: ''
  date: '2016-07-12 11:30:15 +0700'
  date_gmt: '2016-07-12 04:30:15 +0700'
  content: loginnya gagal terus meskipun udah di masukan username dan password yang
    benar. mohon bantuannya.
- id: 675
  author: Ferdhika Yudira
  author_email: rpl4rt08@gmail.com
  author_url: http://dika.web.id
  date: '2016-07-15 19:51:21 +0700'
  date_gmt: '2016-07-15 12:51:21 +0700'
  content: "<code>$config['base_url']\t= '/ci/multi_login/'; //ini folder dimana kita
    menaruh web nya saya simpan di htdocs/ci/multi_login</code>\n\nmungkin di config
    nya bagian base_url perlu di ubah jadi nama project agan :)"
- id: 676
  author: Ferdhika Yudira
  author_email: rpl4rt08@gmail.com
  author_url: http://dika.web.id
  date: '2016-07-15 19:52:02 +0700'
  date_gmt: '2016-07-15 12:52:02 +0700'
  content: datanya udah di samakan dngan yang ada di database gan?
- id: 677
  author: Ferdhika Yudira
  author_email: rpl4rt08@gmail.com
  author_url: http://dika.web.id
  date: '2016-07-15 19:53:00 +0700'
  date_gmt: '2016-07-15 12:53:00 +0700'
  content: bisa di rubah di bagian base_url dalam confignya gan, di sesuaikan dengan
    nama project agan sendiri :D
- id: 680
  author: Ajang Supardi
  author_email: ajangsupardi@email.com
  author_url: ''
  date: '2016-07-24 23:05:41 +0700'
  date_gmt: '2016-07-24 16:05:41 +0700'
  content: Mantap! terima kasih tutorialnya, sudah dicoba dan berhasil.
- id: 681
  author: fira
  author_email: firarachmahyanti@gmail.com
  author_url: ''
  date: '2016-07-27 12:07:55 +0700'
  date_gmt: '2016-07-27 05:07:55 +0700'
  content: "Fatal error: Non-abstract method login::index() must contain body in C:\\xampp\\htdocs\\latihan3\\application\\controllers\\login.php
    on line 8\r\n\r\nkalau ini kenapa yah ka?"
- id: 694
  author: ami
  author_email: ImroatusSholiha07@gmail.com
  author_url: ''
  date: '2016-08-07 16:34:42 +0700'
  date_gmt: '2016-08-07 09:34:42 +0700'
  content: gan tanya ,,, saya sudah coba berhasil tapi kenapa waktu saya ganti databasenya
    kok gak bisa ya... padahal di database.php sama yang di m_login sudah saya rubah
- id: 823
  author: Asyep
  author_email: sadfasf@yahoo.com
  author_url: ''
  date: '2016-08-25 23:09:58 +0700'
  date_gmt: '2016-08-25 16:09:58 +0700'
  content: "kang, saya teh udah berhasil jalanin kaya yang akang jelasin\r\nnah abdi
    mau ubah dashboard_admin &amp; dashboard_user supaya bisa jalanin operasi CRUD...\r\n\r\ntapi
    kenapa suka ada yang bertumpuk variable nya kaya variabel 'user'"
- id: 824
  author: adistra
  author_email: distra.galaxy@gmail.com
  author_url: ''
  date: '2016-08-29 11:15:35 +0700'
  date_gmt: '2016-08-29 04:15:35 +0700'
  content: "gan saat dijalakan mucul kaya gini\r\nA PHP Error wa encountere\r\nSeverity:
    Notice\r\nMessage: Only variable references should be returned by reference\r\nFilename:
    core/Common.php\r\nLine Number: 257\r\n\r\nFatal error: Uncaught Error: Call to
    undefined function mysql_pconnect() in C:\\xampp\\htdocs\\ci\\multi_login\\system\\database\\drivers\\mysql\\mysql_driver.php:91
    Stack trace: #0 C:\\xampp\\htdocs\\ci\\multi_login\\system\\database\\DB_driver.php(115):
    CI_DB_mysql_driver->db_pconnect() #1 C:\\xampp\\htdocs\\ci\\multi_login\\system\\database\\DB.php(148):
    CI_DB_driver->initialize() #2 C:\\xampp\\htdocs\\ci\\multi_login\\system\\core\\Loader.php(346):
    DB(Array, NULL) #3 C:\\xampp\\htdocs\\ci\\multi_login\\system\\core\\Loader.php(1171):
    CI_Loader->database() #4 C:\\xampp\\htdocs\\ci\\multi_login\\system\\core\\Loader.php(152):
    CI_Loader->_ci_autoloader() #5 C:\\xampp\\htdocs\\ci\\multi_login\\system\\core\\Controller.php(51):
    CI_Loader->initialize() #6 C:\\xampp\\htdocs\\ci\\multi_login\\application\\controllers\\login.php(5):
    CI_Controller->__construct() #7 C:\\xampp\\htdocs\\ci\\multi_login\\system\\core\\CodeIgniter.php(308):
    Login->__construct() #8 C:\\xampp\\htdocs\\ci\\multi_login\\index.php(202): require_once('C:\\\\xampp\\\\htdocs...')
    #9 {main} thrown in C:\\xampp\\htdocs\\ci\\multi_login\\system\\database\\drivers\\mysql\\mysql_driver.php
    on line 91\r\n\r\nKira kira apanya ya gan\r\nProject saya taruh di C:\\xampp\\htdocs\\ci\\multi_login\r\nmohon
    pencerahaannya gan"
- id: 825
  author: indrianto
  author_email: indriantoadi8@gmail.com
  author_url: ''
  date: '2016-09-05 12:30:46 +0700'
  date_gmt: '2016-09-05 05:30:46 +0700'
  content: gann kalau ingin menambahkan register bagaimana ?
- id: 828
  author: Muhamad Eka
  author_email: muhamadekapurnama@gmail.com
  author_url: ''
  date: '2016-09-19 20:57:22 +0700'
  date_gmt: '2016-09-19 13:57:22 +0700'
  content: "kang punten, itu yang method hak_akses($kecuali=\"\") cara pemanggilannya
    gimana yah?\r\nsoalnya pad di ganti ulr nya masih bisa kebuka selain halaman aksesnya
    kang."
- id: 832
  author: Dyah Retno
  author_email: dyah.r3tn0@gmail.com
  author_url: ''
  date: '2016-10-05 07:10:44 +0700'
  date_gmt: '2016-10-05 00:10:44 +0700'
  content: bang, kalo bikin multiuser tanpa database gimana?
---
<p><a href="http://blog.dika.web.id/wp-content/uploads/2014/12/codeigniter.png"><img class="wp-image-82 alignleft" src="http://blog.dika.web.id/wp-content/uploads/2014/12/codeigniter-300x300.png" alt="Codeigniter" width="201" height="201" /></a>Adaw haha liburan tinggal sehari lagi nih, ga kerasa liburan akhir taun udah hampir berakhir.. dan besok kembali lagi kesekolah, arghhh remed fisika &amp; mtk yng bkin pusing ni pala :( yasudah sekarang mending bikin tutorial dulu, daripada pusing dan cuma buang buang waktu.. mending refreshing di depan lepi aja haha :D</p>
<p><!--more--></p>
<p>Kali ini saya bakal bikin tutorial multi user login dari <a title="CodeIgniter" href="/category/tutor/web/code-igniter" target="_blank">codeigniter</a> kalo ada yng belum tau codeigniter itu apa, bisa liat liat dulu penjelasannya di tutorial <a title="Code Igniter" href="/category/tutor/web/code-igniter" target="_blank">codeigniter</a> kalo udah tau, yo mari lanjut kita ngoding haha B-) Oh iya saya akan membuat multi user login dengan membuat library login sendiri.</p>
<p>Oh Iya BTW Siapin dulu perlengkapannya B-)</p>
<ul>
<li>CodeIgniter (Framework PHP)</li>
<li>XAMPP (WebServer)</li>
<li>Sublime Text (TextEditor)</li>
</ul>
<p>Disini saya akan membuat 2 Hak akses yaitu :</p>
<ol>
<li>Admin</li>
<li>User</li>
</ol>
<p><a href="http://blog.dika.web.id/wp-content/uploads/2015/01/RPL4rt-Studio-capture-192.png"><img class="aligncenter wp-image-158 size-medium" src="http://blog.dika.web.id/wp-content/uploads/2015/01/RPL4rt-Studio-capture-192-300x149.png" alt="Tampilan login" width="300" height="149" /></a><br/>Oke sebelum ngoding pertama-tama kita kenalan dulu dengan yang namanya Library Session</p>
<blockquote><p>Library yang paling penting dalam prosess login itu adalah Session , sebenarnya PHP sudah menyediakan Fungsi Session , tapi Framework CodeIgniter sudah membungkusnya dengan rapi di Library nya menjadi lebih mudah di keluarkan.</p></blockquote>
<p>Untuk menampilkan atau memanggil Library Session anda cukup menyisipkan code :</p>
{% highlight php %}
<?php
..
..
$this->load->library('session');
{% endhighlight %}

<p>atau bisa memanggil di semua controler dengan menyisipkan code di bawah di <strong>/application/config/autoload.php</strong></p>
{% highlight php %}
<?php
..
..
$autoload['libraries'] = array('session');
{% endhighlight %}
<p>Udah deh cukup segitu aja tentang librarynya, padahal masih banyak library di code igniter. Tapi utuk kali ini cukup session dulu aja hehe :D ayo kita mulai tutorial nya B-)</p>
<p>Pertama tama kita buat dulu databasenya dengan nama <strong>lat_login.</strong></p>
{% highlight sql %}
create database lat_login;
{% endhighlight %}
<p>kalo udah buat databasenya, mari kita buat table nya dengan nama <strong>tb_pengguna.</strong></p>
{% highlight sql %}
CREATE TABLE IF NOT EXISTS `tb_pengguna` (
  `username` varchar(50) NOT NULL,
  `password` varchar(32) NOT NULL,
  `nama` varchar(100) DEFAULT NULL,
  `level` int(1) NOT NULL,
  `status` int(1) NOT NULL,
  PRIMARY KEY (`username`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;
{% endhighlight %}
<p>lalu ketika tabel udah di buat, kita isi data di tabel tersebut.</p>
{% highlight sql %}
INSERT INTO `tb_pengguna` (`username`, `password`, `nama`, `level`, `status`) VALUES
('ferdhika31', MD5( 'tamvan' ), 'Ferdhika Ganteng', 1, 1),
('nurjaman', MD5( 'tamvan' ), 'Si Tamvan', 2, 1);
{% endhighlight %}
<p><a href="http://blog.dika.web.id/wp-content/uploads/2015/01/RPL4rt-Studio-capture-191.png"><img class="aligncenter wp-image-146 size-full" src="http://blog.dika.web.id/wp-content/uploads/2015/01/RPL4rt-Studio-capture-191.png" alt="RPL4rt Studio capture #191" width="728" height="85" /></a></p>
<p>Nah database udah dibuat , sekarang kita main di Code Igniternya :D</p>
<p>Ayo sekarang mari kita ubah pengaturan databasenya di code igniter, ubah di file <strong>/application/config/database.php</strong></p>
{% highlight php %}
<?php
..
..
$db['default']['hostname'] = 'localhost'; //host database
$db['default']['username'] = ''; //username database
$db['default']['password'] = ''; //password database (default kosong jika di xampp)
$db['default']['database'] = ''; //nama database yang tadi kita buat
$db['default']['dbdriver'] = 'mysql';
{% endhighlight %}
menjadi :
{% highlight php %}
<?php
..
..
$db['default']['hostname'] = 'localhost'; //host database
$db['default']['username'] = 'root'; //username database (default root jika di xampp)
$db['default']['password'] = ''; //password database (default kosong jika di xampp)
$db['default']['database'] = 'lat_login'; //nama database yng tadi kita buat
$db['default']['dbdriver'] = 'mysql';
{% endhighlight %}
<p>Udah gitu, ubah pengaturan yang di perlukan saat mebuat sistem multi user login.</p>
<p>Pertama <strong>base_url</strong> sama <strong>encryption_key</strong> nya di <strong>/application/config/config.php</strong></p>
{% highlight php %}
<?php
..
..
$config['base_url']	= '/ci/multi_login/'; //ini folder dimana kita menaruh web nya saya simpan di htdocs/ci/multi_login
..
..
$config['encryption_key'] = 'ferdhika_ganteng';
{% endhighlight %}
<p>Kedua <strong>libraries</strong> sama <strong>helper </strong>nya di <strong>/application/config/autoload.php</strong></p>
{% highlight php %}
<?php
..
..
$autoload['libraries'] = array('database','session','auth');
..
..
$autoload['helper'] = array('url','form');
{% endhighlight %}
<p>Nah selesai ngubah pengaturan selanjutnya kita buat Modelnya dan beri nama <strong>m_login.php</strong> saja biar ga pusing :D (simpen di folder <strong>models</strong> ya bro)</p>
{% highlight php %}
<?php  if ( ! defined('BASEPATH')) exit('No direct script access allowed');
class M_login extends CI_Model{
	function __construct(){
		parent::__construct();
		$this->tbl = "tb_pengguna";
	}
	
	function cek_user($username="",$password=""){
		$query = $this->db->get_where($this->tbl,array('username' => $username, 'password' => $password));
		$query = $query->result_array();
		
		return $query;
  	}

	function ambil_user($username){
		$query = $this->db->get_where($this->tbl, array('username' => $username));
		$query = $query->result_array();
		
		if($query){
			return $query[0];
		}
	}
}
{% endhighlight %}
<p>Setelah model di buat, kedua kita buat dulu view nya (tampilan login) beri nama <strong>form_login.php</strong> dan simpan di folder <strong>View</strong></p>
{% highlight html %}
<html>
	<head>
		<title>Form Login</title>
		<style>
			body{
				font-family:Calibri;
				margin:50px;
			}
			#form-login{
				margin:auto;
				width:320px;
				padding:10px;
				border:1px #ccc solid;
				font-size:18px;
				font-weight:bold;
				color:#555;
			}
			.inputan{
				width: 100%;
				padding:3px;
				font-family:Consolas;
				border:1px solid #ccc;
			}
			.tombol{
				padding:5px;
				background:#555;
				color:#FFF;
				font-weight:bold;
				font-family:Consolas;
				font-size:15px;
				border:#eee 1px solid;
			}
			.error{
				color:#555;
				font-size:11px;
			}
		</style>
	</head>
	<body>
		<form action="<?php echo base_url();?>login/do_login" method="post">
			<div id="form-login">
			<center>Administrator Page - Plase Login First</center>
			<table border="0" cellpadding="4">
				<tr>
					<td>Username</td>
					<td>:</td>
					<td><input type="text" size="40" name="uname" class="inputan"> <?php echo form_error('username');?></td>
				</tr>
				<tr>
					<td>Password</td>
					<td>:</td>
					<td><input type="password" size="40" name="pass" class="inputan"> <?php echo form_error('password');?></td>
				</tr>
				<tr>
					<td>&amp;nbsp;</td>
					<td>&amp;nbsp;</td>
					<td><input type="submit" name="login" value="Login" class="tombol"> </td>
				</tr>
			</table>
			</div>
		</form>
	</body>
</html>
{% endhighlight %}
<p>Selanjutnya kita buat controllernya, beri nama <strong>login.php</strong></p>
{% highlight php %}
<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Login extends CI_Controller{

	function __construct(){
		parent::__construct();
		
		$this->load->model('m_login'); //memasukkan file model m_login.php ke dalam controller
	}

	function index(){
		$session = $this->session->userdata('isLogin'); //mengabil dari session apakah sudah login atau belum
		if($session == FALSE) //jika session false maka akan menampilkan halaman login{
			$this->load->view('login_form');
		}else{ //jika session true maka di redirect ke halaman dashboard
			redirect('dashboard');
		}
	}

	function do_login(){
		$username = $this->input->post("uname");
		$password = $this->input->post("pass");

		$cek = $this->m_login->cek_user($username,md5($password)); //melakukan persamaan data dengan database

		if(count($cek) == 1){ //cek data berdasarkan username &amp; pass
			foreach ($cek as $cek) {
					$level = $cek['level']; //mengambil data(level/hak akses) dari database
			}

			$this->session->set_userdata(array(
					'isLogin'   => TRUE, //set data telah login
					'uname'  => $username, //set session username
					'lvl'      => $level, //set session hak akses
			)); 

			redirect('dashboard','refresh');  //redirect ke halaman dashboard
		}else{ //jika data tidak ada yng sama dengan database
			echo "<script>alert('Gagal Login!')</script>";
			redirect('login','refresh');
		}
	}
}
{% endhighlight %}
<p>Kemudian, setelah itu. mari kita buat library auth. Buat file auth dengan nama <strong>auth.php</strong> dan simpan di folder <strong>/application/libraries</strong></p>
{% highlight php %}
<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Auth {

	public function cek_auth(){
		$this->ci =& get_instance();
		$this->sesi  = $this->ci->session->userdata('isLogin');
		$this->hak = $this->ci->session->userdata('stat');

		if($this->sesi != TRUE){
		redirect('login','refresh');
			exit();
		}
	}

	public function hak_akses($kecuali=""){
		if($this->hak==$kecuali){ 
			echo "<script>alert('Anda tidak berhak mengakses halaman ini!');</script>";
			redirect('dashboard');
		}elseif ($this->hak=="") {
			echo "<script>alert('Anda belum login!');</script>";
			redirect('login');
		}else{

		}
	}
}
/* End of file Someclass.php */
{% endhighlight %}

<p>Seudah itu, mari kita buat view halaman Dashboard buat admin dan user nya.. Pertama kita buat dulu buat admin, setelah itu baru User..</p>
<pre class="toolbar:1 lang:default decode:true" title="dashboard_admin.php">Hai <b><?php echo $user['nama'];?></b> horeee kamu berhasil login. Ini halaman admin. Udah masuk mau keluar? nih keluarin disini > [<a href='<?php echo base_url('dashboard/logout');?>'>Keluar</a>]</pre>
<pre class="toolbar:1 lang:default decode:true" title="dashboard_user.php">Hai <b><?php echo $user['nama'];?></b> horeee kamu berhasil login. Ini halaman user. Udah masuk mau keluar? nih keluarin disini > [<a href='<?php echo base_url('dashboard/logout');?>'>Keluar</a>]</pre>
<p>Kalo udah di buat, ayo kita buat controller nya B-)</p>
{% highlight php %}
<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Dashboard extends CI_Controller{

	function __construct(){
		parent::__construct();
		$this->load->model('m_login');
		$this->auth->cek_auth(); //ngambil auth dari library
	}

	function index(){
		$ambil_akun = $this->m_login->ambil_user($this->session->userdata('uname'));
		$data = array(
			'user'	=> $ambil_akun,
		);
		$stat = $this->session->userdata('lvl');
		
		if($stat==1){//admin
			$this->load->view('dashboard_admin',$data);
		}else{ //user
			$this->load->view('dashboard_user',$data);
		}
	}

	function login(){
		$session = $this->session->userdata('isLogin');
		if($session == FALSE){
			$this->load->view('login_form');
		}else{
			redirect('dashboard');
		}
	}

	function logout(){
		$this->session->sess_destroy();
		redirect('login','refresh');
	}
}{% endhighlight %}
<p>Oke selesai deh, mari kita coba satu per satu login nya :D</p>
<p style="text-align: left;"><a href="http://blog.dika.web.id/wp-content/uploads/2015/01/RPL4rt-Studio-capture-194.png"><img class="aligncenter size-full wp-image-159" src="http://blog.dika.web.id/wp-content/uploads/2015/01/RPL4rt-Studio-capture-194.png" alt="Dashboard admin" width="876" height="82" /></a><a href="http://blog.dika.web.id/wp-content/uploads/2015/01/RPL4rt-Studio-capture-195.png"><img class="aligncenter size-full wp-image-161" src="http://blog.dika.web.id/wp-content/uploads/2015/01/RPL4rt-Studio-capture-195.png" alt="Dashboard user" width="878" height="81" /></a>Nahh selesai dah , sekarang coba deh di jalanin LOCALHOSTnya :D<br />
Nih Filenya buat yang pengen langsung jadi -___-"</p>
<p style="text-align: center;"><a class="download" href="http://download.dika.web.id/index.php/donlod/detail/8" target="_blank">Download</a></p>
<p>Semoga bermanfaat.. Ayo kembangin lagi scriptnya untuk di persingkat lagi :D</p>
