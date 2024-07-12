const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const axios = require("axios");
const { GoogleGenerativeAI } = require("@google/generative-ai");
const EmployeeModel = require("./models/Employee");
require('dotenv').config();

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect('mongodb+srv://jeetungaa:vaasu7945@cluster0.sfuksba.mongodb.net/');

// Login endpoint
app.post("/login", (req, res) => {
    const { email, password } = req.body;
    EmployeeModel.findOne({ email: email })
        .then(user => {
            if (user) {
                if (user.password === password) {
                    res.json("Success");
                } else {
                    res.json("The password is incorrect");
                }
            } else {
                res.json("No record existed");
            }
        });
});

// Create employee endpoint
app.post("/", (req, res) => {
    EmployeeModel.create(req.body)
        .then(employees => res.json(employees))
        .catch(err => res.json(err));
});

// Chatbot endpoint
app.post("/chatbot", async (req, res) => {
    const { message } = req.body;
    const apiKey = process.env.GEMINI_API_KEY;

    if (!apiKey) {
        return res.status(500).json({ error: 'API key is missing.' });
    }

    const genAI = new GoogleGenerativeAI(apiKey);

    const model = genAI.getGenerativeModel({
        model: "gemini-1.5-flash",
    });

    const generationConfig = {
        temperature: 1,
        topP: 0.95,
        topK: 64,
        maxOutputTokens: 8192,
        responseMimeType: "text/plain",
    };

    try {
        const chatSession = model.startChat({
            generationConfig,
            history: [],
        });

        const result = await chatSession.sendMessage(message);
        res.json({ reply: result.response.text() });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Failed to get response from Google Generative AI' });
    }
});

const PORT = process.env.PORT || 10000;

app.listen(PORT, () => {
    console.log(`Server is running on http://0.0.0.0:${PORT}`);
});
