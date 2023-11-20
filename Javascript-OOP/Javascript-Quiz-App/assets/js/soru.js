//Constructor(yapıcı) metod oluşturuyoruz
function Soru(soruNo,soruMetni,cevapSecenekleri,doruCevap){//metod alıcağı değerleri(parametreleri) belirliyoruz
    this.soruNo = soruNo;
    this.soruMetni = soruMetni;//metot da bulunan parametreleri dışarıdan gelen değerlerle eşitliyoruz
    this.cevapSecenekleri = cevapSecenekleri;
    this.doruCevap = doruCevap;
  
}
Soru.prototype.cevabiKontrolEt = function (cevap) {
    return cevap === this.doruCevap
}
let soru1 = new Soru("Hangisi programlama dili değildir ?",{A:'C#',B:'PHP',C:'HTML',D:'JAVA'},"C");

let soru2 = new Soru("Aşşağıdakilerden hangisi bir CMS(içerik yönetim sistemi) değildir ?",{A:'Wordpress',B:'Magento',C:'Joomla',D:'Angular'},"D");
let sorular = [//soruları bu şekilde bir dizi içerisine girip
    new Soru("1","1Aşşağıdakilerden hangisi bir CMS(içerik yönetim sistemi) değildir ?",{A:'Wordpress',B:'Magento',C:'Joomla',D:'Angular'},"D"),
    new Soru("2","2Aşşağıdakilerden hangisi bir CMS(içerik yönetim sistemi) değildir ?",{A:'Wordpress',B:'Magento',C:'Joomla',D:'Angular'},"D"),
    new Soru("3","3Aşşağıdakilerden hangisi bir CMS(içerik yönetim sistemi) değildir ?",{A:'Wordpress',B:'Magento',C:'Joomla',D:'Angular'},"D"),
    new Soru("4","4Aşşağıdakilerden hangisi bir CMS(içerik yönetim sistemi) değildir ?",{A:'Wordpress',B:'Magento',C:'Joomla',D:'Angular'},"D"),
    new Soru("5","5Aşşağıdakilerden hangisi bir CMS(içerik yönetim sistemi) değildir ?",{A:'Wordpress',B:'Magento',C:'Joomla',D:'Angular'},"D"),
    new Soru("6","6Aşşağıdakilerden hangisi bir CMS(içerik yönetim sistemi) değildir ?",{A:'Wordpress',B:'Magento',C:'Joomla',D:'Angular'},"D"),    
]