import express from 'express';
import router from './routes/apartmentsRoutes';
import cors from 'cors';

import mongoose from 'mongoose';

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb+srv://omarahmed:omarahmed@cluster0.btrq7di.mongodb.net/test?retryWrites=true&w=majority')
    .then(() => console.log("Connected to MongoDB Successfully"))
    .catch((error) => console.log("Error connecting to MongoDB:", error));

app.use('/apartments', router);

export default app;
