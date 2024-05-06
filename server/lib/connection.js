import mssql from "mssql";
var config = {
    "user": process.env.admin_user, // Database username
    "password": process.env.pass, // Database password
    "server": process.env.SERVER, // Server IP address
    "database": process.env.db, // Database name
    "options": {
        "encrypt": false // Disable encryption
    }
}


export async function getConnection(){
    try{
        return await mssql.connect(config);
    }catch (error){
        console.error(error);
    }
}

export{mssql};