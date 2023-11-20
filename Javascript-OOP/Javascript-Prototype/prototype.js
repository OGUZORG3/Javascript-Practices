function Soru(soruMetni,cevapSecenekleri,doruCevap){//Normalde Constructor metot dan her bir obje üretişimizde metodun içinde belirleriğimidz özellikler
    this.soruMetni = soruMetni;                     // her obje için tekrar oluşturulur yani kopyalanır.Ama biz bunu istemeyiz cünkü Performans ve düzgün 
    this.cevapSecenekleri = cevapSecenekleri;       // kod yazımı acısında kötü etkiler.Bizde bundan dolayı Prototype özelliğini kullanırız
    this.doruCevap = doruCevap;
    this.cevabiKontrolEt = function () {
        return cevap === this.doruCevap
    }
}
let soru1 = new Soru("Hangisi programlama dili değildir ?",{a:'C#',b:'PHP',c:'HTML',d:'JAVA'},"c");
console.log(soru1);//bu objeye consolda incelediğimizde cevabı kontrol et fonksiyonun özellikleri arasında olduğunu görürüz
//  buda o fonksiyonun tarayıcı belleğinde bu obje için yenide oluşturulduğunu gösterir

Soru.prototype.cevabiKontrolEt2 = function () {//burda 2.bir cevabıKontrolEt fonksiyonu tanımladım ama bu sefer prototype ile yaptım
    return cevap === this.doruCevap
}
console.log(soru1);//şimdi tekrardan consolda 2. soru1 objesine baktığımızda cevabıKontrolEt2 fonksiyonunun obje içinde değil prototype kısmında görürüz
//ne farkı var diye düşünürseniz ilk durumda her obje için tekrar fonksiyon oluşturuldu ikinci Durumda zaten 1 kere oluşmuş olan fonksiyona obje erişim sağlamış oldu
