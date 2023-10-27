//Javascript Dialog Kutuları
alert("Alert Dialog Kutusu");//sayfanın üst kısmında cıkan mesaj kutusu ile içindeki değeri iletir

let geriDonenDeger = prompt("bu fonkisyonun ismi nedir");//alet gibi çalışır ama bu sefer sizden bir değer girmenizi ister ve girelen değer geri döner

document.write("<h1>geri dönen değer "+geriDonenDeger+"</h1>");//burdada geri dönen değeri sayfaya yazdırdım

let sonuc = confirm("sonuc aşşağıda görülecek");//prompt gibi ama bu sefer cevap string değil boolean yani true veya false döner
document.write("<br><h1>Sonuc:"+sonuc+"</h1>");