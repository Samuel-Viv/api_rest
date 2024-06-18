// multer pour gerer les requêtes HTTP avecenvoie de fichier
//importation de multer
const multer = require('multer');

//Dictionnaire de MIME TYPES
const MIME_TYPES = {
    'image/jpg': 'jpg',
    'image/jpeg': 'jpg',
    'image/pgn': 'png'
};

//Stockage des images dans le répertoire 'uploads' et génération d'un nom de fichier unique avec un timestamp
const storage = multer.diskStorage({
    //destination du stockage
    destination:(req, file, callback) => {
        callback(null, 'uploads');
    },
    //génération du nom unique du fichier avec suppression d'espace qui sont remplacer par des underscores
    filename: (req, file, callback) => {
        const name = file.originalname.split(' ').join('_');
        console.log(name)
        const extension = MIME_TYPES[file.mimetype];
        callback(null,  Date.now() + name);
    }
});

module.exports = multer({storage: storage});