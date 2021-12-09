const express = require('express');
const app = express();
const dotenv = require('dotenv');
const dbConn = require('./db/db.conn');
const port=process.env.PORT||4000;

const authRouter = require("./routes/auth");
const userRouter = require("./routes/user");
const categoryRouter = require("./routes/category")
const courseRouter = require("./routes/course")
const AdsRouter = require("./routes/advertisement")
const googleRouter = require("./routes/google")
const dashboardRoutes=require('./routes/userDashboardRouter');
const homeRouter=require('./routes/home');

const bodyParser = require('body-parser')
const cors=require('cors');

const corsOption={
    "origin":"*"
}

dotenv.config();
app.use(express.json());
app.use(bodyParser.json())
app.use(cors(corsOption));
app.use(bodyParser.urlencoded({ extended: true }))
dbConn();

app.use('/api/home',homeRouter);
app.use("/api/auth", authRouter);
app.use("/api/user", userRouter);
app.use('/api/category', categoryRouter);
app.use('/api/course', courseRouter);
app.use('/api/ads', AdsRouter);
app.use(googleRouter);
app.use("/api/userDashboard", dashboardRoutes);

app.listen(port,()=>{
    console.log(`backend is running at port ${port}`);
});