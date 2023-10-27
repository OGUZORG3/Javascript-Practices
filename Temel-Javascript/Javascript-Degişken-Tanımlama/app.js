//*Javascript de 3 farklı şekilde değişken tanımlıyabilriz
//let const ve var
//! 3 tür scope vardır block-global-function
/*
Global:Her yerden erişilir
Function:fonksiyon içinden erişilir
Block:sadece kod blogları(if gibi) içinden erişilir
*/
//* var function scope olduğu için ram bellekte cok yer kaplar 
//? let ve const block scope olduğu için daha az ramde yer kaplar
function deneme(){
    var a =3;//burda a yı var yöntemi ile tanımladım
    if(a=3){//burdada if bloku ile kontrol ederem eğer 3 e eşitse yazdırmasını söyledim
        console.log("a="+a+"dür");// eğer consola bakarsanız a=3dür yazıcak
    }
    try {
        console.log(a);//burda hata bloku içinde a yı yazdırmaya calıştım ve consola yazdı çünkü a ya ulaşabildi
    } catch (error) {
        console.log(error);
    }
}
function deneme1(){

    //burda da let yöntemi ile yukaridakinin ayanısını yapdım 
    if(true){
        let b =4;//if blok unun içinde let ile b yi tanımladım
        console.log("b="+b+"dür");//ve yine consolde yazdı
    }
    try {//ama bu sefer burda yukarıdaki b'yi yazdırmaya calıştım ve try-catch(hata yakalama) kullandım
        console.log(b);
    } catch (error) {
        console.log(error+"-anlamı b nin tanımlanmamış olduğunu söylüyor");//!ve consola hatayı bastı cünkü b değişkenine ulaşamadı
    }
}
deneme();
deneme1();
//* const da let gibi ama const içindeki değer sabittir ve değişmez