import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import helperModel from "../models/helperModel.js";
import appointmentModel from "../models/appointmentModel.js";

// API for helper Login 
const loginHelper = async (req, res) => {

    try {

        const { email, password } = req.body
        const user = await helperModel.findOne({ email })

        if (!user) {
            return res.json({ success: false, message: "Invalid credentials" })
        }

        const isMatch = await bcrypt.compare(password, user.password)

        if (isMatch) {
            const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '7d' })
            res.json({ success: true, token })
        } else {
            res.json({ success: false, message: "Invalid credentials" })
        }


    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }
}

// API to get helper appointments for helper panel
const appointmentsHelper = async (req, res) => {
    try {

        const { helperId } = req.body
        const appointments = await appointmentModel.find({ helperId })

        res.json({ success: true, appointments })

    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }
}

// API to cancel appointment for helper panel
const appointmentCancel = async (req, res) => {
    try {

        const { helperId, appointmentId } = req.body

        const appointmentData = await appointmentModel.findById(appointmentId)
        if (appointmentData && appointmentData.helperId === helperId) {
            await appointmentModel.findByIdAndUpdate(appointmentId, { cancelled: true })
            return res.json({ success: true, message: 'Appointment Cancelled' })
        }

        res.json({ success: false, message: 'Appointment Cancelled' })

    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }

}

// API to mark appointment completed for helper panel
const appointmentComplete = async (req, res) => {
    try {

        const { helperId, appointmentId } = req.body

        const appointmentData = await appointmentModel.findById(appointmentId)
        if (appointmentData && appointmentData.helperId === helperId) {
            await appointmentModel.findByIdAndUpdate(appointmentId, { isCompleted: true })
            return res.json({ success: true, message: 'Appointment Completed' })
        }

        res.json({ success: false, message: 'Appointment Cancelled' })

    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }

}

// API to get all helpers list for Frontend
const helperList = async (req, res) => {
    try {

        const helpers = await helperModel.find({}).select(['-password', '-email'])
        res.json({ success: true, helpers })

    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }

}

// API to change helper availablity for Admin and Helper Panel
const changeAvailablity = async (req, res) => {
    try {

        const { helperId } = req.body

        const helperData = await helperModel.findById(helperId)
        await helperModel.findByIdAndUpdate(helperId, { available: !helperData.available })
        res.json({ success: true, message: 'Availablity Changed' })

    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }
}

// API to get helper profile for  Helper Panel
const helperProfile = async (req, res) => {
    try {

        const { helperId } = req.body
        const profileData = await helperModel.findById(helperId).select('-password')

        res.json({ success: true, profileData })

    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }
}

// API to update helper profile data from  Helper Panel
const updateHelperProfile = async (req, res) => {
    try {

        const { helperId, fees, address, available } = req.body

        await helperModel.findByIdAndUpdate(helperId, { fees, address, available })

        res.json({ success: true, message: 'Profile Updated' })

    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }
}

// API to get dashboard data for helper panel
const helperDashboard = async (req, res) => {
    try {

        const { helperId } = req.body

        const appointments = await appointmentModel.find({ helperId })

        let earnings = 0

        appointments.map((item) => {
            if (item.isCompleted || item.payment) {
                earnings += item.amount
            }
        })

        let customers = []

        appointments.map((item) => {
            if (!customers.includes(item.userId)) {
                customers.push(item.userId)
            }
        })



        const dashData = {
            earnings,
            appointments: appointments.length,
            customers: customers.length,
            latestAppointments: appointments.reverse()
        }

        res.json({ success: true, dashData })

    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }
}

export {
    loginHelper,
    appointmentsHelper,
    appointmentCancel,
    helperList,
    changeAvailablity,
    appointmentComplete,
    helperDashboard,
    helperProfile,
    updateHelperProfile
}