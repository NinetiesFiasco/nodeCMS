const handle = require('./react/handlers');
const enter = require('./react/enterTable');
const register = require('./react/registerTable');



const Page = `
<!doctype html>
<head>
    <title>My Pagic</title>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
    <script src='/script.js'></script>
    <link rel='stylesheet' href='/main.css'/>
</head>

<body>
    <div id='reactApp'></div>
    `+handle+enter+register+`
</body>
`;

module.exports.Page = Page;