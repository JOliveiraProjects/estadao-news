import 'dotenv/config';
import express from "express";
import cors from 'cors';
import { routes } from "./routes";
import { connectDB } from "../src/config/ormconfig";

connectDB.initialize().then(async () => {
    console.log('Database connected');

    const app = express();
    app.use(express.json());
    app.use(cors());
    app.use(routes);

    const PORT = process.env.PORT || 3001;
    app.listen(PORT, () => console.debug(`\u{1F525} Server is running on port ${PORT}`));
}).catch(error => console.log(error));
