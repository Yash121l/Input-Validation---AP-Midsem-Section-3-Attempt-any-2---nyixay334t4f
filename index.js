const express = require('express');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.status(200).send("Hello World!!");
});

app.post("/formdata",(req,res)=>{
    const {username,email,password}=req.body;
    if (username.length < 5) {
    }
    if (email.length < 5 || !email.includes('@') || !email.includes('.com')) {
    }
    if (password.length < 5) {
    }
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

module.exports = { app };
