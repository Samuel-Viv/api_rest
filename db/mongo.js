const mongoose = require('mongoose');


exports.initClientDbConnection = async () => {
    try{ 
        /*
        ATTENTION
        On essaie de se connecté à mongoDB en utilisant la variable d'environnement URL_MONGO.
        Il faut donc ne pas oublier au fichier .env.
        URL_MONGO prend pour valeur la chaine de connection de votre cluster mongoDB.
         */
        await mongoose.connect(process.env.URL_MONGO)
        console.log('Connected');
    } catch (error) {
        console.log(error);
        throw error;
    }
}