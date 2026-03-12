// import mysql, { ConnectionOptions, PoolOptions } from 'mysql2';
import mysql from "mysql2/promise";



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

// const sqlConfig1 = {
//     user:"root",
//     password : "thoughtworks@1",
//     database: "apnaCollege",
//     server: 'ETLLearning',
//     pool: {
//         max: 10,
//         min : 0,
//         idleTimeoutMillis: 30000
//     },
//     options:{
//         encrypt: true,
//         trustServerCertificate: false,
//         trustedConnection:true 
//     }
// };

let query ="select * from student where rollno =101";




(async () => {
  try {

    const pool = mysql.createPool({
      host: "127.0.0.1",
      user: "root",
      password: "thoughtworks@1",
      database: "apnaCollege",
      port: 3306,
      connectionLimit: 10
    });

    const [rows] = await pool.query(query);

    console.log(rows);

    await pool.end();

  } catch (error) {
    console.error("Database Error:", error);
  }
})();
