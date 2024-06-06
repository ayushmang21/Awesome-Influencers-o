const express = require('express');
const cors = require('cors');

const brandRouter = require('./routers/brandRouter');
const campaignRouter = require('./routers/campaignRouter');
const influRouter = require('./routers/influRouter');
const utilRouter = require('./routers/util');
const enrollRouter = require('./routers/enrollRouter');

const port = 5000;

const app = express();

app.use(express.json());

app.use(cors({origin: 'http://localhost:3000'}));

app.use('/brand', brandRouter);
app.use('/campaign', campaignRouter);
app.use('/influencer', influRouter);
app.use("/util", utilRouter);
app.use('/enroll', enrollRouter);

app.use(express.static('./static/uploads'));

app.listen(port, () => { 
    console.log(`Server is Running...!!!`);
});