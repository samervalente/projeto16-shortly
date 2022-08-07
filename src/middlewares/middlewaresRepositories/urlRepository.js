import connection from "../../database/postgre.js";

export async function getShortURL(paramsValue){
    const {id, shortUrl} = paramsValue
    let ClauseParams = {column:"", value:""}
    
    id ? ClauseParams = {column: 'id', value:id } : 
         ClauseParams = {column: 'shortURL', value: shortUrl}
         
         const {rows: shortURL} = await connection.query(`
         SELECT urls.id, urls."shortURL" as shortUrl, urls.url FROM urls WHERE "${ClauseParams.column}" = $1`, [ClauseParams.value])
        
         return shortURL[0]
        
}