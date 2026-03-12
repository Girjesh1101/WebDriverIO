import sql from "mssql"
import reporter from "./reporter.ts"


const sqlConfig = {
    user:process.env.DB_USER,
    password : process.env.DB_PWD,
    database: process.env.DB_NAME,
    server: 'localhost',
    pool: {
        max: 10,
        min : 0,
        idleTimeoutMillis: 30000
    },
    options:{
        encrypt: false,
        trustServerCertificate: false 
    }
};

const sqlConfig1 = {
    user:"root",
    password : "thoughtworks@1",
    database: "apnaCollege",
    server: 'ETLLearning',
    pool: {
        max: 10,
        min : 0,
        idleTimeoutMillis: 30000
    },
    options:{
        encrypt: true,
        trustServerCertificate: false,
        trustedConnection:true 
    }
};

let query ="select * from student where rollno =101";

(async () =>{
    const pool1 = new sql.ConnectionPool(sqlConfig1);
    const poolConnection = pool1.connect();

    pool1.on('error', err=>{
        throw err;
    })

   await poolConnection;
   try {
    const request = pool1.request();
    const result = await request.query(query);
    console.log(result)
    return result;
    
   } catch (error) {
    console.error("SQL Error", error)
   } 
    
})();

