const express = require("express");
const app = express();

app.listen(3000, () => {
    console.log("Private API running on port 3000");
});

app.get("/getTimedGreeting", (req, res) => {
    const now = new Date();
    const hour = now.getHours();

    let result = "";

    if ( hour > 5 && hour < 11 ) {
        result = "Good morning";
    } else if ( hour >= 11 && hour < 17 ) {
        result = "Good afternoon";
    } else if ( hour >= 17 && hour < 20 ) {
        result = "Good evening";
    } else {
        result = "Good night";
    }

    res.json({
        greeting: result
    });
});