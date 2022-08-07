import connection from "../../database/postgre.js"

export async function shortenUserURl(userId, url, shortURL){
    await connection.query(`INSERT INTO urls ("userId", url, "shortURL") VALUES ($1,$2,$3)`,[userId, url, shortURL])
}

export async function updateVisitCount(shortURLId){
    await connection.query(`UPDATE urls SET "visitCount" = urls."visitCount" + 1 WHERE id = $1`,[shortURLId])
}

export async function deleteUserURL(URLId){
    await connection.query("DELETE FROM urls WHERE id = $1",[URLId])
}

export async function getUserURLS(userId){
    const {rows: userTotalVisitCounts} = await connection.query(`
        SELECT urls."userId" as id, SUM(urls."visitCount") as visitCount, users.name as name FROM urls 
        JOIN users ON urls."userId" = users.id 
        WHERE "userId" = $1 
        GROUP BY "userId", users.name`,[userId])
        
    const {rows: userShortenedUrls} = await connection.query(`SELECT id, "shortURL", url, "visitCount"  FROM urls WHERE "userId" = $1`,[userId])

    
    return {...userTotalVisitCounts[0], shortenedUrls: userShortenedUrls}
}

export async function queryRanking(){
    const {rows: ranking} = await connection.query(`
        SELECT "userId" as id, users.name, COUNT("shortURL") as "linksCount",  SUM("visitCount") as "visitCount" 
        FROM urls 
        INNER JOIN users
        ON "userId" = users.id
        GROUP BY "userId", users.name
        ORDER BY "visitCount" DESC
        LIMIT 10`)

        return ranking
}

