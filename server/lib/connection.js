import mssql from "mssql";


var config = {
    server : process.env.server,
    database : process.env.database,
    user : process.env.user,
    password : process.env.password,
    port : 1433,
    pool: {
        max: 10,
        min: 0,
        idleTimeoutMillis: 30000
    }
}

//var config = "Server=(LocalDB)\\MSSQLLocalDB;Integrated Security=true;AttachDbFileName=C:\\Users\\Jesus Leobardo Nagao\\atmnl_test.mdf"

export async function getConnection(){
    try{
        return await mssql.connect(config);
    }catch (error){
        console.log(config)
        console.error(error);
    }
}

export{mssql};