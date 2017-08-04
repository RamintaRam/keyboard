var FastTyping = function () {  // rasome is didziosios, nes tai yra objektas.
// alert('working');

//     function initialize(){}


    var CONST_STATE_REGISTER = "user_registration",
        CONST_STATE_LEVEL_SELECTION = "choose_game_level",
        CONST_STATE_GAME = "game_starts",
        CONST_STATE_GAME_OVER = "game_over";

    var name;
    var last_state; // reikia saugoti paskutinio state name arba objekta. Siuo atveju bus objektas. kai change state ivyskta,
    var level;
    var game;
    var score;
    var saveURL;
    var start_game;
    var end_game;
    var total_time;

    this.setSaveURL = function (value) {
        saveURL = value;
    };

    function changeState(value) {

        if (last_state)
            last_state.hide(); // // priskiriam last_state, kad nereiketu kiekvienam state rasyti atskirai, kada rodyti, kada hide, ir spelioti, kuris state dabar.

        switch (value) {
            case CONST_STATE_REGISTER:
                last_state = register;  // last_state
                break;

            case  CONST_STATE_LEVEL_SELECTION:
                last_state = select_level;
                break;

            case CONST_STATE_GAME:
                last_state = game_begin;
                break;

            case CONST_STATE_GAME_OVER:
                last_state = over_game;
                break;

        }

        last_state.show(); // priskiriam last_state, kad nereiketu kiekvienam state rasyti atskirai, kada rodyti, kada hide, ir spelioti, kuris state dabar.
    }


    var RegisterLogics = function () {
        var view = $('#registration');
        var input = $('#username');
        var button = $('#register');

        this.show = function () {    // this rasome, kad sitas kintamasis butu pasiekiamas is isores. Jos bus kvieciamos is isores.
            view.removeClass('hidden');  // remove hidden, kad vartotojas matytu registracijos langa. Kai bus kitam state, sitas bus vel hidden.
            enable();
        };

        this.hide = function () {
            view.addClass('hidden');
            disable();
        };

        function enable() {

            input.keyup(function (e) {  // keyup, kad input laukelyje paspaudus klav.klavisa suveiktu eventas.
                if (input.val().length >= 3)
                    button.attr('disabled', false);
                else {
                    button.attr('disabled', true);
                }
            });

            button.click(function () {
                name = input.val();
                changeState(CONST_STATE_LEVEL_SELECTION);

            })
        }

        function disable() {
            input.unbind();
            button.unbind();
            input.val('');
        }

    };


//////////////////////////////////////////////////////
//////////////////////////////////////////////////////
    /*Select LEVEL stage*/


    var SelectLevelLogics = function () {
        var view = $('#level');
        var input = $('#radio');
        var button = $('#start');

        this.show = function () {    // this rasome, kad sitas kintamasis butu pasiekiamas is isores. Jos bus kvieciamos is isores.
            view.removeClass('hidden').prepend('<h3>' + /*'User name:' + ' ' +*/  name + '<br>' + '<h4>' + 'Choose level:' + '<br><br>');  // remove hidden, kad vartotojas matytu registracijos langa. Kai bus kitam state, sitas bus vel hidden.
            // enable();
        };

        this.hide = function () {
            view.addClass('hidden');
            // disable();
        };
        /*

         function enable() {

         input.keyup(function(e) {  // keyup, kad input laukelyje paspaudus klav.klavisa suveiktu eventas.
         if(input.val().length >= 3)
         button.attr('disabled', false);
         else{
         button.attr('disabled', true);
         }
         });

         button.click(function () {
         name = input.val();

         })
         }

         //
         // function disable() {
         //     input.unbind();
         //     button.unbind();
         //     input.val('');
         // }*/


        $(function () {
            $('#start').click(function () {
                level = $('input[name=gender]:checked').val();
                start_game = Date.now();
                changeState(CONST_STATE_GAME);
            });

        });

    };


//////////////////////////////////////////////////////
//////////////////////////////////////////////////////
    /*Select GAME stage*/

    var GameLogics = function () {
        var view = $('#game');
        var letters = 'abcdefghijklmnopqrstuvwxyz';
        var timeOut;
        var letterKey;
        var letterPlacement = $('h3');
        var livesCount;
        var userInput = true;
        var isGolden;
        var letterAppearanceTime;
        var clickOnLetterTime;
        var reactionTime = $('#time');


        this.show = function () {    // this rasome, kad sitas kintamasis butu pasiekiamas is isores. Jos bus kvieciamos is isores.
            livesCount = 3;
            score = 0;
            view.removeClass('hidden').prepend('<h3>' + /*'User name:' + ' ' +*/  name + '<br>' + '<h4>' + 'Play level: ' + level + '<br><br>');  // remove hidden, kad vartotojas matytu registracijos langa. Kai bus kitam state, sitas bus vel hidden.
            changeLetter();
            enable();
        };

        this.hide = function () {
            view.addClass('hidden');
            disable();
        };

        function enable() {
            $(window).keyup(function (e) {

                if (e.key === letters[letterKey])
                    updateScore();
                else {
                    removeLife();
                }
                clickOnLetterTime = Date.now();
                countTime();

                userInput = true;
                changeLetter();

            });
        };

        function changeLetter() {

            if (Math.random() < 0.1) {
                letterPlacement.addClass('gold');
                isGolden = true;
            }
            else {
                letterPlacement.removeClass('gold');
                isGolden = false;
            }
            if (!userInput)
                removeLife();

            clearTimeout(timeOut);

            if (livesCount <= 0)
                return;

            userInput = false;
            letterKey = Math.round(Math.random() * (letters.length - 1));
            letterPlacement.html(letters[letterKey]);
            letterAppearanceTime = Date.now();
            timeOut = setTimeout(changeLetter, level * 1000);
        };

function totalTime(){
    total_time = (clickOnLetterTime - letterAppearanceTime) * 0.001;
}




        function updateScore() {

            if (score % 20 === 0 && score !== 0)   // lyginama ar liekana 0. proc. zenklas tikrina liekana.
            {
                livesCount += 1;
                $('#life').html(livesCount);
            }

            if (isGolden) {
                isGolden = false;
                for (i = 0; i < 5; i++)
                    updateScore();
            }
            else {
                score += 1;
            }

            // console.log(score);
            $('#score').html(score);

        }

        function countTime() {
            reactionTime = (clickOnLetterTime - letterAppearanceTime) * 0.001;
            // console.log(reactionTime);
            $('#time').html(reactionTime);


        }

        function removeLife() {
            livesCount -= 1;
            $('#life').html(livesCount);
            if (livesCount === 0){
                end_game = Date.now();
                totalTime();
                changeState(CONST_STATE_GAME_OVER);


            }
        }

        function disable() {
            $(window).unbind();
            clearTimeout(timeOut);

        }

    };


//////////////////////////////////////////////////////
//////////////////////////////////////////////////////
    /*Select GAME OVER stage*/


    var GameOverLogics = function () {
        var view = $('#gameover');
        // var input = $('#radio');
        // var button = $('#start');
        var button = $('#playagain');

        this.show = function () {    // this rasome, kad sitas kintamasis butu pasiekiamas is isores. Jos bus kvieciamos is isores.
            view.removeClass('hidden').prepend('<h3>' + 'User name:' + ' ' + name + '<br>' + '<h4>' + 'Has score: ' + score + '<br><br>');  // remove hidden, kad vartotojas matytu registracijos langa. Kai bus kitam state, sitas bus vel hidden.
            saveResult();
        };

        this.hide = function () {
            view.addClass('hidden');
            // disable();
        };

        $.ajaxSetup({
            headers: {
                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
            }
        });

        function saveResult() {

            $.ajax({
                url: saveURL,
                method: "POST",
                data: {
                    name: name,
                    level: level,
                    score: score,
                    // total_time: total_time,
                    // average_speed: average_speed

                }
            });
        }


        function enable() {

            // input.keyup(function(e) {  // keyup, kad input laukelyje paspaudus klav.klavisa suveiktu eventas.
            // if(input.val().length >= 3)
            // button.attr('disabled', false);
            // else{
            // button.attr('disabled', true);
            // }
            // });

            button.click(function () {
                name = input.val();

            })
        }

        //
        // function disable() {
        //     input.unbind();
        //     button.unbind();
        //     input.val('');
        // }*/


        // $(function () {
        //     $('#start').click(function () {
        //         level = $('input[name=gender]:checked').val();
        //         changeState(CONST_STATE_GAME);
        //     });
        //
        // });

    };


    /**/
    var register = new RegisterLogics(),
        select_level = new SelectLevelLogics(),
        game_begin = new GameLogics(),
        over_game = new GameOverLogics();

    changeState(CONST_STATE_REGISTER); // pirmas dalykas, ka turi matyti vartotojas. kad nekrautu visko iskart.

}






