import mysql from "mysql"



export const db = mysql.creatConnention({
    host:"localhost",
    user: "root",
    password: '@Canesstorm757371',
    database:'restaurante'
})