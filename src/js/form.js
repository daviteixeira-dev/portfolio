$('#form-contact').submit(function(){

    var assunto = $('#assunto');
    var nome = $('#nome');
    var email = $('#email');
    var mensagem = $('#mensagem');
    var erro = $('.alert');
    var field = $('#erro-field');

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