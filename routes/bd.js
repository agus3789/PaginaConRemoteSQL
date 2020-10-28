var mysql=require('mysql');

var conexion=mysql.createConnection({
    host:'remotemysql.com',
    user:'QhzKJVN88u',
    password:'OptqVHGtMi',
    database:'QhzKJVN88u'
});

conexion.connect(function (error){
    if (error)
        console.log('Problemas de conexion con mysql');
    else
        console.log('se inicio conexion');
});


module.exports=conexion;

