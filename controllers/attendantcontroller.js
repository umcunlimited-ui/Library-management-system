import Attendant from "../models/Attendant.js"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

export const registerAttendant = async (req,res) => {
    try {
        const {name, email, phone_number, password, role} = req.body;

        if(!name || !email || !phone_number || !password){
            return res.status(400).json({message: "Please provide name, email, password and phone number"})
        }
        const Attendantexists = await Attendant.findOne({email});
        if(Attendantexists){
            return res.status(400).json({message: "Attendant already exists."});
        }
        const hashedpassword = await bcrypt.hash(password,10);

        const attendant = new Attendant ({name,email,phone_number,password: hashedpassword,role});
        await attendant.save()

        return res.status(201).json({message:"Attendant successfully registered"});
    } catch (error) {
        return res.status(500).json({message: "An error occurred"});
    }
}

export const loginAttendant = async (req, res) => {
    try {
        const {email, password} = req.body;
        if(!email || !password){
            return res.status(400).json({message: "Please provide email and password"});
        }
        const attendant = await Attendant.findOne({email});
        if (!attendant){
            return res.status(400).json({message: "Attendant does not exist."});
        }
        const passwordiscorrect = await bcrypt.compare(password, attendant.password);
        if (!passwordiscorrect){
            return res.status(401).json({message: "Invalid Details."});
        }

        const token = jwt.sign({id: attendant._id, role: attendant.role}, process.env.JWT_SECRET, {expiresIn: "1d"});
        return res.status(200).json({message: "Login Successful.",token});

    } catch (error) {
        return res.status(500).json({message: "An error occurred"});
    }
}

export const getAllAttendants = async (req,res) => {
    try {
        const attendants = await Attendant.find();
        if (!attendants) {
            return res.status(404).json({message: "No Attendant Found."})
        }
        return res.status(200).json(attendants)
     
     } catch (error) {
        return res.status(500).json({message: "An error occurred"}) 
         }  
  
}


export const getOneAttendant = async (req,res) => {
    try {
        const attendant = await Attendant.findById(req.params.id);
        if (!attendant) {
            return res.status(404).json({message: "Attendant Not Found."})
        }
        return res.status(200).json(attendant)
    
    } catch (error) {
             return res.status(500).json({message: "An error occurred"}) 
    }
}

export const deleteAttendant = async (req,res) => {
        try {
            const attendant = await Attendant.findById(req.params.id);

        if(!attendant){
            return res.status(404).json({message:"Attendant Not Found"});
        }
        
        if(attendant.role === "ADMIN"){
            const adminCount = await Attendant.countDocuments({role: "ADMIN"})
            if(adminCount === 1){
                return res.status(400).json({message: "Cannot delete the only admin"})
            }
        }

        await Attendant.findByIdAndDelete(req.params.id);

        return res.status(200).json({message:"Attendant Has Been Deleted Successfully."})

        } catch (error) {
           return res.status(500).json({message: "An error occurred"});  
        }
    }
