 let toplam1 = 0;

 for(let i = 1; i <= 10; i++) {//i= 1 den başlar ve i <=10 yani i=10 olana kadar devam eder
     toplam1 += i;//burdaki konu calıştırır yani toplam değişkenine i değişkenini ekler 
 }
 console.log(toplam1);

let sayilar = [1,4,5,8,4,3,12,5,3,5];

let toplam2 = 0;

 for(let i=0; i < sayilar.length; i++) { //sayılar .lenght dizi uzunkuğunu veriri yani döngü dizi uzunluğu kadar döner
     toplam2 += sayilar[i];    
}
console.log(toplam2);
let toplam3;
for(let i in sayilar) { // bu döngüde dizi uzunluğu kadar döner ama bu sefer i değeri dizinin indeks numaralarını alır
   toplam3 += sayilar[i];
 }
 console.log(toplam3);
let toplam4;
for(let sayi of sayilar) {// bu döngüde yukarıdakilerle aynı ama sayi değeri indeks numarası almak yerine direk indeksdeki değeri alır
    toplam4 += sayi;
}

console.log(toplam4);

let user = {
    "name": "User1",
    "username": "user",
    "password": "321",
    "email": "example@gmail.com"
};

for (let key in user) {//dizlerdeki işlemin objelerdeki hali ama bu sefer indeksler değil keyler üzerinde işlem yapılıyor
    console.log(key);
    console.log(user[key]);
}