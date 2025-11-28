import express from "express";
import router from './routes.js' 

const app = express(); 

app.use(express.json()); 

app.use(express.static('public')); 

app.use('/api', router); 

app.listen(3000, () => {
    console.log("Server is running...")
}); 
