var originalArray = [
  'pri-vyét<br><span>Привет</span>',
  'kak tye-byá za-vút?<br><span>Как тебя зовут?</span>',
  'Kak ty?<br><span>Как ты?</span>',
  'spasibo<br><span>Спасибо</span>',
  'pozhaluysta<br><span>Пожалуйста</span>',
  'da<br><span>Да</span>',
  'nyet<br><span>Нет</span>',
  'izvinite<br><span>Извините</span>',
  'skolko eto stoit?<br><span>Сколько это стоит?</span>',
  'ya ne ponimayu<br><span>Я не понимаю</span>',
  'vy mozhete mne pomoch?<br><span>Вы можете мне помочь?</span>'
];

var totalSpin = [];

function spinArray(){
    var spin = Math.floor(Math.random()*originalArray.length);
    if(totalSpin.indexOf(spin) == -1){
        totalSpin.push(spin);
        document.getElementById('randomizer').innerHTML = originalArray[spin];
    } else {
        spinArray();
    }
    if(totalSpin.length == originalArray.length)
          totalSpin = [];
}
