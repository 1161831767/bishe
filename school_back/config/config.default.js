exports.keys = "dfbgffdsafddgfd";
exports.security = {
    csrf: false
};
exports.mysql = {
    client: {
        host: 'localhost',
        port: '3306',
        user: 'root',
        password: '123',
        database: 'xyst',
    },
};

exports.multipart = {
    mode: 'file',
};
//加上后post请求才能成功,文件上传才能成功 1
exports.security = {
    csrf: {
        enable: false,
        ignoreJSON: true
    }
};
exports.cors = {
    origin: '*',
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH',

};