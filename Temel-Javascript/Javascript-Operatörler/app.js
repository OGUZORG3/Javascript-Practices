//javascripte Operatöler
//* Aritmatik Öperatörler
//? işlem yapıcağımız değişkenler
let a = 5;
let b = 11;

//  + ve - operatörü toplama ve cıkarma  için kullanılır
console.log(b+a);
console.log(b-a);
a++;//değeri 1 arttırır
console.log(a);
b--;//değeri 1 azaltır
console.log(b);
//? * ve / öperatörleri carpma ve bölme için kullanılır
console.log(a*b);
console.log(b/a);

//! % öperatörü bölümden kalanı bulmayı saylar
console.log(b%a);

//* Değer Atama Operatörleri

let c = 3;//= değer atamak için kullanılıer
let d = c;

c+=3;//değeri 3(eşitlediğimiz eğer) ile toplar
console.log(c);// -=,*=,/=,%= de ayni işlemi kendi başındaki işlem işareti ile yapar

//Mantıksal Öperatöler
//&& ve öperatörüdür 
//? ve nin içinde bulunduğu aynı anda 2 veya daha fazla durumun aynı true olması ile gercekleşir
if (true && false) {
    console.log('bu yazıyı consola basmıyacak');
}
if (true && true) {
    console.log("bu yazıyı basıcak");
}
//|| veya opetratörüdür
//? veyanın içinde olduğu 2 veya daha fazla durumdan herhangi biri true olması ile gecekleşir
if (false || false || false) {
    console.log("bu yazıyı consola basmıyacak");
}
if (true || false || false) {
    console.log("bu yazıyı basıcak");
}


//* Karşılaştırma Operatörleri
if (1>2) {//eğer ilk değer ikinci değerden büyükse true değer verir
    console.log(true);
}

if (1<2) {//eğer ilk değer ikinci değerden küçükse true değer verir 
    console.log(true);
}

if (1>=2) {//eğer ilk değer ikince değerden büyük veya eşit olursan true değer verir
    console.log(true);
}

if (1<=2) {//eğer ilk değer ikinciden değerden küçük veya eşit olursa true değer verir
    console.log(true);
}
console.log(1==1);// == öperatörü değerlerin birbirine eşit olup olmadığını kontrol eder 
console.log(1==="1"); // === öperatörü de eşitlik kontrolü yapar ama bu sefer değerlerin aynı tipde olup olmadığınıda kontrol eder