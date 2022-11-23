const client = require("./dbClient");

const datamapper = {
    // récupère toutes les cartes en ordre aléatoire
    async getAllCards(){
        let result;
        try {
            const sqlResult = await client.query("SELECT * FROM cards;");
            result = sqlResult.rows;
        } catch (error) {
            console.error(error);
        }
        return result;
    },
    
    async getAllCardsRandomly(){
        let result;
        try{
            const sqlResult = await client.query("SELECT * FROM cards ORDER BY random();");
            result = sqlResult.rows;
        } catch(error) {
            console.error(error);
        }
        return result;
    },

    async loginCheck(userId, pwd){
        try {
            const sqlResult = await client.query(`SELECT * FROM users WHERE user_name = '${userId}' AND user_pwd = '${pwd}';`)
            if (sqlResult.rows) {
                return true;
            } else {
                return false;
            }
        } catch (error) {
            console.error(error);
        }
    },

    async deleteCard(id) {
        try{
            await client.query(`DELETE FROM cards WHERE id = ${id}`);
        } catch(error) {
            console.error(error);
        }
    }
};

module.exports = datamapper;