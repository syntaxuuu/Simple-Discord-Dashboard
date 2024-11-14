// server.js
const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/commands', (req, res) => {
    res.send('<h2>Commands Section</h2><p>https://discord.gg/2MNazkxJu9</p>');
});

app.get('/settings', (req, res) => {
    res.send('<h2>Settings Section</h2><p>https://discord.gg/2MNazkxJu9.</p>');
});

app.get('/logs', (req, res) => {
    res.send('<h2>Logs Section</h2><p>https://discord.gg/2MNazkxJu9</p>');
});

app.get('/support', (req, res) => {
    res.send('<h2>Support Section</h2><p>https://discord.gg/2MNazkxJu9</p>');
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});