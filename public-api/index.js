const express = require("express");
const app = express();
const axios = require('axios');
const cors = require('cors');
const urljoin = require('url-join');

const privateApiBase = process.env.private_api;

app.listen(3000, () => {
    console.log("Public API running on port 3000");
});

app.options('*', cors());
app.get("/greeting", cors(), async (req, res) => {
    const name = req.query.name || 'Stranger';
    const apiUrl = urljoin(privateApiBase, 'getTimedGreeting');

    const resp = await axios.get(apiUrl);
    const timedGreeting = resp.data.greeting;

    const result = `${timedGreeting}, ${name}!`;
    res.json({
        greeting: result
    });
});