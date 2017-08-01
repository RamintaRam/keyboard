var FastTyping = function () {  // rasome is didziosios, nes tai yra objektas.
// alert('working');

//     function initialize(){}

    var RegisterLogics = function () {
        var view = $('#registration');
        
        this.show = function () {    // this rasome, kad sitas kintamasis butu pasiekiamas is isores. Jos bus kvieciamos is isores.
            view.removeClass('hidden'); // remove hidden, kad vartotojas matytu registracijos langa. Kai bus kita mstate, sitas bus vel hidden.
        };
        this.hide = function () {
            view.addClass('hidden');
        }


    };

    var CONST_STATE_REGISTER = "user_registration",
        CONST_STATE_LEVEL_SELECTION = "choose_game_level",
        CONST_STATE_GAME = "game_starts",
        CONST_STATE_GAME_OVER = "game_over";

    var name;
    var last_state, // reikia saugoti paskutinio state name arba objekta. Siuo atveju bus objektas. kai change state ivyskta,


        register = new RegisterLogics();
    if (last_state)
        last_state.hide(); // // priskiriam last_state, kad nereiketu kiekvienam state rasyti atskirai, kada rodyti, kada hide, ir spelioti, kuris state dabar.

    function changeState(value) {
        switch (value) {
            case CONST_STATE_REGISTER:
                last_state = register;  // last_state
                break;

            case  CONST_STATE_LEVEL_SELECTION:

                break;

            case CONST_STATE_GAME:

                break;

            case CONST_STATE_GAME_OVER:

                break;

        }
        last_state.show(); // priskiriam last_state, kad nereiketu kiekvienam state rasyti atskirai, kada rodyti, kada hide, ir spelioti, kuris state dabar.
    }

    changeState(CONST_STATE_REGISTER); // pirmas dalykas, ka turi matyti vartotojas. kad nekrautu visko iskart.
}





