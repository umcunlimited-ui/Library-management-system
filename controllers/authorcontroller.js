import Author from "../models/Author.js"

export const getAllAuthors = async (req,res) => {
    try {
        const authors = await Author.find();
        if(!authors){
            return res.status(404).json({message: "No Authors Found"});
        }
        return res.status(200).json(authors)
    } catch (error) {
        return res.status(500).json({message: "An error occurred"})
    }
}

export const getOneAuthor = async (req,res) => {
    try {
        const author = await Author.findById(req.params.id).populate("books");
        if(!author){
            return res.status(404).json({message: "Author Not Found"})   
        }

        return res.status(200).json(author)
    } catch (error) {
        return res.status(500).json({message: "An error occurred"})
    }
}

export const addAuthor = async (req, res) => {
    try {
        const {name, dob, bio, books} = req.body;

        if(!name){
            return res.status(400).json({message: "Please provide a name"});
        }
        
        const author = new Author({name, dob, bio, books});

        await author.save();
        return res.status(201).json({message: "Author has been successfully added."})
    } catch (error) {
         return res.status(500).json({message: "An error occurred"});
    }
      
} 

export const updateAuthor = async(req,res) => {
    try {
        const author = await Author.findById(req.params.id);
        if (!author){
            return res.status(404).json({message:"Author Not Found"});
        }
        const authorupd = await Author.findByIdAndUpdate(req.params, req.body,{new: true});
        return res.status(200).json({message:"Author Successfully Updated", authorupd})
    } catch (error) {
        return res.status(500).json({message: "An error occurred"}); 
    }
}

export const deleteAuthor = async (req,res) => {
        try {
            const author = await Author.findById(req.params.id);

        if(!author){
            return res.status(404).json({message:"Author Not Found"});
        }
        
        await Author.findByIdAndDelete(req.params.id);
        return res.status(200).json({message:" Has Been Deleted Successfully."})
        } catch (error) {
           return res.status(500).json({message: "An error occurred"});  
        }
    }

