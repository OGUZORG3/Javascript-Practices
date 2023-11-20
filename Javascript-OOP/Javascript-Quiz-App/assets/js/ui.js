function UI(){
    this.btn_start = document.querySelector('.btn_start');
    this.quiz_box = document.querySelector(".quiz_box");
    this.next = document.querySelector(".next");
    this.prev = document.querySelector(".prev");
    this.option_list = document.querySelector('.option-list');
    this.score_box = document.querySelector('.score_box');
    this.btn_quit = document.querySelector('.btn_quit');
    this.btn_replay = document.querySelector('.btn_replay');
    this.sure = document.querySelector('.sure');
}
UI.prototype.soruGoster= function(soru) {
    let question = `<span>${soru.soruMetni}</span>`;
    let options = '';
    for(let cevap in soru.cevapSecenekleri){
        options+=`
            <div class="option">
                <span><B>${cevap}</B> : ${soru.cevapSecenekleri[cevap]}</span>
                <div class="icon"><i class="fas"></i></div>
            </div>
        `;
    }
    document.querySelector('#soruNo').innerHTML = soru.soruNo;
    document.querySelector("#question_text").innerHTML = question;
    option_list.innerHTML = options;
    const option = option_list.querySelectorAll(".option");
    for(let opt of option)
    {
        opt.setAttribute("onclick","optionSelected(this)");
    }
}
UI.prototype.soruSayisiniGöster = function(soruSirasi,toplamSoru){
    document.querySelector('.soru_sayisi').style.visibility = 'visible';
    let tag = `<span>${soruSirasi}/${toplamSoru}</span>`
    document.querySelector('.soru_sayisi h2').innerHTML = tag;
}
UI.prototype.skoruGoster = function(toplamSoru,dogruCevap){
    let tag = `${dogruCevap} / ${toplamSoru}`
    document.querySelector('#score_text').innerHTML = tag;
}