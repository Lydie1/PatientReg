import express from "express";
import bodyParser from "body-parser";
import patientRouter from "./routes/PatientRoute";

const app = express();
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));


app.get('/', (req,res)=>{res.status(200).send({
    status:200, 
    message:'welcome to patient registration',
})})

app.use("/patient",patientRouter)


export default app;