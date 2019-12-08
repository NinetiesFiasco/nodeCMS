
const Page = `
<!doctype html>
<head>
    <title>My Pagic</title>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
    <script src='/javascript.js'></script>
</head>

<body>
<table>
    <thead>
        <tr>
            <th colspan='2'>Войти</th>
        </tr>
    </thead>
    <tr>
        <td>Логин</td>
        <td><input type='text' name='enterLogin'/></td>
    </tr>
    <tr>
        <td>Пароль</td>
        <td><input  type='password' name='enterPassword'/></td>
    </tr>
    <tr>
        <td colspan='2'><input type='button' name='Enter' value='Войти'/></td>
    </tr>
</table>
<table>
    <thead>
        <tr>
            <th colspan='2'>Зарегистрироваться</th>
        </tr>
    </thead>
    <tr>
        <td>Логин</td>
        <td><input type='text' id='RLogin'/></td>
    </tr>
    <tr>
        <td>Пароль</td>
        <td><input  type='password' id='RPass'/></td>
    </tr>
    <tr>
        <td>Email</td>
        <td><input  type='text' id='REmail'/></td>
    </tr>

    <tr>
        <td colspan='2'><input type='button' id='Register' value='Зарегистрироваться'/></td>
    </tr>
</table>

<input id='funnyBut' value='Послать за датой' type='button'/>

</body>
`;

module.exports.Page = Page;