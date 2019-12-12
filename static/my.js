$(()=>{
    $('#funnyBut').click(()=>{
        $.get( "/data", ( data ) => {
            alert( data );
          });
    });

    $('#Register').click(register);
    $('#Enter').click(enter);
    $('#Exit').click(exit);
    AuthenticationInfo();
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
            AuthenticationInfo();
        }
    });

}


function register(){

    var clientData = {
        password: $('#RPass').val(),
        login: $('#RLogin').val(),
        email: $('#REmail').val()            
    }

    $.ajax({
        url: '/register',
        type: 'POST',
        contentType: 'application/json',
        data: JSON.stringify(clientData),
        success: function(response){
            console.log(response);
        }
    });
    
}

function exit(){
    $.ajax({
        url: '/enter/exit',
        type: 'GET',
        success: function(response){
            console.log(response);
            AuthenticationInfo();
        }
    });
}

function AuthenticationInfo(){
    var token = getCookie("logToken");
    $('#AuthenticationInfo').html(token?"Авторизован":"Не авторизован");
}

function getCookie(name) {
    let matches = document.cookie.match(new RegExp(
      "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
  }