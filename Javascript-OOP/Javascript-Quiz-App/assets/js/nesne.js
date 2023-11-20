const quiz = new Quiz(sorular);
const ui = new UI();
ui.btn_start.addEventListener('click',function(){
    if(quiz.sorular.length != quiz.soruIndex){
    StartTimer(10);
    ui.sure.style.opacity = '1';
    ui.btn_start.style.display = 'none';
    ui.quiz_box.classList.add('active');
    ui.btn_start.classList.add('deactive');
    ui.soruGoster(quiz.soruGetir());
    ui.soruSayisiniGöster(quiz.soruIndex +1,quiz.sorular.length);
    }else{
    }
})
ui.next.addEventListener("click",function () {
    if(quiz.sorular.length > quiz.soruIndex+1){
        quiz.soruIndex +=1;
        clearInterval(counter); 
        StartTimer(10);
        ui.soruGoster(quiz.soruGetir());
        ui.soruSayisiniGöster(quiz.soruIndex +1,quiz.sorular.length);
        if (quiz.sorular.length == quiz.soruIndex+1) {
            ui.next.innerHTML = 'sınavı bitir';
        }
        
        }else{
            ui.quiz_box.classList.add('deactive');
            ui.score_box.classList.add('active');
            ui.score_box.classList.remove('deactive');
            ui.skoruGoster(quiz.sorular.length,quiz.dogruCevapSayisi);
            ui.score_box.style.display = 'block';
        }
})
ui.prev.addEventListener("click",function () {
    if(quiz.soruIndex>0){
        quiz.soruIndex -=1;
        ui.soruGoster(quiz.soruGetir());
        ui.soruSayisiniGöster(quiz.soruIndex +1,quiz.sorular.length);
        if (quiz.sorular.length != quiz.soruIndex+1) {
            ui.next.innerHTML = 'Sonraki Soru';
        }
        }else{
            
        }
})
const option_list = ui.option_list;

function optionSelected(option)
{
    clearInterval(counter);
    let answer = option.querySelector("span b").textContent;
    let question = quiz.soruGetir();
    let icon = option.querySelector(".icon i");
    if (question.cevabiKontrolEt(answer)) {
        option.classList.add('correct');
        icon.classList.add('fa-check');
        quiz.dogruCevapSayisi++;
    }
    else{
        option.classList.add('incorrect');
        icon.classList.add('fa-times');
    }
    for(let i = 0; i<option_list.children.length;i++)
    {
        option_list.children[i].classList.add('disable');
    }
}
ui.btn_quit.addEventListener("click",function(){
    window.location.reload();
})
ui.btn_replay.addEventListener("click",function(){
    quiz.dogruCevapSayisi = 0;
    quiz.soruIndex = 0;
    ui.btn_start.click();
    ui.score_box.classList.add('deactive');
    ui.score_box.style.display = 'none';
    ui.quiz_box.classList.add('active');
    ui.quiz_box.classList.remove('deactive');
})
function StartTimer (time) {
    counter = setInterval(timer,1000);
    function timer()
    {
        ui.sure.querySelector('h4').textContent = time;
        time--;
        let cevap = quiz.soruGetir().doruCevap;
        if(time == 0)
        {
            clearInterval(counter);
            ui.sure.querySelector('h4').textContent = 'Süre Bitti';
            for(let option of ui.option_list.children){
                if(option.querySelector("span b").textContent == cevap ){
                    option.classList.add("correct");
                }
                option.classList.add("disable");
            }
        }
    }
}