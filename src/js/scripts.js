$(document).ready(function(){

    // Parallax
    setTimeout(function(){
        $('#banner').parallax({imageSrc: '../src/img/services-banner.svg'});
        $('#thanks-banner').parallax({imageSrc: '../src/img/services-banner.svg'});
        
    }, 250);

    // Button back to the top
    $(window).scroll(function () {
        if ($(this).scrollTop() > 50) {
            $('#back-to-top').fadeIn();
        } else {
            $('#back-to-top').fadeOut();
        }
	});
	
    // scroll body to 0px on click
	$('#back-to-top').click(function () {
		$('body,html').animate({
			scrollTop: 0
		}, 400);
        return false;
	});

});

// Form Action
$('#formAction').submit(function(){

    var nome = $('#nome'); 
    var erro = $('.alert');
    var email = $('#email');
    var assunto = $('#assunto');
    var field = $('#erro-field');
    var mensagem = $('#mensagem');

    // removes the element from the screen whenever an attempt is made to submit the form
    erro.addClass('d-none');
    $('.is-invalid').removeClass('is-invalid');

    // validate field assunto
    if(assunto.val() == ''){
        erro.removeClass('d-none');
        field.html('assunto'); // field assunto that was not filled
        assunto.focus();
        assunto.addClass('is-invalid');
        return false;
    }
    
    // validate field name
    if(nome.val() == ''){
        erro.removeClass('d-none');
        field.html('nome'); // field name that was not filled
        nome.focus();
        nome.addClass('is-invalid');
        return false;
    }

    // validate field email
    if(email.val() == ''){
        erro.removeClass('d-none');
        field.html('email'); // field email that was not filled
        email.focus();
        email.addClass('is-invalid');
        return false;
    }

    // validate field mensagem
    if(mensagem.val() == ''){
        erro.removeClass('d-none');
        field.html('mensagem'); // field name that was not filled
        mensagem.focus();
        mensagem.addClass('is-invalid');
        return false;
    }

    // if you get here, you can send the data
    return true;
});