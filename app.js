const express = require('express')
const app = express()
const port = 3000
const models = require("./models/index");

var bodyParser = require('body-parser');
var mainRouter = require('./router/main');
var loginRouter = require('./router/login');
var registerRouter = require('./router/register');

//뷰엔진 설정
app.set('view engine','ejs');
app.set('views','./view');
app.use(express.static('public'));

//body-parser설정
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

//라우터 설정
app.use('/', mainRouter);
app.use('/login', loginRouter);
app.use('/register', registerRouter);

models.sequelize.sync().then( () => {
    console.log("DB 연결 성공");
}).catch(err => {
    console.log("DB 연결 실패");
    console.log(err);
});

app.listen(port, () => {
    console.log("Express server has started on port 3000");
})