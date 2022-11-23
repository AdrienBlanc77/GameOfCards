const client = require("../dbClient");
const datamapper = require('../datamapper');

const cardController = {
    async deleteCard(request, response) {        
        const cardId = request.params.id;
        await datamapper.deleteCard(cardId);
        response.redirect('/dashboard');
    }
};

module.exports = cardController;