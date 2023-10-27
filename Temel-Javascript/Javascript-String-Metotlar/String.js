let url ="https://www.w3schools.com/";
let kelime ="Temel-Javascript-String-Metotlar";
// url karakter sayısını bulalım
let sonuc;
sonuc = url.length;//lenght ile karakter sayısını buluyoruz
console.log(sonuc);
// site adının kac kelimeden oluştuğunu bulalalım
sonuc = kelime.split('-').length;//split fonksiyonunu kullanarak - ile kelimeyi bölüyoruz ve lenk ile kac tana parca varsa onun sayısını alıyoruz
console.log(sonuc);
// url https ile mi başlıyor kontrol edelim 
sonuc = url.startsWith('https') //startWith başdan itibaren string değerin karakterlerini kontrol eder
console.log(sonuc);
// kelimenin içerisinde javascript varmı
if (kelime.indexOf('Javascript')!=-1) {//indexOf içinde Javascript olan indexsi bulur ve onun değerini alır eğer içinde bahsedilen değer yoksa -1 olur
    console.log('evet var')
}
else{
    console.log("hayır yok")
}
//url nin sonuna kelimeyi ekleyelim ve urldeki https kısmını kaldırıp '/' kısımlarını '-' ile değiştirelim
url = url.replaceAll('/','-');//  '/' kısımlarını '-' ile değiştirdik
url = url.slice(5)// baştan 5 karakteri sildik
console.log(url+"-"+kelime);// ve ard arda koyup yazdırdık