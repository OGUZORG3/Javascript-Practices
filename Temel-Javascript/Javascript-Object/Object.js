//Objeler dizilere benzer şekilde tanımlarnır
let ders1 = {
    "isim" : "Matematik",//Dizilerden farklı olarank [] yerine {} kullanırız
    "Kredi": "10",//ve Değerlerin indisler yerine key(Anahtar değer) ile ulaşırız 
    "Saat" : "5",
    "Konular" : {//Dizilerde olduğu gibi obje altında bir obje daha tanımlıyabilriz
        "isim" : Konular = ["Cebir","Mantık","Limit","Türev","İntegral"]//Obje içinde Dizide Tanımlayabilirzi
    }
}
console.log(ders1.isim);//burde ders1 objesinin isim bilgisine eriştik ve consola yazdırdır
console.log(ders1.Konular.isim);
let ders2 = {
    "isim" : "Fizik",
    "Kredi": "5",
    "Saat" : "2",
    "Konular" : {
        "isim" : Konular = ["Vektörler","Basit Makinalar","Akişkanlar"]
    }
}
let Dersler = [ders1,ders2];//obje içinde dizi tanımlayabildiğimiz gibi dizi içindede obje tanımlayabiliriz
console.log(Dersler[1].Konular.isim[2]);