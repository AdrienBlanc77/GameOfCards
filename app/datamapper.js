const client = require("./dbClient");

const datamapper = {
    // récupère toutes les cartes en ordre aléatoire
    async getAllCardsRandomly(){
        let result;
        try{
            const sqlResult = await client.query("SELECT * FROM cards ORDER BY random();");
            result = sqlResult.rows;
        } catch(error) {
            console.error(error);
        }
        return result;
    }
};

module.exports = datamapper;