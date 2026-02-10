import app from "./app.js";
import 'dotenv/config';
import { testConnection, sql } from "./db.js";

const port = process.env.port;

(async () => {
    try {
        await testConnection();

        app.listen(port, () => {
            console.log(`Server is ready and using ${port} port`);
        })
    } catch (error) {
        console.log(error.message);
        process.exit(1);
    }
})()

process.on("SIGINT", async () => {
  console.log("Closing databse");
  await sql.end();
  process.exit(0);
})