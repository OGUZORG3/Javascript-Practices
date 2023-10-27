let suan = new Date(); // şimdiki tarih - saat

// Tarih alabileceğimiz fonksiyonlar
sonuc = suan;
sonuc = suan.getDate();    // gün
sonuc = suan.getDay();     // 0: pazar 6: cumartesi
sonuc = suan.getFullYear(); // yıl
sonuc = suan.getHours();   // saat
sonuc = suan.getTime();

// Gelen Tarihi Değiştirebileceğimiz Fonksiyonlar
 suan.setFullYear(2025);//yıl bilgisini değiştitir
suan.setMonth(7); //ay bilgisini değiştiri         // 0: Ocak
suan.setDate(15); // gün bilgisini değiştirir

sonuc = suan;

let dogumTarihi = new Date(1990, 5, 15);

sonuc = suan.getFullYear() - dogumTarihi.getFullYear();// şu andaki yıl bilgisinden - Doğum tarihinin yıl bilgisini cıkartıyor

let milisecond = suan - dogumTarihi; //milisaniye şeklinde sonuc gelicek
let saniye = milisecond / 1000;     // 1000 e bölerik saniye türüne dönüştürürüz
let dakika = saniye / 60;   //60 a bölerek dakika türüne dönüşür
let saat = dakika / 60; //bir kez daha 60 a bölerek dakikaya dönüşür
let gun = saat / 24; // 24 de bölerek gün bilgisnine dönüşür 

sonuc = gun;

console.log(sonuc);
console.log(typeof sonuc);

