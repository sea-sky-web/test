/*引入mongoose模块*/
const mongoose = require('mongoose');

/*定义mongodb地址*/
const uri = 'mongodb://localhost/local';

/*连接mongodb*/
mongoose.connect(uri, function (err) {
    if (err) {
        console.log('connect failed');
        console.log(err);
        return;
    }
    console.log('connect success');
});