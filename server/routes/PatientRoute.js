import express from "express";
import * as patientControl from "../controllers/PatientControllers";

const patientRouter = express.Router();

//CREATE IN Db
patientRouter.post("/create",patientControl.createPatient);

//READ IN db
patientRouter.get("/read/:id",patientControl.getPatient);

//UPDATE IN db
patientRouter.post("/edit/:id",patientControl.updatePatient);

//Delete In Db
patientRouter.get("/delete/:id",patientControl.deletePatient);

//Get all Data
patientRouter.get("/readAll",patientControl.getAllPatient);

export default patientRouter; 