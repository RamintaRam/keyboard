var FastTyping = function () {  // rasome is didziosios, nes tai yra objektas.
// alert('working');

//     function initialize(){}

    var RegisterLogics = function () {
        var view = $('#registration');
        this.show = function () {    // this rasome, kad sitas kintamasis butu pasiekiamas is isores. Jos bus kvieciamos is isores.
            view.removeClass('hidden'); // remove hidden, kad vartotojas matytu registracijos langa. Kai bus kita mstate, sitas bus vel hidden.
        };
        this.hide = function () {
            console.log('hide');
        }


    };

    var CONST_STATE_REGISTER = "user_registration",
        CONST_STATE_LEVEL_SELECTION = "choose_game_level",
        CONST_STATE_GAME = "game_starts",
        CONST_STATE_GAME_OVER = "game_over";

    var name,
    register = new RegisterLogics();

    function changeState(value) {
        switch (value) {
            case CONST_STATE_REGISTER:
                register.show();   //susikurem sitas funkcijas RegisterLogics objekte. todel galime kviesti.
                break;

            case  CONST_STATE_LEVEL_SELECTION:

                break;

            case CONST_STATE_GAME:

                break;

            case CONST_STATE_GAME_OVER:

                break;

        }
    }

changeState(CONST_STATE_REGISTER); // pirmas dalykas, ka turi matyti vartotojas. kad nekrautu visko iskart.
}





