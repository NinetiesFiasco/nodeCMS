const register = `
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
`;
module.exports = register;