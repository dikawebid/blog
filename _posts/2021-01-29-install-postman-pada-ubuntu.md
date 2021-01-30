---
layout: post
title:  "Install Postman pada Ubuntu"
date:   2021-01-29 21:41:10 +0700
categories: ['Tips & Trik', 'Tools', 'Linux']
share: true
disqus: true
publish: true
tags: ['Postman']
author: dika
---

Sebenernya udah banyak sih tutorial install-install buat ubuntu dan sebenernya juga saya cuma mau bikin catatan sendiri aja buat nambahin icon launcher di ubuntu, karena saya kadang suka males cari-cari lagi di google jadi saya bikin disini aja :D. Baru 2 minggu ini saya install kembali ubuntu setelah sekian lama pakai windows buat development. Tapi karena ada beberapa hal yang terbatas, jadi saya install ubuntu sekarang. Padahal udah ada rencana habis sidang tugas akhir mau pake OS satu ini, tapi karena waktu itu lagi malas install-install jadi saya pake windows haha

Oke, dalam kasus kali ini saya akan menginstall sekaligus menambahkan launcher untuk Postman di ubuntu. Sebelumnya kita membutuhkan Postman Native App. Dan berikut langkah-langkahnya :

1. Pertama download postman disini -> [Download](https://dl-agent.pstmn.io/download/latest/linux)

2. Ekstrak postman hasil download tersebut. Oh iya, biasanya default hasil download terletak pada folder `/Downloads` jadi kita pindah direktori ke folder Downloads dengan perintah :

    ```bash
    cd Downloads
    ```
    Kemudian ekstrak tarbal dengan perintah :
    ```bash
    sudo tar -xvf Postman-linux-x*.tar.gz
    ``` 

3. Setelah proses ekstrak selesai sebenernya postman sudah bisa dipakai, tetapi disini saya akan memindahkan aplikasi Postman ke folder `usr/local` agar tidak menumpuk di folder download saya. Maka saya memindahkan folder tersebut dengan menjalankan perintah : 

    ```bash
    sudo mv Postman /usr/local
    ```

4. Nah kalo udah selesai dengan langkah-langkah diatas, mari kita bikin launcher nya biar ga ngetik-ngetik lagi di terminal pas mau buka Postman-nya dengan cara menjalankan perintah dibawah:

    ```bash
    sudo nano .local/share/applications/postman.desktop
    ```

    kemudian, masukkan konten dibawah kedalam `postman.desktop`

    ```desktop
    [Desktop Entry]
    Encoding=UTF-8
    Version=1.0
    Type=Application
    Name=Postman
    Icon=/usr/local/Postman/app/resources/app/assets/icon.png
    Path=/usr/local/Postman
    Exec=/usr/local/Postman/Postman
    StartupNotify=false
    StartupWMClass=Postman
    OnlyShowIn=Unity;GNOME;
    X-UnityGenerated=true
    ```

    Simpan dan keluar, tinggal `ctrl + x` kemudian `y` aja deh selesai.

Oh iya, konten diatas ini cuma jalan di environment `Unity` sama `GNOME`. Kalo pake environment lain, tinggal tambahin aja di bagian OnlyShowIn setelah titik koma.

Sekian aja dah, postingan kali ini. Semoga bermanfaat buat saya dan kalian :D