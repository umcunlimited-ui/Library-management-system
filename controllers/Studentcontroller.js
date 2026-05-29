import Student from "../models/Student.js"

export const getAllStudents = async (req,res) => {
     try {
        const students = await Student.find();
        if (!students) {
            return res.status(404).json({message: "No Student Found."})
        }
        return res.status(200).json(students)
     
     } catch (error) {
        return res.status(500).json({message: "An error occurred"}) 
         }
}

export const getOneStudent = async (req,res) => {
     try {
        const student = await Student.findById(req.params.id).populate("borrowedbooks").populate("borrowHistory");
        if (!student) {
            return res.status(404).json({message: "Student Not Found."})
        }
             return res.status(200).json(student)
     
    } catch (error) {
             return res.status(500).json({message: "An error occurred"}) 
    }
}

export const registerStudent = async (req, res) => {
    try {
        const {name, email, phone_number} = req.body;

        if(!name || !email || !phone_number){
            return res.status(400).json({message: "Please provide name, email and phone number"});
        }

        const student = new Student({name, email, phone_number});

        await student.save();
        return res.status(201).json({message: "Student has been successfully registered."})
    } catch (error) {
        return res.status(500).json({message: "An error occurred"});
    }
      
} 

export const updateStudent = async (req,res) => {
    try {
        const student = await Student.findById(req.params.id);

        if(!student){
            return res.status(404).json({message:"Student Not Found"});
        }

        const updatedstudent = await Student.findByIdAndUpdate(req.params.id, req.body, {new:true});
        return res.status(200).json({message:"Student data Has Been Updated Successfully.", updatedstudent})


    } catch (error) {
        return res.status(500).json({message: "An error occurred"});
    }
}

export const deleteStudent = async (req,res) => {
        try {
            const student = await Student.findById(req.params.id);

        if(!student){
            return res.status(404).json({message:"Student Not Found"});
        }
        if(student.borrowedbooks.length > 0){
            return res.status(400).json({message: "Student currently has borrowed books"})
        }

        await Student.findByIdAndDelete(req.params.id);

        return res.status(200).json({message:"Student Has Been Deleted Successfully."})

        } catch (error) {
           return res.status(500).json({message: "An error occurred"});  
        }
    }
