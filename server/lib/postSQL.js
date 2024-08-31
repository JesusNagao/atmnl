import {getConnection} from "./connection.js";

export function postClub(name){
    console.log(name)
}

export async function postNews(name, desc, imgURL){

  try{
    const pool = await getConnection();
    const result = await pool.request().query("INSERT INTO [atmnldev].[dbo].[tbl_News] (name, desc, imgURL) VALUES (" + name + ", " + desc + ", " + imgURL + ");");
    return result.recordset;
  }catch(error){
    console.error(error);
  }
}