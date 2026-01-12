const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

// 1. Basic Route
app.get('/', (req, res) => {
    res.json({ message: "Backend is running! 🚀" });
});

// 2. Database Placeholder (We will connect this later)
app.get('/health', (req, res) => {
    res.json({ status: "Healthy", db_status: "Pending connection..." });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});