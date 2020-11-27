var mysql=require('mysql');

var conexion=mysql.createConnection({
    host:'remotemysql.com',
    user:'uHmJ0HtUjA',
    password:'x9rMECfH0k',
    database:'uHmJ0HtUjA'
});

conexion.connect(function (error){
    if (error)
        console.log('Problemas de conexion con mysql');
    else
        console.log('se inicio conexion');
});


module.exports=conexion;

