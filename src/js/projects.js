$(document).ready(function(){
    /// Filtro do portfólio
    $('.filter-btn').on('click', function(){

        let type = $(this).attr('id');
        let boxes = $('.project-box');

        $('.main-btn').removeClass('active');
        $(this).addClass('active');

        if(type == 'curso-btn'){
            eachBoxes('curso', boxes);
        } else if(type == 'autoral-btn'){
            eachBoxes('autoral', boxes);
        } else if(type == 'clone-btn'){
            eachBoxes('clone', boxes);
        } else if(type == 'jogo-btn'){
            eachBoxes('jogo', boxes);
        }else {
            eachBoxes('all', boxes);
        }

    });

    function eachBoxes(type, boxes){
        if(type == 'all'){
            $(boxes).fadeIn();
        } else {
            $(boxes).each(function(){
                if(!$(this).hasClass(type)){
                    $(this).fadeOut('slow');
                } else {
                    $(this).fadeIn();
                }
            });
        }
    }
});
