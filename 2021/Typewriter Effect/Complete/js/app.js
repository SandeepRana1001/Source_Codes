$(document).ready(function(){
     var strings = ['HTML','CSS','JAVASCRIPT','jQuery','Bootstrap','PHP']
     
    var counter = -1;

    function change() {

        var elem = $("#typewriter");
        elem.text(strings[counter]);
        elem.animate({ width: "100%" }, 500, function () {
            setInterval(5000);

        });
        elem.delay(1000).animate({
            width: '0',
            padding:'0'
        },
            500, function () {

                counter = counter + 1;

                elem.text(strings[counter]);

                if (counter >= strings.length - 1) {
                    counter = -1;
                }
            });

    };

    setInterval(change, 1);

})