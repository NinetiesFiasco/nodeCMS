$(()=>{
    alert('Hello tut');

    $('#funnyBut').click(()=>{
        $.get( "/data", ( data ) => {
            alert( data );
          });
    });

    $('#Register').click(register);
    $('#Enter').click(enter);
});

function enter(){
    
    var clientData = {
        password: $('#EPass').val(),
        login: $('#ELogin').val()   
    }

    console.log(clientData);

    $.ajax({
        url: '/enter',
        type: 'POST',
        contentType: 'application/json',
        data: JSON.stringify(clientData),
        success: function(response){
            console.log(response);
            alert(response);
        }
    });

}

function register(){

    var clientData = {
        password: $('#RPass').val(),
        login: $('#RLogin').val(),
        email: $('#REmail').val()            
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
    
}