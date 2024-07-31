import express from 'express';
import cors from 'cors';
import router from './routes/routes.js';
import DBConnection from './database/db.js';
const app = express();

//Middleware
app.use(cors());
app.use('/', router);

DBConnection();

app.listen(8080,() => {
 console.log("Server is listening on port 8080!");
});