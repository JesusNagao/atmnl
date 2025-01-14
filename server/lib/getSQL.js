import {getConnection, mssql} from "./connection.js";

export async function getClubs(){
  try{
    const pool = await getConnection();
    const result = await pool.request().query("SELECT * FROM [atmnldev].[dbo].[tbl_Club]");
    return result.recordset;
  }catch(error){
    console.error(error);
  }
}
  
export async function getNews(){
  try{
    const pool = await getConnection();
    const result = await pool.request().query("SELECT * FROM [atmnl_test].[dbo].[tblnews]");
    return result.recordset;
  }catch(error){
    console.error(error);
  }
}
  
export async function getEvents(){
  try{
    const pool = await getConnection();
    const result = await pool.request().query("SELECT * FROM [atmnldev].[dbo].[tbl_Events]");
    return result.recordset;
  }catch(error){
    console.error(error);
  }
}
  
export async function getUsers(){
  try{
    const pool = await getConnection();
    const result = await pool.request().query("SELECT * FROM [atmnldev].[dbo].[tbl_Users]");
    return result.recordset;
  }catch(error){
    console.error(error);
  }
}