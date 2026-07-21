import express from 'express';
import { loginAdmin, appointmentsAdmin, appointmentCancel, addHelper, allHelpers, adminDashboard } from '../controllers/adminController.js';
import { changeAvailablity } from '../controllers/helperController.js';
import authAdmin from '../middleware/authAdmin.js';
import upload from '../middleware/multer.js';
const adminRouter = express.Router();

adminRouter.post("/login", loginAdmin)
adminRouter.post("/add-helper", authAdmin, upload.single('image'), addHelper)
adminRouter.get("/appointments", authAdmin, appointmentsAdmin)
adminRouter.post("/cancel-appointment", authAdmin, appointmentCancel)
adminRouter.get("/all-helpers", authAdmin, allHelpers)
adminRouter.post("/change-availability", authAdmin, changeAvailablity)
adminRouter.get("/dashboard", authAdmin, adminDashboard)

export default adminRouter;