import express from 'express';
import mongoose from 'mongoose';
import userRouter from './routes/user.route.js'
import authRouter from './routes/auth.route.js';
import cookieParser from 'cookie-parser';
mongoose.connect("mongodb+srv://sushmasriya19:Sushma1234@cluster0.qg7ka8e.mongodb.net/?retryWrites=true&w=majority").then(()=>
{
    console.log('connected to mongodb!!');
}).catch((err)=>
{
    console.log(err);

})

const app=express();
app.use(express.json());
app.use(cookieParser);
app.listen(3000,()=>
{
    console.log('hi i am woring???.');
});
app.use('/api/user',userRouter);
app.use('/api/auth',authRouter);
app.use((err,req,res,next)=>{
    const statusCode=err.statusCode||500;
    const message=err.message||'Internal Server Error';
    return res.status(statusCode).json({
        success:false,
        statusCode,
        message,
    });

});