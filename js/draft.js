

$(document).ready(() => {

    // for main-mid, off on window load
    $('.mainMid').hide();

    // main-mid
    $(document).dblclick(() => {
        $('.mainMid').toggle();
        $('.mainTop').hide();
        $('.mainBottom').hide();
        $('.mainRight').hide();
        $('.mainLeft').hide();
        $('.container').hide();
    });


    // main-Left
    $('.borderLeft').click(() => {
        $('.mainLeft').fadeToggle(200);
        $('.container').hide();
        document.querySelector('.borderLeft').classList.toggle('borderLeftOnClick')
    });

    // main-right
    $('.borderRight').click(() => {
        $('.mainRight').fadeToggle(200);
        $('.container').hide();
        document.querySelector('.borderRight').classList.toggle('borderRightOnClick')
    });

    // main-top
    $('.borderTop').click(() => {
        $('.mainTop').fadeToggle(400);
        $('.mainRight').hide();
        $('.mainLeft').hide();
        $('.container').hide();
        document.querySelector('.borderTop').classList.toggle('borderTopOnClick');
    })


    $('.borderBottom').click(() => {
        $('.mainBottom').fadeToggle(400);
        $('.container').hide();
        document.querySelector('.borderBottom').classList.toggle('borderBottomOnClick');
    });
});

