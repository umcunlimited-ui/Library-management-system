#Library Management System API

A REST API for managing a library system built with Node.js, Express and MongoDB.

---

## Technologies Used

- **Node.js** — Runtime environment
- **Express.js** — Web framework
- **MongoDB** — Database
- **Mongoose** — MongoDB object modeling
- **bcrypt** — Password encryption
- **JWT** — Authentication
- **dotenv** — Environment variables
- **nodemon** — Development server

---

##  Project Structure

```
LIBRARY_PROJECT/
├── config/
│   └── database.js
├── controllers/
│   ├── attendantcontroller.js
│   ├── authorcontroller.js
│   ├── bookcontroller.js
│   └── studentcontroller.js
├── models/
│   ├── Attendant.js
│   ├── Author.js
│   ├── Book.js
│   └── Student.js
├── routes/
│   ├── Attendantroutes.js
│   ├── Authorroutes.js
│   ├── Bookroutes.js
│   └── Studentroutes.js
├── .env
├── .gitignore
├── app.js
└── package.json
```

---

## ⚙️ Setup Steps

### 1. Clone the repository
```bash
git clone https://github.com/umcunlimited-ui/library-management-system.git
```

### 2. Navigate into the project folder
```bash
cd library-management-system
```

### 3. Install dependencies
```bash
npm install
```

### 4. Create a `.env` file in the root folder
```
mongodb = mongodb://localhost:27017/library
JWT_SECRET = yourSecretKey
PORT = 5000
```

### 5. Start the server
```bash
npm run dev
```

### 6. You should see:
```
Server is running on port 5000
Mongodb is connected
```

---

##  Authentication

This API uses **JWT (JSON Web Token)** for authentication. To access protected routes:

1. Register an attendant
2. Login to get a token
3. Include the token in your request header:
```
Authorization: Bearer yourtoken
```

---

## API Documentation

### Base URL
```
http://localhost:5000/api
```

---

### Books

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/books` | Get all books |
| GET | `/books/:id` | Get one book |
| POST | `/books` | Add a new book |
| PUT | `/books/:id` | Update a book |
| DELETE | `/books/:id` | Delete a book |
| PUT | `/books/borrow/:id` | Borrow a book |
| PUT | `/books/return/:id` | Return a book |

#### Add a Book — `POST /books`
```json
{
    "title": "Harry Potter",
    "isbn": "978-0439708180",
    "authors": []
}
```

#### Borrow a Book — `PUT /books/borrow/:id`
```json
{
    "studentId": "64b7f9e2a3c5d8f1e2b3c4d5",
    "attendantId": "64b7f9e2a3c5d8f1e2b3c4d6",
    "returndate": "2024-02-01"
}
```

---

### Students

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/students` | Get all students |
| GET | `/students/:id` | Get one student |
| POST | `/students` | Register a student |
| PUT | `/students/:id` | Update a student |
| DELETE | `/students/:id` | Delete a student |

#### Register a Student — `POST /students`
```json
{
    "name": "John Doe",
    "email": "john@gmail.com",
    "phone_number": "08012345678"
}
```

---

### Attendants

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/attendants/register` | Register an attendant |
| POST | `/attendants/login` | Login an attendant |
| GET | `/attendants` | Get all attendants |
| GET | `/attendants/:id` | Get one attendant |
| DELETE | `/attendants/:id` | Delete an attendant |

#### Register an Attendant — `POST /attendants/register`
```json
{
    "name": "Jane Doe",
    "email": "jane@gmail.com",
    "phone_number": "08087654321",
    "password": "jane1234",
    "role": "LIBRARIAN"
}
```

#### Login an Attendant — `POST /attendants/login`
```json
{
    "email": "jane@gmail.com",
    "password": "jane1234"
}
```

---

### Authors

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/authors` | Get all authors |
| GET | `/authors/:id` | Get one author |
| POST | `/authors` | Add an author |
| PUT | `/authors/:id` | Update an author |
| DELETE | `/authors/:id` | Delete an author |

#### Add an Author — `POST /authors`
```json
{
    "name": "J.K Rowling",
    "bio": "British author of Harry Potter",
    "dob": "1965-07-31"
}
```

---

## Security Features

- Passwords are encrypted using **bcrypt**
- Authentication is handled using **JWT tokens**
- Sensitive files are excluded from version control using `.gitignore`

---

## Author

**Marvel Chiamaka Uzonicha**

- GitHub: [@umcunlimited-ui](https://github.com/umcunlimited-ui)
- Email: umcunlimited@gmail.com

---

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

---

Built with ❤️ as a Backend Development project.
