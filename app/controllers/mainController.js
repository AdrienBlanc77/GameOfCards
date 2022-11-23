const client = require("../dbClient");
const datamapper = require('../datamapper');

const mainController = {
    homePage(request,response){
        const isConnected = request.session.isConnected;
        response.render("index.ejs", {
            isConnected,
            title : 'Jeu de carte'
        });
    },
    
    async gamePage(request,response){
        const piochePlayer = await datamapper.getAllCardsRandomly();
        const piocheIA = await datamapper.getAllCardsRandomly();
        console.log(piochePlayer);
        console.log(piocheIA);
        response.render("board.ejs", {
            piochePlayer,
            piocheIA
        });
    },

    async dashboardPage(request,response){
        const allCards = await datamapper.getAllCards();
        response.render("dashboard", {
            allCards,
            title: "Gestion des cartes",
            script: '/javascript/dashboard.js',
        });
    }
    
};

module.exports = mainController;