//Constructor(yapıcı) metod oluşturuyoruz
function Soru(soruMetni,cevapSecenekleri,doruCevap){//metod alıcağı değerleri(parametreleri) belirliyoruz
    this.soruMetni = soruMetni;//metot da bulunan parametreleri dışarıdan gelen değerlerle eşitliyoruz
    this.cevapSecenekleri = cevapSecenekleri;
    this.doruCevap = doruCevap;
    this.cevabiKontrolEt = function () {
        return cevap === this.doruCevap
    }
    console.log(this);
}
let soru1 = new Soru("Hangisi programlama dili değildir ?",{a:'C#',b:'PHP',c:'HTML',d:'JAVA'},"c");//yukarıdaki Constructor metod dan bir obje ürettik
//Şimdi bu obje sayesinde
console.log(soru1.soruMetni);//soru metnine 
console.log(soru1.cevapSecenekleri);//soru şıklarına
console.log(soru1.doruCevap);//doru cevaba ulaşabiliriz
let soru2 = new Soru("Aşşağıdakilerden hangisi bir CMS(içerik yönetim sistemi) değildir ?",{a:'Wordpress',b:'Magento',c:'Joomla',d:'Angular'},"d");
console.log(soru2.soruMetni); 
console.log(soru2.cevapSecenekleri);
console.log(soru2.doruCevap);
let sorular = [//soruları bu şekilde bir dizi içerisine girip
    new Soru("Aşşağıdakilerden hangisi bir CMS(içerik yönetim sistemi) değildir ?",{a:'Wordpress',b:'Magento',c:'Joomla',d:'Angular'},"d"),
    new Soru("Aşşağıdakilerden hangisi bir CMS(içerik yönetim sistemi) değildir ?",{a:'Wordpress',b:'Magento',c:'Joomla',d:'Angular'},"d"),
    new Soru("Aşşağıdakilerden hangisi bir CMS(içerik yönetim sistemi) değildir ?",{a:'Wordpress',b:'Magento',c:'Joomla',d:'Angular'},"d"),
    new Soru("Aşşağıdakilerden hangisi bir CMS(içerik yönetim sistemi) değildir ?",{a:'Wordpress',b:'Magento',c:'Joomla',d:'Angular'},"d"),
    new Soru("Aşşağıdakilerden hangisi bir CMS(içerik yönetim sistemi) değildir ?",{a:'Wordpress',b:'Magento',c:'Joomla',d:'Angular'},"d"),
    new Soru("Aşşağıdakilerden hangisi bir CMS(içerik yönetim sistemi) değildir ?",{a:'Wordpress',b:'Magento',c:'Joomla',d:'Angular'},"d"),    
]
//console.log(sorular[2].soruMetni);//bu şekildede ulaşabilirizi
let index =0;
for(let soru of sorular)//ulaştığımız sorularıda burda html ye yazdırdım
{
    index++;
    let div =`
    <div class="soruBlok" id="${index}">
            <p id="soruText">${index} ${soru.soruMetni}</p>
            <form action="">
           
            <ul>
                <li> <input type="checkbox" name="" id=""><label for="">${soru.cevapSecenekleri.a}</label></li>
                <li> <input type="checkbox" name="" id=""><label for="">${soru.cevapSecenekleri.b}</label></li>
                <li> <input type="checkbox" name="" id=""><label for="">${soru.cevapSecenekleri.c}</label></li>
                <li> <input type="checkbox" name="" id=""><label for="">${soru.cevapSecenekleri.d}</label></li>
            </ul>
            </form>
        </div>
    `;
    document.querySelector('.container').insertAdjacentHTML('beforeend',div);
}