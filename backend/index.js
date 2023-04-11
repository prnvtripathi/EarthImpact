import express from "express"
import bodyParser from "body-parser"
const app = express();

app.use(bodyParser.urlencoded({extended:true}));

app.listen(process.env.port||3000, async ()=>{
    console.log("Server Started on port 3000")
})