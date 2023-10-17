import express from "express";
import morgan from "morgan";


import { connectDatabase } from "./db/connection";
import { routes } from "./index.routes";

const app = express();

app.set('port', process.env.PORT || 4000);


app.use(express.json());
app.use(morgan('dev'));
app.use('/api',routes);

//
connectDatabase();


app.listen(app.get('port'), () => {
    console.log('Server on port: ', app.get('port'));
});