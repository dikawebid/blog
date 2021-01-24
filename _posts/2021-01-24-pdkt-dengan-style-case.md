---
layout: post
title:  "PDKT-an dengan Style Case Penulisan dalam Ngoding"
date:   2021-01-24 12:52:31 +0700
categories: ['Tips & Trik', 'Slice of Code']
share: true
disqus: true
publish: true
tags: []
author: dika
---

Sudah lama rasanya tidak mengisi artikel di blog ini setelah sekian lama sibuk dengan dunia sendiri. Sekarang saya mau nyoba lagi buat nulis-nulis kecil disini. Ide posting ini sebenernya udah rencana dari lama, tapi baru sekarang terealisasi haha. 

Okeh, artikel kali ini saya akan membuat tentang penulisan style case sensitive pas ngoding. Sebelumnya saya mau tanya, kalian pernahkan merhatiin gaya penulisan huruf-huruf pada kode program? kaya `namaSaya`, `nama-saya`, `NamaSaya`, atau `nama_saya`, ternyata itu ada namanya lho.. 

Mari kita kenalan dengan gaya penulisan tersebut. 

1. Camel Case (camelCase)

    <figure class="text-center">
        <img alt="Camel Case" src="/wp-content/uploads/2021/01/1200px-CamelCase.png?raw=true" width="40%">
        <figcaption>Image from <a href='https://en.wikipedia.org/wiki/Camel_case' target='_blank'>Wikipedia</a></figcaption>
    </figure>

    Yang pertama, ini nih gaya penulisan yang saya suka. Camel case, jenis case satu ini terlihat seperti punggung onta. Case satu ini menggabungkan semua suku kata dan pemisah antar kata tersebut ditandai dengan huruf kapital pada kata selanjutnya. Sebagai contoh seperti berikut:

    ```php
    $namaSaya = "Ferdhika Yudira";
    function camelCase(){};
    ```

    Terlihat variabel dan nama fungsi diatas terlihat seperti punggung unta, jadi begitulah camel case.

    Gaya penulisan ini biasanya sering kita jumpai pada bahasa pemrograman yang mendukung orientasi objek atau OOP seperti PHP, Java, C#, dll.

    Dalam [PSR1 Basic Coding Standard](https://www.php-fig.org/psr/psr-1/) (PHP Standard Recommendation) penamaan method direkomendasikan harus menggunakan `camelCase` :D.

2. Kebab Case (kebab-case)

    <figure class="text-center">
        <img alt="Kebab Case" src="/wp-content/uploads/2021/01/kebab-case.png?raw=true">
        <figcaption>Image from <a href='https://textcaseconvert.com/blog/kebab-case/' target='_blank'>Text Case Convert</a></figcaption>
    </figure>

    Kebab case atau dash case ini menggabungkan semua suku kata dan antar kata tersebut dipisahkan menggunakan tanda minus (-) atau dash sehingga terlihat seperti kebab. Sebagai contoh, begini salah satu contoh kebab case pada properti css:

    ```css
    .annyeong { 
        line-height: 125%; 
        margin-top: 10px; 
    }
    ```

    Terlihat properti css `line height` dan `margin top` dari code diatas terlihat seperti tusuk kebab.

    Gaya penulisan ini biasanya sering kita jumpai pada CSS, Component Vue, Slug URL, penamaan branch pada git, dll.

3. Pascal Case (PascalCase)

    Pascal case ini menggabungkan semua suku kata dan huruf pertama antar kata tersebut menggunakan huruf kapital. Sebagai contoh, berikut salah satu contoh pascal case pada nama class php

    ```php
    class PascalCaseController{};
    ```
    atau pada function exported pada go
    ```go
    func SayArigatou(){};
    ```

    Gaya penulisan ini biasanya sering kita jumpai pada nama class, nama method, dll.

4. Snake Case (snake_case)

    <figure class="text-center">
        <img alt="Snake Case" src="/wp-content/uploads/2021/01/snake.png?raw=true" width="40%">
        <figcaption>Image from <a href='https://www.pinclipart.com/pindetail/hwmhTJ_viborita-snake-animation-clipart/' target='_blank'>Pinclipart</a></figcaption>
    </figure>

    Snake case ini menggabungkan semua suku kata dan antar kata tersebut dipisahkan menggunakan garis bawah `_` atau underscore sehingga terlihat seperti ular. Sebagai contoh, begini salah satu contoh snake case:

    ```python
    nama_saya = "Ferdhika Yudira";
    ```
    Gaya penulisan ini biasanya sering kita jumpai pada bahasa pemrograman python.

## Mana yang terbaik dari semua style case tersebut?
> Tidak ada yang terbaik untuk hal ini. Hal yang paling utama adalah konsisten dengan yang kita gunakan dan jika kita sedang berada dalam satu tim, kesepakatan bersamalah yang menjadi pilihannya :D.

Jadi, apa ada gaya favorit yang kamu sukai? :D 