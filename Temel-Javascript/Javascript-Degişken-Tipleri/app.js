//* Javascirpt de 7 tip değişken vardır
//! değişken isimlerinde türkce karakter kullanılmaz
//? eğer 1 den fazla kelimeden oluşucaksa ilk kelimenin baş harfi küçük sonrakinlerin büyüy olur (bu şekilde stadartize edilmiştir yapmassanız hata almassıznız)
/*
1-String
2-Number
3-Boolean
4-Null
5-Undefined
6-Object
7-Function
*/
let Stringtip = "yazi";
console.log(typeof Stringtip);//typeof fonksiyonu değişkenin türünü yazdırır

let Numbertip = 10;
console.log(typeof Numbertip);

let Booleantip = false;//boolean sadece doğru(true) ve yanlış(false) değerlerini alabilir
console.log(typeof Booleantip);
console.log(2<1);// paratenzin icerisindeki ifade doğru ise consolda true yanlışsa falsze yazacak

let Nulltip = null;
console.log(Nulltip);//Null Boş demekdir

let Undefinedtip ;
console.log(typeof undefined);//Undefined Tanımlanmamış demekdir

let personel = {// değişken bu şekilde tanımlandığında obje tipinde olur
    ad : "isim1",//buraya yazdığım ad gibi içine süslü parantezlerle özellik tanımlarız
    soyad : "soyisim1",//İçindeki özellikleri farklı türlerde olabilir
    yaş : 21 //! her özellik tanımladıkdan sonra virgül konur
}
console.log(typeof personel);
console.log( personel);

let dizi = ["mavi",10,null,true,]//?bu şekişde köşeli parantezleri kullarak dizi tanımlarız
console.log(typeof dizi);// dizi object tipindedir
console.log(dizi);//ve içinde farklı türden değerler alabilir

let fonksiyon = function () {//bu şekildede funcyion tipinde tanımlama yapılır
    console.log("bu bir fonksiyon");
}
console.log(typeof fonksiyon);
console.log(fonksiyon);