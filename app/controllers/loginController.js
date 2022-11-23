const client = require("../dbClient");
const datamapper = require('../datamapper');

const loginController = {
    loginPage(request,response){
        response.render("login.ejs");
    },

    async loginCheck(request,response){
        console.log(request.body);
        const userId = request.body.id;
        const pwd = request.body.pwd;
        request.session.isConnected = await datamapper.loginCheck(userId, pwd);

        if (request.session.isConnected) {
            response.redirect('/');
        } else {
            response.redirect('/login')
        }
    }
};

module.exports = loginController;