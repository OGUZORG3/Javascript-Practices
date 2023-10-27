let sayi=35; //sayının belli bir aralıkta olup olmadığını kontrol edelim
if (sayi>30 && sayi<50) {//30-50 aralıgındaysa sayi consolde mesaj görülecek
    console.log('Sayı 30-50 aralığında')
}
//sayının ekmi ciftmi olduğuna bakalım
if (Math.abs(sayi % 2)==1) {//sayının tek olması için 2 ye bölümünden 1 kalması gerekir o yüzde modunu alırız Math.abs fonksiyonu mutlak değer alarak negatif sayı durumlarınıda hesaplamayı sağlar
    console.log('sayı tekdir')
}
else{
    console.log('Sayı Çifttir')
}
//vize final ile ortalama hesaplama
let vize = 50;
let final = 80;
let ortalama = (vize * 0.4) + final * 0.6;//vizenin yüzde kırkını (0.4) finalin yüzde altmışını (0.6) alıp topluyoruz
if (ortalama>50) {
    console.log('ortalamanız : '+ortalama+' geçtin');
} else if (ortalama<50) {
    console.log('ortalamanız : '+ortalama+' kaldın');
}
