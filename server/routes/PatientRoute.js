import express from "express";
import * as patientControl from "../controllers/PatientControllers";
import PatientInfos from "../models/Patient";

const patientRouter = express.Router()

patientRouter.route("/")
                   .post(patientControl.createPatient)
                   .get(patientControl.getAllPatient)
                   

patientRouter.route('/:id')
                   .delete(patientControl.deleteSinglePatient)
                   .patch(patientControl.updateSinglePatient)
                   .get(patientControl.getSinglePatient)


export default patientRouter;