import express from 'express';
import { loginHelper, appointmentsHelper, appointmentCancel, helperList, changeAvailablity, appointmentComplete, helperDashboard, helperProfile, updateHelperProfile } from '../controllers/helperController.js';
import authHelper from '../middleware/authHelper.js';
const helperRouter = express.Router();

helperRouter.post("/login", loginHelper)
helperRouter.post("/cancel-appointment", authHelper, appointmentCancel)
helperRouter.get("/appointments", authHelper, appointmentsHelper)
helperRouter.get("/list", helperList)
helperRouter.post("/change-availability", authHelper, changeAvailablity)
helperRouter.post("/complete-appointment", authHelper, appointmentComplete)
helperRouter.get("/dashboard", authHelper, helperDashboard)
helperRouter.get("/profile", authHelper, helperProfile)
helperRouter.post("/update-profile", authHelper, updateHelperProfile)

export default helperRouter;