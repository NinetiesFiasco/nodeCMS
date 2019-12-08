$(()=>{
    alert('Hello');
    $('#funnyBut').click(()=>{
        $.get( "/data", ( data ) => {           
            alert( data );
          });
    });

    $('#Register').click(()=>{

        var clientData = {
            password: $('#RPass').val(),
            login: $('#RLogin').val(),
            email: $('#RPass').val()            
        }
        console.log(clientData);
        $.ajax({
            url: '/register',
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify(clientData),
            success: function(response){
                console.log(response);
                alert(response);
            }
        });
        /*
        $.post(
            '/register',
            clientData,
            (serverData)=>{
                console.log(serverData);
                alert(serverData);
            },
            "json"
        );*/
    });
});