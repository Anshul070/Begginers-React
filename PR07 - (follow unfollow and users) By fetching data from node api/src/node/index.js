import express, { json } from 'express';
import fs from 'fs';
import cors from 'cors';

const app = express();
const data = fs.readFileSync('../data.json').toString();

const corsOptions = {
  origin: "http://localhost:5173",
};

app.use(cors(corsOptions));


app.get('/', (req, res) => {
    res.send(data);
});

app.listen(3000);