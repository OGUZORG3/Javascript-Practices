let sonuc;

sonuc = 10;
sonuc = "10";
sonuc = Number("10");//string değişkeni int nuber olarak alma
sonuc = parseInt("10.6");//string değişkeni Integer türüne döniştürme
sonuc = parseFloat("10.6");// Float türüne dönüştürme
sonuc = parseInt("10a");//değişken int e dönüşemediği için NaN(Not a Number) değeri ortaya cıkar
sonuc = parseInt("a10");

sonuc = isNaN("10");//string değerin number olarak alınım alınamıyacağını kontrol eder

let sayi = 15.12355467;

sonuc = sayi.toPrecision(5);//ondalık kısmının ilk 5 basamağınını gösteridi ve yuvarlama işlemi yapar
sonuc = sayi.toFixed(5);//ilk 5 basamağını gösterir ama yuvarlama yapmaz
//math kütüphanesinin metotları
sonuc = Math.round(2.4);//yuvarlama yapar
sonuc = Math.round(2.6);
sonuc = Math.ceil(2.2);//bir üst sayıya yuvarlar
sonuc = Math.floor(2.6);//bir alt sayıya yuvarlar
sonuc = Math.sqrt(25);//kare kök alır
sonuc = Math.pow(2,3);//2 üstü 3 olarak işleme alır
sonuc = Math.abs(-10);//Mutlak değer alır
sonuc = Math.min(4,6,8,3,9);//aralıktaki sayıların içinden en küçüğünü alır
sonuc = Math.max(4,6,8,3,9);//en büyüğünü alır
sonuc = Math.random();// 1 ile 0 arasında rastgele sayı üğretir

console.log(typeof sonuc);
console.log(sonuc);