let player = $('#player');
let enemy = $('.hyena');
let start = $('.screenStart');
let game = $('.screenGame');
let total = $('.screenTotal');
let gameover = true;
let speed = 10;
let time = 5;
let name;
let input = $('.inputName');


$(window).keydown(function (e) {
    if (gameover === false){
        switch (e.keyCode) {
            case(37):
                //влево
                player.css('left', parseInt(player.css('left')) - speed);
                break;
            case(39):
                //вправо
                player.css('left', parseInt(player.css('left')) + speed);
        }
    }
})

$('.btnStart').click(function () {
    start.addClass('d-none');
    gameover = false;
    name = $('.inputName').val();
    $('.pointName').text(name);
    game.removeClass('d-none');
    timer();
    hyens();
});
$('.btnEnd').click(function () {
    total.addClass('d-none');
    start.removeClass('d-none');
})

input.on('input', function () {
    if(input.val().length > 2){
        $('.btnStart').removeAttr('disabled');
    }
})

//Функции хелперы

function timer() {
    let _Seconds = time, int;
    int = setInterval(function () {
        if(_Seconds != 0)
        {
            if(_Seconds < 10){
                $('#time').text('00:0' + _Seconds)
            }else{
                $('#time').text('00:' + _Seconds);
            }
            _Seconds--;
        }else{
            clearInterval(int);
            game.addClass('d-none');
            total.removeClass('d-none');
            $('#totalName').text(name + ' твой результат:')
            clearInterval(moveEnemy);
        }

    }, 1000)
}

function hyens() {
    moveEnemy = setInterval(function () {
        enemy.css('left', parseInt(enemy.css('left')) - speed);
    }, 50)
    move = setInterval(function () {
        enemy.css('left', '532px')
    },4000)
}
