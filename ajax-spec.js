function processForm( e ){
    $.ajax({
        url: 'users.php',
        dataType: 'text',
        type: 'post',
        contentType: 'application/x-www-form-urlencoded',
        data: $(this).serialize(),
        success: function( data, textStatus, jQxhr ){
            $('#response pre').html( data );
        },
        error: function( jqXhr, textStatus, errorThrown ){
            console.log( errorThrown );
        }
    });

    e.preventDefault;
}

//What is .post?  \\

function processForm( e ){
    $.post(
        'users.php',
        $(this).serialize(),
        function( data, textStatus, jQxhr ){
            $('#response pre').html( data );
        },
        'text'
    )
        .fail(function( jqXhr, textStatus, errorThrown ){
            console.log( errorThrown );
        });

    e.preventDefault();
}

//Understanding the use of how a prevent default works.... \\

$.ajax({
        url: 'users.php',
        dataType: 'text',
        type: 'post',
        contentType: 'application/x-www-form-urlencoded',
        data: $(this).serialize(),
        success: function( data, textStatus, jQxhr ){
            $('#response pre').html( data );
        },
    error: function( jqXhr, textStatus, errorThrown ){
    console.log( errorThrown );
}
});