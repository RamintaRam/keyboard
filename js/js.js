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

    function changeState(value) {

        if (last_state)
            last_state.hide(); // // priskiriam last_state, kad nereiketu kiekvienam state rasyti atskirai, kada rodyti, kada hide, ir spelioti, kuris state dabar.

        switch (value) {
            case CONST_STATE_REGISTER:
                last_state = register;  // last_state
                break;

            case  CONST_STATE_LEVEL_SELECTION:
                last_state = level;
                break;

            case CONST_STATE_GAME:

                break;

            case CONST_STATE_GAME_OVER:

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

            input.keyup(function(e) {  // keyup, kad input laukelyje paspaudus klav.klavisa suveiktu eventas.
                if(input.val().length >= 3)
                    button.attr('disabled', false);
                else{
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


        $(function(){
            $('#start').click(function(){
                level=$('input[name=gender]:checked').val();
                changeState(CONST_STATE_GAME);
            });

        });

    };


//////////////////////////////////////////////////////
//////////////////////////////////////////////////////
    /*Select GAME stage*/

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

            input.keyup(function(e) {  // keyup, kad input laukelyje paspaudus klav.klavisa suveiktu eventas.
                if(input.val().length >= 3)
                    button.attr('disabled', false);
                else{
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




    /**/
    var register = new RegisterLogics(),
        level = new SelectLevelLogics();

    changeState(CONST_STATE_REGISTER); // pirmas dalykas, ka turi matyti vartotojas. kad nekrautu visko iskart.

}





