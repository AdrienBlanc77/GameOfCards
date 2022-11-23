const express = require('express');
const mainController = require('./controllers/mainController');
const loginController = require('./controllers/loginController');
const cardController = require('./controllers/cardController');
const router = express.Router();

router.get("/", mainController.homePage);
router.get("/game", mainController.gamePage);
router.get("/login", loginController.loginPage);
router.post("/login/check", loginController.loginCheck);
router.get("/dashboard", mainController.dashboardPage);
router.get('/card/delete/:id', cardController.deleteCard);

router.use((request, response)=>{
    response.status(404).render("404");
});

module.exports = router;

// function securityCheck(request, response, next) {
//     if(req.session.isConnected){
//         next();
//     } else {
// 	    res.status(401).render("erreur");
//     }
// }