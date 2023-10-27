let diziSayilar = [0,1,2,3,4,5,6,7,8,9];//dizi tanımlaması [] paraztezler ile olur
console.log(diziSayilar[2]);//dizideki bir elemanla işlem yapmak istiyorsak o elemanın olduğu index numarası ile ulaşırız
console.log(diziSayilar[2]+diziSayilar[3]);
diziSayilar[2]=8;//dizilerin indexlerine sonradanda eleman tanımlanabilir
console.log(diziSayilar[2]);
diziSayilar[11]=8;
console.log(diziSayilar[11]);
let Renkler = [
    rgb=["mavi","kırmızı","teşil"],
    cmyk=['camgöbeği',"galibarda","sarı","siyah"]//dizi içinde dizi tanımlanabilir
]
console.log(Renkler[1]);//ve o dizimin belli bir indexsine giderek o indexdeki diziyi yazdırabiliriz
//Dizi Metotdları
let silinenEleman = diziSayilar.pop();//Son elemanı silinen eleman geri döndürülür
console.log(silinenEleman);
diziSayilar.push("23");//Dizinin sonuna eleman ekler eklenen eleman farklı türde olabilir
console.log(diziSayilar[11]);
let birlesmişDizi = diziSayilar.concat(Renkler);//Concat dizileri birleştirebilir
console.log("Concat"+birlesmişDizi);
let silinenDeğer = diziSayilar.splice(0,0,Renkler);//splice metodu diziden eleman silip yerine yeni elemanlar eklememize olanak yanıt splice(başlangıc dizi,kac eleman silinicek,eklenicek dizi) ve aynı zamanda silinen elemanları geri döndürür
console.log(silinenDeğer);
console.log("Splice"+diziSayilar);