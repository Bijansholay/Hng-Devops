const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.status(200).json({ message: "API is running" });
    });
app.get('/health', (req, res) => {
    res.status(200).json({ message: "healthy "})
} )
app.get('/me', (req, res) => {
    res.status(200).json({
        name: "Sholadoye Najib Adebisi",
        email: "najibsholadoye04@gmail.com",
        github: "https://gihub.com/Bijansholay"
    });
});


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
