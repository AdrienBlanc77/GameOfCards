const client = require("../dbClient");
const datamapper = require('../datamapper');

const mainController = {
    homePage(request,response){
        response.render("index.ejs");
    },
    
    async gamePage(request,response){
        const playerPioche = await datamapper.getAllCardsRandomly();
        const dealerPioche = await datamapper.getAllCardsRandomly();

        console.log(playerPioche);
        console.log(dealerPioche);

        response.render("board.ejs", {
            playerPioche,
            dealerPioche
        });
    },
};

module.exports = mainController;