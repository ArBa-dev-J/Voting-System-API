import app from "./app.js";
import 'dotenv/config';


const port = process.env.port;

app.listen(port, () => {
    console.log(`Server is ready and using ${port} port`);
})
