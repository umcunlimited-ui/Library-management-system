import Book from "../models/Book.js"

export const borrowbook = async (req,res) => {
    try {
        const{studentId, attendantId, returndate} = req.body;

        const book = await Book.findById(req.params.id);

        if(!studentId || !attendantId || !returndate){
            return res.status(400).json({message: "Please provide studentId, attendantId and returndate"});
        }
    
        if(!book){
            return res.status(404).json({message:"book not found"});
        }

        if(book.status === "OUT"){
            return res.status(400).json({message: "This book has been borrowed."});
        }

        book.status = "OUT";
        book.borrowedby = studentId;
        book.issuedby = attendantId;
        book.returndate = returndate;

        await book.save();

        return res.status(200).json({message: "Book borrowed successfully."});
    
    } catch (error) {
        return res.status(500).json({message: "An error occurred"});
    }
}

export const addBook = async (req, res) => {
    try {
        const {title, authors, isbn} = req.body;

        if(!title){
            return res.status(400).json({message: "Please provide a title"});
        }
        
        const book = new Book({title, authors, isbn});

        await book.save();
        return res.status(201).json({message: "Book has been successfully added."})
    } catch (error) {
         return res.status(500).json({message: "An error occurred"});
    }
      
} 

export const getAllBooks = async (req, res) => {
    try {
        const books = await Book.find();
        if (!books) {
            return res.status(404).json({message: "No Books Found."})
        }
        return res.status(200).json(books)

    } catch (error) {
        return res.status(500).json({message: "An error occurred"}) 
    }
}

export const getOneBook = async (req,res) => {
    try {
        const book = await Book.findById(req.params.id);
        if (!book){
           return res.status(404).json({message: "Book not found"}) ;
        } 
        if (book.status === "OUT"){
            return res.status(400).json({message: "This book is currently borrowed."});
        }

        return res.status(200).json(book);
    } catch (error) {
        return res.status(500).json({message: "An error occurred"}); 
    }
}

export const updateBook = async (req,res) => {
    try {
        const book = await Book.findById(req.params.id);

        if(!book){
            return res.status(404).json({message:"Book Not Found"});
        }
        if(book.status === "OUT"){
            return res.status(400).json({message:"This book is currently borrowed"});
        }

        const updatedbook = await Book.findByIdAndUpdate(req.params.id, req.body, {new:true});
        return res.status(200).json({message:"Book Has Been Updated Successfully.", updatedbook})


    } catch (error) {
        return res.status(500).json({message: "An error occurred"});
    }
}

    export const deleteBook = async (req,res) => {
        try {
            const book = await Book.findById(req.params.id);

        if(!book){
            return res.status(404).json({message:"Book Not Found"});
        }
        if(book.status === "OUT"){
            return res.status(400).json({message:"This book is currently borrowed"});
        }
        await Book.findByIdAndDelete(req.params.id);
        return res.status(200).json({message:"Book Has Been Deleted Successfully."})
        } catch (error) {
           return res.status(500).json({message: "An error occurred"});  
        }
    }

    export const returnbook = async (req,res) => {
    try {
        const book = await Book.findById(req.params.id);
        if (!book){
            return res.status(404).json({message:"Book Not Found"});
        }
        book.status = "IN";
        book.borrowedby = null;
        book.issuedby = null;
        book.returndate = null;

        await book.save();

        return res.status(200).json({message: "Book returned successfully."});
    
    } catch (error) {
        return res.status(500).json({message: "An error occurred"});
    }
}