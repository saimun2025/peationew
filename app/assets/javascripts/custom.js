(function($, undefined) {
    $(document).on('change', '#identity_email', function(){
        var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        if (!regex.test($(this).val())) {
            $('.flash-message').html('<div class="alert alert-danger">Email field is invalid!</div>');
            $('input[type="submit"]').attr('disabled','disabled');
        } else {
            $('.flash-message').remove();
            $('input[type="submit"]').attr('disabled',false);
        }
    });
})( jQuery );