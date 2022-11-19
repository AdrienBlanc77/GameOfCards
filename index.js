require("dotenv").config();
const express = require("express");
const router = require("./app/router");
const app = express();
const session = require('express-session')

const sessionConfig = {
    secret: "je peux mettre ici ce que je veux mais plus ca doit être long",
    resave: true,
    saveUninitialized: true,
    cookie: {
        secure: false,
        maxAge: (1000*60*60), // ça fait une heure
        isConnected : false
    },
};

app.use(session(sessionConfig));

app.set('views', './app/views');
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.urlencoded({extended : true}));

app.use(router);

const PORT = process.env.PORT;
app.listen(PORT,()=>{
    console.log(`Mon serveur est démarré sur http://localhost:${PORT}`);
});