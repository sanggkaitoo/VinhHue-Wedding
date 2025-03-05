$(function () {
    function after_form_submitted(data) {
        if (data.result == 'success') {
            $('form#rsvp_form').hide();
            $('#success_message').fadeIn(1000);
            $('#error_message').hide();
        } else {
            $('#error_message').append('<ul></ul>');

            jQuery.each(data.errors, function (key, val) {
                $('#error_message ul').append('<li>' + key + ':' + val + '</li>');
            });
            $('#success_message').hide();
            $('#error_message').show();

            //reverse the response on the button
            $('button[type="button"]', $form).each(function () {
                $btn = $(this);
                label = $btn.prop('orig_label');
                if (label) {
                    $btn.prop('type', 'submit');
                    $btn.text(label);
                    $btn.prop('orig_label', '');
                }
            });

        } //else
    }

    $('#rsvp_form').submit(function (e) {
        e.preventDefault();

        $form = $(this);
        //show some response on the button
        $('button[type="submit"]', $form).each(function () {
            $btn = $(this);
            $btn.prop('type', 'button');
            $btn.prop('orig_label', $btn.text());
            $btn.text('Sending ...');
        });

        $.ajax({
            type: "POST",
            url: 'https://script.google.com/macros/s/AKfycbwwOn79_49g1wXYLI0FZZWPjIG5qb-a8BaMy9W9iGjjdf8qn2gSebcj88jt97s_37QlhA/exec',
            data: $form.serialize(),
            success: after_form_submitted,
            // dataType: 'json'
        });

        $('form#rsvp_form').hide();
        $('#success_message').fadeIn(1000);
    });
});